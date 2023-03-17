import { Typography, TextField, Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/ContextProvider";
import { doc, setDoc, deleteDoc} from "firebase/firestore";
import { db } from "../firebase-config";
import DeleteIcon from '@mui/icons-material/Delete';


export const Note = (props) => {
  const { initialNotes, setInitialNotes, getNotesList } = useContext(UserContext);
  const [newNote, setNote] = useState(initialNotes.para);
  const { id } = useParams();
  let ind = 0;
  let heading = "";
  let para = "";
  for (let i = 0; i < initialNotes.length; i++) {
    if (initialNotes[i].id === id) {
      ind = i;
      heading = initialNotes[i].heading;
      para = initialNotes[i].para;
      break;
    }
  }

  const docRef = doc(db, "Notes", id);
  function handleNote(e) {
    setNote(e.target.value);
    const tempNotes = [...initialNotes];
    tempNotes[ind].para = e.target.value;

    setInitialNotes(tempNotes);
    setDoc(docRef, { para: e.target.value }, { merge: true });
    // console.log(docRef)
  }
  const navigate = useNavigate();
  const del = async (e) =>{
    try{
      await deleteDoc(doc(db, "Notes", id)); 
      navigate('/client/home')
      getNotesList()
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Box
      sx={{
        width: "100%",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container sx={{display:'flex', justifyContent:'space-between', alignItems:'center '}}>
        <Typography variant="h4" sx={{ paddingBottom: "20px" }}>
          {" "}
          {heading}{" "}
        </Typography>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={del}>
          Delete
        </Button>
      </Container>

      <TextField
        sx={{ width: "100%" }}
        multiline="true"
        minRows="24"
        id={newNote}
        label="text"
        value={para}
        onChange={(e) => handleNote(e)}
      />
    </Box>
  );
};
