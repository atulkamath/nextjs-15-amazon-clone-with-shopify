import { ShoppingCart } from "lucide-react";
import React from "react";

const Cart = () => {
  return (
    <button className="flex mx-2 items-baseline">
      <ShoppingCart size={28} className="white" />
      <span className="hidden md:flex mr-4">Cart</span>
    </button>
  );
};

export default Cart;
