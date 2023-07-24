import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InstallerState {
  date: string;
  distance: number;
  garantie: string;
  certificate: boolean;
}

const initialState: InstallerState = {
  date: "X",
  distance: 12,
  garantie: '2 ans',
  certificate: true,
};

const cardInstallerSlice = createSlice({
  name: 'cardInstaller',
  initialState,
  reducers: {
    setInstallerData: (state, action: PayloadAction<InstallerState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setInstallerData } = cardInstallerSlice.actions;
export default cardInstallerSlice.reducer;
