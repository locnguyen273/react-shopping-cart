import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../models/type";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state: any, action) => {
      const itemInCart = state.cart.find(
        (item: ProductType) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state: any, action) => {
      const item = state.cart.find(
        (item: ProductType) => item._id === action.payload._id
      );
      item.quantity++;
    },
    decrementQuantity: (state: any, action) => {
      const item = state.cart.find(
        (item: ProductType) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removerItem: (state: any, action) => {
      const removeItemFromCart = state.cart.filter(
        (item: ProductType) => item._id !== action.payload._id
      );
      state.cart = removeItemFromCart;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removerItem
} = cartSlice.actions;