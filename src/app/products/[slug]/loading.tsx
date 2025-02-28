export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 animate-pulse rounded-lg p-6 flex flex-col h-72"
        >
          <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="mt-auto h-10 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
}
