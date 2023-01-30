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
import { Diamond, KeyboardArrowDown, KeyboardArrowDownSharp, Margin, Menu, ShoppingBag, ShoppingBagOutlined } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import MenuButtons from "../menuButtons/MenuButtons";
import { useState } from "react";
const CustomButton = styled(Box)(({ theme }) => ({
 // width: 19%;
//  height: '64px',
 display: 'flex',
// color:"#A4A6A7",
backgroundColor:"#000",
padding:"10px 30px",
color:'#fff',
//  gap: '30px',
justifyContent:"space-between",
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
// flexDirection:"end",
  gap: "50px",
  // border:"2px solid black",
  alignItems: "center",
  paddingRight: "30px",
  marginTop: "10px",

  
}));
const Left = styled(Box)(({ theme }) => ({
  // gap: "120px",
  display: "flex",
  flex:1,
  // border:"2px solid black",
  // justifyContent:"flex",
  // alignItems: "center",
  padding:"12px 0px",
  gap: "50px",
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

// const LoginButton = styled(Button)(({theme}) => ({
//     background: '#fff',
//     border:"none",
//     // width: '100%',
//     textTransform: 'none',
//     [theme.breakpoints.down('sm')]: {
//       background: 'none',
//       color: '#fff',
//       left: '35px'
//   },
//     [theme.breakpoints.down('md')]: {
//       background: 'none',
//       color: '#fff',
//   }
// }));

export default function NavButton() {
  //   const [showLogin, setShowLogin] = useState("none");
  //   const [showMore, setShowMore] = useState("none");
  //   onMouseOver={() => setShowLogin("flex")} onMouseOut={() => setShowLogin("none")}
 

  return (
    <CustomButton >
      
      {/* <Box  sx={{width:'50%', height: '64px',
                alignItems: 'center',
                cursor:'pointer',
                display:'flex', "& Button:hover": { backgroundColor: "#fff" }, "&:hover .MuiBox-root": { display:'flex'}}}>
                <LoginButton>
                Login
                </LoginButton>
                <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            width: "15%",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "275px 0 0 0",
            zIndex:'100'
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
      </Box> */}

<Right display="flex">
 

    
{/* <MenuButtons/> */}

      <MoreButton
        sx={{
          cursor: "pointer",
          "&:hover .MuiBox-root": { display: "flex" },
          "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
        }}
      >
        <Typography sx={{}}  >HOME</Typography>
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
        <Typography variant="p" sx={{}}>PAGES</Typography>
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
        <Typography sx={{}}  >SHOP</Typography>
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
        <Typography variant="p" sx={{display:"flex",gap:'4px'}}  >BLOG</Typography>
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
        <Typography  >SALE</Typography>
        {/* <Badge><ExpandMoreIcon /></Badge> */}
        {/* <Box
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
        </Box> */}
      {/* </MoreButton>  */}
      {/* <MoreButton
        sx={{
          cursor: "pointer",
          "&:hover .MuiBox-root": { display: "flex" },
          "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
        }}
      >
        <Typography >EVENTS</Typography>
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
        <Typography >DELIVERY</Typography>
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
