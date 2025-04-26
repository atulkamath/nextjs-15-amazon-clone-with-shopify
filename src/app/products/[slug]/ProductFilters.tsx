"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ProductFilters() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = (filter: string, resetReverse?: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", filter);
    if (resetReverse) {
      params.set("reverse", "true");
    } else {
      params.delete("reverse");
    }
    const newUrl = `${pathname}?${params.toString()}`;
    if (newUrl !== `${pathname}?${searchParams.toString()}`) {
      router.replace(newUrl);
    }
  };

  return (
    <div className="hidden lg:flex lg:flex-col items-start p-8 text-sm">
      <h2 className="text-lg font-bold mb-4">Relevance</h2>
      <div className="text-stone-500 flex flex-col items-start space-y-2">
        <button
          className={`${
            searchParams.get("filter") === "RELEVANCE"
              ? "text-black font-bold"
              : ""
          }`}
          onClick={() => {
            createQueryString("RELEVANCE");
          }}
        >
          Popular
        </button>
        <button
          className={`${
            searchParams.get("filter") === "PRICE" &&
            !searchParams.get("reverse")
              ? "text-black font-bold"
              : ""
          }`}
          onClick={() => {
            createQueryString("PRICE");
          }}
        >
          Price: Low to High
        </button>
        <button
          className={`${
            searchParams.get("filter") === "PRICE" &&
            searchParams.get("reverse") === "true"
              ? "text-black font-bold"
              : ""
          }`}
          onClick={() => {
            createQueryString("PRICE", true);
          }}
        >
          Price: High to Low
        </button>
      </div>
    </div>
  );
}
