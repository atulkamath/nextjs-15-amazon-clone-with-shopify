import ProductCard from "@/app/components/ProductList/ProductListCard";
import { searchProducts } from "../../data/shopifyFetch";
import ProductFilters from "./ProductFilters";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ filter?: string; reverse?: string }>;
}) {
  const { slug } = await params;
  const queryParams = await searchParams;

  const filter = queryParams.filter || "RELEVANCE";
  const reverse = queryParams.reverse === "true";
  const data = await searchProducts(slug, filter, reverse);

  if (data.body?.data.search.edges.length === 0)
    return <h1 className="p-4">No such product</h1>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 p-2 bg-white md:grid-cols-2 lg:grid-cols-5">
        <div className="row-span-2">
          <ProductFilters />
        </div>
        {data.body?.data.search.edges.map((data) => (
          <ProductCard key={data.node.id} data={data} />
        ))}
      </div>
    </div>
  );
}
