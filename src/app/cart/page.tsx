"use client";
import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { CartItemsType } from "@/types";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";

import ProductList from "@/components/ShoppingCart";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Information",
  },
  {
    id: 3,
    title: "Payment",
  },
];

// TEMPORARY
const cartItems: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

export default function CartPage() {
  const [shippingComplete, setShippingComplete] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeStep = searchParams.get("step")
    ? parseInt(searchParams.get("step") as string)
    : 1;

  return (
    <div className="flex flex-col gap-8 items-center mt-12 ">
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* Step Indicator */}
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-300"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* Steps and Details */}
      <div className="grid w-full grid-cols-1 items-start  lg:grid-cols-[1fr_25rem] gap-4">
        {/* Steps */}
        <div className="shadow-lg h-auto border-gray-100 p-8 rounded-lg flex flex-col gap-8 ">
          {activeStep === 1 && (
            <>
              {cartItems.map((item) => (
                <ProductList key={item.id} item={item} />
              ))}
            </>
          )}
          {activeStep === 2 && (
            <ShippingForm setShippingComplete={setShippingComplete} />
          )}
          {activeStep === 3 && shippingComplete && <PaymentForm />}
        </div>
        {/* Details */}
        <div className="shadow-lg h-auto border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className="font-semibold">Cart Details</h2>
          <div className=" flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount (10%)</span>
              <span className="font-semibold">$5.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping fee</span>
              <span className="font-semibold">$4.80</span>
            </div>
            <hr className=" border-gray-200" />
            <div className="flex justify-between">
              <span className="text-gray-900 font-semibold">Total</span>
              <span className="text-gray-800 font-semibold">$144.80</span>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300 w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer"
            >
              Continue
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
