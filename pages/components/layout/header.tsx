import Link from "next/link"
import SearchIcon from "@heroicons/react/outline/SearchIcon"
import { PencilIcon, UserCircleIcon } from "@heroicons/react/outline"
import Create from "../create";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { sessionState } from "../../atoms/usersAtoms";

function Header() {

  const [create, setCreate] = useState(false);
  const session = useRecoilValue(sessionState);


  return (
    <nav className="bg-zinc-400 flex fixed w-full min-h-[3.5rem] justify-between px-10 py-2 ">

      <section className="w-1/3 flex justify-between items-center">
        <div className="flex">
          <Link href="/">
            <a className="text-2xl font-semibold font-serif text-gray-800">
              Ultimate Social Media
            </a>
          </Link>
        </div>
      </section>

      <section className="w-1/3 flex justify-center ">
        <div className="flex bg-gray-300 rounded-l-lg drop-shadow-lg">
          <input className="py-2 px-3 min-w-full bg-transparent outline-none" placeholder="Search some shit" />
          <button className="p-2 h-full bg-gray-300 rounded-r-lg">
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="w-1/3 flex items-center justify-end">

        {
          session ? (
            <ul className="list-none flex items-center font-mono text-lg font-semibold tracking-tighter space-x-4">
              <li>
                <button className=" bg-zinc-600">
                  <UserCircleIcon className="w-9 h-9" />
                </button>
              </li>
              <li>
                <Link href="/">
                  <button onClick={() => { setCreate(!create) }} className="p-2 bg-red-600 rounded-lg " >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                </Link>
                {create && <Create />}
              </li>
            </ul>
          ) : (
            <ul className="mr-2 list-none flex font-mono text-lg font-semibold tracking-tighter space-x-4">
              <li>
                <Link href="/">
                  <a>Join</a>
                </Link>
              </li>
              <li>
                <Link href="/Auth">
                  <a>Log In</a>
                </Link>
              </li>
            </ul>
          )
        }

      </section>

    </nav>
  )
}

export default Header
