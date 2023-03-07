import { Box } from "@mui/system";
import { AuthProvider } from "./context/AuthContext";
import { ContextProvider } from "./context/ContextProvider";
import { Routing } from "./Routing/Routing";

function App() {
  return (
    <AuthProvider>
      <ContextProvider>
        <Box>
          <Routing /> 
        </Box>
      </ContextProvider>
    </AuthProvider>
  );
}

export default App;
