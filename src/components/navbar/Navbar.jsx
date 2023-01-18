import React,{useState} from 'react';
import SearchBar from '../searchbar/SearchBar'
import NavButton from 'components/navButton/NavButton'
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
    Badge,
    
    
  } from "@mui/material";

import { AccountCircle, Call, EastOutlined, FavoriteBorder, Help, LocationCityRounded, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart} from '@mui/icons-material';

import MenuButtons from 'components/menuButtons/MenuButtons';


const StyleToolbar = styled(Toolbar)(({theme}) => ({
  height:'auto',
  width:'100%',
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    // position: 'sticky',
    [theme.breakpoints.down('md')]: {
        height: 'auto',
        
        },
        [theme.breakpoints.up('sm')]: {
            height: 'auto',
           
            },
        [theme.breakpoints.down('sm')]: {
          height: '70px',
          width:'100%',
          
              margin:'0px',
              padding:'0px',
             
              // justifyContent:'space-between'
          },
        
        color:theme.header.background,
    }));
    
    const Cart = styled(Box)`
    flex:1;
    `;
    
    
    const NavLeft = styled(Box)(({theme}) => ({
        
        // flex:'3',
        display: 'flex',
        // gap:'150px', 
        marginLeft:'50px',
          // justifyContent: 'space-between',
        // paddingLeft:'30px',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gap:"10px"
        },
        [theme.breakpoints.down('sm')]: {
            // paddingLeft:'0px',
            marginLeft:'10px',
            width:'250px'
        },
        
        
    }));
    const NavRight = styled(Box)(({theme}) => ({
       
        // flex:'3',
        display: 'flex',
         gap:'10px',
        // paddingRight:'30px',
           flexDirection:"column",
        alignItems: 'center',
        marginRight:'50px',
        // [theme.breakpoints.down('md')]: {
            //     justifyContent:"space-between"
            // },
            [theme.breakpoints.down('sm')]: {
              //  paddingRight:'0px',
              //  margin:'0px'
              //  display:'block',
                
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
    backgroundImage: `url(${"/images/category/bgdimg12.webp"})`,
   backgroundSize:'cover',
  
      
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
  paddingLeft:'150px',
  [theme.breakpoints.down('sm')]: {
    paddingLeft:'10px',
     gap:'30px'
 },
      
  }
));

const NavBar = styled(AppBar)(({theme}) =>({
    backgroundColor:theme.header.background,
   
    width:'100%',
    height:'120px',
    margin:"0",
    padding:'0',
    // zIndex:'100',
position:'sticky',

[theme.breakpoints.down('sm')]: {
  height:'80px',
  width:'100%',
},

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
    <>
    
      <NavBar >
      <Box sx={{backgroundColor:'black',color:'white',display:{xs:'none',sm:'none',md:'flex'},justifyContent:'space-evenly',alignItems:'center',height:'40px'}}>
          <Typography>SIGN UP & GET 15% OFF</Typography>
          <Typography>FREE DELIEVERY</Typography>
          <Typography>UPI & NET BANKING AVAILABLE</Typography>
        </Box>
       
        <StyleToolbar  >
        
        <NavLeft >
        <Box>
           <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'black',fontSize:'30px'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           </Box>
           <FavoriteBorder sx={{color:'black',display: {xs:'block',sm:'block',md:'none'}}} />
        <Box sx={{display:{xs:'flex',sm:'flex',md:'block'}}}>
            <Typography sx={{fontSize:{xs:'40px',sm:'30px',md:'40px'},color:'black',paddingLeft:'40px'}}>LOGO</Typography>
           </Box>
          
           
                <Box sx={{paddingLeft:'200px'}} >
                  <List sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'30px',fontSize:'30px',color:'black'}}>
                  <ListItemText  primary={`MEN`}/>
                    <ListItemText primary={`WOMEN`}/>
                    <ListItemText primary={`KIDS`}/>
                    <ListItemText primary={`SPORTS`}/>
                    <ListItemText primary={`BRANDS`}/>
                    <ListItemText primary={`COLLECTIONS`}/>
                    <ListItemText primary={`OUTLETS`}/>
                   
                  </List>
                    {/* <Typography  component="div" sx={{fontSize: {xs:'25px',sm:'25px',md:'40px'},fontFamily:'revert-layer',color:`${theme.header.textColor}`}}>
                        Uber Eats
                    </Typography> */}
                    {/* <Typography component="div" sx={{fontSize:{md:'13px',xs:'10px'}, fontWeight:100}}>
                        Make a simple Bussiness
                    </Typography> */}
                    
                </Box>
                
               
                {/* <NavButton/> */}
               
            </NavLeft >
           
            <NavRight > 
            <Box sx={{color:'black',position:'static',display:{xs:'none',sm:'none',md:'flex'},justifyContent:'space-evenly',gap:'30px'}}>
          <Typography sx={{fontWeight:'600'}}>help</Typography>
          <Typography sx={{fontWeight:'600'}}>returns</Typography>
          <Typography sx={{fontWeight:'600'}}>order tracker</Typography>
          <Typography sx={{fontWeight:'600'}}>sign up</Typography>
        </Box>
        <Box sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'30px'}}>
            <SearchBar />
            <Person2Outlined sx={{color:'black'}}/>
            <FavoriteBorder sx={{color:'black'}} />
           <ShoppingBag sx={{color:'black'}} />
           </Box>

           <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},gap:'10px'}}>
           
            <Person2Outlined sx={{color:'black'}}/>
           <Search sx={{color:'black'}}/>
           <ShoppingBag sx={{color:'black'}} />
           </Box>
           
              {/* <Box sx={{display:{xs:'none',sm:'none',md:'none'}}}>
            <MenuButton onClick={handleOpen}>
                <Menu color='black'sx={{display: {xs:'block',sm:'block',md:'block'}}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
            </Box> */}

            {/* <Box>
                <List sx={{display:{xs:'block',sm:'block',md:'none'},gap:'30px',fontSize:'30px'}}>
                 
                    <Search />
                    
                  </List>
                </Box> */}
              {/* <Box sx={{display:'flex',paddingRight:'20px'}}>
              <Call sx={{fontSize:'30px'}}/>
              <Typography sx={{fontSize:'20px'}}>+91-9999999999</Typography>
              </Box>
            <AccountCircle sx={{fontSize:'40px'}}/>
               <Login variant='contained' sx={{borderRadius:'30px',fontSize:'18px' ,display:{xs:'none',sm:'none',md:'block'},alignItems:'center'}}>Log in</Login> */}
              
               
               {/* <Signup variant='contained' sx={{borderRadius:'30px',fontSize:{xs:'10px',sm:'15px',md:'20px'}}}>Sign up</Signup> */}
              
            </NavRight>
        </StyleToolbar>
       
        </NavBar>
        <Ram>
        <Downnav>
          <Box sx={{gap:'20px',display:{xs:'block',sm:'block',md:'block'}}}>
        <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'40px'},color:`${theme.header.background}`,fontWeight:'700'}}>FLAT 40% OFF</Typography>
          <Typography sx={{fontSize:{xs:'40px',sm:'40px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>
            END OF  SEASON SALE
            
          </Typography>
          <Box sx={{display:'flex',flexDirection:'column',width:'170px',gap:'20px'}}>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}>SHOP MEN  <EastOutlined /></Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}>SHOP WOMEN  <EastOutlined /></Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}>SHOP KIDS  <EastOutlined /></Button>
          </Box>
          </Box>
          
        </Downnav>
        </Ram>
        </>
       
     
    
  )
}
