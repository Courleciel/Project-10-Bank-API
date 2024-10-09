import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../../service/serviceApi";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    error: null,
  },
  reducers: {
    logoutUser: (currentState) => {
      currentState.token = null;
    },
  },
  extraReducers: function (builder) {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload.body.token;
      state.error = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
