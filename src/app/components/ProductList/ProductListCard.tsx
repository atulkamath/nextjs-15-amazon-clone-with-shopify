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
    <div className="flex lg:flex-col lg:items-start items-center border-2 border-stone-100 bg-white lg:p-2">
      <Link href={`/${data.node.handle}`}>
        <ProductListImage data={data.node.images} />
      </Link>
      <div className="md:flex-grow p-4">
        <p className="font-semibold">{data.node.title}</p>
        <ProductTags data={data.node.tags} />
        <ReviewCard />
        <p className="font-bold text-lg">
          AED {data.node.priceRange.maxVariantPrice.amount}
        </p>
        <AddToCartButton
          variantId={data.node.variants.edges[0].node.id}
          quantity={1}
        />
      </div>
    </div>
  );
};

export default ProductListCard;
