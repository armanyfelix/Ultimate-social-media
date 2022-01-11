import { useRouter } from "next/router"
import {
  HomeIcon,
  GlobeIcon,
  UserGroupIcon
} from "@heroicons/react/outline"
import {
  HomeIcon as HomeSolidIcon,
  GlobeIcon as GlobeSolidIcon,
  UserGroupIcon as UserGroupSolidIcon
} from "@heroicons/react/solid"
import Link from "next/link";


function Sidebar() {

  const router = useRouter();
  const path = router.pathname;

  return (
    <div>
      <div className="flex flex-col ">
        <Link href="/">
          <a className="inline-flex items-center hover:bg-gray-800 p-2 text-2xl space-x-2 font-mono">
            {
              path === "/" ? (
                <>
                  <HomeSolidIcon className="w-9 h-9 text-slate-100" />
                  <span className="text-slate-100 font-semibold">Home</span>
                </>
              ) : (
                <>
                  <HomeIcon className="w-9 h-9 text-slate-100" />
                  <span className="text-slate-100">Home</span>
                </>
              )
            }
          </a>
        </Link>
        <Link href="/explore">
          <a className="inline-flex items-center hover:bg-gray-800 p-2 text-2xl space-x-2 font-mono">
            {
              path === "/explore" ? (
                <>
                  <GlobeSolidIcon className="w-9 h-9 text-slate-100" />
                  <span className="text-slate-100 font-semibold">Explore</span>
                </>
              ) : (
                <>
                  <GlobeIcon className="w-9 h-9 text-slate-100" />
                  <span className="text-slate-100">Explore</span>
                </>
              )
            }
          </a>
        </Link>
        <Link href="/following">
          <a className="inline-flex items-center hover:bg-gray-800 p-2 text-2xl space-x-2 font-mono">
            {
              path === "/following" ? (
                <>
                  <UserGroupSolidIcon className="w-9 h-9 text-slate-100" />
                  <span className="text-slate-100 font-semibold">Following</span>
                </>
              ) : (
                <>
                  <UserGroupIcon className="w-9 h-9 text-slate-100" />
                  <span className="text-slate-100">Following</span>
                </>
              )
            }
          </a>
        </Link>
      </div>

    </div>
  )
}


export default Sidebar
