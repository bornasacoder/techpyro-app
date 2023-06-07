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

import { AccountCircle, ArrowDropDownCircle, Bungalow, Call, EastOutlined, Facebook, FavoriteBorder, GridView, Help, Home, HomeOutlined, Instagram, LocalCarWashOutlined, LocationCityRounded, LocationCitySharp, LocationOn, Mail, Menu, PercentRounded, PercentTwoTone, Person, Person2Outlined, Person3Outlined,  Pinterest,  School,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart, Twitter, Window} from '@mui/icons-material';

import MenuButtons from '../menuButtons/MenuButtons';


const StyleToolbar = styled(Toolbar)(({theme}) => ({
  height:'100px',
  width:'100%',
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    gap:'30px',
    margin:'0px 150px',
    borderBottom:'0.5px solid rgba(255,255,255,0.5)',
    // backgroundColor:'#7F3486',
    // position: 'sticky',
    [theme.breakpoints.down('md')]: {
        height: 'auto',
        
        },
        [theme.breakpoints.up('sm')]: {
            height: 'auto',
           
            
            },
        [theme.breakpoints.down('sm')]: {
          height: '30px',
          width:'100%',
          justifyContent:'space-between',
              margin:'0px 0px',
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
        gap:'20px', 
        // marginLeft:'30px',
          // justifyContent: 'space-between',
        // paddingLeft:'30px',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gap:"10px"
        },
        [theme.breakpoints.down('sm')]: {
          margin:'20px',
            // width:'150px',
           
            gap:"20px"
        },
        
        
    }));
    const NavRight = styled(Box)(({theme}) => ({
       
        // flex:'3',
        display: 'flex',
         gap:'10px',
        // paddingRight:'30px',
           flexDirection:"row",
        alignItems: 'center',
        // marginRight:'30px',
        // [theme.breakpoints.down('md')]: {
            //     justifyContent:"space-between"
            // },
            [theme.breakpoints.down('sm')]: {
               paddingRight:'0px',
               margin:'20px'
              //  display:'block',
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
 margin:'0px 150px',
  height:'80px',
  width:'auto',
  position:'sticky',
  flexDirection:'row',
  gap:'30px',
  
 
  [theme.breakpoints.down('sm')]: {
   margin:'0px 20px',
      
  },
      
  }
));
const Navbar3 = styled(Box)(({ theme }) => ({
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  // gap:'30px',
  height:'60px',
  width:'80%',
    margin:'-30px 150px 0px 150px',
   position:'absolute',
   zIndex:'100000',
  backgroundColor:'#FFB606',
  [theme.breakpoints.down('sm')]: {
    display:'none',
  },
      
  }
));
const Ram = styled(Box)(({ theme }) => ({
  height:'660px',
  width:'50%',

    backgroundImage: `url(${"/images/category/byjus1.png"})`,
   backgroundSize:'cover',
  margin:'0px',
  [theme.breakpoints.down('sm')]: {
   display:'none'
 },
      
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
    backgroundColor:'#2A4856',
   
    width:'100%',
    height:'150px',
    margin:"0",
    padding:'0',
    position:'static',
zIndex:'-1',

[theme.breakpoints.down('sm')]: {
  height:'90px',
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
    
       <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'40px',}}>
        <StyleToolbar>
        
        <NavLeft >
       
        {/* <Box >
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'white',fontSize:'30px'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
            </Box> */}
            <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'white'}}>Have any questions?</Typography>
          
          </Box>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>  
          <Call sx={{color:'white',fontSize:'20px'}}/>      
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'rgba(255,255,255,0.5)',"&:hover":{color:'orange'}}}>+91-9876543210</Typography>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>  
          <Mail sx={{color:'white',fontSize:'20px'}}/>       
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'rgba(255,255,255,0.5)',"&:hover":{color:'orange'}}}>agency@gmail.com</Typography>
        
          </Box>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}> 
          <Person sx={{color:'white',fontSize:'20px'}}/>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'rgba(255,255,255,0.5)',"&:hover":{color:'orange'}}}>Demo Account</Typography>
          
          </Box>

          <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},alignItems:'center',gap:'5px'}}>  
          <Call sx={{color:'white',fontSize:'20px'}}/>      
         
          </Box>

          <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},alignItems:'center',gap:'5px'}}>  
          <Mail sx={{color:'white',fontSize:'20px'}}/>       
         
        
          </Box>

          <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},alignItems:'center',gap:'5px'}}> 
          <Person sx={{color:'white',fontSize:'20px'}}/>        
          
          
          </Box>
                
        
               
            </NavLeft >
         
            <NavRight > 
            <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}>  
               
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'rgba(255,255,255,0.5)',"&:hover":{color:'orange'}}}>Register</Typography>
        
          </Box>
           <h>|</h>
          <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}>  
                
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'rgba(255,255,255,0.5)',"&:hover":{color:'orange'}}}>Login</Typography>
        
          </Box>
            
    
        
            </NavRight>
            
        </StyleToolbar>
        
        </Box>
        
        {/* <Box sx={{display:'flex'}}> */}
        {/* <Ram>
       
        </Ram> */}

        {/* <Box sx={{backgroundColor:'#FCFCFC',width:{xs:'100%',sm:'100%',md:'400px'},height:'500px',display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:{xs:'30px',sm:'70px',md:'0px'},borderRadius:'20px',margin:{xs:'0px',sm:'0px',md:'50px 0 0 70px'},flexDirection:'column',gap:'10px'}}>

        <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'600',color:'black'}}>Book your Free Class</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'300',color:'black'}}>Learn from India's best teachers</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'500',color:'black'}}>Enter your Details</Typography>

          <Box sx={{backgroundColor:`${theme.header.background}`,display:'flex',flexDirection:'column',width:{xs:'320px',sm:'350px',md:'400px'},gap:'10px'}}>
            <TextField variant='outlined' label='Enter Nmae  '></TextField>
            
            <TextField variant='outlined' label=' mobile no'></TextField>
           
           
            <TextField variant='outlined' label='Email Address'></TextField>
            
            
    
    
            <Button variant='contained' sx={{borderRadius:'10px',fontSize:'25px',backgroundColor:'#FF853A'}}>Shedule a Free Class</Button>
          
          </Box>
        </Box> */}
        <Navbar2>
          <Box sx={{display:'flex',justifyContent:'space-between',width:'100%'}}>
        <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}> 
        <School sx={{fontSize:'50px',color:'#FFB606'}}/>
          <Typography sx={{fontSize:{xs:'30px',sm:'20px',md:'30px'},fontWeight:'700',color:'white'}}>ABC School</Typography>
          </Box>
               <Box sx={{display: {xs:'none',sm:'none',md:'block'}}}> 
           <SearchBar />
          </Box>
           <Box sx={{display:'flex',alignItems:'center'}}>
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'white',fontSize:'30px'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
            </Box>
          </Box>
        </Navbar2>
        </NavBar>

      <Navbar3>
        <Box sx={{display:'flex',paddingLeft:'20px'}}>
         <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'600',color:'black',"&:hover":{color:'white'}}}>Home</Typography>
          
          </Box>
<p>|</p>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center'}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'600',color:'black',"&:hover":{color:'white'}}}>Academies</Typography>
          </Box>
          <p>|</p>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'600',color:'black',"&:hover":{color:'white'}}}>Admission</Typography>
          
          </Box>
          <p>|</p>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'600',color:'black',"&:hover":{color:'white'}}}>Pages</Typography>
          <ArrowDropDownCircle sx={{color:'black'}}/>
          </Box>
          <p>|</p>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center'}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'600',color:'black',"&:hover":{color:'white'}}}>Blog</Typography>
          </Box>
          <p>|</p>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center'}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'600',color:'black',"&:hover":{color:'white'}}}>Shop</Typography>
          </Box>
          <p>|</p>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center'}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'600',color:'black',"&:hover":{color:'white'}}}>Contact</Typography>
          </Box>
          </Box>


          <Box sx={{display:'flex',alignItems:'center'}}>
          <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'},}}>
          
          <Instagram sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'Black'}} />
          <Facebook sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'Black'}}/>
          <Twitter sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'Black'}}/>
          <Pinterest sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'Black'}}/>
        </Box>
          </Box>
         </Navbar3>
       

     
     

       


        {/* <Ram>
       
        </Ram> */}
        </>
       
     
    
  )
}
