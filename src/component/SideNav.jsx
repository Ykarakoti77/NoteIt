import React, { useContext, useState } from "react";
import { SearchBar } from "./SearchBar";
import {
  Button,
  Collapse,
  Container,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { ExpandLess, ExpandMore, Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserContext } from "../context/ContextProvider";
import { Box } from "@mui/system";
import { CreateNoteDialog } from "./CreateNoteDialog";
import { Settings } from "./Settings";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const SideNav = () => {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
  const drawerWidth = 350;
  const [open, setOpen] = useState(true);
  const [dopen, setDOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const { filteredInitialNotes, setFilteredInitialNotes } =
    useContext(UserContext);
  const style = { textDecoration: "none", color: "black" };
  const star = <StarIcon fontSize="small" />;
  const notstar = <StarBorderIcon fontSize="small" />;
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

  const handleDrawerOpen = () => {
    setDOpen(true);
  };

  const handleDrawerClose = () => {
    setDOpen(false);
  };

  return (
    <Box sx={{backgroundColor:'white'}}>
      <IconButton
        onClick={handleDrawerOpen}
        sx={{ ...(dopen && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={isSmallScreen ? "temporary" : "permanent"}
        anchor="left"
        open={dopen}
      >
        <Box
          sx={{
            bgcolor: "inherit",
            // position: "sticky",
            // top: "0",
            // zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display:'flex',
              justifyContent:'space-between',
              width:'100%'
            }}
          >
            <Settings />
            <IconButton
              onClick={handleDrawerClose}
              sx={{ mr: 2, ...(!isSmallScreen && { display: "none" }) }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <Typography variant="h3" align="center" padding={2}>
            NoteIt
          </Typography>
          <SearchBar />
        </Box>

        <List>
          <Link to={"/client/Home"} style={style}>
            <ListItemButton divider onClick={handleDrawerClose}>
              <ListItemText primary="Home"></ListItemText>
            </ListItemButton>
          </Link>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Notes" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
              {filteredInitialNotes.map((GoodNote, index) => (
                <Link
                  to={`/client/Notes/${GoodNote.id}`}
                  style={style}
                  key={index}
                >
                  <Container sx={{ display: "flex" }}>
                    <ListItemButton
                      onClick={handleDrawerClose}
                      divider
                      sx={{ pl: 0, pr: 0, pt: "3px", pb: "3px" }}
                    >
                      <ListItemText primary={GoodNote.heading} />
                      <Button
                        variant="text"
                        color="primary"
                        sx={{ p: "2px" }}
                        onClick={() => toggleFav(GoodNote.id, GoodNote.fav)}
                      >
                        {GoodNote.fav ? star : notstar}
                      </Button>
                    </ListItemButton>
                  </Container>
                </Link>
              ))}
            </List>
          </Collapse>
        </List>
        <hr />
        <Container
          sx={{
            position: "sticky",
            bottom: 0,
            bgcolor: "primary",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "10px",
            ml: "auto",
          }}
        >
          <Button>
          <CreateNoteDialog />
          </Button>
        </Container>
      </Drawer>
    </Box>
  );
};
