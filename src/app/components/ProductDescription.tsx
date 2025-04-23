export default function ProductDescription({
  description,
}: {
  description: string;
}) {
  return (
    <p className="mt-6 max-w-prose">
      <span className="font-bold text-lg">About this item</span>
      <br />
      {description || "No description available."}
    </p>
  );
}
