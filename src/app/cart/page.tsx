"use client";

import { useCartContext } from "../cart-provider";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";

export default function Cart() {
  const { cartItems, cartId, loading } = useCartContext();

  return (
    <div className="flex flex-col p-4 sm:flex-col-reverse sm:p-12 lg:p-24 lg:flex-row lg:gap-10 lg:max-w-screen-xl mx-auto">
      <CartSummary loading={loading} cartCost={cartItems?.data?.cart.cost} />
      <div className="lg:flex-1 lg:w-4/6 lg:order-1 lg:border lg:border-slate-200 lg:p-4">
        <h1 className="hidden lg:block text-3xl font-bold px-14">
          Shopping Cart
        </h1>
        {cartItems?.data?.cart.lines.edges.length === 0 ? (
          <p className="text-center text-lg font-bold mt-8">
            Your cart is empty. Add some products to your cart to proceed.
          </p>
        ) : (
          <>
            <div className="h-[1px] bg-stone-300 w-full my-2 sm:hidden" />
            {cartItems?.data?.cart?.lines?.edges.map((item) => (
              <CartItem key={item.node.id} item={item} cartId={cartId} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
