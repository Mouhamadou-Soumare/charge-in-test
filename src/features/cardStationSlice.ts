import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StationState {
  power: number;
  accessControl: string;
  chargeTime: string;
  optimization: boolean;
}

const initialState: StationState = {
  power: 0,
  accessControl: '',
  chargeTime: '',
  optimization: false,
};

const stationSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    setStationData: (state, action: PayloadAction<StationState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setStationData } = stationSlice.actions;
export default stationSlice.reducer;
