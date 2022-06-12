import { addToCart, removeFromCart } from "./cart.actions";
import { createReducer, on } from "@ngrx/store";
import { CartItem } from "src/app/models/CartItem";

export interface CartState {
    items: CartItem[],
    totalPrice: number
}

export const initialState: CartState = {
    items: [],
    totalPrice: 0,
}

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state, { newItem }) => {

        const updatedTotalPrice = state.totalPrice + newItem.quantity * newItem.price

        const existingCartItemIndex = state.items.findIndex((temp) => {
            return temp.id === newItem.id
        })

        const existingCartItem = state.items[existingCartItemIndex]

        let updatedItems: CartItem[] = []

        if (existingCartItem) {
            const updatedItem: CartItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + newItem.quantity
            }

            updatedItems = [...state.items]

            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            // Mozda greska
            updatedItems = state.items.concat(newItem)
        }


        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
      })
)


