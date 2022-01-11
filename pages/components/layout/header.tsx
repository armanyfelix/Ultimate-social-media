import Link from "next/link"
import SearchIcon from "@heroicons/react/outline/SearchIcon"

function Header() {
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
        <ul className="list-none flex font-mono text-lg font-semibold tracking-tighter space-x-4">
          <li>
            <Link href="/">
              <a>Join</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sign in</a>
            </Link>
          </li>
        </ul>
      </section>

    </nav>
  )
}

export default Header
