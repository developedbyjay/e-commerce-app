import ProductList from "@/components/product/ProductList";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category: string;
  }>;
}) {
  const category = (await searchParams).category;

  return (
    <div>
      <ProductList category={category} params="products" />
    </div>
  );
}
