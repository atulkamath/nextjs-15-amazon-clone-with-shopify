"use client";
import Image from "next/image";
import React, { useState } from "react";
import banner1 from "./images/banner1.jpg";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import useScreenWidth from "@/app/data/useScreenWidth";
import SmallHeroCarousel from "./SmallHeroCarousel";

const HeroCarousel = () => {
  const imageSrc = [banner1, banner2, banner3];
  const { width } = useScreenWidth();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageSrc.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageSrc.length - 1 ? 0 : prevIndex + 1
    );
  };
  return width && width < 768 ? (
    <SmallHeroCarousel />
  ) : (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {imageSrc.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="carousel slide"
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/4 transform -translate-y-1/2  text-black p-2 rounded-full min-w-60"
      >
        <ChevronLeftIcon strokeWidth={1} size={100} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/4 transform -translate-y-1/2 text-black p-2 rounded-full"
      >
        <ChevronRightIcon
          stroke="black"
          fill="none"
          strokeWidth={1}
          size={100}
        />
      </button>
    </div>
  );
};

export default HeroCarousel;
