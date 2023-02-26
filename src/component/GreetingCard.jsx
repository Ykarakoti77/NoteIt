import React from "react";
import CardMedia from "@mui/material/CardMedia";
import backgroundImg from "../Images/backgroundImg.jpg";
import { Box, Card, Typography } from "@mui/material";
import { Container } from "@mui/system";

export const GreetingCard = () => {
  return (
    // <Box sx={{ flexDirection: "column" }}>
    <Box sx={{ width: "100%"}}>
      <Card sx={{ width: "100%", position: "relative" }}>
        <CardMedia sx={{ height: 250 }} image={backgroundImg} />
        <Container
          sx={{
            position: "absolute",
            color: "white",
            top: "40%",
            left: "3%",
          }}
        >
          <Typography variant="h4">Good Morning, Yash.</Typography>
          <Typography variant="subtitle">Sunday, 26 Febrauary</Typography>
        </Container>
      </Card>
    </Box>
  );
};
