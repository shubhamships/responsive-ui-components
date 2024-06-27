import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";
import shipDetailsReducer from "./reducers/shipDetailsReducer";
import billingDetailsReducer from "./reducers/billingDetailsReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    shipDetails: shipDetailsReducer,
    billingDetails: billingDetailsReducer,
  },
});
store.subscribe(() => console.log(store.getState()));
export default store;
console.log(store.getState());
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
