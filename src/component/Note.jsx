import { Typography, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/ContextProvider'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export const Note = (props) => {
    const { 
      initialNotes,
      setInitialNotes
    } = useContext(UserContext)
    const [newNote, setNote] = useState(initialNotes.para);
    const { id } = useParams()
    let ind = 0;
    let heading = ""
    let para = ""
    for(let i = 0; i < initialNotes.length; i++){
      if(initialNotes[i].id === id){
        ind = i;
        heading = initialNotes[i].heading;
        para = initialNotes[i].para;
        break;
      }
    }
    
    
   function handleNote(e){  
    setNote(e.target.value)
    const tempNotes = [...initialNotes]
    tempNotes[ind].para = e.target.value

    setInitialNotes(tempNotes);
    const docRef = doc(db, "Notes", id);
    setDoc(docRef, { para: e.target.value }, { merge: true });
    // console.log(docRef)
   }  
  return (
    <Box sx={{width:'100%', padding:'40px', display:'flex', flexDirection:'column'}}>
        <Typography variant='h4' sx={{paddingBottom:'20px'}}> {heading} </Typography>
        {/* <Typography variant='h5'> {initialNotes[ind].para} </Typography> */}
        <TextField
          sx={{width:'100%'}}
          multiline="true"
          minRows='22'
          id={newNote}
          label='text'
          value={para}
          onChange={(e) => (handleNote(e))}
        />
    </Box>
  )
}
