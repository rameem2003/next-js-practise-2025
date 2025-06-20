import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-3">
      <h1 className="text-2xl text-white font-ubuntu">Logo</h1>

      <ul className=" flex items-center justify-end gap-5 font-ubuntu">
        <li>
          <Link className=" text-white font-semibold" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className=" text-white font-semibold" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className=" text-white font-semibold" href="/client">
            Client
          </Link>
        </li>
        <li>
          <Link className=" text-white font-semibold" href="/server">
            Server
          </Link>
        </li>
        <li>
          <Link className=" text-white font-semibold" href="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className=" text-white font-semibold" href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className=" text-white font-semibold" href="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className=" text-white font-semibold" href="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
