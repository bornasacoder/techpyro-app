import React from 'react'
import {
    styled,
    Badge,
    Button,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    Menu,
  } from "@mui/material";
  const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];
  
  const ITEM_HEIGHT = 48;
export default function MenuButtons() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
  <Box>
   
  <Menu
    id="long-menu"
    MenuListProps={{
      'aria-labelledby': 'long-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    PaperProps={{
      style: {
        maxHeight: ITEM_HEIGHT * 4.5,
        width: '20ch',
      },
    }}
  >
    {options.map((option) => (
      <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
        {option}
      </MenuItem>
    ))}
  </Menu>
  </Box>
  
    // <List component="nav" aria-label="mailbox folders" sx={{margin:'10px',width:'19%',}}>
    //   <ListItem button>
    //     <ListItemText primary="Product" />
    //   </ListItem>
    //   <Divider />
    //   <ListItem button>
    //     <ListItemText primary="Company" />
    //   </ListItem>
    //   <Divider />
    //   <ListItem button>
    //     <ListItemText primary="Support" />
    //   </ListItem>
    //   <Divider />
    //   <ListItem button divider>
    //     <ListItemText primary="Resources" />
    //   </ListItem>
    //   <ListItem button>
    //     <ListItemText primary="Log in" />
    //   </ListItem>
    //   <Divider light />
    //   <ListItem button>
    //     <ListItemText primary="Sign up" />
    //   </ListItem>
    // </List>
  )
}
