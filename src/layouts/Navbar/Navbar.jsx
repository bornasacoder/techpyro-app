import React,{useState} from 'react';
import SearchBar from './searchbar/SearchBar'
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
    Badge,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    
    
  } from "@mui/material";

import { AccountCircle, Call, EastOutlined, ExpandMore, Favorite, FavoriteBorder, Help, Home, HomeOutlined, LocalCarWashOutlined, LocationCityRounded, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Redeem,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart} from '@mui/icons-material';

import MenuButtons from '../../components/menuButtons/MenuButtons';
import { Link } from 'react-router-dom';


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
  zIndex:'0',
  [theme.breakpoints.down('md')]: {
    display:'none'
      
  },
  [theme.breakpoints.down('sm')]: {
    display:'none'
      
  },
      
  }
));
const Navbar3 = styled(Box)(({ theme }) => ({
display:'none',

[theme.breakpoints.down('md')]: {
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  background:'white',
  height:'40px',
    padding:'0px 20px',
   position:'sticky'
},
  
  [theme.breakpoints.down('sm')]: {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    background:'white',
    height:'40px',
      padding:'0px 20px',
     position:'sticky'
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
    backgroundColor:theme.header.background,
   
    width:'100%',
    height:'80px',
    margin:"0",
    padding:'0',
    // zIndex:'100',
position:'sticky',
[theme.breakpoints.down('md')]: {
  height:'70px',
  width:'100%',
 
},

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
       
          <Link to='/'>
        <Box sx={{display:{xs:'flex',sm:'flex',md:'block'}}}>
            <HomeOutlined sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'30px',sm:'30px',md:'45px'}}}/>
           </Box>
           </Link>
          <Box >
          <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'30px'},fontWeight:'1000',color:'black'}}>BAKERY</Typography>
          </Box>
          {/* <Box>
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'600',color:'red',fontFamily:'cursive'}}>IMARA</Typography>
          </Box> */}
          {/* <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Typography sx={{fontSize:{xs:'18px',sm:'20px',md:'18px'},fontWeight:'800',color:'black'}}>WROGN</Typography>
          <Typography sx={{color:'black',fontSize:'10px'}}>ACTIVE</Typography>
          </Box> */}
          {/* <Box>
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'600',color:'black',fontFamily:'fantasy'}}>SINGLE</Typography>
          </Box> */}
           
                {/* <NavButton/> */}
               
            </NavLeft >
          
            <NavRight > 
            

            <Box sx={{display: {xs:'none',sm:'none',md:'block'}}}> 
           <SearchBar />
          </Box>
        <Box sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'30px'}}>
            <Box sx={{cursor:'pointer',position:'relative',"&:hover .list":{display:'flex'}}}>
            <Typography sx={{color:'black',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><Person2Outlined sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}}/>My Account</Typography>
            <Box  className={'list'} sx={{position:'absolute',display:'none',flexDirection:'column',width:'250px',background:'white',right:'0px',height:'auto',  zIndex:'100',border:'1px solid rgba(0,0,0,0.3)',top:'32px',borderRadius:'5px'}}>

                <Box sx={{margin:'20px'}}>
                 <Typography sx={{color:'black',fontSize:'18px',fontWeight:'600'}}>Welcome</Typography>
                 <Box sx={{display:'flex',gap:'10px'}}>
                    <Link to='/login'>
                    <Button variant='outlined' sx={{color:'black',fontSize:'12px',height:'35px',borderRadius:'5px'}}>SIGN IN</Button>
                    </Link>

                    <Link to='/signup'>
                    <Button variant='outlined' sx={{color:'black',fontSize:'12px',height:'35px',borderRadius:'5px'}}>REGISTER</Button>
                    </Link>
                 </Box>
                </Box>
                <Divider/>
                
                <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px',display:'flex',alignItems:'center',gap:'5px'}}><Favorite />Wishlist</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>


        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px',display:'flex',alignItems:'center',gap:'5px'}}><ShoppingCart/>Orders</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>


        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMore/>}>
             <Typography sx={{fontWeight:'600',fontSize:'16px',display:'flex',alignItems:'center',gap:'5px'}}><Redeem/>Coupons</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
               <Typography>T Shirts</Typography>
          </AccordionDetails>
        </Accordion>
        <Divider/>

        <Accordion>
          <AccordionSummary>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Saved Address</Typography>
          </AccordionSummary>
       
        </Accordion>
        <Divider/>


        <Accordion>
          <AccordionSummary>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>Contact</Typography>
          </AccordionSummary>
       
        </Accordion>
 <Divider/>


        <Accordion>
          <AccordionSummary>
             <Typography sx={{fontWeight:'600',fontSize:'16px'}}>FAQs</Typography>
          </AccordionSummary>
       
        </Accordion>
            </Box>
            </Box>

            <Typography sx={{color:'black',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><ShoppingBag sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}} />Bag</Typography>
           
           
           </Box>

         
           
             

          
              
               
              
              
            </NavRight>
            
        </StyleToolbar>
        </Box>
       
        {/* <Navbar2>
               <Box sx={{cursor:'pointer',position:'relative',"&:hover .list":{display:'flex'}}}>
              <Typography sx={{color:'black',fontWeight:'600'}}>TOP WEAR</Typography>
                 <Box className={'list'} sx={{position:'absolute',display:'none',flexDirection:'column',width:'180px',background:'white',left:'0px',height:'auto',  zIndex:'100',border:'1px solid rgba(0,0,0,0.3)',borderRadius:'5px',padding:'20px',gap:'10px'}}>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                 </Box>
               </Box>


               <Box sx={{cursor:'pointer',position:'relative',"&:hover .list":{display:'flex'}}}>
              <Typography sx={{color:'black',fontWeight:'600'}}>BOTTOM WEAR</Typography>
                 <Box className={'list'} sx={{position:'absolute',display:'none',flexDirection:'column',width:'180px',background:'white',left:'0px',height:'auto',  zIndex:'100',border:'1px solid rgba(0,0,0,0.3)',borderRadius:'5px',padding:'20px',gap:'10px'}}>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                 </Box>
               </Box>
             

               <Box sx={{cursor:'pointer',position:'relative',"&:hover .list":{display:'flex'}}}>
              <Typography sx={{color:'black',fontWeight:'600'}}>FOOT WEAR</Typography>
                 <Box className={'list'} sx={{position:'absolute',display:'none',flexDirection:'column',width:'180px',background:'white',left:'0px',height:'auto',  zIndex:'100',border:'1px solid rgba(0,0,0,0.3)',borderRadius:'5px',padding:'20px',gap:'10px'}}>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                 </Box>
               </Box>

               <Box sx={{cursor:'pointer',position:'relative',"&:hover .list":{display:'flex'}}}>
              <Typography sx={{color:'black',fontWeight:'600'}}>ACCESSORIES</Typography>
                 <Box className={'list'} sx={{position:'absolute',display:'none',flexDirection:'column',width:'180px',background:'white',left:'0px',height:'auto',  zIndex:'100',border:'1px solid rgba(0,0,0,0.3)',borderRadius:'5px',padding:'20px',gap:'10px'}}>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                 </Box>
               </Box>
             
               <Box sx={{cursor:'pointer',position:'relative',"&:hover .list":{display:'flex'}}}>
              <Typography sx={{color:'black',fontWeight:'600'}}>SHOP BY THEMES</Typography>
                 <Box className={'list'} sx={{position:'absolute',display:'none',flexDirection:'column',width:'180px',background:'white',left:'0px',height:'auto',  zIndex:'100',border:'1px solid rgba(0,0,0,0.3)',borderRadius:'5px',padding:'20px',gap:'10px'}}>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                 </Box>
               </Box>
             

               <Box sx={{cursor:'pointer',position:'relative',"&:hover .list":{display:'flex'}}}>
              <Typography sx={{color:'black',fontWeight:'600'}}>NEW ARRIVALS</Typography>
                 <Box className={'list'} sx={{position:'absolute',display:'none',flexDirection:'column',width:'180px',background:'white',left:'0px',height:'auto',  zIndex:'100',border:'1px solid rgba(0,0,0,0.3)',borderRadius:'5px',padding:'20px',gap:'10px'}}>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                 </Box>
               </Box>
             

               <Box sx={{cursor:'pointer',position:'relative',"&:hover .list":{display:'flex'}}}>
              <Typography sx={{color:'black',fontWeight:'600'}}>BEST SELLERS</Typography>
                 <Box className={'list'} sx={{position:'absolute',display:'none',flexDirection:'column',width:'180px',background:'white',left:'0px',height:'auto',  zIndex:'100',border:'1px solid rgba(0,0,0,0.3)',borderRadius:'5px',padding:'20px',gap:'10px'}}>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                 </Box>
               </Box>
             

               <Box sx={{cursor:'pointer',position:'relative',"&:hover .list":{display:'flex'}}}>
              <Typography sx={{color:'black',fontWeight:'600'}}>TRENDING</Typography>
                 <Box className={'list'} sx={{position:'absolute',display:'none',flexDirection:'column',width:'180px',background:'white',left:'0px',height:'auto',  zIndex:'100',border:'1px solid rgba(0,0,0,0.3)',borderRadius:'5px',padding:'20px',gap:'10px'}}>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                      <Typography sx={{color:'black',fontWeight:'600'}}>T SHIRTS</Typography>
                 </Box>
               </Box>
             
              <Typography sx={{color:'red',fontWeight:'600'}}>CLEARANCE</Typography>
             
        </Navbar2> */}
   
        </NavBar>

        <Navbar3>
         <Box >
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'black',fontSize:{xs:'20px',sm:'30px',md:'30px'}}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons setOpen={setOpen}/>
            </Drawer>
           
            </Box>
            <Box sx={{display:'flex',gap:'20px'}}>
         <Search sx={{color:'black',fontSize:{xs:'20px',sm:'30px',md:'30px'}}}/>
         <Link to='/login'>
         <Person2Outlined sx={{color:'black',fontSize:{xs:'20px',sm:'30px',md:'30px'}}}/>
         </Link>
         <ShoppingBag sx={{color:'black',fontSize:{xs:'20px',sm:'30px',md:'40px'}}} />
         </Box>
         </Navbar3>
     

       


      
        </>
       
     
    
  )
}
