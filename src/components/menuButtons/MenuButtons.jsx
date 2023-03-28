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
    Accordion,
    AccordionSummary,
    AccordionDetails,
  } from "@mui/material";
import { Close, ExpandMore, Settings } from '@mui/icons-material';

export default function MenuButtons({setOpen}) {
  const handleClose = ()=>{
    setOpen(false)
  }
  return (
    <List component="nav" aria-label="mailbox folders" sx={{width:'300px',padding:'20px',height:'100%'}}>
      <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
        <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},justifyContent:'center'}} >
                   <img src='/images/category/logo (2).png' style={{width:'180px',height:'100px'}}/>
                   
                </Box>
        <Close sx={{color:'black'}} onClick={handleClose}/>
      </Box>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMore/>}>
        <Typography sx={{fontSize:'20px',fontWeight:'700'}}>About Us</Typography>
        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
      </Accordion>

      <Divider/>

      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMore/>}>
        <Typography sx={{fontSize:'20px',fontWeight:'700'}}>Contact Us</Typography>
        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
      </Accordion>

      <Divider/>

      <Accordion>
        <AccordionSummary
        >
        <Typography sx={{fontSize:'20px',fontWeight:'700'}}>Offers</Typography>
        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
      </Accordion>

      <Divider/>

      <Accordion>
        <AccordionSummary
        >
        <Typography sx={{fontSize:'20px',fontWeight:'700'}}>My Account</Typography>
        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
      </Accordion>

      <Divider/>

      <Accordion>
        <AccordionSummary
        >
        <Typography sx={{fontSize:'20px',fontWeight:'700',alignItems:'center',display:'flex',gap:'10px'}}> <Settings/> Setting</Typography>
        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
      </Accordion>

      <Divider/>
     
    </List>
  )
}
