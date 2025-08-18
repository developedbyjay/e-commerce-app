"use client";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartIcon() {
  const { cart } = useCartStore();
  return (
    <Link href={cart.length === 0 ? "/" : `/cart`} className="relative">
      <ShoppingCart className="h-5 w-5 text-gray-500" />
      <span className="absolute flex items-center justify-center text-sm font-medium -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4">
        {cart.length}
      </span>
    </Link>
  );
}
