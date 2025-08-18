import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (p) =>
              p.id === item.id &&
              p.selectedSize === item.selectedSize &&
              p.selectedColor === item.selectedColor
          );
          if (existingIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += item.quantity || 1;
            return { cart: updatedCart };
          }
          return {
            cart: [
              ...state.cart,
              {
                ...item,
                quantity: 1,
                selectedSize: item.selectedSize,
                selectedColor: item.selectedColor,
              },
            ],
          };
        }),
      updateFromCart: (item) =>
        set((state) => ({
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, ...item } : cartItem
          ),
        })),
      removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
