import { Box } from "@mui/system";
import { Routing } from "./Routing/Routing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { DesignToken } from "./themes/DesignToken";
import { useContext } from "react";
import { UserContext } from "./context/ContextProvider";

function App() {
  const { mode } = useContext(UserContext);
  const theme = createTheme(DesignToken(mode));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Routing />
      </Box>
    </ThemeProvider>
  );
}

export default App;
