import React, { useContext, useState } from "react";
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserContext } from "../context/ContextProvider";

export const SideNav = () => {
  const drawerWidth = 280;

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { initialNotes } = useContext(UserContext);
  console.log(initialNotes);

  const style={textDecoration:'none', color:'black'}
  
  return (
    <>
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
        <Typography variant="h3" align="center" padding={4}>
          NoteIt
        </Typography>

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
            marginBottom: "20px",
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
          <Link to={'./Home'} style={style}>
            <ListItemButton>
            <ListItemText primary="Home"></ListItemText>
            </ListItemButton>
          </Link>
          <Link to={'./Home'} style={style}>
            <ListItemButton>
            <ListItemText primary="Notification"></ListItemText>
            </ListItemButton>
          </Link>

          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Notes" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>

            {initialNotes.map((GoodNote) => (
              
                  <Link to={`/Notes/${GoodNote.id}`} style={style}>
                <ListItemButton sx={{ pl: 4}}>
                    <ListItemText primary={GoodNote.heading} />
                </ListItemButton>
                  </Link>
              
            ))}

          </Collapse>

          {["Tips", "Trash"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};
