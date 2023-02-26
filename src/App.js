import { Box } from '@mui/system';
import { SideNav } from './component/SideNav';
import { Home } from './component/Home';

function App() {
  return (
    <>
    <Box sx={{display: 'flex'}}>
      <SideNav />
      <Home />
    </Box>
    </>
  );
}

export default App;
