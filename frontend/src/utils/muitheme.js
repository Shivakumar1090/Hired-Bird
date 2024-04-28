import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
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
    label: {
      gutterBottom: true,
      fontWeight: 500,
      fontFamily: 'Outfit',
      color: '#1c294c',
    }
  },
  Button: {
    textDecoration: 'capitalize'
  }
});

export default theme;