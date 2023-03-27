import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { UserContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

export const QuickTips = () => {
  // const isSmallScreen = useMediaQuery("(max-width:1000px)");
  const style = { textDecoration: "none", color: "black" };

  const { initialNotes, setInitialNotes, getNotesList } =
    useContext(UserContext);

  return (
    <Container
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        backgroundColor: "white",
        padding: "0.5rem",
        mb:'2rem'
      }}
    >
      <Typography variant="h4" sx={{ p: "1rem" }}>
        All Notes
      </Typography>
      <Divider />
      <Grid container sx={{ p: "1rem" }}>
        {initialNotes.map((GoodNote, index) => (
          <Grid item xs={12} sm={3} md={3} key={index}>
            <Link to={`/client/Notes/${GoodNote.id}`} key={index} style={style}>
              <Paper
                sx={{
                  textAlign: "center",
                  m: "1rem",
                  p: "1rem",
                  boxShadow:
                    " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  ":hover": {
                    backgroundColor: "#F5EBEB", // theme.shadows[20]
                  },
                }}
              >
                <Typography variant="h5">{GoodNote.heading}</Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
