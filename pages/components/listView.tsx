import { ChatIcon, DotsHorizontalIcon, GiftIcon, LinkIcon, ReplyIcon, ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/outline";
import UserCircleIcon from "@heroicons/react/outline/UserCircleIcon";


function ListView({ data }: { data: any }) {
  return (
    <div className="text-white mt-10 flex flex-col items-center max-w-xl ">
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
      <div className="">
        <img src={data.imageUrl} alt="content" className="w-[28rem] h-[34rem]" />
      </div>
      <div className="flex  w-full  justify-evenly m-2 ">
        <button className=" inline-flex items-center ">
          <ThumbUpIcon className="w-7 h-7" />
          <span className="text-sm">10 mil</span>
        </button>
        <button className=" inline-flex items-center ">
          <ThumbDownIcon className="w-7 h-7" />
          <span className="text-sm">54</span>
        </button>
        <button className=" ">
          <GiftIcon className="w-7 h-7" />
        </button>
        <button className=" inline-flex items-center ">
          <ChatIcon className="w-7 h-7" />
          <span className="text-sm">423</span>
        </button>
        <button className=" inline-flex items-center ">
          <img src="https://img.icons8.com/external-outline-juicy-fish/28/FFFFFF/external-share-arrows-outline-outline-juicy-fish.png" />
          <span className="text-sm">994</span>
        </button>
        <button className=" inline-flex items-center ">
          <DotsHorizontalIcon className="w-7 h-7" />
        </button>

      </div>
    </div>
  )
}

export default ListView
