"use client";

import { useCartContext } from "@/app/cart-provider";
import { getCart } from "@/app/data/shopifyFetch";
import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { useCartId } from "./useCartId";
import Link from "next/link";

const Cart = () => {
  const { cartId } = useCartId();
  const { cartItems, setCartItems } = useCartContext();

  const getCartData = async () => {
    if (!cartId) return;
    const response = await getCart(cartId);
    if (response.body) {
      setCartItems(response.body);
    }
  };
  useEffect(() => {
    if (cartId) getCartData();
  }, [cartId]);

  return (
    <Link href="/cart">
      <button className="flex mx-2 items-baseline relative">
        <span className=" text-amazon-orange absolute bottom-3 right-2 lg:right-[54px] lg:bottom-[17.5px] z-20 bg-amazon-blue lg:bg-amazon-dark-blue font-extrabold">
          {cartItems?.data?.cart.totalQuantity}
        </span>
        <ShoppingCart size={28} className="white relative z-10" />
        <span className="hidden md:flex mr-4">Cart</span>
      </button>
    </Link>
  );
};

export default Cart;
