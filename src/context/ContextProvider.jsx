import React, { createContext, useState} from 'react'

export const UserContext = createContext(null);

const notesData = [
  {
    id:'Organic Chemistry',
    heading: 'Organic Chemistry',
    para:'These are the initial notes of organic Chemistry'
  },
  {
    id:'DSA',
    heading:'DSA',
    para:'New notes of DSA'
  },
  {
    id:'Router Setting',
    heading: 'Router Setting',
    para:'Finally context api working'
  },
  {
    id:'React',
    heading: 'React Notes',
    para:'Good work'
  },
  {
    id:'React',
    heading: 'React Notes',
    para:'Good work'
  },
  {
    id:'React',
    heading: 'React Notes',
    para:'Good work'
  },
  {
    id:'React',
    heading: 'React Notes',
    para:'Good work'
  },
]

export const ContextProvider = ({children}) => {
  const [newNote, setNote] = useState("");
  const [heading, setHeading] = useState("");
  const [initialNotes, setInitialNotes] = useState(notesData);
  const value = {
    initialNotes,
    setInitialNotes,
    newNote,
    setNote,
    heading,
    setHeading   
  }

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  )
}
