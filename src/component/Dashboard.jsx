import React from 'react'
import { Navbar } from './Navbar'
import { Content } from './Content'
import { Box } from '@mui/material'
export const Dashboard = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
    <Navbar />
    <Content />
    </Box>
  )
}
