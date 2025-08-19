import ProductList from "@/components/ProductList";
import Image from "next/image";


const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    category: string;
  }>;
}) => {
  const category = (await searchParams).category;

  return (
    <div className="w-full">
      <div className="relative aspect-[3/1] mb-8">
        <Image
          src="/featured.png"
          fill
          alt="featured product"
          className="object-cover"
        />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
