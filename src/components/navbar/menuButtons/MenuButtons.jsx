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
  
  // const StyleToolbar = styled(List)(({ theme }) => ({
  //   // width: 19%;
  //  //  height: '64px',
  //   display: 'none',
  //   [theme.breakpoints.down("md")]: {
  //     display: "block",
  //     // right: "70px",
  //     // left:'70px',
  //   },
  //  //  fontFamily: "Dancing Script",
  //  //  color:"white"
  //  //  zIndex:1,
  //   // position:sticky;
   
  //    // zIndex: "0",
  //  }));
 
export default function MenuButtons(props) {
  return (
    <List component="nav" aria-label="mailbox folders" sx={{margin:'10px',width:'30%'}}>
      <ListItem button>
        <ListItemText primary="Product" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Company" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Support" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Resources" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Login" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Signup" />
      </ListItem>
    </List>
   
  )
}
