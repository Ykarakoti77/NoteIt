import { Box } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideNav } from './SideNav'

export const Client = () => {
  return (
    <Box sx={{ display: "flex" }}>
        <SideNav />
        <Outlet />
    </Box>
  )
}

// new pull request