"use client";
import { MenuIcon, User } from "lucide-react";
import React from "react";
import AmazonLogo from "../AmazonLogo";
import SearchBar from "../SearchBar";
import LocationBar from "./LocationBar";
import useWindowSize from "@/app/data/useScreenWidth";
import Link from "next/link";
import Cart from "./Cart/Cart";

const TopBar = () => {
  const { width } = useWindowSize();
  return (
    <div className="flex lg:flex-wrap items-center text-white">
      <MenuIcon className="md:hidden ml-2" />
      <Link href="/">
        <AmazonLogo className="white" />
      </Link>
      {width && width < 768 && (
        <>
          <button className="flex ml-auto text-xs items-center">
            Sign in &gt;
            <User className="white" />
          </button>
          <Cart />
        </>
      )}
      <div className="hidden md:flex flex-shrink-0">
        <LocationBar />
      </div>
      <div className="hidden md:block flex-grow">
        <SearchBar />
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <span className="flex">🇦🇪 EN</span>
        <button className="flex border border-transparent hover:border-white p-1">
          <div className="text-sm text-start">
            <span>Hello Sign in,</span>
            <br />
            <span className="font-bold whitespace-nowrap">Account & Lists</span>
          </div>
        </button>
        <button className="flex border border-transparent hover:border-white p-1">
          <div className="text-sm text-start">
            <span>Returns</span>
            <br />
            <span className="font-bold whitespace-nowrap">& Orders</span>
          </div>
        </button>
        <Cart />
      </div>
    </div>
  );
};

export default TopBar;
