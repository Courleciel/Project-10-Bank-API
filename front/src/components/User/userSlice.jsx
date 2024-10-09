import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile, modifyUserProfile } from "../../service/serviceApi.jsx";
import { authSlice } from "../../pages/SignIn/authSlice.jsx";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    error: null,
  },
  extraReducers: function (builder) {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.error = "";
    });
    builder.addCase(authSlice.actions.logoutUser, (state) => {
      state.firstName = "";
      state.lastName = "";
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(modifyUserProfile.fulfilled, (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.error = "";
    });
    builder.addCase(modifyUserProfile.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
