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
import { Link } from 'react-router-dom';
import { Close } from '@mui/icons-material';

export default function MenuButtons() {
  return (
    <List component="nav" aria-label="mailbox folders" sx={{width:'300px',marginTop:'30px'}}>
      <Box  sx={{display:'flex',justifyContent:'right'}}>
      <Close sx={{fontSize:'30px',color:'red'}}/>
      </Box>

      <Link to='/' style={{textDecorationLine:'none'}}>
      <ListItem button>
       <Typography sx={{color:'black',fontSize:'20px',"&:hover":{color:'red'}}}>HOME</Typography>
      </ListItem>
      </Link>

       <Link to='/About' style={{textDecorationLine:'none'}}>
      <ListItem button >
      <Typography sx={{color:'black',fontSize:'20px',"&:hover":{color:'red'}}}>ABOUT </Typography>
      </ListItem>
      </Link>

      <Link to='/Packages' style={{textDecorationLine:'none'}}>
      <ListItem button>
      <Typography sx={{color:'black',fontSize:'20px',"&:hover":{color:'red'}}}>PACKAGES</Typography>
      </ListItem>
      </Link>

       <Link to='/Gallery' style={{textDecorationLine:'none'}}>
      <ListItem button>
      <Typography sx={{color:'black',fontSize:'20px',"&:hover":{color:'red'}}}>GALLERY</Typography>
      </ListItem>
      </Link>
       
       <Link to='/Pricing' style={{textDecorationLine:'none'}}>
      <ListItem button>
      <Typography sx={{color:'black',fontSize:'20px',"&:hover":{color:'red'}}}>PRICING</Typography>
      </ListItem>
      </Link>
      
      <Link to='/Contact' style={{textDecorationLine:'none'}}>
      <ListItem button>
      <Typography sx={{color:'black',fontSize:'20px',"&:hover":{color:'red'}}}>CONTACT</Typography>
      </ListItem>
      </Link>
    </List>
  )
}
