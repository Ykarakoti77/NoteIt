import React, { useState } from "react";
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

export const SideNav = () => {
  const drawerWidth = 260;

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
            border:'none',
            boxShadow:'1',
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 220,
            alignSelf:"center",
            marginBottom:"20px"
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
          {["Home", "Notification"].map((text, index) => (
            <ListItem key={text} disablePadding >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Notes" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Organic Chemistry" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Data Structure and algorithm" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="React Notes" />
              </ListItemButton>
            </List>
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
