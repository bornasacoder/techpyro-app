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
    Avatar,
    Accordion,
    AccordionSummary,
    AccordionDetails,
  } from "@mui/material";
import { Close, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MenuButtons({setOpen}) {

  const handleClose = ()=>{
    setOpen(false);
}
  return (
    <Box sx={{width:'300px'}}>
      <Box sx={{background:'black',display:'flex',padding:'20px',justifyContent:'space-between'}}>
        <Box sx={{display:'flex',alignItems:'center',gap:'5px'}}>
          <Avatar sx={{color:'gray',background:'white'}}/>

          <Link to='/login'>
          <Typography sx={{color:'white'}}>LOG IN |</Typography>
          </Link>

          <Link to='/signup'>
          <Typography sx={{color:'white'}}> SIGN UP</Typography>
          </Link>
        </Box>
        <Box sx={{display:'flex',alignItems:'center'}}>
          <Close sx={{color:'white'}} onClick={handleClose}/>
        </Box>
      </Box>

        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Top Wear</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>


        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Bottom Wear</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>


        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Foot Wear</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>


        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Accessories</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>


        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Shop By Themes</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>


        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>New Arrivals</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>


        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Best Sellers</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>

        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Trending</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>

        <Accordion>
          <AccordionSummary>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Account</Typography>
          </AccordionSummary>
       
        </Accordion>
       

        <Accordion>
          <AccordionSummary>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Wishlist</Typography>
          </AccordionSummary>
          
        </Accordion>
      

        <Accordion>
          <AccordionSummary>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Orders</Typography>
          </AccordionSummary>
         
        </Accordion>
      

    </Box>
  )
}
