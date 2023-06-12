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
import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomButton = styled(Box)`
  // width: 19%;
  height: 64px;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
`;

const MoreButton = styled(Box)(({theme}) => ({
    // width: '19%',
    height: '64px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // [theme.breakpoints.down('sm')]: {
    //     display: 'none'
    // },
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const LoginButton = styled(Button)(({theme}) => ({
    background: '#fff',
    // width: '100%',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      background: 'none',
      color: '#fff',
      left: '35px'
  },
    [theme.breakpoints.down('md')]: {
      background: 'none',
      color: '#fff',
  }
}));

export default function NavButton() {


  return (
    <CustomButton>
    
     
      <MoreButton sx={{ cursor:'pointer',"&:hover .MuiBox-root": { display:'flex'}, "&:hover .MuiSvgIcon-root": { transform: 'rotate(180deg)'}}}>
        <Typography sx={{fontSize:'18px', fontFamily:'inherit'}}>Location</Typography>
        <Badge>
          <ExpandMoreIcon />
        </Badge>
        <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            width: "15%",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "275px 0 0 -68px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "14px",
              backgroundColor: "#FFFFFF",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
            }}
          ></Box>
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
    </CustomButton>
  );
}
