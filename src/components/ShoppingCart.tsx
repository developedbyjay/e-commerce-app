import Image from "next/image";
import { Trash2 } from "lucide-react";
import { CartItemType } from "@/types";

export default function ProductList({
  item,
  deleteItem,
}: // updateItem,
{
  item: CartItemType;
  deleteItem: (item: CartItemType) => void;
  // updateItem: (item: CartItemType) => void;
}) {
  return (
    <div className="flex items-center justify-between" key={item.id}>
      <div className="flex gap-8">
        <div className="relative w-32 h-32  rounded-lg bg-gray-50 overflow-hidden">
          <Image
            src={item.images[item.selectedColor]}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
        {/* Item details */}
        <div className="flex flex-col justify-between">
          <div className=" flex flex-col gap-1">
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
            <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
            <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>
          </div>
          <p className="text-sm font-medium">${item.price}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* <div className="flex items-center gap-2 justify-between">
          <button
            onClick={() => updateItem({ ...item, quantity: item.quantity - 1 })}
            disabled={item.quantity === 1}
            className="bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all duration-300 p-1 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            -
          </button>
          <span className="text-sm font-medium">{item.quantity}</span>
          <button
            onClick={() => updateItem({ ...item, quantity: item.quantity + 1 })}
            className="bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all duration-300 p-1 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            +
          </button>
        </div> */}
        <button
          onClick={() => deleteItem(item)}
          className="w-8 h-8 rounded-full hover:bg-red-200 transition-all duration-300  bg-red-100 text-red-400 flex items-center justify-center cursor-pointer"
        >
          <Trash2 className="w-4 h-4 " />
        </button>
      </div>
    </div>
  );
}
