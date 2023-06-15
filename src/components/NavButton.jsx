import {
    styled,
    Badge,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    Button,
    Toolbar,
  } from "@mui/material";
  import React from "react";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
  const CustomButton = styled(Toolbar)(({theme }) => ({
   display: 'flex',
  justifyContent:"center",
   alignItems: 'center',
   height:"40px",
  }));
  
  
  const MoreButton = styled(Box)(({theme }) => ({
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    fontWeight:"400",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  export default function NavButton() {
   
    return (
  
      <CustomButton >
        <MoreButton
          sx={{
            cursor: "pointer",
            // height:"60px",
            "&:hover .MuiBox-root": { display: "flex" },
            "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
          }}
        >
          <Box sx={{height:"60px",display:"flex",alignItems:"center",padding:"0px 20px",borderRight:"1px solid #CCCCCC","&:hover":{ bgcolor:"#166164",color:"#fff",}}} >
          <Typography >
          Booking
          </Typography>
          <Badge><ExpandMoreIcon/></Badge>
          </Box>
          <Box
            sx={{
              display: "none",
              flexDirection: "column",
              bgcolor:"#166164",
              position: "absolute",
              color: "#FFFFFF",
              margin: "250px 0 0 0px",
              width:"140%",
              left:"0px"
            }}
          >
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Box>
        </MoreButton>
        <MoreButton
          sx={{
            cursor: "pointer",
            // height:"60px",
            "&:hover .MuiBox-root": { display: "flex" },
            "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
          }}
        >
          <Box sx={{height:"60px",display:"flex",alignItems:"center",padding:"0px 20px",borderRight:"1px solid #CCCCCC","&:hover":{ bgcolor:"#166164",color:"#fff",}}} >
          <Typography >
          Special offers
          </Typography>
          <Badge><ExpandMoreIcon/></Badge>
          </Box>
          <Box
            sx={{
              display: "none",
              flexDirection: "column",
              bgcolor:"#166164",
              position: "absolute",
              color: "#FFFFFF",
              margin: "250px 0 0 0px",
              width:"140%",
              left:"0px"
            }}
          >
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Box>
        </MoreButton>
        <MoreButton
          sx={{
            cursor: "pointer",
            // height:"60px",
            "&:hover .MuiBox-root": { display: "flex" },
            "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
          }}
        >
           <Link href={"/dining"} style={{textDecoration:"none",color:"#000",}}>
          <Box sx={{height:"60px",display:"flex",alignItems:"center",padding:"0px 20px",borderRight:"1px solid #CCCCCC","&:hover":{ bgcolor:"#166164",color:"#fff",}}} >
           
          <Typography  >
          Fare Calculation
          </Typography>
          </Box>
          </Link>
        </MoreButton>
        <MoreButton
          sx={{
            cursor: "pointer",
            // height:"60px",
            "&:hover .MuiBox-root": { display: "flex" },
            "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
          }}
        >
          <Box sx={{height:"60px",display:"flex",alignItems:"center",padding:"0px 20px",borderRight:"1px solid #CCCCCC","&:hover":{ bgcolor:"#166164",color:"#fff",}}} >
          <Typography >
           Licensed Drivers
          </Typography>
          <Badge><ExpandMoreIcon/></Badge>
          </Box>
          <Box
            sx={{
              display: "none",
              flexDirection: "column",
              bgcolor:"#166164",
              position: "absolute",
              color: "#FFFFFF",
              margin: "250px 0 0 0px",
              width:"140%",
              left:"0px"
            }}
          >
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Box>
        </MoreButton>
        <MoreButton
          sx={{
            cursor: "pointer",
            // height:"60px",
            "&:hover .MuiBox-root": { display: "flex" },
            "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
          }}
        > 
          <Link href={"/spa"} style={{textDecoration:"none",color:"#000"}}>
          <Box sx={{height:"60px",display:"flex",alignItems:"center",padding:"0px 20px",borderRight:"1px solid #CCCCCC","&:hover":{ bgcolor:"#166164",color:"#fff",}}} >
          <Typography >
          Vehicle Options 
          </Typography>
          </Box>
          </Link>
        </MoreButton>
        <MoreButton
          sx={{
            cursor: "pointer",
            "&:hover .MuiBox-root": { display: "flex" },
            "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
          }}
        >
          <Box sx={{height:"60px",display:"flex",alignItems:"center",padding:"0px 20px",borderRight:"1px solid #CCCCCC","&:hover":{ bgcolor:"#166164",color:"#fff",}}} >
          <Typography >
          The cab
          </Typography>
          <Badge><ExpandMoreIcon/></Badge>
          </Box>
          <Box
            sx={{
              display: "none",
              flexDirection: "column",
              bgcolor:"#166164",
              position: "absolute",
              color: "#FFFFFF",
              margin: "250px 0 0 0px",
              width:"140%",
              left:"0px"
            }}
          >
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button >
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Box>
        </MoreButton>
        <MoreButton
          sx={{
            cursor: "pointer",
            "&:hover .MuiBox-root": { display: "flex" },
            "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
          }}
        >
          <Box sx={{height:"60px",display:"flex",alignItems:"center",padding:"0px 20px","&:hover":{ bgcolor:"#166164",color:"#fff",}}} >
          <Link href={"/contact"} style={{textDecoration:"none",color:"#000"}}>
          <Typography >
          Contact
          </Typography>
          </Link>
          </Box>
        </MoreButton>
        
      </CustomButton>
    );
  }
  