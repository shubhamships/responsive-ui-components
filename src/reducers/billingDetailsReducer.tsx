import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BillingDetailsState {
  id: number;
  address1Billing: string;
  landmarkBilling: string;
  address2Billing: string;
  pincodeBilling: string;
  cityBilling: string;
  houseBilling: string;
  streetBilling: string;
  localityBilling: string;
}

const initialState: BillingDetailsState = {
  id: 1,
  address1Billing: "",
  landmarkBilling: "",
  address2Billing: "",
  pincodeBilling: "",
  cityBilling: "",
  houseBilling: "",
  streetBilling: "",
  localityBilling: "",
};

const billingDetailsSlice = createSlice({
  name: "billingDetails",
  initialState,
  reducers: {
    updateBillingDetails(
      state,
      action: PayloadAction<Partial<BillingDetailsState>>
    ) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateBillingDetails } = billingDetailsSlice.actions;
export default billingDetailsSlice.reducer;
