import { Typography, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/ContextProvider'

export const Note = (props) => {
    const { 
      initialNotes,
      setInitialNotes,
      newNote,
      setNote,
      heading,
      setHeading  } = useContext(UserContext)
    const { id } = useParams()
    let ind = 0;
    for(let i = 0; i < initialNotes.length; i++){
      if(initialNotes[i].id === id){
        ind = i;
        // setNote(initialNotes[i].para);
        break;
      }
    }
    console.log(ind)
  return (
    <Box>
        <Typography variant='h4'> {initialNotes[ind].heading} </Typography>
        <Typography variant='h5'> {initialNotes[ind].para} </Typography>
        <TextField
          sx={{width:'1200px'}}
          // multiline="true"
          rows='300'
          id={heading}
          label='text'
          value={newNote}
          onChange={(e) => (setNote(e.target.value))}
        />
    </Box>
  )
}
