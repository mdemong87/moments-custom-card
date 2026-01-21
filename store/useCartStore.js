import { create } from "zustand";

const useCartStore = create((set, get) => ({
    cart: [],
    
    addToCart: (product) => {
        // Generate a unique cart item ID (for managing cart items)
        const cartItemId = Date.now() + Math.random();
        
        // Ensure we preserve the actual database product ID
        const cartItem = {
            ...product,
            cartItemId, // Unique ID for this cart item
            productId: product.id || product.productId, // Actual database product ID
            id: cartItemId, // For cart management (increase/decrease/remove)
        };
        
        set((state) => ({ cart: [...state.cart, cartItem] }));
    },

    // Remove item from cart by cart item id
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),

    // Increase quantity
    increaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id
                    ? { ...item, productQuantity: item.productQuantity + 1 }
                    : item
            ),
        })),

    // Decrease quantity
    decreaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id && item.productQuantity > 1
                    ? { ...item, productQuantity: item.productQuantity - 1 }
                    : item
            ),
        })),

    // Clear cart
    clearCart: () => set({ cart: [] }),
}));

export default useCartStore;