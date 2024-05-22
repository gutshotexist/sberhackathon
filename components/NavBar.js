import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <Link href="/" className="btn btn-ghost text-xl text-primary">
          SiberiumPythia
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">О НАС</Link>
          </li>
          <li>
            <Link href="/roadmap">ДОРОЖНАЯ КАРТА</Link>
          </li>
          <li>
            <Link href="https://faucet.test.siberium.net/">КРАН</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="https://sp0-2.gitbook.io/siberiumpythia/" className="btn">
          Документация
        </Link>
      </div>
    </div>
  );
};

export default NavBar;