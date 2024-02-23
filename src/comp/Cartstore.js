// import { create } from 'zustand';
// import { Mobile, bikes, car } from '../data';



// const Cartstore = create((set, get) => {
//     const cartItems = [];
//     console.log(cartItems);

//     const addToCart = (item) => {
//         const itemExists = get().cartItems.find(
//             (cartitem) => cartitem.id === item.id
//         );

//         if (itemExists) {
//             if (typeof itemExists.quantity === "number") {
//                 itemExists.quantity++;
//             }

//             set({ cartItems: [...get().cartItems] });
//         } else {
//             set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
//         }

//         // item = []

//         // item.push(itemExists);

//         // console.log(item);

//         //console.log('Item added to the cart', itemExists);

//         console.log(itemExists);


//     }

//     return {
//         cartItems,
//         addToCart,
//     };
// });

// export default Cartstore;


// import {create} from 'zustand';

// const useCartStore = create((set) => ({
//     cart: [],
//     addToCart: (product) => set((state) => ( console.log(state),{ cart: [...state.cart, product] })),
//     removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),

// }));

// export default useCartStore;


import { create } from 'zustand';

const useCartStore = create((set) => ({
    cart: [],

    total: 0,

    calculateTotal: (cart) => cart.reduce((total, item) => total + item.price * item.quantity, 0),


    addToCart: (product, quantity = 1) => set((state) => {
        const existingProduct = state.cart.find((item) => item.id === product.id);

        if (existingProduct) {
            const updatedCart = state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            );
            const updatedTotal = useCartStore.getState().calculateTotal(updatedCart);
            return { cart: updatedCart, total: updatedTotal };
        }
        else {
            const updatedCart = [...state.cart, { ...product, quantity }];
            const updatedTotal = state.total + product.price * quantity;
            return { cart: updatedCart, total: updatedTotal };
        }
    }),

    increaseQuantity: (productId, quantity = 1) =>
        set((state) => {
            const updatedCart = state.cart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
            );
            const updatedTotal = useCartStore.getState().calculateTotal(updatedCart);

            return { cart: updatedCart, total: updatedTotal };
        }),

    decreaseQuantity: (productId, quantity = 1) =>
        set((state) => {
            const updatedCart = state.cart.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - quantity) } : item
            );
            const updatedTotal = useCartStore.getState().calculateTotal(updatedCart);

            return { cart: updatedCart, total: updatedTotal };
        }),

    removeFromCart: (productId) =>
        set((state) => {
            const removedProduct = state.cart.find((item) => item.id === productId);
            const updatedTotal = state.total - removedProduct.price * removedProduct.quantity;

            return {
                cart: state.cart.filter((item) => item.id !== productId),
                total: updatedTotal,
            };
        }),

    removeallprodcut: () => set({ cart: [], total: 0 })


}));

export default useCartStore;

