import React from "react";
import { data } from "./data";
import Link from "next/link";
import Image from "next/image";

const ShortcutCarousel = () => {
  return (
    <div className=" lg:hidden flex text-center items-center p-4 space-x-4 bg-white text-xs overflow-x-auto whitespace-nowrap">
      {data.map((carousel, index) => (
        <div className="flex-shrink-0" key={index}>
          <Link href={carousel.link}>
            <Image
              src={carousel.image}
              alt={carousel.title}
              width={60}
              height={60}
            />
            <p className="mt-2 text-black">{carousel.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShortcutCarousel;
