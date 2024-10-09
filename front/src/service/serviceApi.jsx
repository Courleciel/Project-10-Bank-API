import { createAsyncThunk } from "@reduxjs/toolkit";

const apiBaseURL = "http://localhost:3001/api/v1";

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${apiBaseURL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        return await res.json();
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (token, { rejectWithValue }) => {
    try {
      const res = await fetch(`${apiBaseURL}/user/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        return await res.json();
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const modifyUserProfile = createAsyncThunk(
  "user/modifyProfile",
  async ({ token, firstName, lastName }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${apiBaseURL}/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName }),
      });

      if (res.ok) {
        return await res.json();
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
