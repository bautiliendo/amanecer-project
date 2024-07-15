import { createContext, useReducer } from "react";
import { CartContextType, CartProduct, CartProviderProps } from "../types";
import { cartInitialState, cartReducer } from "../reducers/cart";


export const CartContext = createContext<CartContextType | undefined>(undefined);

function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product: CartProduct) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = (product: CartProduct) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const removeItemFromCart = (product: CartProduct) => dispatch({
        type: 'REMOVE_ITEM_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, removeFromCart, removeItemFromCart, clearCart }
}

export function CartProvider({ children }: CartProviderProps) {
    const { state, addToCart, removeFromCart, removeItemFromCart, clearCart } = useCartReducer();
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            removeItemFromCart,
            clearCart,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}