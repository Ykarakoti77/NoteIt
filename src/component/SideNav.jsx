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
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const SideNav = () => {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
  const drawerWidth = 300;
  const [open, setOpen] = useState(true);
  const [dopen, setDOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const { filteredInitialNotes, setFilteredInitialNotes, mode, setMode } =
    useContext(UserContext);
  const style = { textDecoration: "none" };
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
  const handleMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };
  return (
    <Box>
      <IconButton
        onClick={handleDrawerOpen}
        sx={{ ...(dopen && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        PaperProps={{
          sx: { bgcolor: "background.primary" },
        }}
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Settings />
            <Button onClick={handleMode}>
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </Button>

            <IconButton
              onClick={handleDrawerClose}
              sx={{ mr: 2, ...(!isSmallScreen && { display: "none" }) }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h4"
            align="center"
            padding={1}
            sx={{ mb: "0.25em", color: "text.primary" }}
          >
            NoteIt
          </Typography>
          <SearchBar />
        </Box>

        <List>
          <Link to={"/client/Home"} style={style}>
            <ListItemButton divider onClick={handleDrawerClose}>
              <ListItemText
                sx={{ color: "text.primary" }}
                primary="Home"
              ></ListItemText>
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
                      sx={{ pl: 1, pr: 0 }}
                    >
                      {/* <ListItemText primary={GoodNote.heading} /> */}
                      <Typography
                        variant="p"
                        style={style}
                        sx={{ color: "text.primary" }}
                      >
                        {GoodNote.heading}
                      </Typography>
                    </ListItemButton>
                    <Button
                      variant="text"
                      color="primary"
                      sx={{ p: "1px" }}
                      onClick={() => toggleFav(GoodNote.id, GoodNote.fav)}
                    >
                      {GoodNote.fav ? star : notstar}
                    </Button>
                  </Container>
                </Link>
              ))}
            </List>
          </Collapse>
        </List>
        <Container
          sx={{
            position: "sticky",
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            pb: "0.5em",
            ml: "auto",
          }}
        >
          <CreateNoteDialog />
        </Container>
      </Drawer>
    </Box>
  );
};
