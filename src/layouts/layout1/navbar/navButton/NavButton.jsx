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
    position:'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
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
      
      <MoreButton sx={{ cursor:'pointer',"&:hover .MuiBox-root": { display:'flex'}, "&:hover .MuiSvgIcon-root": { transform: 'rotate(180deg)'}}}>
        <Typography sx={{fontSize:'18px'}}>Product</Typography>
        <Badge>
          <ExpandMoreIcon />
        </Badge>
      <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            bgcolor: "rgba(0,0,0,0.8)",
            position: "absolute",
            color: "#fff",
            margin: "250px 0 0 0px",
            zIndex:'1000!important'
          }}
        >
          <Box
            sx={{
              width: "100%",
              display:"flex",
              flexDirection:"column",
              height: "14px",
              backgroundColor: "rgba(0,0,0,0.8)",
              color:"#fff",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
              zIndex:"210"
            }}
            >
              </Box>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Drone" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Camera" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="LED" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Crane" />
            </ListItem>
          </List>
 
              </Box>
      </MoreButton>
      <MoreButton sx={{ cursor:'pointer',"&:hover .MuiBox-root": { display:'flex'}, "&:hover .MuiSvgIcon-root": { transform: 'rotate(180deg)'}}}>
        <Typography sx={{fontSize:'18px'}}>Company</Typography>
        <Badge>
          <ExpandMoreIcon />
        </Badge>
      <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
            zIndex:'1000!important'
          }}
        >
          <Box
            sx={{
              width: "100%",
              display:"flex",
              flexDirection:"column",
              height: "14px",
              backgroundColor: "rgba(0,0,0,0.8)",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
              zIndex:"210"
            }}
            >
              </Box>
          <List component="nav" aria-label="mailbox folders">
          <ListItem button>
              <ListItemText primary="T-Series" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Dharma Productions" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Z-Studio" />
            </ListItem>
          </List>
 
              </Box>
      </MoreButton>
      <MoreButton sx={{ cursor:'pointer',"&:hover .MuiBox-root": { display:'flex'}, "&:hover .MuiSvgIcon-root": { transform: 'rotate(180deg)'}}}>
        <Typography sx={{fontSize:'18px'}}>Support</Typography>
        <Badge>
          <ExpandMoreIcon />
        </Badge>
      <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
            zIndex:'1000!important'
          }}
        >
          <Box
            sx={{
              width: "100%",
              display:"flex",
              flexDirection:"column",
              height: "14px",
              backgroundColor: "rgba(0,0,0,0.8)",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
              zIndex:"210"
            }}
            >
              </Box>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Help" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Docs" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Support" />
            </ListItem>
           
          </List>
 
              </Box>
      </MoreButton>
      <MoreButton sx={{ cursor:'pointer',"&:hover .MuiBox-root": { display:'flex'}, "&:hover .MuiSvgIcon-root": { transform: 'rotate(180deg)'}}}>
        <Typography sx={{fontSize:'18px'}}>Resources</Typography>
        <Badge>
          <ExpandMoreIcon />
        </Badge>
      <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "absolute",
            color: "red",
            margin: "250px 0 0 0px",
            zIndex:'1000!important'
          }}
        >
          <Box
            sx={{
              width: "100%",
              display:"flex",
              flexDirection:"column",
              height: "14px",
              backgroundColor: "rgba(0,0,0,0.8)",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
              zIndex:"210"
            }}
            >
              </Box>
          <List component="nav" aria-label="mailbox folders">
          <ListItem button>
              <ListItemText primary="T-Series" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Dharma Productions" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Z-Studio" />
            </ListItem>

          </List>
 
              </Box>
      </MoreButton>
    </CustomButton>
  );
}
