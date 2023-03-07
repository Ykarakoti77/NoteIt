import { Typography, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/ContextProvider'

export const Note = (props) => {
    const { 
      initialNotes,
      setInitialNotes,
      heading,
      setHeading  } = useContext(UserContext)

    const [newNote, setNote] = useState(initialNotes.para);
    const { id } = useParams()
    let ind = 0;
    for(let i = 0; i < initialNotes.length; i++){
      if(initialNotes[i].id === id){
        ind = i;
        break;
      }
    }
   function handleNote(e){  
    setNote(e.target.value)
    const tempNotes = [...initialNotes]
    tempNotes[ind].para = e.target.value
    console.log(initialNotes[ind])
    setInitialNotes(tempNotes);
   }  
  return (
    <Box sx={{width:'100%', padding:'40px', display:'flex', flexDirection:'column'}}>
        <Typography variant='h4' sx={{paddingBottom:'20px'}}> {initialNotes[ind].heading} </Typography>
        {/* <Typography variant='h5'> {initialNotes[ind].para} </Typography> */}
        <TextField
          sx={{width:'100%'}}
          multiline="true"
          minRows='22'
          id={newNote}
          label='text'
          value={initialNotes[ind].para}
          onChange={(e) => (handleNote(e))}
        />
    </Box>
  )
}
