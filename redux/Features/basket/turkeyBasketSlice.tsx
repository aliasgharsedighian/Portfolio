"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  items: AuthState[] | any;
};

type AuthState = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  hasPrime?: any;
  quantity: number;
};

const initialState = {
  items: [],
} as InitialState;

export const turkeyBasketSlice = createSlice({
  name: "turkeyBasket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<any>) => {
      const itemInCart = state.items.find(
        (item: AuthState) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<any>) => {
      const index = state.items.findIndex(
        (basketItem: AuthState) => basketItem.id === action.payload.id
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
    incrementQuantity: (state, action: PayloadAction<AuthState>) => {
      const item = state.items.find((item: any) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<AuthState>) => {
      const item = state.items.find((item: any) => item.id === action.payload);
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
} = turkeyBasketSlice.actions;

export const turkeySelectItems = (state: any) => state.turkeyBasket.items;
export const turkeySelectTotal = (state: any) =>
  state.turkeyBasket.items.reduce(
    (total: any, item: any) => total + item.price * item.quantity,
    0
  );
// export const cartOpen = (state) => state.basket.cartOpen;

export default turkeyBasketSlice.reducer;
