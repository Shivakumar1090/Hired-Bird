import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1C294C",
    },
    secondary: {
      main: "#6ED09B",
    },
    lightblue: {
      main: "#E9F7FE",
    },
    green: {
        main: '#01CB98'
    }
  },
  typography: {
    fontFamily: "Outfit",
    allVariants: {
      color: "#1C294C",
    },
  },
});

export default theme;