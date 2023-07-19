import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./style/index.css"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import theme from "./style/theme"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider >
  </React.StrictMode>,
)
