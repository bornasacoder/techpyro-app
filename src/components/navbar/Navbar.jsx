
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
    Select,
    InputLabel,
    FormControl,
    
    
  } from "@mui/material";

import { AccountCircle, ArrowDropDownCircle, AutoStories, Bungalow, Call, EastOutlined, Facebook, FavoriteBorder, GridView, Help, Home, HomeOutlined, Instagram, LinkedIn, LocalCarWashOutlined, LocationCityRounded, LocationCitySharp, LocationOn, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart, Twitter, Window} from '@mui/icons-material';

import MenuButtons from 'components/menuButtons/MenuButtons';
import { Link } from 'react-router-dom';


const StyleToolbar = styled(Toolbar)(({theme}) => ({
  height:'100%',
  width:'100%',
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    gap:'30px',
    // backgroundColor:'#FFFFFF',
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
          justifyContent:'space-between',
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
        gap:'40px', 
        marginLeft:'30px',
          justifyContent: 'space-evenly',
        // paddingLeft:'30px',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gap:"10px"
        },
        [theme.breakpoints.down('sm')]: {
          margin:'0px',
            width:'auto',
            
            gap:'0px',
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
               paddingRight:'0px',
               margin:'0px',
              
              // marginRight:'50px',
                // display:'none'
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
    color:'black',
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
  height:'600px',
  width:'40%',

  backgroundImage: `url(${"/images/category/kid1.webp"})`,
  backgroundSize:'cover',
  margin:'0px',
  [theme.breakpoints.down('sm')]: {
  //  display:'none'
  width:'auto',
  height:'300px',
  marginLeft:'50px'
 },
      
  }
));
const Downnav = styled(Box)(({ theme }) => ({
  height:'640px',
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
    
  backgroundImage: `url(${"https://img.freepik.com/free-psd/school-admission-web-banner-social-banner-template_237398-65.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"})`,
  backgroundSize:'cover',
    width:'100%',
    height:'750px',
    margin:"0",
    padding:'0',
    position:'static',


[theme.breakpoints.down('sm')]: {
  height:'600px',
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
    
       <Box sx={{height:{xs:'50px',sm:'80px',md:'80px'},display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#FFFFFF',margin:{xs:'15px',sm:'15px',md:'80px 200px 0px 200px'},borderRadius:'50px',zIndex:'50'}}>
        <StyleToolbar>
        
        <NavLeft >
       
       
        
          {/* <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}>
            <AutoStories sx={{color:'#1DA1F2',fontSize:{xs:'30px',sm:'20px',md:'40px'}}}/>
          <Typography sx={{fontSize:{xs:'30px',sm:'20px',md:'40px'},fontWeight:'700',color:'#1F3965'}}>Teachmint</Typography>
          </Box> */}

<Box sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'30px'}}>

  <Link to='/' style={{textDecorationLine:'none'}}>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'18px'},fontWeight:'400',color:'#DC3545'}}>Home</Typography>
          
          </Box>
          </Link>

<Link to='/About' style={{textDecorationLine:'none'}}>
          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'18px'},fontWeight:'400',color:'black'}}>About</Typography>
          </Box>
          </Link>

<Link to='/Packages' style={{textDecorationLine:'none'}}>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'18px'},fontWeight:'400',color:'black'}}>Packages</Typography>
          </Box>
          </Link>

          <Link to='/Gallery' style={{textDecorationLine:'none'}}>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'18px'},fontWeight:'400',color:'black'}}>Gallery</Typography>
          </Box>
          </Link>

<Link to='/Pricing' style={{textDecorationLine:'none'}}>
          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'18px'},fontWeight:'400',color:'black'}}>Pricing</Typography>
          </Box>
          </Link>

<Link to='/Contact' style={{textDecorationLine:'none'}}>
          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'18px'},fontWeight:'400',color:'black'}}>Contact</Typography>
          </Box>
          </Link>

          </Box>
          
         

          <Box >
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'#1F3965',fontSize:'30px'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
            </Box>

          {/* <Box sx={{display: {xs:'block',sm:'block',md:'block'}}}> 
           <SearchBar />
          </Box> */}
                
        
               
            </NavLeft >
          
            <NavRight > 
            
            <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'},display:'flex'}}>
        <LinkedIn sx={{fontSize: {xs:'25px',sm:'30px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'orange'}} />
          <Instagram sx={{fontSize: {xs:'25px',sm:'30px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'blue'}} />
          <Facebook sx={{fontSize: {xs:'25px',sm:'30px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'green'}}/>
          <Twitter sx={{fontSize: {xs:'25px',sm:'30px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'pink'}}/>
         
        </Box>
            
        

        
            </NavRight>
            
        </StyleToolbar>
        </Box>
        <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
        
{/* 
        <Box sx={{width:{xs:'auto',sm:'100%',md:'600px'},display:'flex',paddingBottom:{xs:'0px',sm:'0px',md:'0px'},borderRadius:'20px',margin:{xs:'30px 10px 0px 10px',sm:'0px',md:'150px 0 0 200px'},flexDirection:'column',gap:'0px',textAlign:{xs:'center',sm:'center',md:'left'}}}>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'400',color:'#DC3545',fontFamily:'cursive'}}>Welcome to Our Websites</Typography>
        <Typography sx={{fontSize:{xs:'35px',sm:'35px',md:'50px'},fontWeight:'700',color:'white'}}>Bring Fun Life to</Typography>
        <Typography sx={{fontSize:{xs:'35px',sm:'35px',md:'50px'},fontWeight:'700',color:'white'}}> Your Kids</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'400',color:'black'}}>Amazing Playground for your kids</Typography>
<Box>
        <Button variant='contained' sx={{width:'150px',marginTop:'10px',backgroundColor:'#DC3545',borderRadius:'0px 50px 0px 50px'}}>LEARN MORE</Button>
        </Box>
          </Box> */}
          {/* <Ram>
       
        </Ram> */}
        </Box>
        {/* <Navbar2>
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
             
        </Navbar2> */}
   
        </NavBar>

        {/* <Navbar3>
        <Box>
          <Typography sx={{fontSize:'17px',fontWeight:'600'}}>Reserve pickup or delievery</Typography>
        </Box>
            <Box >
            <Button variant='contained' sx={{width:'120px',backgroundColor:'#FFFFFF',color:'black',border:'1px solid black',borderRadius:'20px',"&:hover":{backgroundColor:'black',color:'white',height:'30px'}}}>See times</Button>
         </Box>
         </Navbar3> */}
     

       


        
        </>
       
     
    
  )
}