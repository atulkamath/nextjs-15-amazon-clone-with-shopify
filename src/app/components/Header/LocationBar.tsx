import { MapPin } from "lucide-react";
import React from "react";

const LocationBar = () => {
  return (
    <div className="flex items-center p-2 px-2 bg-amazon-light-blue md:bg-amazon-dark-blue ">
      <MapPin size={20} color="white" />
      <div className="flex leading-5 md:block">
        <p className="ml-1 text-xs font-semibold leading-3 text-zinc-300">
          Deliver to
        </p>
        <p className="ml-1 text-sm font-semibold leading-3 text-white whitespace-nowrap">
          United Arab Emirates
        </p>
      </div>
      <button className="p-1 px-2 ml-auto text-sm font-bold text-white bg-blue-600 rounded-xl md:hidden">
        Join Prime
      </button>
    </div>
  );
};

export default LocationBar;
