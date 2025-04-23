import { LoaderCircle } from "lucide-react";

export default function CartSummary({
  loading,
  cartCost,
}: {
  loading: boolean;
  cartCost: { totalAmount: { amount: number } };
}) {
  return (
    <div className="lg:order-2 lg:border lg:border-slate-200 lg:p-4 lg:w-2/6 h-1/2">
      {[
        {
          label: "Subtotal",
          value: loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            `AED ${cartCost?.totalAmount.amount}`
          ),
        },
        { label: "Taxes", value: "Calculated at checkout" },
        { label: "Estimated Shipping", value: "FREE" },
      ].map(({ label, value }) => (
        <div key={label} className="flex items-center justify-between">
          <p>{label}</p>
          <p className="font-bold">{value}</p>
        </div>
      ))}
      <button className="bg-amazon-yellow p-2 rounded-lg my-2 w-full">
        Proceed to Checkout
      </button>
    </div>
  );
}
