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

import { AccountCircle, Call, EastOutlined, FavoriteBorder, Help, Home, HomeOutlined, LocalCarWashOutlined, LocationCityRounded, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart} from '@mui/icons-material';

import MenuButtons from 'components/menuButtons/MenuButtons';


const StyleToolbar = styled(Toolbar)(({theme}) => ({
  height:'80px',
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
          height: '50px',
          width:'100%',
          
              margin:'0px 10px',
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
        gap:'30px', 
        marginLeft:'10px',
          // justifyContent: 'space-between',
        // paddingLeft:'30px',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gap:"10px"
        },
        [theme.breakpoints.down('sm')]: {
            // paddingLeft:'0px',
            marginLeft:'0px',
            width:'250px'
        },
        
        
    }));
    const NavRight = styled(Box)(({theme}) => ({
       
        // flex:'3',
        display: 'flex',
         gap:'10px',
        // paddingRight:'30px',
           flexDirection:"row",
        alignItems: 'center',
        marginRight:'10px',
        // [theme.breakpoints.down('md')]: {
            //     justifyContent:"space-between"
            // },
            [theme.breakpoints.down('sm')]: {
              //  paddingRight:'0px',
              //  margin:'0px'
              //  display:'block',
              // marginRight:'50px',
                display:'none'
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
const Navbar2 = styled(Box)(({ theme }) => ({
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  height:'40px',
  width:'100%',
  position:'sticky',
  flexDirection:'row',
  gap:'30px',
  border:'1px solid rgba(0,0,0,0.1)',
  [theme.breakpoints.down('sm')]: {
    display:'none'
      
  },
      
  }
));
const Navbar3 = styled(Box)(({ theme }) => ({
display:'none',
  
  [theme.breakpoints.down('sm')]: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    // gap:'30px',
    height:'40px',
      margin:'0px 20px',
     position:'sticky'
  },
      
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
    height:'110px',
    margin:"0",
    padding:'0',
    // zIndex:'100',
position:'sticky',

[theme.breakpoints.down('sm')]: {
  height:'50px',
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
    
       <Box sx={{height:'70px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <StyleToolbar>
        
        <NavLeft >
       
          
        <Box sx={{display:{xs:'flex',sm:'flex',md:'block'}}}>
            <HomeOutlined sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'30px',sm:'30px',md:'45px'}}}/>
           </Box>
          <Box >
          <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'900',color:'black'}}>WROGN</Typography>
          </Box>
          <Box>
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'600',color:'red',fontFamily:'cursive'}}>IMARA</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Typography sx={{fontSize:{xs:'18px',sm:'20px',md:'18px'},fontWeight:'800',color:'black'}}>WROGN</Typography>
          <Typography sx={{color:'black',fontSize:'10px'}}>ACTIVE</Typography>
          </Box>
          <Box>
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'600',color:'black',fontFamily:'fantasy'}}>SINGLE</Typography>
          </Box>
           
                {/* <NavButton/> */}
               
            </NavLeft >
          
            <NavRight > 
            

            <Box sx={{display: {xs:'none',sm:'none',md:'block'}}}> 
           <SearchBar />
          </Box>
        <Box sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'30px'}}>
            
            <Typography sx={{color:'black',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><Person2Outlined sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}}/>My Account</Typography>

            <Typography sx={{color:'black',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><ShoppingBag sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}} />Bag</Typography>
           
           
           </Box>

           {/* <Box sx={{display:{xs:'block',sm:'flex',md:'none'},gap:'10px'}}>
           
            <Person2Outlined sx={{color:'black'}}/>
           <Search sx={{color:'black'}}/>
           <ShoppingBag sx={{color:'black'}} />
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
        </Box>
       
        <Navbar2>
        
              <Typography sx={{color:'black',fontWeight:'600'}}>TOP WEAR</Typography>
              <Typography sx={{color:'black',fontWeight:'600'}}>BOTTOM WEAR</Typography>
              <Typography sx={{color:'black',fontWeight:'600'}}>FOOTWEAR</Typography>
              <Typography sx={{color:'black',fontWeight:'600'}}>ACCESSORIES</Typography>
              <Typography sx={{color:'black',fontWeight:'600'}}>SHOP BY THEMES</Typography>
              <Typography sx={{color:'black',fontWeight:'600'}}>NEW ARRIVALS</Typography>
              <Typography sx={{color:'black',fontWeight:'600'}}>BEST SELLERS</Typography>
              <Typography sx={{color:'black',fontWeight:'600'}}>TRENDING</Typography>
              <Typography sx={{color:'red',fontWeight:'600'}}>CLEARANCE</Typography>
             
        </Navbar2>
   
        </NavBar>

        <Navbar3>
         <Box >
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'black'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
            </Box>
            <Box sx={{display:'flex',gap:'20px'}}>
         <Search sx={{color:'black',fontSize:'25px'}}/>
         <Person2Outlined sx={{color:'black',fontSize:{xs:'25px',sm:'30px',md:'30px'}}}/>
         <ShoppingBag sx={{color:'black',fontSize:{xs:'25px',sm:'30px',md:'40px'}}} />
         </Box>
         </Navbar3>
     

       


        {/* <Ram>
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
        </Ram> */}
        </>
       
     
    
  )
}
