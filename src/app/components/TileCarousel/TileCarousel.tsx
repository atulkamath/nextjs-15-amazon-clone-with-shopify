import Image from "next/image";
import tile1 from "./images/tile1.webp";
import tile2 from "./images/tile2.webp";
import tile3 from "./images/tile3.webp";
import tile4 from "./images/tile4.webp";
import tile5 from "./images/tile5.webp";
import tile6 from "./images/tile6.webp";
export default function TileCarousel() {
  const images = [tile1, tile2, tile3, tile4, tile5, tile6];
  return (
    <div className="flex space-x-4 overflow-x-scroll -mt-16 p-2 md:hidden">
      {images.map((data, index) => (
        <Image key={index} alt={"image"} width={150} src={data} />
      ))}
    </div>
  );
}
