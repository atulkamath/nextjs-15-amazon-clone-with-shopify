"use client";

import { useEffect, useState } from "react";
import { shopifyFetch } from "@/app/data/shopifyFetch";
import { useCartContext } from "@/app/CartProvider";
import { CartId } from "@/app/types/types";

export function useCartId() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { cartId, setCartId } = useCartContext();

  useEffect(() => {
    async function fetchCart() {
      setLoading(true);
      try {
        const existingCartId = localStorage.getItem("shopifyCartId");
        if (existingCartId) {
          setCartId(existingCartId);
          setLoading(false);
          return;
        }

        const res = await shopifyFetch<CartId>({
          query: `
            mutation {
              cartCreate {
                cart {
                  id
                }
              }
            }
          `,
        });

        const id = res.body?.data?.cartCreate?.cart?.id;
        if (id) {
          setCartId(id);
          localStorage.setItem("shopifyCartId", id);
        } else {
          throw new Error("Failed to create cart: No cart ID returned");
        }
      } catch (err) {
        console.error("Error fetching cart:", err);
        setError("Failed to fetch or create cart");
      } finally {
        setLoading(false);
      }
    }

    fetchCart();
  }, []);

  return { cartId, loading, error };
}
