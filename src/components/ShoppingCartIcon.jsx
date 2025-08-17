"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartIcon() {
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="h-5 w-5 text-gray-500" />
      <span className="absolute flex items-center justify-center text-sm font-medium -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4">
        0
      </span>
    </Link>
  );
}
