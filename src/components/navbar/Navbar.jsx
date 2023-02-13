import React,{useState} from 'react';
import SearchBar from '../searchbar/SearchBar'
import SearchIcon from '@mui/icons-material/Search';
// import NavButton from 'components/navButton/NavButton'
import {Link} from 'react-router-dom';
// import Slider from '@mui/material/Slider';
// import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import "./navbar.css"
import CallIcon from '@mui/icons-material/Call';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    styled,
    Drawer,
    IconButton,
    MenuItem,
    Select,
    Button,
    useTheme,
    // TextField,
    // List,
    // ListItemText,
  } from "@mui/material";

// import { AccountCircle, Call, EastOutlined, FavoriteBorder, Help, Home, HomeOutlined, LocalCarWashOutlined, LocationCityRounded, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  Search,  SearchOffOutlined,  ShoppingBag, ShoppingCart} from '@mui/icons-material';
import { Menu , Person2Outlined , ShoppingBag} from '@mui/icons-material';
import MenuButtons from 'components/menuButtons/MenuButtons';


const StyleToolbar = styled(Toolbar)(({theme}) => ({
  height:'80px',
  width:'100%',
    display: 'flex',
    justifyContent:'space-evenly',
    alignItems: 'center',
    // position: 'sticky',
    [theme.breakpoints.down('md')]: {
        height: 'auto',
        
        },
        [theme.breakpoints.up('sm')]: {
            height: 'auto',
           
            },
        [theme.breakpoints.down('sm')]: {
          
          height: '80px',
          width:'100%',
              padding:'0px',
              justifyContent:'space-between',
             
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
            

        },
        [theme.breakpoints.down('sm')]: {
            // paddingLeft:'0px',
            marginLeft:'0px',
            width:'auto'
        },
        
        
    }));

    const NavRight = styled(Box)(({theme}) => ({
       
        // flex:'3',
        display: 'flex',
         gap:'10px',
        paddingRight:'30px',
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
              marginRight:'0px',
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
    height:'90px',
    margin:"0",
    padding:'0',
    position:'sticky',

[theme.breakpoints.down('sm')]: {
  height:'80px',
  width:'100%',
},

}));

const FormControl = styled(Button)(({theme})=>({
  // backgroundColor:theme.header.background,
  width:'',
}))



export default function Navbar() {
    // const arr = [{name:'title'},{name:'about'},{name:'contact'}]
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false);
    }

    
    const [Courses, setCourses] = React.useState('');
    
    const handleChange = (event) => {
      setCourses(event.target.value);
    };
  return (
    <>
      <NavBar >
       <Box sx={{height:'70px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <StyleToolbar>
          <NavLeft>
            <Box >
              <MenuButton onClick={handleOpen}>
                  <Menu sx={{display: {xs:'block',sm:'block',md:'none', lg:"none"},color:'black',marginLeft:'15px'}}/>
              </MenuButton>
                <Drawer anchor='right' open={open} onClose={handleClose} sx={{position:'absolute', width:"50%"}}>
                    <MenuButtons/>
                </Drawer>
            
              </Box>
                <img style={{marginLeft:{xs:'40px',sm:'70px',md:'120px'}}} src="https://www.vedantu.com/cdn/images/new-header/img/vedantu-logo.svg" alt="" />
            <FormControl sx={{display:{xs:'none',sm:'none',md:'block'}}} >
              <Select
                value={Courses}
                onChange={handleChange}
                displayEmpty 
                // inputProps={{ 'aria-label': 'Without label' }}
               >
                <MenuItem value="">
                 <Typography sx={{color:'#FF693D'}}>Courses</Typography>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
                <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
                  <Typography sx={{color:'black'}}>Courses for kids</Typography>
                </Box>
                
                <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
                   <Typography sx={{color:'black'}}>Free Study Material</Typography>
                </Box>
              
                <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
                  <Typography sx={{fontWeight:'400',color:'black'}}>Free Live classes</Typography>
                </Box>
                <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
                  <Typography sx={{ fontWeight:'400'
                    ,color:'black'}}>More</Typography>
                </Box>
               
                
            </NavLeft >
          
            <NavRight >
              <Box sx={{color:'black',display:'flex',gap:'10px'}}>
                <CallIcon sx={{ "&:hover":{backgroundColor:'#FF693D'},borderRadius:'50%',fontSize:{xs:'25px',md:'30px'}}}/>
                <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
                <Typography >Talk to our Experts</Typography>
                <Typography>'1800-120-456-120'</Typography>
                </Box>
              </Box>
              <Box sx={{"&:hover":{transform:'scale(1.02)'}}}>
                <Button sx={{color:'black',border:'1px solid #8777'}}>Sign in</Button>
              </Box>
          
                
               {/* <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},gap:'20px'}}>
                
                <Link to ="/person2outLined" ><Typography sx={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><SearchIcon sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}}/></Typography></Link>
                <Link to ="/person2outLined" ><Typography sx={{color:'black',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><Person2Outlined sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}}/></Typography></Link>
                <Link to ="/person2outLined" ><Typography sx={{color:'black',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}}><ShoppingBag sx={{color:'black',fontSize:{xs:'30px',sm:'30px',md:'30px'}}}/></Typography></Link>
              </Box> */}

           
            </NavRight>
            
        </StyleToolbar>
        </Box>
       
       
   
        </NavBar>
        </>
 
  )
}
