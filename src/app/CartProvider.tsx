"use client";

import { createContext, useContext, useState } from "react";
import { CartSchema } from "./types/types";

interface CartContextType {
  cartId: string;
  setCartId: (id: string) => void;
  cartItems: CartSchema;
  setCartItems: (items: CartSchema) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartId, setCartId] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartSchema>({} as CartSchema);
  const [loading, setLoading] = useState(false);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartId,
        setCartId,
        loading,
        setLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
}
