import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import navSlice from "../features/navSlice"
import titleCardSlice from "../features/titleCardSlice"
import statsCardSlice from "../features/statsCardSlice"

export const store = configureStore({
  reducer: {
    nav: navSlice,
    titleCard: titleCardSlice,
    statsCard:statsCardSlice
    
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
