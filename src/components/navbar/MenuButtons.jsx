import React from 'react'
import {
  Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
  } from "@mui/material";
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
  
export default function MenuButtons({setOpen}) {
  return (
    <List component="nav" aria-label="mailbox folders" sx={{width:'70vw',backgroundColor:"#000",color:"#fff",height:"100vh"}}>
      <Link href={"/"} style={{textDecoration:"none",color:"#FFFFFF"}} onClick={()=>setOpen(false)}>
      <Typography sx={{display:"flex",justifyContent:"center",fontSize:"24px",fontWeight:"600"}}>TECHPYRO</Typography>
      </Link>
      <ListItem button>
      <Accordion sx={{width:"100%",boxShadow:"none",borderRadius:"0px",margin:"-10px",backgroundColor:"#000",color:"#fff",padding:"0px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'#fff'}} />}
        >
       <ListItemText primary="Rooms & Suites" />
        </AccordionSummary>
        <AccordionDetails>
        <Typography>Confort Room</Typography>
        <Typography>Deluxe Room</Typography>
        <Typography>Superier Room</Typography>
       </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem button>
      <Accordion sx={{width:"100%",boxShadow:"none",borderRadius:"0px",margin:"-10px",backgroundColor:"#000",color:"#fff",padding:"0px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'#fff'}} />}
        >
       <ListItemText primary="Special offers" />
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{fontWeight:"600",fontSize:"18px"}}>Don't miss</Typography>
        < Divider sx={{color:"#CCCCCC"}}/>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, unde!</Typography>
        <br/>
        <Button
                sx={{
                  backgroundColor: "#00BFA5",
                  padding: "8px 5px",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#000",
                  },
                }}
              >
                CHECK AVAVILITY
              </Button>
       </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem button>
      <Accordion sx={{width:"100%",boxShadow:"none",borderRadius:"0px",margin:"-10px",backgroundColor:"#000",color:"#fff",padding:"0px"}}>
        <AccordionSummary
        >
          <Link href={"/dining"} style={{textDecoration:"none",color:"#FFFFFF"}} onClick={()=>setOpen(false)}>
       <ListItemText primary="Dining & Bars" />
       </Link>
        </AccordionSummary>
        </Accordion>
      </ListItem>
      <ListItem button>
      <Accordion sx={{width:"100%",boxShadow:"none",borderRadius:"0px",margin:"-10px",backgroundColor:"#000",color:"#fff",padding:"0px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'#fff'}} />}
        >
       <ListItemText primary="Metting & Events" />
        </AccordionSummary>
        <AccordionDetails>
        <Typography>Social mettings</Typography>
       </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem button>
      <Accordion sx={{width:"100%",boxShadow:"none",borderRadius:"0px",margin:"-10px",backgroundColor:"#000",color:"#fff",padding:"0px"}}>
        <AccordionSummary
        >
          <Link href={"/spa"} style={{textDecoration:"none",color:"#FFFFFF"}} onClick={()=>setOpen(false)}>
       <ListItemText primary="Wellness & SPA" />
       </Link>
        </AccordionSummary>
        </Accordion>
      </ListItem>
      <ListItem button>
      <Accordion sx={{width:"100%",boxShadow:"none",borderRadius:"0px",margin:"-10px",backgroundColor:"#000",color:"#fff",padding:"0px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'#fff'}} />}
        >
       <ListItemText primary="The hotel" />
        </AccordionSummary>
        <AccordionDetails>
        <Typography>Gallery</Typography>
       </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem button>
      <Accordion sx={{width:"100%",boxShadow:"none",borderRadius:"0px",margin:"-10px",backgroundColor:"#000",color:"#fff",padding:"0px"}}>
        <AccordionSummary
        >
          <Link href={"/contact"} style={{textDecoration:"none",color:"#FFFFFF"}} onClick={()=>setOpen(false)}>
       <ListItemText primary="Contact" />
       </Link>
        </AccordionSummary>
        </Accordion>
      </ListItem>
      
    </List>
   
  )
}
