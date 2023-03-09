import React from "react";

import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import NoteTaking from '../Images/takingnotes.jpg'
import Notes2 from '../Images/notes2.jpg'

export const Content = () => {
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'space-between', padding:'80px'}}>

      <Box sx={{paddingLeft:'40px'}}>
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

          <Button variant="outlined" color="success" size='large' sx={{marginTop:'25px', fontSize:'1.5rem'}}>
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
