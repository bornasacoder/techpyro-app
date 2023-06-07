import React,{useState} from 'react';
import SearchBar from '../searchbar/SearchBar'
import NavButton from '../../components/navButton/NavButton'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    styled,
    useTheme,
    Drawer,
    IconButton,
    Button,
    InputBase,
    Autocomplete,
    TextField,
    List,
    ListItemText,
    
    
  } from "@mui/material";

import { AccountCircle, Call, Help, LocationCityRounded, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  ShoppingBag, ShoppingCart} from '@mui/icons-material';

import MenuButtons from '../../components/menuButtons/MenuButtons';


const StyleToolbar = styled(Toolbar)(({theme}) => ({
  height:'auto',
  width:'100%',
    display: 'flex',
    justifyContent:'space-evenly',
    alignItems: 'center',
    position: 'sticky',
    [theme.breakpoints.down('md')]: {
        height: 'auto',
        // width: '93vw',
            // top: '-21px'
            marginLeft:'10px',
            marginRight:'15px'
        },
        [theme.breakpoints.up('sm')]: {
            height: 'auto',
            // marginTop:'20px'
              //   marginLeft:'30px',
              //   marginRight:'30px'
            },
        [theme.breakpoints.down('sm')]: {
          height: '70px',
          // marginTop:'20px'
              marginLeft:'20px',
              marginRight:'30px',
              justifyContent:'space-between'
          },
        marginLeft:'150px',
        marginRight:'150px',
        color:theme.header.background,
    }));
    
    const Cart = styled(Box)`
    flex:1;
    `;
    
    
    const NavLeft = styled(Box)(({theme}) => ({
        
        // flex:'3',
        display: 'flex',
        // gap:'30px', 
        //   justifyContent: 'space-between',
        // paddingLeft:'30px',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gap:"10px"
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'0px'
        },
        
        
    }));
    const NavRight = styled(Box)(({theme}) => ({
       
        // flex:'3',
        display: 'none',
         gap:'10px',
        // paddingRight:'30px',
        //    flexDirection:"column",
        alignItems: 'center',
        // [theme.breakpoints.down('md')]: {
            //     justifyContent:"space-between"
            // },
            [theme.breakpoints.down('sm')]: {
               paddingRight:'0px',
               display:'block',
                
            },
            
            
        }));
        const Login = styled(Button)(({theme}) => ({
          
          backgroundColor:theme.header.textColor,
        color:theme.header.background,
        // boxShadow:theme.header.boxShadow,
        ":hover":{
          backgroundColor:theme.header.textColor,
          color:theme.header.background,
          boxShadow:theme.header.boxShadow,
        },
        alignItems:'center'
          
      }));
      // const Signup = styled(Button)(({theme}) => ({
        
      //   backgroundColor:theme.header.textColor,
      //   boxShadow:theme.header.boxShadow,
      //   ":hover":{
      //     backgroundColor:theme.header.background,
      //     color:theme.header.textColor,
      //     boxShadow:theme.header.boxShadow,
      //   }
          
      // }));
      

const MenuButton = styled(IconButton)(({ theme }) => ({
    fontSize:'50px',
    color:theme.header.background,
    margin:"0",
    padding:'0',
        
    }
));
const Ram = styled(Box)(({ theme }) => ({
  height:'750px',
  width:'100%',
    backgroundImage: `url(${"/images/category/bgdimg9.jpeg"})`,
   backgroundSize:'cover',
  position:'sticky',
      
  }
));
const Downnav = styled(Box)(({ theme }) => ({
  height:'680px',
  width:'100%',
  display:'flex',
  justifyContent:'center',
  // alignItems:'center',
  flexDirection:'column',
  backgroundColor:'transparent',
  paddingLeft:'200px',
  [theme.breakpoints.down('sm')]: {
    paddingLeft:'10px',
     gap:'30px'
 },
      
  }
));

