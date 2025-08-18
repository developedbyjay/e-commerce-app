import { useRouter } from "next/navigation";
import { PaymentFormInputs, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCartIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  // function handleShippingForm(data: ShippingFormInputs) {
  //   console.log(data);
  // }

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    // setShippingData(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col w-full gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name on Card
        </label>
        <input
          className={`border-b ${
            errors.cardHolder ? "border-red-500" : "border-gray-200"
          }  py-2 outline-none text-sm`}
          type="text"
          id="name"
          placeholder="John Doe"
          {...register("cardHolder")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>
        <input
          className={`border-b ${
            errors.cardNumber ? "border-red-500" : "border-gray-200"
          }  py-2 outline-none text-sm`}
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          {...register("cardNumber")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiration Date
        </label>
        <input
          className={`border-b ${
            errors.expirationDate ? "border-red-500" : "border-gray-200"
          }  py-2 outline-none text-sm`}
          type="text"
          id="expirationDate"
          placeholder="MM/YY"
          {...register("expirationDate")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          className={`border-b ${
            errors.cvv ? "border-red-500" : "border-gray-200"
          }  py-2 outline-none text-sm`}
          type="text"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
        />
      </div>
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
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 hover:bg-gray-500 bg-gray-800 text-white p-2 rounded-lg"
      >
        Checkout
        <ShoppingCartIcon className="w-4 h-4" />
      </button>
    </form>
  );
}
