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
    logoutUser: (currentState) => {
      currentState.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload.body.token;
      state.error = "";
      localStorage.setItem("token", action.payload.body.token);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
