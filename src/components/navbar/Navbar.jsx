import React,{useState} from 'react';
import SearchBar from '../searchbar/SearchBar'
import SearchIcon from '@mui/icons-material/Search';
// import NavButton from 'components/navButton/NavButton'
import {Link} from 'react-router-dom';
// import Slider from '@mui/material/Slider';
// import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import "./navbar.css"
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    styled,
    Drawer,
    IconButton,
    // TextField,
    // List,
    // ListItemText,
    // Badge,
    
    
  } from "@mui/material";

// import { AccountCircle, Call, EastOutlined, FavoriteBorder, Help, Home, HomeOutlined, LocalCarWashOutlined, LocationCityRounded, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart} from '@mui/icons-material';
import {Menu , Person2Outlined , ShoppingBag} from '@mui/icons-material';
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
          width:'102.5%',
              padding:'0px',
             
              // justifyContent:'space-between'
          },
        
        color:theme.header.background,
    }));
    

    
    
    const NavLeft = styled(Box)(({theme}) => ({
        
        // flex:'3',
        display: 'flex',
        gap:'17px', 
        marginLeft:'10px',
          // justifyContent: 'space-between',
        // paddingLeft:'30px',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            gap:"10px",
            display:"none"

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
        //  gap:'10px',
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
              marginRight:'20px',
                // display:''
            },
            
            
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
  height:'50px',
  width:'100%',
  position:'sticky',
  flexDirection:'row',
  gap:'30px',
  textAlign:'center',
  border:'1px solid rgba(0,0,0,0.1)',
  [theme.breakpoints.down('sm')]: {
    display:'flex',
    height:'auto',
      
  },
      
  }
));

const NavBar = styled(AppBar)(({theme}) =>({
    backgroundColor:theme.header.background,
   
    width:'100%',
    height:'110px',
    margin:"0",
    padding:'0',
    position:'sticky',

[theme.breakpoints.down('sm')]: {
  height:'50px',
  width:'100%',
},

}));






export default function Navbar() {
    // const arr = [{name:'title'},{name:'about'},{name:'contact'}]
    // const theme = useTheme();
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
        
                <Box>
                  <Typography sx ={ {fontSize:{xs:'20px' , sm:'20px',md:'20px',lg:'',xl:''}, fontWeight:'900', 
                    color:'black' , marginLeft:'25px'}} >SAMSUNG</Typography>
                </Box>
            <NavLeft>
                
                <Box>
                 <Link to="/mobile"  style={{textDecoration:'inherit'}} > <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'15px'}, fontWeight:'600',fontFamily:'cursive', 
                    marginLeft:'60px', color:'black'}}>Mobile</Typography></Link>
                </Box>
                
                <Box>
                  <Link to="/tv&Av" style={{textDecoration:'inherit'}} ><Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'18px'} , fontFamily:'cursive' , fontWeight:'600' 
                    ,color:'black'}}>TV & AV</Typography></Link>
                </Box>
              
                <Box>
                 <Link to ="/homeAppliances" style={{textDecoration:'inherit'}} > <Typography sx={{fontSize:{sx:'15px',sm:'20px',md:'15px'} , fontWeight:'700',fontFamily:'sans-serif' 
                    ,color:'black'}}>Home Appliances</Typography></Link>
                </Box>
                <Box>
                  <Link to="/monitors" style={{textDecoration:'inherit'}} ><Typography sx={{fontSize:{sx:'15px',sm:'20px',md:'18px'},fontWeight:'700',color:'black'}} >Laptop & 
                    Monitors</Typography></Link>
                </Box>
                <Box>
                 <Link to ="/display" style={{textDecoration:'inherit'}} > <Typography sx={{fontSize:{sx:'15px',sm:'20px',md:'18px'},fontWeight:'700',color:'black'}} 
                    >Display</Typography></Link>
                </Box>
                <Box>
                  <Link to ="/accessories" style={{textDecoration:'inherit'}} ><Typography sx={{fontSize:{sx:'15px',sm:'20px',md:'18px'},fontWeight:'700',color:'black'}}>Accessories</Typography></Link>
                </Box>
                <Box>
                  <Link to="/smartThing" style={{textDecoration:'inherit'}} ><Typography sx={{fontSize:{sx:'15px',sm:'20px',md:'18px'},fontWeight:'700',color:'black'}}>SmartThings</Typography></Link>
                </Box>
                <Box>
                  <Link to ="/offers" style={{textDecoration:'inherit'}} ><Typography sx={{fontSize:{sx:'15px',sm:'20px',md:'18px'},fontWeight:'700',color:'black'}}>Offers</Typography></Link>
                </Box>
                
            </NavLeft >
          
            <NavRight >
                <Box  sx={{display: {xs:'none',sm:'none',md:'block'}}}>
                  <Link to="/support"style={{textDecoration:'inherit'}} >
                  <Typography sx={{fontSize:{sx:'20px',sm:'18px',md:'15px'},fontWeight:'500',color:'black'}}>Support</Typography>
                  </Link>
                </Box>
                <Box  sx={{display: {xs:'none',sm:'none',md:'block'}}}>
                  <Link to ="/forBussiness"style={{textDecoration:'inherit'}} ><Typography sx={{fontSize:{sx:'20px',sm:'18px',md:'15px'},fontWeight:'500',color:'black',marginRight:'6px'}}>For Business</Typography></Link>
                </Box>
                <Box sx={{display: {xs:'none',sm:'none',md:'block'}}}> 
                <SearchBar />
                </Box>
               <Box sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'20px'}}>
                
                  <Link to ="/person2outLined" ><Typography sx={{color:'black',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><Person2Outlined sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}}/></Typography></Link>

                  <Link to ="/shoppingBag" ><Typography sx={{color:'black',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><ShoppingBag sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}} /></Typography></Link>

               </Box>
               <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},gap:'20px'}}>
                
                <Link to ="/person2outLined" ><Typography sx={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><SearchIcon sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}}/></Typography></Link>
                <Link to ="/person2outLined" ><Typography sx={{color:'black',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><Person2Outlined sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}}/></Typography></Link>
                <Link to ="/person2outLined" ><Typography sx={{color:'black',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><ShoppingBag sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}}/></Typography></Link>
             </Box>

           <Box >
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'block', lg:"block"},color:'black',marginLeft:'15px'}}/>
            </MenuButton>
            <Drawer anchor='right' open={open} onClose={handleClose} sx={{position:'absolute', width:"50%"}}>
                <MenuButtons/>
            </Drawer>
           
            </Box>
            </NavRight>
            
        </StyleToolbar>
        </Box>
       
        <Navbar2 sx={{backgroundColor:'teal'}}>
              <Typography sx={{fontWeight:'600' , color:'white'}}>Welcome back. Preserve your next Galaxy on samsung.com. Enjoy exlusive benefits worths ₹ 5000 <Link to='reserve now'>Reserve now</Link></Typography>
             
        </Navbar2>
   
        </NavBar>
        </>
 
  )
}
