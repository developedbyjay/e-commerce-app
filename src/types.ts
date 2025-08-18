import z from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.email().min(1, "Email is required"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .max(13, "Phone number must be 13 digits")
    .regex(/^\d+$/, "Phone number must be numeric"),
  address: z.string().min(1, "Address is required").max(100),
  city: z.string().min(1, "City is required").max(10),
});

export const paymentFormSchema = z.object({
  cardNumber: z.string().min(16, "Card number must be 16 digits").max(16),
  cardHolder: z.string().min(2, "Cardholder name is required").max(100),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format"
    ),
  cvv: z.string().min(3, "CVV is required").max(3),
});

export type CartStoreStateType = {
  cart: CartItemType[];
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (id: string | number) => void;
  clearCart: () => void;
};

export type ProductsType = ProductType[];
export type CartItemsType = CartItemType[];
export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
