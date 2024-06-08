import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, logout } =
  authSlice.actions;

export default authSlice.reducer;
