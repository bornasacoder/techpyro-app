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

import { AccountCircle, ArrowDropDownCircle, Bungalow, Call, EastOutlined, FavoriteBorder, GridView, Help, Home, HomeOutlined, LocalCarWashOutlined, LocationCityRounded, LocationCitySharp, LocationOn, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart, Window} from '@mui/icons-material';

import MenuButtons from '../menuButtons/MenuButtons';


const StyleToolbar = styled(Toolbar)(({theme}) => ({
  height:'100px',
  width:'100%',
    display: 'flex',
    justifyContent:'center',
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
           
            gap:"10px"
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
               margin:'0px'
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
  backgroundImage: `url(${"https://img.freepik.com/free-psd/back-school-facebook-cover-banner-template_106176-1197.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"})`,
  backgroundSize:'cover',
   
    width:'100%',
    height:'750px',
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
    
       <Box sx={{height:{xs:'50px',sm:'80px',md:'90px'},display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'#7F3486',}}>
        <StyleToolbar>
        
        <NavLeft >
       
        <Box >
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'white',fontSize:'30px'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
            </Box>
        
          <Box sx={{display:{xs:'block',sm:'block',md:'block'}}}>
          <Typography sx={{fontSize:{xs:'25px',sm:'30px',md:'40px'},fontWeight:'700',color:'white',fontFamily:'cursive'}}>ABC School</Typography>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'#F1C543'}}>Study Material</Typography>
          <ArrowDropDownCircle sx={{color:'#F1C543'}}/>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'#F1C543'}}> Answer</Typography>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'#F1C543'}}>Scholarship</Typography>
          <ArrowDropDownCircle sx={{color:'#F1C543'}}/>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'#F1C543'}}>BTC</Typography>
          <ArrowDropDownCircle sx={{color:'#F1C543'}}/>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'#F1C543'}}>Buy a Course</Typography>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'#F1C543'}}>Success Stories</Typography>
          </Box>

         

          {/* <Box sx={{display: {xs:'block',sm:'block',md:'block'}}}> 
           <SearchBar />
          </Box> */}
                
        
               
            </NavLeft >
          
            <NavRight > 
            

            
        <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},gap:{xs:'10px',sm:'15px',md:'20px'}}}>
       
        <Button variant='outlined' sx={{color:'#F1C543',border:'1px solid #F1C543',height:{xs:'30px',sm:'15px',md:'40px'}}}>Login</Button>
       
            <Typography sx={{color:'white',display:'flex',justifyContent:'center',alignItems:'center'}}><Call sx={{backgroundColor:'#F1C543',borderRadius:'50px',color:'#7F3486'}}/> </Typography>

            <Typography sx={{color:'white',display:'flex',justifyContent:'center',alignItems:'center'}}><Search sx={{backgroundColor:'#F1C543',borderRadius:'50px',color:'#7F3486'}} /></Typography>
           
           
           </Box>

        
            </NavRight>
            
        </StyleToolbar>
        </Box>
        {/* <Box sx={{display:'flex'}}>
        

        <Box sx={{backgroundColor:'#FCFCFC',width:{xs:'100%',sm:'100%',md:'480px'},height:'500px',display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:{xs:'30px',sm:'70px',md:'0px'},borderRadius:'20px',margin:{xs:'0px',sm:'0px',md:'50px 0 0 70px'},flexDirection:'column',gap:'10px'}}>

        <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'600',color:'black'}}>Book your sheat</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'300',color:'black'}}>Learn from India's best teachers</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'500',color:'black'}}>Enter your Details</Typography>

          <Box sx={{backgroundColor:`${theme.header.background}`,display:'flex',flexDirection:'column',width:{xs:'320px',sm:'350px',md:'400px'},gap:'10px'}}>
            <TextField variant='outlined' label='Enter Nmae of your Child '></TextField>
            <Box sx={{display:'flex',width:{xs:'300px',sm:'350px',md:'400px'},gap:'10px'}}>
            <TextField variant='outlined' label='Enter your mobile no' sx={{borderRadius:'0px',width:{xs:'230px',sm:'230px',md:'260px'}}}></TextField>
            <Button variant='contained' sx={{borderRadius:'15px',fontSize:{xs:'10px',sm:'15px',md:'15px'},backgroundColor:'#7855FF'}}>Send  OTP</Button>
            </Box>
            <TextField variant='outlined' label='Email Address'></TextField>
            
            
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="State"
        sx={{borderRadius:'10px'}}
        >
        </Select>
      </FormControl>
    
            <Button variant='contained' sx={{borderRadius:'10px',fontSize:'25px',backgroundColor:'#FF853A'}}>Shedule a  Class</Button>
          </Box>
          </Box>
        </Box> */}
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
     

       


        {/* <Ram>
       
        </Ram> */}
        </>
       
     
    
  )
}
