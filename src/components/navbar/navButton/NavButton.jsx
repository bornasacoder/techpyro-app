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
  IconButton,
  Drawer,
} from "@mui/material";
import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Margin, Menu, ShoppingBag, ShoppingBagOutlined } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import MenuButtons from "../menuButtons/MenuButtons";
import { useState } from "react";
const CustomButton = styled(Box)(({ theme }) => ({
 // width: 19%;
//  height: '64px',
 display: 'flex',
// color:"#A4A6A7",
 gap: '15px',
// justifyContent:"space-between",
//  marginRight:'120px',
 alignItems: 'center',
 opacity:"0.8",
 [theme.breakpoints.down("md")]: {
  
},
//  fontFamily: "Dancing Script",
//  color:"white"
//  zIndex:1,
 // position:sticky;

  // zIndex: "0",
}));

const Right = styled(Box)(({ theme }) => ({
  display: "flex",
  flex:"1",
// flexDirection:"end",
justifyContent:"flex-end",

  gap: "50px",
  // border:"2px solid black",
  alignItems: "center",
  marginTop: "10px",

  
}));
const Left = styled(Box)(({ theme }) => ({
  // gap: "120px",
  display: "flex",
  flex:1,
  padding:"12px 0px",
  gap: 30,
  // marginLeft: "15px",
  // marginTop: "5px",
  [theme.breakpoints.down("sm")]: {
    height: "50px",
    // marginLeft: "15px",
  },
  [theme.breakpoints.down("md")]: {
    height: "50px",
    // marginLeft: "90px",
  },
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  // top:"50px",
  // color:"black!important",
  zIndex:"200",
  // color: theme.colors.alpha.white[100],
  [theme.breakpoints.down("md")]: {
    display: "block",
    // right: "50px",
    // left:'120px',
  },
}));

const MoreButton = styled(Box)(({ theme }) => ({
  // width: '19%',
  // height: "64px",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  // color:"#A4A6A7",
  fontWeight:"400",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));


export default function NavButton() {
  //   const [showLogin, setShowLogin] = useState("none");
  //   const [showMore, setShowMore] = useState("none");
  //   onMouseOver={() => setShowLogin("flex")} onMouseOut={() => setShowLogin("none")}
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  // const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CustomButton >
   
    <Left>
    <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        // padding="10px 0px 0px 0px"
      >
        <Typography variant="div" sx={{fontSize:{md:"30px",sm:"20px",xs:"18px"}}} marginTop="5px">
         TECHPYRO MEDICAL STORE
        </Typography>
        <Typography variant="p"  sx={{marginBottom:{md:"20px",sm:"30px",xs:"40px"}}}>
        MEDICINE WORDPRESS THEM
        </Typography>
      </Box>
    </Left>

<Right display="flex">
<MenuButton sx={{}} onClick={handleOpen} >
    <Menu sx={{color:"white",fontSize:"38px"}}/>
</MenuButton>
 <Drawer open={open} onClose={handleClose} sx={{ position: "absolute", }}>
          <MenuButtons sx={{marginTop:{sm:"20px",sx:"20px"}}} />
        </Drawer>
    
{/* <MenuButtons/> */}

      <MoreButton
        sx={{
          cursor: "pointer",
          "&:hover .MuiBox-root": { display: "flex" },
          "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
        }}
      >
        <Typography>HOMEPAGES</Typography>
        <Badge>{/* <ExpandMoreIcon /> */}</Badge>
        <Box
          sx={{
            display: "none",
            flexDirection: "column",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
            // zIndex:'1000!important'
          }}
        >
          {/* <Box
            sx={{
              width: "100%",
              display:"flex",
              flexDirection:"column",
              height: "14px",
              backgroundColor: "#FFFFFF",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
              // zIndex:"210"
            }}
            >
              </Box> */}
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
        <Typography>MENU</Typography>
        <Badge><ExpandMoreIcon /></Badge>
        <Box
          sx={{
            display: "none",
            flexDirection: "column",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
            // zIndex:'1000!important'
          }}
        >
          {/* <Box
            sx={{
              width: "100%",
              display:"flex",
              flexDirection:"column",
              height: "14px",
              backgroundColor: "#FFFFFF",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
              // zIndex:"210"
            }}
            >
              </Box> */}
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
        <Typography>PAGES</Typography>
        <Badge><ExpandMoreIcon /></Badge>
        <Box
          sx={{
            display: "none",
            flexDirection: "column",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
            // zIndex:'1000!important'
          }}
        >
          {/* <Box
            sx={{
              width: "100%",
              display:"flex",
              flexDirection:"column",
              height: "14px",
              backgroundColor: "#FFFFFF",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
              // zIndex:"210"
            }}
            >
              </Box> */}
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
        <Typography>NEWS</Typography>
        <Badge><ExpandMoreIcon /></Badge>
        <Box
          sx={{
            display: "none",
            flexDirection: "column",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
            // zIndex:'1000!important'
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
      {/* <MoreButton
        sx={{
          cursor: "pointer",
          "&:hover .MuiBox-root": { display: "flex" },
          "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
        }}
      >
        <Typography>EVENTS</Typography>
        <Badge><ExpandMoreIcon /></Badge>
        <Box
          sx={{
            display: "none",
            flexDirection: "column",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
            // zIndex:'1000!important'
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
        <Typography>DELIVERY</Typography>
        <Badge><ExpandMoreIcon /></Badge>
        <Box
          sx={{
            display: "none",
            flexDirection: "column",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
            // zIndex:'1000!important'
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
      </MoreButton> */}

      {/* <ShoppingBagOutlined fontSize="small" bgColor="white" sx={{display:{md:'block',sm:"none",xs:"none"}}} /> */}
        {/* <Button
          sx={{
            border: "3px solid #000",
            background: "#ffffff",
            color: "#000",
            borderRadius: "0px",
              "&:hover": {
                backgroundColor: '#000',
                color:"#ffffff"

              }
            
          }}
        >
          RESERVATION
        </Button> */}
      </Right>
    </CustomButton>
  );
}
