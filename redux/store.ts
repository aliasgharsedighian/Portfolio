import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import SignUpReducer from "./Features/user/userSlice";
import basketReducer from "./Features/basket/basketSlice";
import amazonReducer from "./Features/basket/amazonBasketSlice";
import ebayReducer from "./Features/basket/ebayBasketSlice";
import emirateReducer from "./Features/basket/emirateBasketSlice";
import turkeyReducer from "./Features/basket/turkeyBasketSlice";
import chinaReducer from "./Features/basket/chinaBasketSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  SignUpPage: SignUpReducer,
  basket: basketReducer,
  amazonBasket: amazonReducer,
  ebayBasket: ebayReducer,
  emirateBasket: emirateReducer,
  turkeyBasket: turkeyReducer,
  chinaBasket: chinaReducer,
});

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
