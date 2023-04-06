import React, { useContext, useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import backgroundImg from "../Images/backgroundImg.jpg";
import { Box, Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { AuthContext } from "../context/AuthContext";

export const GreetingCard = () => {
  var today = new Date();
  var curHr = today.getHours();
  const { currentUser } = useContext(AuthContext);
  const [greeting, setGreeting] = useState();
  const [date, setDate] = useState();
  useEffect(() => {
    if (curHr < 12) {
      setGreeting("Good Morning, ");
    } else if (curHr < 18) {
      setGreeting("Good Afternoon, ");
    } else {
      setGreeting("Good Evening, ");
    }
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();

    const dayOfWeek = weekdays[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const monthName = months[currentDate.getMonth()];

    const formattedDate = dayOfWeek + ", " + dayOfMonth + " " + monthName;
    setDate(formattedDate);
  }, []);
  // console.log(currentUser?.displayName);
  return (
    <Box sx={{ color: "white", pl: "3rem", pt: "7rem", pb: "2rem" }}>
      <Typography variant="h4">
        {" "}
        {greeting} {currentUser?.displayName}{" "}
      </Typography>
      <Typography variant="subtitle">{date}</Typography>
    </Box>
  );
};
