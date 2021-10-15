import { amber } from "@mui/material/colors"
import { createTheme } from "@mui/material"

export default createTheme({
  palette: {
    primary: amber,
    grey : {
      A100: "#fcf5f5"
    },
    action : {
      disabled: "rgba(0,0,0,0.2)",
    }
  },
  typography: {
    fontFamily: ["Urbanist", "sans-serif"].join(",")
  },
  spacing: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]
})

