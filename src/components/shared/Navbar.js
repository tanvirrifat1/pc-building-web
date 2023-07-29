import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link href="/login">
              <button className="btn btn-outline text-black mr-3">Login</button>
            </Link>

            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <button className="btn btn-ghost normal-case text-xl">
            PC-STORE
          </button>
        </Link>
      </div>
      <div className="navbar-end">
        {session?.user ? (
          <button
            onClick={() => signOut()}
            className="btn btn-outline text-black mr-3"
          >
            LoginOut
          </button>
        ) : (
          <></>
        )}
        <div className="avatar">
          <div className="w-12 m-2 rounded-full">
            <img src={session?.user?.image} />
          </div>
        </div>
        <Link href="/PcBuild">
          <button className="btn btn-outline text-black">PC Build</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
