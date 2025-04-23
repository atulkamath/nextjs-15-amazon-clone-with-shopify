export default function ProductTags({ data }: { data: string[] }) {
  return (
    <div className="flex flex-row space-x-4">
      {data.map((data, index) => (
        <p
          key={index}
          className="bg-zinc-100 font-semibold text-xs text-center p-0.5"
        >
          {data}
        </p>
      ))}
    </div>
  );
}
