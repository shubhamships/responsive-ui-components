import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
const initialState: ShipDetailsState = {
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
const shipDetailsSlice = createSlice({
  name: "shipDetails",
  initialState,
  reducers: {
    // updateCountry: state=>
    updateShipDetails(state, action: PayloadAction<Partial<ShipDetailsState>>) {
      console.log(state, action);
      return { ...state, ...action.payload };
    },
  },
});

export const { updateShipDetails } = shipDetailsSlice.actions;
export default shipDetailsSlice.reducer;
