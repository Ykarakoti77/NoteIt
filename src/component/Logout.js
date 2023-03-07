import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Logout = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext)

    const handleLogOut = async () => {
        setError('')
        try{
            await logout()
            navigate('/signIn')
            console.log('still works')
        }
        catch(e){
            console.log(e)
        }
    }
    
  return <Button variant="contained" onClick={handleLogOut}>Logout</Button>;
};
