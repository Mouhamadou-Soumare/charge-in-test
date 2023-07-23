  import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
  import navSlice from "../features/navSlice"
  import dashboardSlice from "../features/dashboardSlice"
  import tableSlice from "../features/table/tableSlice"
  import authSlice from "../features/authSlice"
  import personalInfoCardSlice from "../features/personalInfoCardSlice"
  import formAnswerSlice from "../features/formAnswerSlice"
  import commentsCardSlice from "../features/CommentsCardSlice"

  export const store = configureStore({
    reducer: {
      nav: navSlice,
      dashboard: dashboardSlice,
      table:tableSlice,
      auth:authSlice,
      personalInfoCard: personalInfoCardSlice,
      formAnswerCard:  formAnswerSlice,
      commentsCard: commentsCardSlice
      
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
