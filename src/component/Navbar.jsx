import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import React from "react";
import Button from "@mui/material/Button";
import { AppBar } from "@mui/material";
import Logo from '../Images/notes.png'
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate()

    const handleSignUp = () => {
        navigate('/signUp')
    }
    const handleLogin = () => {
        navigate('/signIn')
    }

  return (
    <AppBar
      sx={{
        position:'sticky',
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding:'5px',
      }}
      color="transparent"
    >
    <Container sx={{display:'flex', alignItems:'center'}}>
      <img src={Logo} alt="Logo" height='50px'/>
      <Typography
        noWrap
        variant="h3"
        color="initial"
        sx={{
          display: { xs: "none", md: "flex" },
          fontWeight: 500,
          color: "inherit",
          margin :'5px',
          textDecoration: "none",
        }}
      >
        NoteIt
      </Typography>
      </Container>
      <Box sx={{display:'flex', flexDirection:'row'}}>
        <Button variant="text" color="success" sx={{margin:'10px'}} onClick={handleLogin}>
          Sign In
        </Button>
        <Button variant="outlined" color="success" sx={{margin:'10px'}} onClick={handleSignUp}>
          SignUp
        </Button>
      </Box>
    </AppBar>
  );
};
