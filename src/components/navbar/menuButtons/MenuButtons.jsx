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
 
export default function MenuButtons(props) {
  return (
    <List component="nav" aria-label="mailbox folders" sx={{margin:'10px',width:'80%',}}>
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
