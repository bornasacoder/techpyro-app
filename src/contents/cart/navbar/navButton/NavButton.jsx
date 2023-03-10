import {
  styled,
  Badge,
  Button,
  Box,
  Divider,
  List,
  useTheme,
  ListItem,
  ListItemText,
  Typography,
  Link,
} from "@mui/material";
import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {RxDotFilled} from "react-icons/rx"

import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/userRedux";

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
    // alignItems: 'center',
    // [theme.breakpoints.down('sm')]: {
    //     display: 'none'
    // },
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const LoginButton = styled(Button)(({theme}) => ({
    margin:'14px 0',
    borderRadius:'5px',
  
   background: theme.header.textColor,
   color: theme.header.background,
    // width: '100%',
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
      background: theme.header.background,
      color: theme.header.textColor,
      marginRight: '-50px',
      cursor:'none'
  },

    [theme.breakpoints.down('sm')]: {
      background: theme.header.background,
      color: theme.header.textColor,
      marginRight: '-40px',
      cursor:'none'
  },

  "@media (max-width: 500px)": {
    background: theme.header.background,
    color: theme.header.textColor,
    marginRight: '-30px',
    cursor:'none'
  },

}));

export default function NavButton(props) {
//   const [showLogin, setShowLogin] = useState("none");
//   const [showMore, setShowMore] = useState("none");
//   onMouseOver={() => setShowLogin("flex")} onMouseOut={() => setShowLogin("none")}
const theme = useTheme();
const user = useSelector(selectUser);
  return (
    <CustomButton >
      <Box  sx={{
                height:'64px',
                // alignItems: 'center',
                cursor:'pointer',
                display:'flex',
               position:'realative',
                "&:hover .MuiBox-root": { display:{md:'flex'}},
                "& Button:hover": { backgroundColor: {md: `${theme.header.textColor}`}}}}>
        {user.currentUser === null ? <Link to={'/login'} style={{textDecoration:'none'}}><LoginButton sx={{fontSize:{xs:'17px',md:'14px'},padding:'6px 9px', letterSpacing:'0.8px', fontWeight:{xs:500,md:700}}}>
          Login
        </LoginButton></Link> :
        <Typography sx={{fontSize:'15px',display:'flex',alignItems:'center',color:`${theme.header.textColor}`,height:'64px'}}><RxDotFilled style={{color:`${theme.colors.success.main}`,fontSize:'22px'}}/> {user.currentUser.data.name ? user.currentUser.data.name:"TechPyro User"}</Typography> }
        <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            width: "180px",
            backgroundColor: `${theme.header.textColor}`,
            position: "absolute",
            color: `${theme.header.textColor}`,
            margin: "63px 0 0 -25px",
            zIndex: "100",
            boxShadow: `${theme.header.boxShadow}`
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
      </Box>
      <MoreButton sx={{display:'none',paddingTop:'18px' ,cursor:'pointer',"&:hover .MuiBox-root": { display:'flex'}, "&:hover .MuiSvgIcon-root": { transform: 'rotate(180deg)'}}}>
        <Typography sx={{fontSize:'18px'}}>More</Typography>
        <Badge>
          <ExpandMoreIcon />
        </Badge>
        <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            width: "180px",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "45px 0 0 -55px",
            zIndex: "100"
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
