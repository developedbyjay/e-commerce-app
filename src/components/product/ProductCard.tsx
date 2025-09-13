"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "react-toastify";

export default function ProductCard({ product }: { product: ProductType }) {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
    quantity: 1,
  });

  const { addToCart } = useCartStore();


  function handleProductType({
    type,
    value,
  }: {
    type: "size" | "color" | "quantity";
    value: string | number;
  }) {
    setProductTypes((prev) => ({ ...prev, [type]: value }));
  }

  function handleAddToCart() {
    addToCart({
      ...product,
      quantity: productTypes.quantity,
      selectedSize: productTypes.size,
      selectedColor: productTypes.color,
    });
    toast.success("product added to cart");
  }

  return (
    <div className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            sizes="20"
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-4 p-4 bg-gray-100 ">
        <h1 className="text-sm font-medium">{product.name}</h1>
        <p className="text-gray-500 text-base">{product.shortDescription}</p>
        <div className="flex items-center gap-4 text-sm ">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              className="border border-gray-300 rounded-md px-2 py-[3px]"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2 mt-1">
              {product.colors.map((color) => (
                <div
                  key={color}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                  className={`cursor-pointer rounded-full border-1  ${
                    productTypes.color === color
                      ? "border-gray-400"
                      : "border-gray-200 "
                  } rounded-full p-[1.2px]`}
                >
                  <div
                    key={color}
                    onClick={() =>
                      handleProductType({ type: "color", value: color })
                    }
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-gray-500">Qty</span>
            <input
              type="number"
              min="1"
              max="99"
              value={productTypes.quantity}
              className="border border-gray-300 rounded-md px-2 py-[3px] w-16 text-center"
              onChange={(e) =>
                handleProductType({ type: "quantity", value: +e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <button
            // disabled={alreadyInCart}
            onClick={handleAddToCart}
            className={`$cursor-pointer hover:text-white hover:bg-black transition-all  ring-1 ring-gray-200
             shadow-lg rounded-md px-2 py-1 text-sm   flex items-center  gap-2 `}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
