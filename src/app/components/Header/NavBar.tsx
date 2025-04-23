import React from "react";
import { navLinks } from "./constants";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex px-3 py-2 space-x-4 overflow-scroll font-bold whitespace-nowrap md:bg-['#232f3e'] bg-amazon-blue w-full">
      {navLinks.map((navLink) => (
        <Link key={navLink} href="/">
          <div key={navLink} className="text-white">
            {navLink}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
