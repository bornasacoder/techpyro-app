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
  } from "@mui/material";

export default function MenuButtons() {
  return (
    
    <List component="nav" aria-label="mailbox folders" sx={{margin:'10px',padding:'20px',width:'19%'}}>
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
        <ListItemText primary="Log in" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Sign up" />
      </ListItem>
    </List>
  )
}
