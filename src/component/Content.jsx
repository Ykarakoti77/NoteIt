import React from "react";

import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import NoteTaking from '../Images/takingnotes.jpg'
import { useNavigate } from "react-router-dom";

export const Content = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signUp')
    }

  return (
    <>
    <Box sx={{display:'flex', justifyContent:'space-between', padding:'80px', mt:'3rem'}}>

      <Box sx={{paddingLeft:'3rem'}}>
        <Typography variant="h2" color="initial" sx={{ paddingBottom: "20px" }}>
          All your notes
        </Typography>
        <Typography variant="h3" color="initial" sx={{ paddingBottom: "20px" }}>
          Organised.
        </Typography>
        <Typography variant="h3" color="initial" sx={{ paddingBottom: "20px" }}>
          Effortless.
        </Typography>

        <Box sx={{paddingTop:'30px'}}>
          <Typography variant="h6" color="initial" sx={{fontWeight:'5px'}}>
            Never forget an idea again
          </Typography>
          <Typography variant="h6" color="initial">
            Capture your thoughts, anytime, anywhere
          </Typography>

          <Button variant="outlined" color="success" size='large' sx={{marginTop:'25px', fontSize:'1.5rem'}} onClick={handleClick}>
            Sign Up            
          </Button>
        </Box>
      </Box>
      <Box>
        <img src={NoteTaking} alt="" width='500px'/>
      </Box>
    </Box>
    </>
  );
};
