import { useRouter } from "next/navigation";

export default function ShippingForm({
  setShippingComplete,
}: {
  setShippingComplete: (complete: boolean) => void;
}) {
  const router = useRouter();

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShippingComplete(true);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form onSubmit={handleForm} className="flex flex-col gap-4">
      <div>
        <label htmlFor="address" className="block text-sm font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="123 Main St"
        />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="Anytown"
        />
      </div>
      <div>
        <label htmlFor="zip" className="block text-sm font-medium">
          ZIP Code
        </label>
        <input
          type="text"
          id="zip"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="12345"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-gray-800 text-white p-2 rounded-md"
      >
        Continue to Payment
      </button>
    </form>
  );
}
