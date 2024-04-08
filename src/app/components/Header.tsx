import Link from "next/link";

const Header = () => {
  return (
    <div className="drawer border-b-2 border-solid border-white">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-black lg:justify-center">
          <div className="flex gap-16 items-center max-lg:hidden">
            <Link
              className="text-[#FFBF00] hover:shadow-md hover:underline"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="text-[#FFBF00] hover:shadow-md hover:underline "
              href={"/planets"}
            >
              Planets
            </Link>
            <Link
              className="text-[#FFBF00]  hover:shadow-md hover:underline"
              href={"/people"}
            >
              People
            </Link>
            <Link
              className="text-[#FFBF00]  hover:shadow-md hover:underline"
              href={"/starships"}
            >
              Starships
            </Link>
          </div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <Link className="hover:bg-slate-800 p-5" href={"/"}>
            Home
          </Link>
          <Link className="hover:bg-slate-800 p-5" href={"/planets"}>
            Planets
          </Link>
          <Link className="hover:bg-slate-800 p-5" href={"/people"}>
            People
          </Link>
          <Link className="hover:bg-slate-800 p-5" href={"/starships"}>
            Starships
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
