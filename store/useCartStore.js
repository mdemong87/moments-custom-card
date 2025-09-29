import { create } from "zustand";

const useCartStore = create((set, get) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),

    // Remove item from cart by product id or name
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((item, index) => item.productId !== id),
        })),


}));

export default useCartStore;
