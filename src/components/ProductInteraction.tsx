"use client";

import { ProductType } from "@/types";
import { Minus, Plus } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ProductInteraction({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [quantity, setQuantity] = useState(0);

  const handleTypeChange = (type: "size" | "color", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: string) => {
    setQuantity((prev: number) => {
      if (type === "decrement" && prev > 0) return prev - 1;
      if (type === "increment") return prev + 1;
      return prev;
    });
  };
  return (
    <div className="flex flex-col gap-3 mt-5">
      <div>
        <label className="text-sm text-gray-400"> Size</label>
        <div className="flex gap-2 items-center mt-1">
          {product.sizes.map((size) => (
            <div key={size} className="p-[2px] border-1 border-gray-300">
              <button
                onClick={() => handleTypeChange("size", size)}
                className={`flex cursor-pointer font-medium items-center justify-center text-[10px]  w-6 h-6  ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size.toUpperCase()}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-400"> Color</label>
        <div className="flex gap-2 mt-1">
          {product.colors.map((color) => (
            <button
              key={color}
              style={{ background: color }}
              onClick={() => handleTypeChange("color", color)}
              className="cursor-pointer flex border border-gray-400  font-medium items-center justify-center text-[10px]  w-4 h-4 p-3 "
            ></button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-400"> Quantity</label>
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="cursor-pointer border-1 border-gray-300 p-1"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increment")}
            className="cursor-pointer border-1 border-gray-300 p-1"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
