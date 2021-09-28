import { ThemeProvider, CssBaseline } from "@mui/material/"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./i18n"
import theme from "./theme"
import "./index.css"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
