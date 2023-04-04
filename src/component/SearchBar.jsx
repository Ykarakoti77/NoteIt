import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { UserContext } from "../context/ContextProvider";

export const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const { initialNotes, setFilteredInitialNotes } = useContext(UserContext);
  useEffect(() => {
    setFilteredInitialNotes(initialNotes);
    setInputText("");
  }, [initialNotes]);

  let inputHandler = (e) => {
    var curtext = e.target.value.toLowerCase();
    setInputText(curtext);
    console.log(curtext);
    const filteredData = initialNotes.filter((note) => {
      if (curtext === "") {
        return note;
      } else {
        return note.heading.toLowerCase().includes(curtext);
      }
    });
    setFilteredInitialNotes(filteredData);
  };
  return (
    <Paper
      component="form"
      sx={{
        border: "none",
        boxShadow: "1",
        display: "flex",
        alignItems: "center",
        width: 240,
        alignSelf: "center",
        marginBottom: "10px",
        bgcolor: "background.hover",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Notes"
        value={inputText}
        inputProps={{ "aria-label": "Search Notes" }}
        onChange={inputHandler}
      />
      <IconButton type="button" sx={{ p: "0.25" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
