import { configureStore } from "@reduxjs/toolkit";
import {
  billReducer,
  orderReducer,
  profileReducer,
  shipReducer,
} from "./reducers";
import {
  billInitialState,
  profileInitialState,
  shipInitialState,
  orderFormInitialState,
} from "./interfaces";

//GlobalStore {"profile":"", "billingdeails" }

const store = configureStore({
  reducer: {
    profile: profileReducer,
    shipDetails: shipReducer,
    billDetails: billReducer,
    orderDetails: orderReducer,
  },
  preloadedState: {
    profile: profileInitialState,
    shipDetails: shipInitialState,
    billDetails: billInitialState,
    orderDetails: orderFormInitialState,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
