import ReviewCard from "../components/ReviewCard";
import { getProduct } from "../data/shopifyFetch";
import AddToCartButton from "../components/AddToCartButton";
import ProductImageCarousel from "../components/ProductImageCarousel";
import PriceCard from "../components/PriceCard";
import ProductDescription from "../components/ProductDescription";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const { body } = await getProduct(slug);
  const product = body?.data.product;

  return product ? (
    <div className="bg-white w-full min-h-full h-full">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 p-4 lg:p-8">
        <div className="lg:col-span-1">
          <ProductImageCarousel data={product.images.nodes} />
        </div>
        <div className="lg:col-span-1 flex flex-col">
          <div>
            <h3 className="text-2xl font-bold">{product.title}</h3>
            <ReviewCard />
          </div>
          <PriceCard price={product.priceRange.maxVariantPrice.amount} />
          <AddToCartButton />
          <ProductDescription description={product.description} />
        </div>
      </div>
    </div>
  ) : (
    <h1>No such product</h1>
  );
}
