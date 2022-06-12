import { createAction, props } from "@ngrx/store";
import { CartItem } from "src/app/models/CartItem";


export const addToCart = createAction(
    '[Item] Add to Cart',
    props<{newItem: CartItem}>()
)

export const removeFromCart = createAction(
    '[Item] Remove from Cart',
    props<{item: CartItem}>()
)

