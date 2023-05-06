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

import { AccountCircle, Call, EastOutlined, FavoriteBorder, Help, LocalCarWashOutlined, LocationCityRounded, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart} from '@mui/icons-material';

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
        gap:'70px', 
        marginLeft:'100px',
          // justifyContent: 'space-between',
        // paddingLeft:'30px',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gap:"10px"
        },
        [theme.breakpoints.down('sm')]: {
            // paddingLeft:'0px',
            marginLeft:'40px',
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
        justifyContent:'center',
        marginRight:'100px',
        // [theme.breakpoints.down('md')]: {
            //     justifyContent:"space-between"
            // },
            [theme.breakpoints.down('sm')]: {
              //  paddingRight:'0px',
              //  margin:'0px'
              //  display:'block',
              marginRight:'50px',
                
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
  justifyContent:'space-between',
  alignItems:'center',
  backgroundColor:'white',
  height:'80px',
  width:'100%',
  position:'sticky',
  
  [theme.breakpoints.down('sm')]: {
    display:'none'
      
  },
      
  }
));
const Navbar3 = styled(Box)(({ theme }) => ({
display:'none',
  
  [theme.breakpoints.down('sm')]: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'30px',
    height:'60px',
      
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
    height:'auto',
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
    
       
        <StyleToolbar  >
        
        <NavLeft >
       
          
        <Box sx={{display:{xs:'flex',sm:'flex',md:'block'}}}>
            <Typography sx={{fontSize:{xs:'40px',sm:'30px',md:'50px'},color:'black',paddingLeft:'0px'}}>Restaurent</Typography>
           </Box>
           <Box>
           <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'none',sm:'none',md:'block'},color:'black',fontSize:'30px'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           </Box>
           <Box sx={{display: {xs:'none',sm:'none',md:'block'}}}> 
           <SearchBar />
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'10px'}}>
            {/* <LocalCarWashOutlined sx={{color:'black',fontSize:'40px'}}/> */}
            <Typography sx={{color:'black',fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'600'}}>Add Product</Typography>
          </Box>
           
               
                
               
                {/* <NavButton/> */}
               
            </NavLeft >
          
            <NavRight > 
            
        <Box sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'30px',alignItems:'center'}}>
            
            <Person2Outlined sx={{color:'black',fontSize:{xs:'40px',sm:'30px',md:'40px'}}}/>
           <ShoppingCart sx={{color:'black',fontSize:{xs:'40px',sm:'30px',md:'40px'}}} />
           <Typography sx={{color:'black',fontSize:{xs:'20px',sm:'20px',md:'20px'}}}>$499.00</Typography>
           </Box>

           {/* <Box sx={{display:{xs:'block',sm:'flex',md:'none'},gap:'10px'}}>
           
            <Person2Outlined sx={{color:'black'}}/>
           <Search sx={{color:'black'}}/>
           <ShoppingBag sx={{color:'black'}} />
           </Box> */}
           
              <Box >
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'black'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
            </Box>

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


        <Navbar2>
              <Box sx={{paddingLeft:'100px'}} >
                  <List sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'30px',fontSize:'30px',color:'black'}}>
                  <ListItemText  primary={`Home`}/>
                    <ListItemText primary={`About Us`}/>
                    <ListItemText primary={`Blogs`}/>
                    <ListItemText primary={`Pages`}/>
                    {/* <ListItemText primary={`Auto Parts`}/> */}
                    <ListItemText primary={`Contact Us`}/>
                   
                   
                  </List>
                </Box>
                <Box sx={{display:'flex',gap:'10px',paddingRight:'100px'}}>
                      <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'600'}}>Order Status</Typography>
                      <hr></hr>
                      <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'600'}}>24/7 Support: +91-9876543210</Typography>
                </Box>
        </Navbar2>

         <Navbar3>
         <LocalCarWashOutlined sx={{color:'black',fontSize:'30px'}}/>
         <Person2Outlined sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}}/>
         <ShoppingCart sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'40px'}}} />
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
