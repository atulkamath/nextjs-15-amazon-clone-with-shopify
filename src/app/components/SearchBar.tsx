import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative flex px-2 ">
      <input
        type="text"
        placeholder="Search Amazon"
        className="w-full p-2 rounded-md focus:outline-amazon-orange placeholder:text-slate-500"
      />
      <button className="p-2 bg-amazon-yellow rounded-md absolute right-2 top-1/2 transform -translate-y-1/2">
        <SearchIcon size={24} strokeWidth={2} color="black" />
      </button>
    </div>
  );
};

export default SearchBar;
