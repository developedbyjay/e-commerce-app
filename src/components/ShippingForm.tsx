import { useRouter } from "next/navigation";
import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ShippingForm({
  setShippingData,
}: {
  setShippingData: (data: ShippingFormInputs) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  // function handleShippingForm(data: ShippingFormInputs) {
  //   console.log(data);
  // }

  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingData(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col w-full gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          className={`border-b ${
            errors.name ? "border-red-500" : "border-gray-200"
          }  py-2 outline-none text-sm`}
          type="text"
          id="name"
          placeholder="John Doe"
          {...register("name")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Email
        </label>
        <input
          className={`border-b ${
            errors.email ? "border-red-500" : "border-gray-200"
          }  py-2 outline-none text-sm`}
          type="text"
          id="email"
          placeholder="john.doe@example.com"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Phone Number
        </label>
        <input
          className={`border-b ${
            errors.phone ? "border-red-500" : "border-gray-200"
          }  py-2 outline-none text-sm`}
          type="text"
          id="phone"
          placeholder="(123) 456-7890"
          {...register("phone")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          Address
        </label>
        <input
          className={`border-b ${
            errors.address ? "border-red-500" : "border-gray-200"
          }  py-2 outline-none text-sm`}
          type="text"
          id="address"
          placeholder="123 Main St"
          {...register("address")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          City
        </label>
        <input
          className={`border-b ${
            errors.city ? "border-red-500" : "border-gray-200"
          }  py-2 outline-none text-sm`}
          type="text"
          id="city"
          placeholder="New York"
          {...register("city")}
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 hover:bg-gray-500 bg-gray-800 text-white p-2 rounded-lg"
      >
        Continue
        <ArrowRightIcon className="w-4 h-4" />
      </button>
    </form>
  );
}
