// ngl i stole some of this from   V
// https://github.com/carlbarrdahl/sampi/blob/master/src/hooks/ceramic.js

import {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";

import Gun from "gun/gun";
import "gun/sea";
import "gun/lib/then";


// import web3Auth from "./web3Connector"; `normally this would talk to your ethereum wallet for easy, decentralized login, but it shouldn't affect gun's functionality so I'm replacing it with a stand-in`
async function web3Auth() {
  return {address:"0x221", signature: "itsb33ns1gned"}
}

import { v5 as uuid5 } from "uuid";

const Web3Context = createContext({});

export const useWeb3 = () => useContext(Web3Context);

function dApiProvider(props) {
  const [connector, setConnector] = useState(); // old state var but i'm too lazy to delete it

  // state for the loader component
  const [contentLoading, setContentLoading] = useState(false);

  //const setAuthd = useUserStore((state) => state.setAuthd); `Both are just state utils`
  //const setUnAuthd = useUserStore((state) => state.setUnAuthd);

  // let user;

  useEffect(async () => {
    // recalls user
    setContentLoading(true);
    // await axios.get(process.env.NEXT_PUBLIC_RELAY_URL); `checks to make sure dyno is alive`
    console.log("checking if user is already authed");
    gun.user(); //.recall({ sessionStorage: true }); `disabled recall for the time being`
    if (process.env.NODE_ENV === "development") {
      window.gun = gun;
      //localStorage.clear();
      //sessionStorage.clear();
    }
    setContentLoading(false);
  }, []);

  // sets up GUN and connections
  const [{ gun }] = useState(() => {
    console.log("starting GUN");
    console.log("attaching promised `put()`");
    Gun.chain.putThen = function (data) {
      var ref = this;
      return new Promise((res) => {
        ref.put(data, (ack) => {
          res(ack);
        });
      });
    };
    const gun = Gun(/*process.env.NEXT_PUBLIC_RELAY_URL*/);
    console.log("set connector on GUN");
    console.log(gun);
    // setup listeners
    gun.on("auth", function () {
      console.log("authed");
      //setAuthd();
    });

    return { gun };
  });

  // authenticates a user
  const runDAuth = useCallback(async () => {
    try {
      const { address, signature } = await web3Auth();
      const user = gun.user();

      // console.log(user);
      // console.log(address, signature);
      // check if user exists
      console.log("checking existance...");
      const exists = await new Promise((res) => {
        gun.get(`~@${address}`).once(res);
      });
      console.log(exists);
      if (exists) {
        console.log("authenticating existing user...");
        // user exists, welcome back!
        const authd = await new Promise((res) => {
          user.auth(address, signature, res);
        });
        //setAuthd();
        var hasInfo = user.get("im").once((ack) => {
          console.log(ack);
        });
        // console.log(user);
        /*
        if (!hasInfo) {
          // we need to update this account
        }*/
      }

      if (!exists) {
        // user could not be found, lets make one
        const newU = await new Promise((res) => {
          user.create(address, signature, res);
        });
        if (newU.err) {
          throw new Error(newU.err);
        }
        //setAuthd();
        const upub = newU.err ? "error" : newU.pub;

        // creating and assigning a uuid
        const newUUID = uuid5(
          "auth",
          "7e3a03cb-cb58-4bfb-8e1b-7f7277ba2ad2"
        );

        const info = {
          alias: "NONE",
          uid: newUUID,
          pub: upub,
        };
        console.log("new user");
        console.log(info);
        // indexing for ease of use/speed
        // appending info

        const uRef = user.get("im");
        var data = uRef.put(info, (ack) => {
          if (ack.err) {
            throw new Error(ack.err);
          }
          console.log("user info put:", ack);
        });
        console.log(data);
        // writing
        // entire user info object
        var rawRef = gun.get("users").get("raw");
        rawRef.put(uRef, (ack) => {
          if (ack.err) {
            throw new Error(ack.err);
          }
          console.log("raw index put:", ack);
        });
        console.log(rawRef);
        // alias
        var aliasRef = gun.get("users").get("aliases");
        aliasRef.put({ [info.alias]: uRef }, (ack) => {
          if (ack.err) {
            throw new Error(ack.err);
          }
          console.log("alias index put:", ack);
        });
        // id
        var idRef = gun.get("users").get("uuids");
        idRef.put({ [info.uid]: uRef }, (ack) => {
          if (ack.err) {
            throw new Error(ack.err);
          }
          console.log("uuid index put:", ack);
        });
      }
    } catch (err) {
      console.error(err.message);
      console.error("could not complete authentication");
      // setUnAuthd();
      throw new Error(err.message);
    }
  });

  const providerState = {
    connector,
    gun,
    runDAuth,
    contentLoading,
    setContentLoading,
  };

  return (
    <Web3Context.Provider value={providerState}>
      
      {props.children}
    </Web3Context.Provider>
  );
}

export default dApiProvider;