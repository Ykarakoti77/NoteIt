import { Box } from '@mui/system';
import { SideNav } from './component/SideNav';
// import { Home } from './component/Home';
import { OrganicChemistry } from './component/OrganicChemistry';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';

function App() {
  return (
    <>
    <Box sx={{display: 'flex'}}>
      <SideNav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/Notes' element={<OrganicChemistry />} />
      </Routes>
    </Box>
    </>
  );
}

export default App;
