import { Box } from "@mui/system";
import React from "react";
import { GreetingCard } from "./GreetingCard";
import { HomeContent } from "./HomeContent";
import { QuickTips } from "./QuickTips";

export const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: "100vh",
        bgcolor:'#EEE9DA',
        display:'flex',
        flexDirection:'vertical',
        justifyContent:'center',
      }}
    >
      <GreetingCard />
      <QuickTips />
      <HomeContent />
    </Box>
  ) ;
};
