import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
        <Box >

        <Typography variant='h6' > 
            Sample Dashboard
        </Typography></Box>

    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
        <Link to={'home'} sx={{textDecoration:'none'}}>
        <ListItemButton >
        <ListItemIcon>
          <EqualizerIcon sx={{fontWeight:'bold'}} />
        </ListItemIcon>
        <ListItemText  >
            <Typography sx={{fontWeight:'bold',color:'black',textDecoration:'none'}}>
                Home
            </Typography>
        </ListItemText>
      </ListItemButton>
        </Link>
        <Link to={'about'} sx={{fontWeight:'bold',color:'black',textDecoration:'none'}}>
        <ListItemButton >
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText  >
            <Typography >
                About
            </Typography>
        </ListItemText>
      </ListItemButton>
        </Link>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    </Box>
  );
}
