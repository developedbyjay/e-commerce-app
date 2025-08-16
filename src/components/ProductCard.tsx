"use client";

import { ProductType } from "@/types";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.shortDescription}</p>
      <span>Price: ${product.price.toFixed(2)}</span>
    </div>
  );
}
 