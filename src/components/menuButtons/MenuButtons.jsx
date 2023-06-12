import React from 'react'
import {
    Divider,
    List,
    ListItem,
    ListItemText,
  } from "@mui/material";
  

export default function MenuButtons() {
  return (
    <List component="nav" aria-label="mailbox folders" width="60%">
      <ListItem button>
        <ListItemText primary="Sign-In/Sign-Up" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="TV&AV" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Home Appliances" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Laptop & Monitors" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Display" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Accessories" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Smart Things" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Others" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Supports" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="For Business" />
      </ListItem>
      {/* <ListItem button>
        <ListItemText primary="Store Finder" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Help & Customer service" />
      </ListItem> */}

      <Divider light />
      <ListItem button>
        <ListItemText primary="Others" />
      </ListItem>
      <ListItem >
       <ListItemText>Product Registration</ListItemText>
      </ListItem>
      <ListItem >
       <ListItemText> Service Center</ListItemText>
      </ListItem>
    </List>
  )
}
