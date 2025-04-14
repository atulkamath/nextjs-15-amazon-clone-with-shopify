"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ProductImageCarousel({
  data,
}: {
  data: { url: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="hidden md:flex md:flex-col space-y-2 lg:space-y-4">
        {data.map((image, index) => (
          <div
            key={image.url}
            className={`cursor-pointer border ${
              activeIndex === index ? "border-red-500" : "border-gray-300"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              className="object-cover w-full h-20"
              alt={`Thumbnail ${index + 1}`}
              src={image.url}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>

      <div
        className="flex overflow-x-scroll snap-x snap-mandatory bg-stone-100 w-full min-h-full lg:overflow-x-hidden"
        ref={carouselRef}
      >
        {data.map((image, index) => (
          <div
            key={image.url}
            className="snap-center snap-always min-w-full flex items-center justify-center"
          >
            <Image
              priority
              className="object-contain w-full h-auto max-h-[500px]"
              alt={`Carousel Image ${index + 1}`}
              src={image.url}
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
