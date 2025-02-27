import React from "react";
import { ProductCardDetailSchema } from "../../types/types";
import ProductListImage from "./ProductListImage";
import ReviewCard from "./ReviewCard";
import ProductTags from "./ProductTags";

const ProductListCard: React.FC<{ data: ProductCardDetailSchema }> = ({
  data,
}) => {
  return (
    <div className="flex flex-col border border-stone-100">
      <ProductListImage data={data.node.images} />
      <div className="p-2">
        <p className="font-semibold">{data.node.title}</p>
        <ReviewCard />
        <p className="font-bold text-lg">
          AED {data.node.priceRange.maxVariantPrice.amount}
        </p>
        <ProductTags data={data.node.tags} />
      </div>
    </div>
  );
};

export default ProductListCard;
