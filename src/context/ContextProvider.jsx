import React, { createContext} from 'react'

export const UserContext = createContext(null);

const initialNotes = [
  {
    id:'OrganicChemistry',
    heading: 'Organic Chemistry',
    para:'These are the initial notes of organic Chemistry'
  },
  {
    id:'DSA',
    heading:'DSA',
    para:'New notes of DSA'
  },
  {
    id:'RouterSetting',
    heading: 'Router Setting',
    para:'Finally context api working'
  },
  {
    id:'React',
    heading: 'React Notes',
    para:'Good work'
  }
]

export const ContextProvider = ({children}) => {
  const value = {
    initialNotes
  }
  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  )
}
