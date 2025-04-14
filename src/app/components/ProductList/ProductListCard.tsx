import React from "react";
import { ProductCardDetailSchema } from "../../types/types";
import ProductListImage from "./ProductListImage";
import ReviewCard from "../ReviewCard";
import ProductTags from "./ProductTags";
import AddToCartButton from "../AddToCartButton";
import Link from "next/link";

const ProductListCard: React.FC<{ data: ProductCardDetailSchema }> = ({
  data,
}) => {
  return (
    <Link href={`/${data.node.handle}`}>
      <div className="flex lg:flex-col lg:items-start items-center border-2 border-stone-100 bg-white lg:p-2">
        <ProductListImage data={data.node.images} />
        <div className="flex-grow p-4">
          <p className="font-semibold">{data.node.title}</p>
          <ProductTags data={data.node.tags} />
          <ReviewCard />
          <p className="font-bold text-lg">
            AED {data.node.priceRange.maxVariantPrice.amount}
          </p>
          <div className="w-1/2 md:w-full">
            <AddToCartButton />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductListCard;
