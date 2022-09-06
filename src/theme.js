import { createTheme } from "@mui/material";

export const customTheme = () => {
    return createTheme({
        components: {
            MuiToolbar: {
                styleOverrides: {
                    dense: {
                        height: 50,
                        minHeight: 50
                    }
                }
            }
        },    
        typography: {
           },        
        palette: {
          primary: {
            main: "#031831",
            light: '#031831'
          },
          secondary: {
            main: "#2764ff",
            light: '#2764ff'
          },
        },
      });
}

