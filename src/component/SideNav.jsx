import React, { useContext, useState } from "react";

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
import SearchIcon from "@mui/icons-material/Search";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserContext } from "../context/ContextProvider";
import { Box } from "@mui/system";
import { CreateNoteDialog } from "./CreateNoteDialog";
import { Logout } from "./Logout";
import { AuthContext } from "../context/AuthContext";
export const SideNav = () => {
  
  const drawerWidth = 280;
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const { currentUser } = useContext(AuthContext)
  const { initialNotes } = useContext(UserContext);
  const email = currentUser?.email  

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
        {email}
        <Box
          sx={{ bgcolor: "inherit", position: "sticky", top: "0", zIndex: 3 }}
        >
          <Typography variant="h3" align="center" padding={2}>
            NoteIt
          </Typography>
        </Box>

        <Paper
          component="form"
          sx={{
            border: "none",
            boxShadow: "1",
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 220,
            alignSelf: "center",
            marginBottom: "10px",
            bgcolor: "#F5F5F5",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Notes"
            inputProps={{ "aria-label": "Search Notes" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
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
            {initialNotes.map((GoodNote) => (
              <Link to={`/client/Notes/${GoodNote.id}`} style={style}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={GoodNote.heading} />
                </ListItemButton>
              </Link>
            ))}
          </Collapse>
        </List>

        
        <Container sx={{ position: "sticky", bottom: 0, bgcolor: "inherit", display:'flex', justifyContent:'space-between', padding:'10px'}}>
          <Logout />
          <CreateNoteDialog />
        </Container>
      </Drawer>
    </Box>
  );
};
