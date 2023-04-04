import React, { useContext, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Content } from "./Content";
import { Box } from "@mui/material";
import { UserContext } from "../context/ContextProvider";
export const Dashboard = () => {
  const { setMode } = useContext(UserContext);
  useEffect(() => {
    setMode("light");
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Content />
    </Box>
  );
};
