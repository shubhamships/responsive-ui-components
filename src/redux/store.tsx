import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import {
  billInitialState,
  profileInitialState,
  shipInitialState,
  orderFormInitialState,
  orderDimensionInitialState,
} from "./interfaces";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    addOrder: {
      profile: profileInitialState,
      ship: shipInitialState,
      bill: billInitialState,
      order: orderFormInitialState,
      orderDimension: orderDimensionInitialState,
    },
  },
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
