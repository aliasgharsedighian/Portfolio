import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserListData } from "@/components/UserListData";

let initialState = {
  users: UserListData,
  userActivity: false,
  userLogged: [],
};

export const singUpSlice = createSlice({
  name: "SignUpPage",
  initialState,
  reducers: {
    addToUser: (state, action: PayloadAction<any>) => {
      state.users = [...state.users, action.payload];
    },
    changeActivity: (state, action: PayloadAction<any>) => {
      state.userActivity = action.payload;
      localStorage.setItem("userActivity", JSON.stringify(state.userActivity));
    },
    addUserLogged: (state, action: PayloadAction<any>) => {
      state.userLogged = action.payload;
    },
  },
});

export const { addToUser, changeActivity, addUserLogged } = singUpSlice.actions;
export const addedUser = (state: any) => state.SignUpPage.users;
export const activity = (state: any) => state.SignUpPage.userActivity;
export const userAccountLogged = (state: any) => state.SignUpPage.userLogged;

export default singUpSlice.reducer;
