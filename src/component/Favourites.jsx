import React, { useContext } from "react";
import { UserContext } from "../context/ContextProvider";
import {
  Button,
  Container,
  List,
  ListItemButton,
  ListItemText,
  Paper,
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
    <>
      {/* <Paper style={{ maxHeight: '250px', overflow: "auto" }}> */}
        <List style={{height: '250px', p:'10px', overflow: 'auto'}}>
          {favourite.map((GoodNote, index) => (
            <Container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Link
                to={`/client/Notes/${GoodNote.id}`}
                style={style}
                key={index}
              >
                <Container sx={{ display: "flex" }}>
                  <ListItemButton
                    divider
                    sx={{ pl: 0, pr: 0, pt: "3px", pb: "3px" }}
                  >
                    <ListItemText primary={GoodNote.heading} />
                  </ListItemButton>
                </Container>
              </Link>
              <Button
                variant="text"
                color="primary"
                sx={{ p: "2px" }}
                onClick={() => toggleFav(GoodNote.id, GoodNote.fav)}
              >
                {GoodNote.fav ? star : notstar}
              </Button>
            </Container>
          ))}
        </List>
      {/* </Paper> */}
    </>
  );
};