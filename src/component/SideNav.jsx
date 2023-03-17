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

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserContext } from "../context/ContextProvider";
import { Box } from "@mui/system";
import { CreateNoteDialog } from "./CreateNoteDialog";
import { Logout } from "./Logout";
import { AuthContext } from "../context/AuthContext";
import { Settings } from "./Settings";
export const SideNav = () => {
  const drawerWidth = 280;
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const { initialNotes, filteredInitialNotes } = useContext(UserContext);
  const style = { textDecoration: "none", color: "black" };

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
         <Box
          sx={{ bgcolor: "inherit", position: "sticky", top: "0", zIndex: 3 }}
        >
        <Box sx={{
          ml:'auto'
        }}>
          <Settings />
        </Box>
       
          <Typography variant="h3" align="center" padding={2}>
            NoteIt
          </Typography>
        </Box>

        <SearchBar />
        <List>
          <Link to={"/client/Home"} style={style}>
            <ListItemButton>
              <ListItemText primary="Home"></ListItemText>
            </ListItemButton>
          </Link>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Notes" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {filteredInitialNotes.map((GoodNote, index) => (
              <Link
                to={`/client/Notes/${GoodNote.id}`}
                style={style}
                key={index}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={GoodNote.heading} />
                </ListItemButton>
              </Link>
            ))}
          </Collapse>
        </List>

        <Container
          sx={{
            position: "sticky",
            bottom: 0,
            bgcolor: "inherit",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            ml:'auto'
          }}
        >
        <CreateNoteDialog />
        </Container>
      </Drawer>
    </Box>
  );
};
