"use client";
import React, { useEffect, useState } from "react";
import banner1 from "./images/smallBanner1.jpg";
import banner2 from "./images/smallBanner2.jpg";
import banner3 from "./images/smallBanner3.jpg";
import Image from "next/image";

const SmallHeroCarousel = () => {
  const images = [banner1, banner2, banner3];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return <Image alt="carousel" src={images[count]} />;
};

export default SmallHeroCarousel;
