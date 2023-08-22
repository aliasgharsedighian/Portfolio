"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  // cartOpen: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        //the item exist in the basket ... remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.payload.id} as its not in basket)`
        );
      }
      state.items = newBasket;
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    // changeCartOpen: (state, action) => {
    //   state.cartOpen = action.payload;
    // },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  incrementQuantity,
  decrementQuantity,
} = basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
// export const cartOpen = (state) => state.basket.cartOpen;

export default basketSlice.reducer;
