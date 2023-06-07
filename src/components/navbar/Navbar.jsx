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
    justifyContent: 'space-between',
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
            //   marginLeft:'30px',
            //   marginRight:'30px'
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
        display: 'flex',
         gap:'10px',
        // paddingRight:'30px',
        //    flexDirection:"column",
        alignItems: 'center',
        // [theme.breakpoints.down('md')]: {
            //     justifyContent:"space-between"
            // },
            [theme.breakpoints.down('sm')]: {
               paddingRight:'0px',
                
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
    backgroundImage: `url(${"https://img.freepik.com/premium-photo/modern-interior-living-room-blueprint-home-decor-concept-blue-sofa-black-lamp-white-flooring-dark-blueprint-wall-3d-rendering_33739-484.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"})`,
   backgroundSize:'cover',
  position:'sticky',
      
  }
));
const Downnav = styled(Box)(({ theme }) => ({
  height:'680px',
  width:'100%',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
  backgroundColor:'transparent',
  
      
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
        <Box sx={{position:{xs:'none',sm:'none',md:'fixed'},width:'100%',alignItems:'center',backgroundColor:`${theme.header.textColor}`,zIndex:'100',height:'70px',display:'flex'}}>
        <StyleToolbar  >
        <NavLeft >
            <MenuButton onClick={handleOpen}>
                <Menu color='black'sx={{display: {xs:'block',sm:'block',md:'none'}}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
                <Box  >
                  <List sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'25px',fontSize:'30px'}}>
                  <ListItemText  primary={`HOME`}/>
                    <ListItemText primary={`ORDER ONLINE`}/>
                    <ListItemText primary={`MENU`}/>
                    <ListItemText primary={`ABOUT`}/>
                    <ListItemText primary={`CONTACT`}/>
                  </List>
                 
                </Box>
                
            </NavLeft >
            <NavRight > 
              <Box sx={{display:'flex',paddingRight:'20px'}}>
              <Call sx={{fontSize:'30px'}}/>
              <Typography sx={{fontSize:'20px'}}>+91-9999999999</Typography>
              </Box>
            <AccountCircle sx={{fontSize:'40px'}}/>
               <Login variant='contained' sx={{borderRadius:'30px',fontSize:'18px' ,display:{xs:'none',sm:'none',md:'block'},alignItems:'center'}}>Log in</Login>
              
               
               
              
            </NavRight>
        </StyleToolbar>
        </Box>
        </NavBar>
        <Downnav>
          <Typography sx={{fontSize:{xs:'100px',sm:'150px',md:'200px'},fontWeight:'1000',height:{xs:'110px',sm:'170px',md:'230px'},color:`${theme.header.background}`}}>
            Furniture
            
          </Typography>
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'40px'},color:`${theme.header.background}`}}>It's the Simple Pleasure in Life</Typography>
        </Downnav>
        </Ram>
        
       
     
    
  )
}
