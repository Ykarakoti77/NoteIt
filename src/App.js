import { Box } from '@mui/system';
import { SideNav } from './component/SideNav';
// import { Home } from './component/Home';
import { ContextProvider } from './context/ContextProvider';
import { Routing } from './Routing/Routing';

function App() {
  return (
    <ContextProvider>
    <Box sx={{display: 'flex'}}>
      <SideNav />
      <Routing />  

    </Box>
    </ContextProvider>
  );
}

export default App;
