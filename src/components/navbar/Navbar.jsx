
import React,{useState} from 'react';
import SearchBar from '../searchbar/SearchBar'
import NavButton from '../navButton/NavButton'
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

import { AccountCircle, ArrowDropDownCircle, AutoStories, Bungalow, Call, EastOutlined, FavoriteBorder, GridView, Help, Home, HomeOutlined, LocalCarWashOutlined, LocationCityRounded, LocationCitySharp, LocationOn, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart, Window} from '@mui/icons-material';

import MenuButtons from '../menuButtons/MenuButtons';


const StyleToolbar = styled(Toolbar)(({theme}) => ({
  height:'100px',
  width:'100%',
    display: 'flex',
    justifyContent:'space-evenly',
    alignItems: 'center',
    gap:'30px',
    // backgroundColor:'#7F3486',
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
            justifyContent: 'space-between',
            gap:'80px',
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
               display:'none',
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
  height:'540px',
  width:'40%',

    backgroundImage: `url(${"/images/category/teach1.png"})`,
   backgroundSize:'cover',
  margin:'0px',
  [theme.breakpoints.down('sm')]: {
  //  display:'none'
  width:'100%',
  height:'300px',
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
    backgroundColor:'#FFFFFF',
   
    width:'100%',
    height:'640px',
    margin:"0",
    padding:'0',
    position:'static',


[theme.breakpoints.down('sm')]: {
  height:'600px',
  width:'100%',
  
  backgroundColor:'white',
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
    
       <Box sx={{height:{xs:'50px',sm:'80px',md:'90px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
        <StyleToolbar>
        
        <NavLeft >
       
       
        
          <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}>
            <AutoStories sx={{color:'#1DA1F2',fontSize:{xs:'30px',sm:'20px',md:'40px'}}}/>
          <Typography sx={{fontSize:{xs:'30px',sm:'20px',md:'40px'},fontWeight:'700',color:'#1F3965'}}>Teachmint</Typography>
          </Box>

<Box sx={{display:'flex',gap:'30px'}}>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'black'}}>Solutions</Typography>
          <ArrowDropDownCircle sx={{color:'#1DA1F2'}}/>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'black'}}>Features</Typography>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'black'}}>Plans</Typography>
          
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'black'}}>About Us</Typography>
          
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'black'}}>Careers</Typography>
          </Box>
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
            

            
        <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},gap:{xs:'10px',sm:'15px',md:'20px'},alignItems:'center'}}>

        <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>  
        <Call sx={{color:'#1DA1F2',fontSize:'40px',backgroundColor:'#DDF1FD',borderRadius:'10px'}}/>      
          <Typography sx={{fontSize:{xs:'20px',sm:'15px',md:'20px'},fontWeight:'500',color:'black'}}>+91-9876543210</Typography>
         
          </Box>
       
        <Button variant='outlined' sx={{color:'#1DA1F2',border:'1px solid #1DA1F2',height:{xs:'30px',sm:'15px',md:'40px'}}}>Login</Button>
       
        <Button variant='contained' sx={{marginTop:'0px',backgroundColor:'#1DA1F2',}}>Get Started</Button>
           
           
           </Box>

        
            </NavRight>
            
        </StyleToolbar>
        </Box>
        <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
        

        <Box sx={{width:{xs:'auto',sm:'100%',md:'600px'},display:'flex',paddingBottom:{xs:'0px',sm:'70px',md:'0px'},borderRadius:'20px',margin:{xs:'30px 40px 0px 40px',sm:'0px',md:'150px 0 0 200px'},flexDirection:'column',gap:'0px',textAlign:{xs:'center',sm:'center',md:'left'}}}>

        <Typography sx={{fontSize:{xs:'35px',sm:'35px',md:'60px'},fontWeight:'800',color:'black'}}>Integrated</Typography>
        <Typography sx={{fontSize:{xs:'35px',sm:'35px',md:'60px'},fontWeight:'800',color:'black'}}>School Platform</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'400',color:'black'}}>Manage every need of your school on a single platform</Typography>
<Box>
        <Button variant='contained' sx={{width:'120px',marginTop:'10px',backgroundColor:'#1DA1F2'}}>Get Started</Button>
        </Box>
          </Box>
          <Ram>
       
        </Ram>
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
     

       
<Box sx={{display:'flex',justifyContent:'center',alignItems:'center',margin:'100px 30px',textAlign:'center'}}>
<Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'16px'},fontWeight:'500',color:'black'}}>COMPLETE MOBILE AND WEB SOLUTIONS</Typography>
</Box>

        
        </>
       
     
    
  )
}