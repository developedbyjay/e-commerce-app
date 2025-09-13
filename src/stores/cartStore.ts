import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (item) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            //  returns the index of the item if found
            (p) =>
              p.id === item.id &&
              p.selectedSize === item.selectedSize &&
              p.selectedColor === item.selectedColor
          );

          // The item already exist in the cart
          if (existingIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += item.quantity || 1;
            return { cart: updatedCart };
          }
          // The item never existed before(new item)
          return {
            cart: [
              ...state.cart,
              {
                ...item,
                quantity: item.quantity || 1,
                selectedSize: item.selectedSize,
                selectedColor: item.selectedColor,
              },
            ],
          };
        }),

      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              !(
                item.id === product.id &&
                item.selectedSize === product.selectedSize &&
                item.selectedColor === product.selectedColor
              )
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) state.hasHydrated = true;
      },
    }
  )
);
