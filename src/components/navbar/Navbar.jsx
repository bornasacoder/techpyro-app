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

import { AccountCircle, Bungalow, Call, EastOutlined, FavoriteBorder, GridView, Help, Home, HomeOutlined, LocalCarWashOutlined, LocationCityRounded, LocationCitySharp, LocationOn, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart, Window} from '@mui/icons-material';

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
        marginLeft:'30px',
          // justifyContent: 'space-between',
        // paddingLeft:'30px',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gap:"10px"
        },
        [theme.breakpoints.down('sm')]: {
          margin:'0px',
            width:'auto',
           
            gap:"30px"
        },
        
        
    }));
    const NavRight = styled(Box)(({theme}) => ({
       
        // flex:'3',
        display: 'flex',
         gap:'10px',
        // paddingRight:'30px',
           flexDirection:"row",
        alignItems: 'center',
        marginRight:'30px',
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
  justifyContent:'space-between',
  alignItems:'center',
  backgroundColor:'white',
  height:'40px',
  width:'100%',
  position:'sticky',
  flexDirection:'row',
  gap:'30px',
  backgroundColor:'#0071DC',
  border:'0.2px  solid white',
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
    height:'60px',
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
    backgroundColor:'#0071DC',
   
    width:'100%',
    height:'100px',
    margin:"0",
    padding:'0',
    // zIndex:'100',
position:'sticky',

[theme.breakpoints.down('sm')]: {
  height:'60px',
  width:'100%',
  position:'sticky',
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
       
          
        
          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
          <Typography sx={{fontSize:{xs:'30px',sm:'20px',md:'30px'},fontWeight:'700',color:'white'}}>Walmart</Typography>
          </Box>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>
          <Window sx={{fontSize:'20px'}} />
          <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:'white'}}>Departments</Typography>
          </Box>
         
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>
          <GridView sx={{fontSize:'20px'}}/>
          <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:'white'}}>Services</Typography>
          </Box>

          <Box >
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'white',fontSize:'30px'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
            </Box>

          <Box sx={{display: {xs:'block',sm:'block',md:'block'}}}> 
           <SearchBar />
          </Box>
                <Box sx={{display: {xs:'block',sm:'block',md:'none'}}}>
                <Typography sx={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'900'}}><ShoppingCart sx={{fontSize:{xs:'30px',sm:'30px',md:'20px'}}} />Cart</Typography>
                </Box>
        
               
            </NavLeft >
          
            <NavRight > 
            

            
        <Box sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'30px'}}>

        <Typography sx={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'900'}}><FavoriteBorder sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'}}}/>My Items</Typography>
            
            <Typography sx={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'900'}}><Person2Outlined sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'}}}/> Account</Typography>

            <Typography sx={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'900'}}><ShoppingCart sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'}}} />Cart</Typography>
           
           
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
               <Box sx={{display:'flex',gap:'30px',paddingLeft:'30px'}}>
                <Typography sx={{fontWeight:'600'}}>How do you want your Items?</Typography>
                <Typography sx={{display:'flex',alignItems:'center',fontWeight:'600'}}><LocationOn />Haridwar</Typography>
                <Typography  sx={{display:'flex',alignItems:'center',fontWeight:'600'}}><Bungalow />Supercenter</Typography>
               </Box>
               <Box sx={{display:'flex',gap:'30px',paddingRight:'30px'}}>
              <Typography sx={{color:'white',fontWeight:'600'}}>Deal</Typography>
              <Typography sx={{color:'white',fontWeight:'600'}}>Valentines Day</Typography>
              <Typography sx={{color:'white',fontWeight:'600'}}>Game Time</Typography>
              <Typography sx={{color:'white',fontWeight:'600'}}>Tech</Typography>
              <Typography sx={{color:'white',fontWeight:'600'}}>Home</Typography>
              <Typography sx={{color:'white',fontWeight:'600'}}>Toys</Typography>
              <Typography sx={{color:'white',fontWeight:'600'}}>Grocceries & Essentials</Typography>
              <Typography sx={{color:'white',fontWeight:'600'}}>Walmart+</Typography>
              </Box>
             
        </Navbar2>
   
        </NavBar>

        <Navbar3>
        <Box>
          <Typography sx={{fontSize:'17px',fontWeight:'600'}}>Reserve pickup or delievery</Typography>
        </Box>

            <Box >
            <Button variant='contained' sx={{width:'120px',backgroundColor:'#FFFFFF',color:'black',border:'1px solid black',borderRadius:'20px',"&:hover":{backgroundColor:'black',color:'white',height:'30px'}}}>See times</Button>
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
