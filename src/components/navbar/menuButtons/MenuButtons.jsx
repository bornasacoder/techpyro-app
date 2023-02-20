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
import { useNavigate } from 'react-router-dom';
 
export default function MenuButtons(props) {
  const navigate = useNavigate();
  const handleBlog= ()=>{
    navigate("/blog")
  }
  const handleEvent = ()=>{
    navigate("/event")
  }
  const handleContact = ()=>{
    navigate("/contact")
  }
  return (
    <List component="nav" aria-label="mailbox folders" sx={{margin:'10px',width:'80vw',}}>
      <Box sx={{display:"flex",justifyContent:"center"}}>
        <Typography variant='h2'>EDUMA</Typography>
      </Box>
      <ListItem button>
        <ListItemText primary="DEMOS" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="COURESES" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="PAGES" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="EVENTES" onClick={handleEvent} />
      </ListItem>
      <ListItem button>
        <ListItemText primary="BLOGS"  onClick={handleBlog}/>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="SHOP" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="CONTACTS" onClick={handleContact} />
      </ListItem>
    </List>
   
  )
}
