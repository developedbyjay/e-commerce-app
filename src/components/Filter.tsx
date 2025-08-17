"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pathname = usePathname();

  const sort = searchParams.get("sort") || "newest";

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-8">
      <span>Sort by:</span>
      <select
        name="sort"
        id="sort"
        value={sort}
        onChange={(e) => handleChange(e)}
        className="ring-1 ring-gray-300 rounded-md py-1 px-2 shadow-md"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}
