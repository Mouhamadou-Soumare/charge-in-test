import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatsCardState {
  keyStat: number | string;
  keyStatEvolution: number;
  otherStat?: string;
  otherStatValue?: number;
  b2cStat?: number | string;
  b2bStat?: number | string;
}

const initialState: StatsCardState = {
  keyStat: 0,
  keyStatEvolution: 0,
};

const statsCardSlice = createSlice({
  name: 'statsCard',
  initialState,
  reducers: {
    setStatsCard: (state, action: PayloadAction<StatsCardState>) => {
      state.keyStat = action.payload.keyStat;
      state.keyStatEvolution = action.payload.keyStatEvolution;
      state.otherStat = action.payload.otherStat;
      state.otherStatValue = action.payload.otherStatValue;
      state.b2cStat = action.payload.b2cStat;
      state.b2bStat = action.payload.b2bStat;
    },
  },
});

export const { setStatsCard } = statsCardSlice.actions;
export default statsCardSlice.reducer;
