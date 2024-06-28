import { configureStore } from "@reduxjs/toolkit";
import {
  billReducer,
  orderDimensionReducer,
  orderReducer,
  profileReducer,
  shipReducer,
} from "./reducers";
import {
  billInitialState,
  profileInitialState,
  shipInitialState,
  orderFormInitialState,
  orderDimensionInitialState,
} from "./interfaces";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    shipDetails: shipReducer,
    billDetails: billReducer,
    orderDetails: orderReducer,
    orderDimensionDetails: orderDimensionReducer,
  },
  preloadedState: {
    profile: profileInitialState,
    shipDetails: shipInitialState,
    billDetails: billInitialState,
    orderDetails: orderFormInitialState,
    orderDimensionDetails: orderDimensionInitialState,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
