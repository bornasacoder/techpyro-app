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
import { ArrowDropDown, House } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MenuButtons() {
  return (
    <List component="nav" aria-label="mailbox folders" sx={{width:'300px',background:'black',height:'100%',}}>
      <Box >
        <img src='https://dpsazaadnagar.com/wp-content/uploads/elementor/thumbs/AZ-1-2-pns6qem6a003erqhh8uy99qnxo34eiszhk9usm8kjk.png' style={{width:'250px'}}/>
      </Box>
      <Box >
        <Link to='/'>
        <House sx={{color:'white',fontSize:'30px',margin:'20px'}}/>
        </Link>
      </Box>
      <Link to='/About Us' style={{textDecorationLine:'none'}}>
      <ListItem button>
        <ListItemText primary="About Us" sx={{color:'white',fontSize:'35px'}}/>
        <ArrowDropDown sx={{color:'white'}}/>
      </ListItem>
      </Link>
      <Divider light sx={{color:'white'}}/>

      <Link to='/Admission Form' style={{textDecorationLine:'none'}}>
      <ListItem button >
        <ListItemText primary="Admissions" sx={{color:'white',fontSize:'25px'}}/>
        <ArrowDropDown sx={{color:'white'}}/>
      </ListItem>
      </Link>

      <Divider />
      <ListItem button>
        <ListItemText primary="Academics" sx={{color:'white',fontSize:'25px'}}/>
        <ArrowDropDown sx={{color:'white'}}/>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Beyond Academics" sx={{color:'white',fontSize:'25px'}}/>
        <ArrowDropDown sx={{color:'white'}}/>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Results" sx={{color:'white',fontSize:'25px'}}/>
        <ArrowDropDown sx={{color:'white'}}/>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Media" sx={{color:'white',fontSize:'25px'}}/>
        <ArrowDropDown sx={{color:'white'}}/>
      </ListItem>
      <Divider />
      <Link to='/Contact Us' style={{textDecorationLine:'none'}}>
      <ListItem button>
        <ListItemText primary="Contact Us" sx={{color:'white',fontSize:'25px'}}/>
      </ListItem>
      </Link>
    </List>
  )
}
