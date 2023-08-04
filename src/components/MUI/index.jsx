import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import SideBar from './sideBar'
import Allroutes from './Allroutes'
import MenuIcon from '@mui/icons-material/Menu';
export default function Index() {
  return (
    <Stack direction={"row"} spacing={2}>
        <Box sx={{width:300,display:{
            xs:'none',  
            sm:'none', 
            md:'flex', 
            xl:'flex' 

        },height:'100vh'}}><SideBar/></Box>
        <Box  sx={{width:'100%',margin:'20px'}}>
            <Box sx={{display:'flex',justifyContent:{
                xs:'space-between',
                sm:'space-between',
                md:'end',
                lg:'end'
            },alignItems:'center'}}>
                <IconButton sx={{display:{
                    xs:'block',
                    sm:'block',
                    md:'none',
                    lg:'none'

                }}}><MenuIcon/></IconButton>
                hassanOmar@gmail.com
            </Box>
            <Allroutes/>
            </Box>
    </Stack>
  )
}
