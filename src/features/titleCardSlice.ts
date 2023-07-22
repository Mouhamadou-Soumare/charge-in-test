import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as MUIcon from "@mui/icons-material";

interface TitleCardState {
  iconName: keyof typeof MUIcon;
  titleCard: string;
}

const initialState: TitleCardState = {
  iconName: "Abc",
  titleCard: "titre de la carte",
};

const titleCardSlice = createSlice({
  name: "titleCard",
  initialState,
  reducers: {
    setTitleCard: (state, action: PayloadAction<TitleCardState>) => {
      state.iconName = "Abc";
      state.titleCard = action.payload.titleCard;
    },
  },
});

export const { setTitleCard } = titleCardSlice.actions;
export default titleCardSlice.reducer;
