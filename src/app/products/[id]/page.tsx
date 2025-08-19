import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 59.9,
  sizes: ["xs", "s", "m", "l", "xl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) {
  const { size, color } = await searchParams;

  const selectedSize = (size || product.sizes[0]) as string;
  const selectedColor = (color || product.colors[0]) as string;

  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-[20rem_1fr] items-start gap-8">
      <div className="relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div className="flex flex-col p-2 bg-gray-50">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium">{product.name}</h1>
          <p className="text-sm font-light text-gray-500">
            {product.description}
          </p>
          <span className="font-bold text-2xl text-gray-900 ">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="Klarna Logo"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="Cards Logo"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="Stripe Logo"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="mt-4 text-xs text-gray-500">
          By clicking Pay Now, you agree to our Terms & Conditions and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}
