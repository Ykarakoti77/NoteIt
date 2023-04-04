import React, { useContext } from "react";
import { UserContext } from "../context/ContextProvider";
import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export const Favourites = () => {
  const { filteredInitialNotes, setFilteredInitialNotes } =
    useContext(UserContext);
  const favourite = filteredInitialNotes.filter((GoodNote) => {
    return GoodNote.fav;
  });
  const toggleFav = (id, fv) => {
    const docRef = doc(db, "Notes", id);
    setDoc(docRef, { fav: !fv }, { merge: true });
    let ind = 0;
    for (let i = 0; i < filteredInitialNotes.length; i++) {
      if (filteredInitialNotes[i].id === id) {
        ind = i;
        break;
      }
    }
    const tempNotes = [...filteredInitialNotes];
    tempNotes[ind].fav = !fv;
    setFilteredInitialNotes(tempNotes);
    console.log(fv);
  };
  console.log("check");
  const style = { textDecoration: "none", color: "black" };
  const star = <StarIcon fontSize="small" />;
  const notstar = <StarBorderIcon fontSize="small" />;
  return (
    <Box
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        p: "1.3rem",
        backgroundColor: "background.primary",
      }}
    >
      <Typography variant="h5"> Favourites</Typography>
      <Divider />
      <List style={{ height: "250px", p: "10px", overflow: "auto" }}>
        {favourite.map((GoodNote, index) => (
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #D8D8D8",
            }}
          >
            <Link to={`/client/Notes/${GoodNote.id}`} style={style} key={index}>
              <Container sx={{ display: "flex" }}>
                <ListItemButton>
                  <ListItemText
                    primary={GoodNote.heading}
                    sx={{ color: "text.primary" }}
                  />
                </ListItemButton>
              </Container>
            </Link>
            <Button
              variant="text"
              sx={{ p: "2px" }}
              onClick={() => toggleFav(GoodNote.id, GoodNote.fav)}
            >
              {GoodNote.fav ? star : notstar}
            </Button>
          </Container>
        ))}
      </List>
      {/* </Paper> */}
    </Box>
  );
};
