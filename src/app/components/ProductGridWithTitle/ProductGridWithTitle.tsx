import Image from "next/image";
import { getProductsByTags } from "./getProductGridWithTitle";

export default function ProductGridWithTitle({
  title,
  tag,
}: {
  title: string;
  tag: string;
}) {
  return (
    <div className="bg-white p-4 mt-1">
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="grid grid-cols-2 mt-4 gap-2 lg:gap-1">
        {getProductsByTags(tag).then((data) => {
          return data.body?.data.products.edges.map((product) => {
            return (
              <div
                key={product.node.id}
                className="flex flex-col cursor-pointer"
              >
                <Image
                  className="object-contain min-h-32 max-h-32 bg-amazon-yellow"
                  alt="product image"
                  src={product.node.images.nodes[0].url}
                  width={200}
                  height={200}
                />
                <h1 className="text-sm font-bold mb-2">{product.node.title}</h1>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
