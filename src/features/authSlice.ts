import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  errorMessage: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.errorMessage = "";
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
