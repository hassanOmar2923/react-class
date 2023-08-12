import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import SideBar from './sideBar'
import {Outlet, useNavigate} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { contextExporter } from '../../context/AuthContext';
export default function Index() {
  
    let curr=JSON.parse(localStorage.getItem('currentUser'))
  const {logOut}=contextExporter()
    const [openDrawer, setopenDrawer] = useState(false);
    const Toggle=()=>{
      setopenDrawer(!openDrawer)
    }
  return (
    <Stack direction={"row"} spacing={2}>
        <Box sx={{width:300,display:{
            xs:'none',  
            sm:'none', 
            md:'flex', 
            xl:'flex' 

        },height:'100vh'}}><SideBar openDrawer={openDrawer} Toggle={Toggle}/></Box>
        <Box  sx={{width:'100%',margin:'20px'}}>
            <Box sx={{display:'flex',justifyContent:{
                xs:'space-between',
                sm:'space-between',
                md:'end',
                lg:'end'
            },alignItems:'center'}}>
                <IconButton onClick={()=>setopenDrawer(true)} sx={{display:{
                    xs:'block',
                    sm:'block',
                    md:'none',
                    lg:'none'

                }}}>
                    <MenuIcon/></IconButton>
                    <Stack direction={'row'}>
                {curr?.username}
                        <IconButton onClick={logOut}><LogoutIcon/></IconButton>

                    </Stack>
            </Box>
            <Outlet />
            </Box>
    </Stack>
  )
}
