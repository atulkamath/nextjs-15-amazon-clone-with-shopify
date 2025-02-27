import { ProductCardImage } from "@/app/types/types";
import Image from "next/image";
export default function ProductListImage({ data }: { data: ProductCardImage }) {
  return (
    <>
      <Image
        width={200}
        height={200}
        className="bg-stone-100 object-contain w-full min-h-60 max-h-60"
        src={data.nodes[0].url}
        alt={"Product image"}
      />
    </>
  );
}
