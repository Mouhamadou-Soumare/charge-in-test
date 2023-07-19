import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TitleCardState {
  iconName: string | null;
  titleCard: string;
}

const initialState: TitleCardState = {
  iconName: null,
  titleCard: '',
};

const titleCardSlice = createSlice({
  name: 'titleCard',
  initialState,
  reducers: {
    setTitleCard: (state, action: PayloadAction<TitleCardState>) => {
      state.iconName = action.payload.iconName;
      state.titleCard = action.payload.titleCard;
    },
  },
});

export const { setTitleCard } = titleCardSlice.actions;
export default titleCardSlice.reducer;
