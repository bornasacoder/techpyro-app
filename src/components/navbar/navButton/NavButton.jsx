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
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const CustomButton = styled(Box)(({ theme }) => ({
 display: 'flex',
// justifyContent:"space-between",
gap:"10px",
 alignItems: 'center',
 [theme.breakpoints.down("md")]: {
  
},
}));
const Left = styled(Box)(({ theme }) => ({
  display: "flex",
  flex:1,
  padding:"13px 0px",
  gap: "50px",
  [theme.breakpoints.down("sm")]: {
    height: "50px",
  },
  [theme.breakpoints.down("md")]: {
    height: "50px",
  },
}));


const MoreButton = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
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
          "&:hover .MuiBox-root": { display: "flex" },
          "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
        }}
      >
        <Button sx={{ fontSize:"13px",
    color:"#000",fontWeight:"400"}} endIcon={<Badge><ExpandMoreIcon /></Badge>} >Online Degrees</Button>
        
        <Box
          sx={{
            display: "none",
            flexDirection: "column",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
          }}
        >
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
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
       <Typography variant="p" sx={{fontWeight:"400", fontSize:"13px","&:hover":{
          color:"#0056D2",borderBottomStyle:"solid"
        }}}>Find your New Career</Typography>
      </MoreButton>
      <MoreButton
        sx={{
          cursor: "pointer",
          "&:hover .MuiBox-root": { display: "flex" },
          "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
        }}
      >
      <Typography variant="p" sx={{fontWeight:"400", fontSize:"13px","&:hover":{
        color:"#0056D2",borderBottomStyle:"solid"
      }}}>For Enterprice</Typography>
      </MoreButton>
      <MoreButton
        sx={{
          cursor: "pointer",
          "&:hover .MuiBox-root": { display: "flex" },
          "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
        }}
      >
      <Typography variant="p" sx={{fontWeight:"400", fontSize:"13px","&:hover":{
        color:"#0056D2",borderBottomStyle:"solid"
      }}}>For Universities</Typography>
      </MoreButton>
    </CustomButton>
  );
}