const NavBar = styled(AppBar)(({theme}) =>({
    backgroundColor:theme.header.background,
    color:theme.header.textColor,
    // justifyContent:"space-evenly",
    width:'100%',
    // height:'750px',
    margin:"0",
    padding:'0',
    zIndex:'0',
  //   backgroundImage: `url(${"/images/category/bgdimg3.jpeg"})`,
  //  backgroundSize:'cover',
position:'static'

}));



export default function Navbar() {
    const arr = [{name:'title'},{name:'about'},{name:'contact'}]
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false);
    }

    
  return (
    <Ram>
      <NavBar >
        <Box sx={{position:{xs:'fixed',sm:'fixed',md:'fixed'},width:'100%',alignItems:'center',backgroundColor:`${theme.header.textColor}`,zIndex:'100',height:'70px',display:'flex'}}>
        <StyleToolbar  >
        <NavLeft >
           
           
                <Box  >
                  <List sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'30px',fontSize:'30px'}}>
                  <ListItemText  primary={`HOME`}/>
                    <ListItemText primary={`ABOUT`}/>
                    <ListItemText primary={`GALLERY`}/>
                    <ListItemText primary={`MENU`}/>
                    <ListItemText primary={`BLOG`}/>
                    <ListItemText primary={`PAGES`}/>
                    <ListItemText primary={`CONTACT`}/>
                  </List>
                    {/* <Typography  component="div" sx={{fontSize: {xs:'25px',sm:'25px',md:'40px'},fontFamily:'revert-layer',color:`${theme.header.textColor}`}}>
                        Uber Eats
                    </Typography> */}
                    {/* <Typography component="div" sx={{fontSize:{md:'13px',xs:'10px'}, fontWeight:100}}>
                        Make a simple Bussiness
                    </Typography> */}
                </Box>
                {/* <SearchBar/> */}
                {/* <Badge sx={{display:{sm:'block',md:'none'}, left:'48px'}}>
                    <ShoppingCart/>
                </Badge> */}
                {/* <NavButton/> */}
                <Box>
                <List sx={{display:{xs:'block',sm:'block',md:'none'},gap:'30px',fontSize:'30px'}}>
                 
                    <ListItemText primary={`MENU`}/>
                    
                  </List>
                </Box>
            </NavLeft >
            <NavRight > 
            <MenuButton onClick={handleOpen}>
                <Menu color='black'sx={{display: {xs:'block',sm:'block',md:'none'}}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
              {/* <Box sx={{display:'flex',paddingRight:'20px'}}>
              <Call sx={{fontSize:'30px'}}/>
              <Typography sx={{fontSize:'20px'}}>+91-9999999999</Typography>
              </Box>
            <AccountCircle sx={{fontSize:'40px'}}/>
               <Login variant='contained' sx={{borderRadius:'30px',fontSize:'18px' ,display:{xs:'none',sm:'none',md:'block'},alignItems:'center'}}>Log in</Login> */}
              
               
               {/* <Signup variant='contained' sx={{borderRadius:'30px',fontSize:{xs:'10px',sm:'15px',md:'20px'}}}>Sign up</Signup> */}
              
            </NavRight>
        </StyleToolbar>
        </Box>
        </NavBar>
        <Downnav>
          <Box sx={{gap:'20px'}}>
        <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'},color:`${theme.header.background}`}}>WIDE OPTIONS OF CHOICE</Typography>
          <Typography sx={{fontSize:{xs:'40px',sm:'40px',md:'50px'},fontWeight:'700',color:`${theme.header.background}`}}>
            Delicious Recepies.
            
          </Typography>
          <Box sx={{color:`${theme.header.background}`}}>inappropriate behavior is often laughed off as “boys will be boys,” women</Box>
          <Box sx={{color:`${theme.header.background}`}}>face higher conduct standards especially in the workplace. That’s why it’s</Box>
          <Box sx={{color:`${theme.header.background}`}}>crucial that, as women.</Box>
          <Box sx={{paddingTop:'30px'}}>
          <Button variant='contained' sx={{borderRadius:'0'}}>CHECK OUR MENU</Button>
          </Box>
          </Box>
        </Downnav>
        </Ram>
        
       
     
    
  )
}
