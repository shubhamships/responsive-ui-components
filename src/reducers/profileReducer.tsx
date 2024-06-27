import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  alternatePhone: string;
  email: string;
}

const initialState: ProfileState = {
  id: 1,
  firstName: "",
  lastName: "",
  phone: "",
  alternatePhone: "",
  email: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfileDetails(state, action: PayloadAction<Partial<ProfileState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfileDetails } = profileSlice.actions;
export default profileSlice.reducer;
