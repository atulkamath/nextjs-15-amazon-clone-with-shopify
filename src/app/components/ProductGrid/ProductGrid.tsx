import Image from "next/image";
import grid1 from "./images/grid1.jpg";
import grid2 from "./images/grid2.jpg";
import grid3 from "./images/grid3.jpg";
import Link from "next/link";

import LoginButton from "../Header/LoginButton";
import { auth } from "@/app/auth";

export default async function ProductGrid() {
  const images = [grid1, grid2, grid3];
  const title = ["Games", "Appliances", "Clothing"];

  const session = await auth();

  return (
    <div className="md:px-8 gap-2 grid grid-cols-2 md:-mt-32 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:-mt-72 relative xl:px-12">
      {images.map((data, index) => (
        <Link key={index} href={`/products/${title[index]}`}>
          <div className="bg-white p-4 flex flex-col h-full">
            <h1 className="text-2xl font-bold mb-2">{title[index]}</h1>
            <Image
              className="object-cover w-full h-full"
              alt={title[index]}
              src={data}
              width={800}
              height={800}
            />
            <p className="mt-2 cursor-pointer text-amazon-light-blue">
              Discover now
            </p>
          </div>
        </Link>
      ))}
      {!session && (
        <div className="bg-white h-1/2 p-4 md:hidden xl:block">
          <p className="text-lg font-medium lg:font-bold leading-6">
            Sign in now for your best experience
          </p>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
