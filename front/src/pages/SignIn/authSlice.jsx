import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../../service/serviceApi";

const token = localStorage.getItem("token");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: token ? token : null,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload.body.token;
      state.error = null;
      localStorage.setItem("token", action.payload.body.token);
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.error = "Email ou mot de passe incorrect";
    });
  },
});

export const { logoutUser, clearError } = authSlice.actions;
export default authSlice.reducer;
