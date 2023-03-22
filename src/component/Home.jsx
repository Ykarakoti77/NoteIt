import { Box } from "@mui/system";
import React from "react";
import { GreetingCard } from "./GreetingCard";
import { HomeContent } from "./HomeContent";
import { QuickTips } from "./QuickTips";
import backgroundImg from "../Images/backgroundImg.jpg";
import { Favourites } from "./Favourites";

export const Home = () => {

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize:'100% 40%',
        backgroundRepeat:'no-repeat',
        width: "100%",
        height: "100%",
        display:'flex',
        flexDirection: "column",
        justifyContent:'space-between',
        gap:'1rem',
        pl:'2rem',
        pr:'2rem',
      }}
    >
      <GreetingCard />
      <QuickTips />
      <Favourites />
      {/* <HomeContent /> */}
    </Box>
  ) ;
};
