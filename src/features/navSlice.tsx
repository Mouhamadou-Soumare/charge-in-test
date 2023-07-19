import { createSlice } from '@reduxjs/toolkit';

interface NavState {
  mobileOpen: boolean;
}

const initialState: NavState = {
  mobileOpen: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setMobileOpen: (state, action) => {
      state.mobileOpen = action.payload;
    },
  },
});

export const { setMobileOpen } = navSlice.actions;

export default navSlice.reducer;
