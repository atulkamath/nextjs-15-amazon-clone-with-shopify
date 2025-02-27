import ProductCard from "@/app/components/ProductList/ProductListCard";
import { searchProducts } from "../../data/shopifyFetch";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = searchProducts(slug);
  return (
    <div>
      <p>Results</p>
      <div className="grid grid-cols-5 gap-4">
        {(await data).body?.data.search.edges.map((data) => (
          <ProductCard key={data.node.id} data={data} />
        ))}
      </div>
    </div>
  );
}
