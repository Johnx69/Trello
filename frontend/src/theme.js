import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, deepOrange, orange, teal } from "@mui/material/colors";

// Create a theme instance.
const theme = extendTheme({
    trelloCustom: {
        appBarHeight: "58px",
        boardBarHeight: "58px",
    },
    colorSchemes: {
        light: {
            palette: {
                primary: teal,
                secondary: deepOrange,
            },
        },
        dark: {
            palette: {
                primary: cyan,
                secondary: orange,
            },
        },
    },
    components: {
        // Name of the component
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "*::-webkit-scrollbar": {
                        with: "8px",
                        height: "8px",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: "0.875rem",
                }),
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => {
                    return {
                        color: theme.palette.primary.main,
                        fontSize: "0.875rem",
                        ".MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.primary.light,
                        },
                        "&:hover": {
                            ".MuiOutlinedInput-notchedOutline": {
                                borderColor: theme.palette.primary.main,
                            },
                        },
                        "& fieldset": {
                            borderWidth: "1px !important",
                        },
                    };
                },
            },
        },
    },
    // ...other properties
});

export default theme;
