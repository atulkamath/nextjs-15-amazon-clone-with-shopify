import { ProductCardImage } from "@/app/types/types";
import Image from "next/image";
export default function ProductListImage({ data }: { data: ProductCardImage }) {
  return (
    <>
      <Image
        width={200}
        height={200}
        className="bg-stone-100 object-contain min-h-60 max-h-60 lg:w-full lg:min-w-64"
        src={data.nodes[0].url}
        alt={"Product image"}
      />
    </>
  );
}
