  import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
  import navSlice from "../features/navSlice"
  import dashboardSlice from "../features/dashboardSlice"
  import tableSlice from "../features/table/tableSlice"
  import authSlice from "../features/authSlice"


  export const store = configureStore({
    reducer: {
      nav: navSlice,
      dashboard: dashboardSlice,
      table:tableSlice,
      auth:authSlice
      
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
