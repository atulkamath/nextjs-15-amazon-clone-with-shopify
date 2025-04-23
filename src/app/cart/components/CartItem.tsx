import Image from "next/image";
import Link from "next/link";

import { CartEdges } from "@/app/types/types";
import QuantitySelector from "./QuantitySelector";

export default function CartItem({
  item,
  cartId,
}: {
  item: CartEdges;
  cartId: string;
}) {
  return (
    <div>
      <div className="flex items-center">
        <Link href={`/${item.node.merchandise.product.handle}`}>
          <Image
            className="min-h-20 max-h-20 lg:min-h-40 object-contain"
            src={item.node.merchandise.product.images.nodes[0].url}
            alt="product"
            width={120}
            height={120}
          />
        </Link>
        <div className="text-base/5 ml-2">
          <p>{item.node.merchandise.product.title}</p>
          <p className="font-bold">AED {item.node.merchandise.price.amount}</p>
        </div>
      </div>
      <QuantitySelector
        cartId={cartId}
        quantity={item.node.quantity}
        id={item.node.id}
        availableQuantity={item.node.merchandise.quantityAvailable}
      />
      {item.node.quantity === item.node.merchandise.quantityAvailable && (
        <p className="text-red-500 text-sm">
          You have reached the maximum quantity for this item.
        </p>
      )}
      <div className="h-[1px] bg-stone-300 w-full my-2" />
    </div>
  );
}
