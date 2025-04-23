import { useCartContext } from "@/app/cart-provider";
import { getCart, updateCartQuantity } from "@/app/data/shopifyFetch";
import { LoaderCircle, MinusIcon, PlusIcon, Trash } from "lucide-react";

export default function QuantitySelector({
  quantity,
  id,
  availableQuantity,
  cartId,
}: {
  quantity: number;
  id: string;
  availableQuantity: number;
  cartId: string;
}) {
  const { setCartItems, loading, setLoading } = useCartContext();

  const addQuantity = async () => {
    if (quantity < availableQuantity) {
      setLoading(true);
      try {
        await updateCartQuantity(cartId, id, quantity + 1);
        const response = await getCart(cartId);
        if (response.body) {
          setCartItems(response.body);
        }
      } catch (error) {
        console.error("Error updating cart quantity:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  const removeQuantity = async () => {
    if (quantity > 0) {
      setLoading(true);
      try {
        await updateCartQuantity(cartId, id, quantity - 1);
        const response = await getCart(cartId);
        if (response.body) {
          setCartItems(response.body);
        }
      } catch (error) {
        console.error("Error updating cart quantity:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  const deleteItem = async () => {
    setLoading(true);
    try {
      await updateCartQuantity(cartId, id, 0);
      const response = await getCart(cartId);
      if (response.body) {
        setCartItems(response.body);
      }
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-row my-2">
      <button
        disabled={loading}
        onClick={deleteItem}
        className="border border-stone-200 mr-3 p-2"
      >
        <Trash />
      </button>
      {loading ? (
        <LoaderCircle className="animate-spin m-2" />
      ) : (
        <input
          readOnly
          min={0}
          max={6}
          value={quantity}
          className="border border-stone-200 w-full p-2"
        />
      )}
      <button
        disabled={loading}
        onClick={removeQuantity}
        className="p-2 border border-stone-200"
      >
        <MinusIcon />
      </button>
      <button
        className={`p-2 border border-stone-200 ${
          quantity === availableQuantity && "bg-stone-100 cursor-not-allowed"
        } `}
        disabled={quantity === availableQuantity || loading}
        onClick={addQuantity}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
