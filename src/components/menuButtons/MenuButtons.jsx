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
    <List component="nav" aria-label="mailbox folders" sx={{width:'300px'}}>
      <ListItem button>
        <ListItemText primary="FACE COVERS" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="MEN" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="WOMEN" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="KIDS" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="SPORTS" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="BRANDS" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="COLLECTIONS" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="WINTER SHOP" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="OUTLET" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Order tracker" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="My Profile" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Store Finder" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Help & Customer service" />
      </ListItem>

      <Divider light />
      <ListItem button>
        <ListItemText primary="INDIA" />
      </ListItem>
    </List>
  )
}
