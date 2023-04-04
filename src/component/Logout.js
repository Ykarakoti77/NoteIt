import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/ContextProvider";

export const Logout = () => {
  const [setError] = useState("");
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const { setInitialNotes, setMode } = useContext(UserContext);
  const handleLogOut = async () => {
    setError("");
    try {
      await logout();
      setMode("light");
      navigate("/");
      setInitialNotes([]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button variant="contained" onClick={handleLogOut}>
      Logout
    </Button>
  );
};
