import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CartState } from "./cart.reducer";

export const selectCart = (state: AppState) => state.cart

export const selectCartApp = createSelector(
    selectCart,
    (state: CartState) => state.items
)