"use client";

import { useState } from "react";
import { useCartContext } from "../CartProvider";
import { addItemToCart, getCart } from "../data/shopifyFetch";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const AddToCartButton = ({
  variantId,
  quantity = 1,
}: {
  variantId: string;
  quantity?: number;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { cartId, setCartItems } = useCartContext();

  const handleAdd = async () => {
    if (!cartId) {
      return;
    }
    try {
      setLoading(true);
      await addItemToCart(cartId, variantId, quantity);
      const response = await getCart(cartId);
      if (response.body) {
        setCartItems(response.body);
      }
      router.push("/cart");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        disabled={loading}
        onClick={handleAdd}
        className={`flex items-center justify-center gap-2 bg-amazon-yellow p-2 rounded-3xl mt-4 w-full  ${
          loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"
        }`}
      >
        {loading && <LoaderCircle className={"animate-spin h-5 w-5"} />}
        Add to Cart
      </button>
    </div>
  );
};
export default AddToCartButton;
