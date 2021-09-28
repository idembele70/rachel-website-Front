import { amber } from "@mui/material/colors"
import { createTheme } from "@mui/material"

export default createTheme({
  palette: {
    primary: amber
  },
  typography: {
    fontFamily: ["Urbanist", "sans-serif"].join(",")
  },
  spacing: [0, 5, 10, 15, 20, 25]
})
