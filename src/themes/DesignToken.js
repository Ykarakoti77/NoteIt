import { amber, deepOrange, grey } from "@mui/material/colors";
import React from "react";
import "@fontsource/roboto/400.css";

export const DesignToken = (mode) => {
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#34626C",
            },
            background: {
              primary: "#ffffff",
              secondary: "#ffffff",
              hover: "#F2F2F2",
            },
            text: {
              primary: "#062C30",
            },
          }
        : {
            // palette values for dark mode
            background: {
              primary: "#1d1d1d",
              secondary: "#1e1e1e",
              hover: "#353535",
            },
            text: {
              primary: "#d4d4d4",
            },
          }),
    },
  };
};
