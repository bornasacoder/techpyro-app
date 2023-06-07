
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

import { AccountCircle, ArrowDropDown, ArrowDropDownCircle, AutoStories, Bungalow, Call, EastOutlined, Facebook, FavoriteBorder, GridView, Help, Home, HomeOutlined, House, Instagram, LinkedIn, LocalCarWashOutlined, LocationCityRounded, LocationCitySharp, LocationOn, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart, Twitter, Window, YouTube, YoutubeSearchedFor} from '@mui/icons-material';

import MenuButtons from '../menuButtons/MenuButtons';

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
        marginLeft:'50px',
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
        marginRight:'50px',
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
    color:theme.header.background,
    margin:"0",
    padding:'0',
        
    }
));
const Card3 = styled(IconButton)(({ theme }) => ({
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
  height:'80px',
  width:'27%',

  backgroundImage: `url(${"/images/category/dps1.png"})`,
  backgroundSize:'cover',
  margin:'0px',
  [theme.breakpoints.down('sm')]: {
 height:'40px',
 width:'57%',
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
    
  backgroundColor:'#0D2D62',
    width:'100%',
    height:'180px',
    margin:"0",
    padding:'0',
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
    
       <Box sx={{height:{xs:'50px',sm:'80px',md:'50px'},display:{xs:'none',sm:'none',md:'flex'},justifyContent:'center',alignItems:'center',backgroundColor:'#FFFFFF',margin:{xs:'15px',sm:'15px',md:'0px'},borderRadius:'0px',zIndex:'50'}}>
        <StyleToolbar>
        
        <NavLeft >
       
       
        
          {/* <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}>
            <AutoStories sx={{color:'#1DA1F2',fontSize:{xs:'30px',sm:'20px',md:'40px'}}}/>
          <Typography sx={{fontSize:{xs:'30px',sm:'20px',md:'40px'},fontWeight:'700',color:'#1F3965'}}>Teachmint</Typography>
          </Box> */}
 <Box sx={{display:'flex',gap:'10px'}}>
        <LinkedIn sx={{fontSize: {xs:'25px',sm:'30px',md:'25px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'red',"&:hover":{color:'blue'}}} />
          <Instagram sx={{fontSize: {xs:'25px',sm:'30px',md:'25px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'red',"&:hover":{color:'blue'}}} />
          <Facebook sx={{fontSize: {xs:'25px',sm:'30px',md:'25px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'red',"&:hover":{color:'blue'}}}/>
          <YouTube sx={{fontSize: {xs:'25px',sm:'30px',md:'25px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'red',"&:hover":{color:'blue'}}}/>
         
        </Box>

         

         

          {/* <Box sx={{display: {xs:'block',sm:'block',md:'block'}}}> 
           <SearchBar />
          </Box> */}
                
        
               
            </NavLeft >
          
            <NavRight > 
            

            <Box sx={{display:'flex',gap:'30px'}}>
              <Link to='/Contact Us' style={{textDecorationLine:'none'}}>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px',marginTop:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'#DC3545',"&:hover":{color:'blue'},textDecorationLine:'none'}}>POCSO ACT</Typography>
          </Box>
          </Link>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px',position:'relative',"&:hover .drop1":{display:'flex'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'#DC3545',"&:hover":{color:'blue'}}}>HOSTEL</Typography>
          <ArrowDropDown sx={{color:'red'}}/>
          <Box className={'drop1'} sx={{color:'black',fontSize:'20px',display:'none',position:'absolute',width:'200px',background:'white',top:'30px',flexDirection:'column',padding:'20px',gap:'10px',boxShadow:'0px 2px 4px 3px rgba(0, 0, 0, 0.5)'}}>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Sailent Features</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Residential Life</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Academic Achievements</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Beyond academics</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Fee Structure</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Rules & Regulations</Typography>
            
          </Box>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'#DC3545',"&:hover":{color:'blue'}}}>INTER DPS RANKINGS</Typography>
          
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px'}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'#DC3545',"&:hover":{color:'blue'}}}>INFRASTRUCTURE</Typography>
          
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px',position:'relative',"&:hover .drop1":{display:'flex'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'#DC3545',"&:hover":{color:'blue'}}}>ACHIEVEMENTS</Typography>
          <ArrowDropDown sx={{color:'red'}}/>
          <Box className={'drop1'} sx={{color:'black',fontSize:'20px',display:'none',position:'absolute',width:'180px',background:'white',top:'30px',flexDirection:'column',padding:'20px',gap:'10px',boxShadow:'0px 2px 4px 3px rgba(0, 0, 0, 0.5)'}}>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Session 2022-2023</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Session 2021-2022</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Session 2020-2021</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Session 2019-2020</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'400'}}>Session 2018-2019</Typography>
             
          </Box>
          </Box>

          <Link to='/Search' style={{textDecorationLine:'none'}}>
         <Search sx={{color:'#DC3545',fontSize:'30px',"&:hover":{color:'blue'}}}/>
         </Link>

          </Box>
           
            
        

        
            </NavRight>
            
        </StyleToolbar>
        </Box>
        <Box sx={{display:'flex',flexDirection:{xs:'row',sm:'row',md:'column'},justifyContent:{xs:'center',sm:'center',md:'space-evenly'},alignItems:'center',height:'100%',gap:{xs:'100px',sm:'120px',md:'0px'}}}>
        

        {/* <Box sx={{width:{xs:'auto',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',gap:'0px',textAlign:{xs:'center',sm:'center',md:'center'}}}>
       
        <Typography sx={{fontSize:{xs:'35px',sm:'35px',md:'40px'},fontWeight:'600',color:'white',height:'40px'}}>DELHI PUBLIC SCHOOL</Typography>
        <Typography sx={{fontSize:{xs:'35px',sm:'35px',md:'40px'},fontWeight:'600',color:'white'}}>AZAAD NAGAR</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'400',color:'black'}}>Amazing Playground for your kids</Typography>

          </Box> */}
          {/* <Ram>
     
        </Ram> */}
        <Box>
          <Typography sx={{fontSize:'30px'}}>PLAY SCHOOL</Typography>
        </Box>

        <Box sx={{}}>
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'white',fontSize:'30px'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
            </Box>

        <Box sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'50px'}}>
 
        <Link to='/' style={{textDecorationLine:'none'}}>
        <House sx={{color:'white',fontSize:'30px',display:{xs:'none',sm:'none',md:'block'}}}/>
        </Link>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px',position:'relative',"&:hover .drop1":{display:'flex'}}}>    
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'white'}}>About Us</Typography>
          <ArrowDropDown sx={{color:'white'}}/> 
          <Box className={'drop1'} sx={{color:'black',fontSize:'20px',display:'none',position:'absolute',width:'230px',background:'white',top:'30px',flexDirection:'column',padding:'20px',gap:'10px',boxShadow:'0px 2px 4px 3px rgba(0, 0, 0, 0.5)'}}>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Legacy Since 1997</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Our Ethos</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Our Mentors</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Our Branches</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>CBSE Information</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Awards</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Infrastructure & Facilities</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Testimonials</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Alumini</Typography>
          </Box>
          </Box>
        
<Link to='/Admission Form' style={{textDecorationLine:'none'}}>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px',paddingTop:'5px'}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'white'}}>Admissions Enquiry</Typography>
          </Box>
          </Link>  

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px',position:'relative',"&:hover .drop1":{display:'flex'}}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'white'}}>Academics</Typography>
          <ArrowDropDown sx={{color:'white'}}/>
          <Box className={'drop1'} sx={{color:'black',fontSize:'20px',display:'none',position:'absolute',width:'230px',background:'white',top:'30px',flexDirection:'column',padding:'20px',gap:'10px',boxShadow:'0px 2px 4px 3px rgba(0, 0, 0, 0.5)'}}>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Overview</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Admission Procedure</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Fee Structure</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>School Uniform</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Admission Inquiry</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Buniyad Scholarship</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Infrastructure & Facilities</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Testimonials</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Alumini</Typography>
          </Box>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px',position:'relative',"&:hover .drop1":{display:'flex'}}}>        
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'white'}}>Beyond Academics</Typography>
          <ArrowDropDown sx={{color:'white'}}/>
          <Box className={'drop1'} sx={{color:'black',fontSize:'20px',display:'none',position:'absolute',width:'230px',background:'white',top:'30px',flexDirection:'column',padding:'20px',gap:'10px',boxShadow:'0px 2px 4px 3px rgba(0, 0, 0, 0.5)'}}>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Overview</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Admission Procedure</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Fee Structure</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>School Uniform</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Admission Inquiry</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Buniyad Scholarship</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Infrastructure & Facilities</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Testimonials</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Alumini</Typography>
          </Box>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px',position:'relative',"&:hover .drop1":{display:'flex'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'white'}}>Results</Typography>
          <ArrowDropDown sx={{color:'white'}}/>
          <Box className={'drop1'} sx={{color:'black',fontSize:'20px',display:'none',position:'absolute',width:'230px',background:'white',top:'30px',flexDirection:'column',padding:'20px',gap:'10px',boxShadow:'0px 2px 4px 3px rgba(0, 0, 0, 0.5)'}}>
          <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Session 2022-2023</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Session 2021-2022</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Session 2020-2021</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Session 2019-2020</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Session 2018-2019</Typography>
          </Box>
          </Box>

          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px',position:'relative',"&:hover .drop1":{display:'flex'}}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'white'}}>Media</Typography>
          <ArrowDropDown sx={{color:'white'}}/>
          <Box className={'drop1'} sx={{color:'black',fontSize:'20px',display:'none',position:'absolute',width:'230px',background:'white',top:'30px',flexDirection:'column',padding:'20px',gap:'10px',boxShadow:'0px 2px 4px 3px rgba(0, 0, 0, 0.5)'}}>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Gallery</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}}>Press Coverage</Typography>
              
          </Box>
          </Box>

<Link to='/Contact Us' style={{textDecorationLine:'none'}}>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex'},alignItems:'center',gap:'5px',marginTop:'5px'}}>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:'white'}}>Contact Us</Typography>
          </Box>
          </Link>

          </Box>

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