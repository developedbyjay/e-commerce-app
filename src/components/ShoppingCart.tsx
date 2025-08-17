import { CartItemType } from "@/types";
import { Trash2 } from "lucide-react";

export default function ProductList({ item }: { item: CartItemType }) {
  return (
    <div className="flex items-center justify-between" key={item.id}>
      <div className=""></div>
      <button className="w-8 h-8 rounded-full hover:bg-red-200 transition-all duration-300  bg-red-100 text-red-400 flex items-center justify-center cursor-pointer">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
