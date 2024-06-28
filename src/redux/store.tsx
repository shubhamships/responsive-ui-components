import { configureStore } from "@reduxjs/toolkit";
import { billReducer, profileReducer, shipReducer } from "./reducers";

//GlobalStore {"profile":"", "billingdeails" }
interface ProfileState {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  alternatePhone: string;
  email: string;
}
export const profileInitialState: ProfileState = {
  id: 1,
  firstName: "",
  lastName: "",
  phone: "",
  alternatePhone: "",
  email: "",
};
interface ShipDetailsState {
  id: number;
  address1: string;
  landmark: string;
  address2: string;
  houseNumber: string;
  street: string;
  locality: string;
  pincode: string;
  city: string;
  country: string;
  state: string;
}
export const shipInitialState: ShipDetailsState = {
  id: 1,
  address1: "",
  landmark: "",
  address2: "",
  houseNumber: "",
  street: "",
  locality: "",
  pincode: "",
  city: "",
  country: "",
  state: "",
};
interface BillDetailsState {
  id: number;
  address1Billing: string;
  landmarkBilling: string;
  address2Billing: string;
  pincodeBilling: string;
  cityBilling: string;
  houseBilling: string;
  streetBilling: string;
  localityBilling: string;
  countryBilling: string;
}

export const billInitialState: BillDetailsState = {
  id: 1,
  address1Billing: "",
  landmarkBilling: "",
  address2Billing: "",
  pincodeBilling: "",
  cityBilling: "",
  houseBilling: "",
  streetBilling: "",
  localityBilling: "",
  countryBilling: "",
};
const store = configureStore({
  reducer: {
    profile: profileReducer,
    shipDetails: shipReducer,
    billDetails: billReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
