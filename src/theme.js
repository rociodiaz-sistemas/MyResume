import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '1rem',
    //     },
    //   },
    // },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#e9c309"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "9px",
          backgroundColor: "#ccc7d5",
          fontWeight: "600",
          fontSize: "15px",
          fontFamily: "Consolas",
          marginBottom: "15px",
        }
      }
    },
    MuiMobileStepper: {
      styleOverrides: {
        dotActive: {
          backgroundColor: "#e9c309"
        },
        dot: {
          backgroundColor: "#757575",
        },
        root: {
          paddingLeft: "48%",
          backgroundColor: "transparent"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',
          color: "",
          borderRadius: "9px",
          letterSpacing: ".08em",
          ":hover": {
            backgroundColor: "#262121"
          }
        }
      }
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          WebkitJustifyContent: "unset"
        }
      }
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "black",
          ":hover": {
            color: "#bc7fb8"
          }
        },
      }
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',
          color: "",
          borderRadius: "9px",
          letterSpacing: ".08em",
          borderColor: "transparent",
          height: "unset",
          minWidth: "100px",
          ":hover": {
            backgroundColor: "#262121",
          }
        }
      }
    }
  },
});