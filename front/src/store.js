import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./components/User/userSlice";
import { authSlice } from "./pages/SignIn/authSlice";

let state = {
  auth: {
    token: null,
    error: null,
  },
  user: {
    firstName: "",
    lastName: "",
    error: null,
  },
};

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    user: userSlice.reducer,
    auth: authSlice.reducer,
  }),
});
