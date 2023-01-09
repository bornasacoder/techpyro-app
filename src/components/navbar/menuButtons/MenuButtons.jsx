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
    <List component="nav" aria-label="mailbox folders" sx={{margin:'10px',padding:'20px'}}>
      <ListItem button>
        <ListItemText primary=" Investor Relation" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Add Restaurant" />
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
