"use client";
import { SearchIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="relative flex px-2 text-black ">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            redirect(`/products/${query}`);
          }
        }}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search Amazon"
        className="w-full p-2 rounded-md focus:outline-amazon-orange placeholder:text-slate-500"
      />
      <button
        onClick={() => {
          redirect(`/products/${query}`);
        }}
        className="p-2 bg-amazon-yellow rounded-md absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        <SearchIcon size={24} strokeWidth={2} color="black" />
      </button>
    </div>
  );
};

export default SearchBar;
