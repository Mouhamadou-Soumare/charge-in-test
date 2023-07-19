import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardDashboardState {
  title: string;
  iconName: string;
  keyStat: number | string;
  keyStatEvolution: number;
  otherStat?: string;
  otherStatValue?: number;
  b2cStat?: number | string;
  b2bStat?: number | string;
}

const initialState: CardDashboardState = {
  title: '',
  iconName: '',
  keyStat: 0,
  keyStatEvolution: 0,
};

const cardDashboardSlice = createSlice({
  name: 'cardDashboard',
  initialState,
  reducers: {
    setCardDashboard: (state, action: PayloadAction<CardDashboardState>) => {
      state.title = action.payload.title;
      state.iconName = action.payload.iconName;
      state.keyStat = action.payload.keyStat;
      state.keyStatEvolution = action.payload.keyStatEvolution;
      state.otherStat = action.payload.otherStat;
      state.otherStatValue = action.payload.otherStatValue;
      state.b2cStat = action.payload.b2cStat;
      state.b2bStat = action.payload.b2bStat;
    },
  },
});

export const { setCardDashboard } = cardDashboardSlice.actions;
export default cardDashboardSlice.reducer;
