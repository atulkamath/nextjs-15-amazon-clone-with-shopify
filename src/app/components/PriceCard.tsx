export default function PriceCard({ price }: { price: number }) {
  return (
    <div className="mt-2 text-lg">
      Price <span className="text-red-700 text-xl">AED {price}</span>
      <p className="text-sm text-stone-600">All prices include VAT</p>
    </div>
  );
}
