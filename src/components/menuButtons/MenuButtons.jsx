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
    <List component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="HOME" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="ORDER ONLINE" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="MENU" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="CONTACT" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="ABOUT" />
      </ListItem>
    </List>
  )
}
