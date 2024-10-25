// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./components/User/userSlice";
import { authSlice } from "./pages/SignIn/authSlice";

// Fonction pour charger l'état depuis localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.error("Impossible de charger l'état depuis localStorage", e);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.error("Impossible de sauvegarder l'état dans localStorage", e);
  }
};

const preloadedState = loadState() || {
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
  preloadedState,
  reducer: combineReducers({
    user: userSlice.reducer,
    auth: authSlice.reducer,
  }),
});

store.subscribe(() => {
  saveState(store.getState());
});
