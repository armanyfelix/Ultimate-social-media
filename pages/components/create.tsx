import { UserCircleIcon } from "@heroicons/react/outline"
// import { randomUUID } from "crypto";
import Gun from "gun";
import { useRecoilValue } from "recoil"


function Create() {

  const db = Gun();

  function fakePosts(opts = { n: 5 }) {

    const posts = [];
    let howMany = opts.n;

    while (howMany-- > 0) {
      // let id = randomUUID();
      let count = (opts.n - howMany);
      const post = {
        id: "2305979449898695534",
        timestamp_taken: 1589114193,
        shortcode: "CAAfBeSj_tu",
        caption: "Caption Es Lidah buaya dengan warna merah alami dari buah beet + kurma + gula kelapa",
        display_url: "https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/97279239_1318359048362243_297812134668255924_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=kRUf8qXtZzIAX-8vTuq&oh=972a163f64ce3a29bc91057686c3290d&oe=5EE3890B",
        comment: 2,
        like: 10,
        video_view: 0,
        video_url: "",
        username: "vininta.ayudiana",
        user_id: "5866597887",
        profile_pic_url: "",
        last_update: "2020-05-10T22:29:05Z",
        is_video: false,
        store_display_url: "",
        ai_category: null,
      };
      posts.push(post);
    }

    return posts;
  }

  const posts = fakePosts();
  posts.forEach((p) => {
    db.get(p.id).put(p);
  })
  
  const postNodes = posts.map(b => db.get(b.uuid))


  return (
    <div className="w-72 h-72 absolute right-1/2 top-1/2 translate-x-1/2 bg-zinc-300 bg-opacity-70 backdrop-blur-md">
      <div className="flex p-2 ">
        <UserCircleIcon className="w-16 h-16 mr-2" />
        <div>
          <p>
            <span className="mr-1 font-semibold text-lg">{data.name}</span>
            <span className=" font-light text-ellipsis text-stone-200 italic ">{data.name.toLowerCase().split(' ').splice(2, 3).join('')}</span>
          </p>
          <p>{data.description.split('').splice(0, 100)}</p>
        </div>
      </div>
    </div>
  )
}

export default Create
