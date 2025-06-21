"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FilterComp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ Initialize state from current URL
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [price, setPrice] = useState(searchParams.get("price") || "");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    const params = new URLSearchParams();

    if (category) params.set("category", category);
    if (price) params.set("price", price);
    if (page) params.set("page", page.toString());

    router.push(`/shop?${params.toString()}`);
  }, [category, price, page]);
  return (
    <div className="flex gap-4 my-4">
      <select
        value={category}
        onChange={(e) => {
          setPage(1);
          setCategory(e.target.value);
        }}
        className="border p-2 text-white"
      >
        <option value="">All Categories</option>
        <option value="Books">Books</option>
        <option value="Electronics">Electronics</option>
      </select>

      <select
        value={price}
        onChange={(e) => {
          setPage(1);
          setPrice(e.target.value);
        }}
        className="border p-2 text-white"
      >
        <option value="">Sort Price</option>
        <option value="asc">Price Low → High</option>
        <option value="desc">Price High → Low</option>
      </select>

      <button
        className="border p-2 text-white"
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next Page
      </button>
    </div>
  );
};

export default FilterComp;
