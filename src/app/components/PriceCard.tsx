export default function PriceCard({ price }: { price: number }) {
  return (
    <div className="mt-2 text-lg">
      Price <span className="text-red-700 text-xl">AED {price}</span>
      <p className="text-sm text-stone-600">All prices include VAT</p>
      <span className="text-amazon-link text-base">Free delivery</span>
      <span className="text-sm font-bold ml-2">
        Get it tomorrow,{" "}
        {new Date(Date.now() + 24 * 60 * 60 * 1000)
          .toLocaleDateString("en-US", {
            weekday: "long",
            day: "2-digit",
          })
          .replace(",", "")}
      </span>
    </div>
  );
}
