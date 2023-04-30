import React,{useState} from 'react';
import SearchBar from 'components/navbar/searchbar/SearchBar'
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
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Badge,
    Select,
    MenuItem,
  } from "@mui/material";

import { Help, Home, Menu, PercentRounded, PercentTwoTone, Person, Person2Outlined, Search, ShoppingBag, ShoppingCart} from '@mui/icons-material';

import MenuButtons from 'components/menuButtons/MenuButtons';
import { Link } from 'react-router-dom';
import Login from 'components/pages/Login';
import { getCordinate } from 'components/Location/Location';
import { useEffect } from 'react';

const StyleToolbar = styled(Toolbar)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    height:'80px',
    [theme.breakpoints.down('md')]: {
        height: 'auto',
        // width: '93vw',
            // top: '-21px'
            marginLeft:'70px',
            marginRight:'70px'
        },
        [theme.breakpoints.down('sm')]: {
          height: 'auto',
              marginLeft:'30px',
              marginRight:'30px'
          },
        marginLeft:'150px',
        marginRight:'150px'
    }));
    
    const Cart = styled(Box)`
    flex:1;
    `;
    
    
    const NavLeft = styled(Box)(({theme}) => ({
        
        flex:'3',
        display: 'flex',
        gap:'30px', 
        //   justifyContent: 'space-between',
        
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gap:"10px"
        },
        [theme.breakpoints.down('sm')]: {
            height: '50px',
        },
        
        
    }));
    const NavRight = styled(Box)(({theme}) => ({
        
        flex:'3',
        display: 'flex',
        //  gap:'10px',
        
        //    flexDirection:"column",
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            height: '70px',
            justifyContent:'right',
            gap:'20px',
            },
            [theme.breakpoints.down('sm')]: {
                height: '50px',
                justifyContent:'right',
                gap:'10px',
            },
            
            
        }));
        const MyIcons = styled(Box)(({theme}) => ({
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center', 
           width:'100%',
           color:'black',
           [theme.breakpoints.down('md')]: {
            display:'none',
        },
        [theme.breakpoints.down('sm')]: {
           display:'none',
        },
            
            
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    color:'#333',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        alignItems:'center',
        justifyContent:'right',
    },
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        alignItems:'center',
        justifyContent:'right',
    }
}));

const NavBar = styled(AppBar)(({theme}) =>({
    backgroundColor:theme.colors.alpha.white[100],
    color:theme.colors.alpha.black[100],
    justifyContent:"space-evenly",
    width:'100%',
    margin:"0",
    padding:'0',
    zIndex:'300'
    
}));



export default function Navbar() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false);
    };

   
     const handleSignin = ()=>{
        setOpen(true);
        
    };

    const handleLogout = ()=>{
        setOpen(false);
    };
    
    const [location,setLocation] = useState("");
     const updateValue = (e,value) =>{
         console.log(e.target.value)
        setLocation(e.target.value);
     }
     const [address,setAddress]=useState([]);
     const fetchData = async ()=>{
        getCordinate(setAddress);
     }
     useEffect (()=>{
        fetchData();
     },[])

    
  return (

    <>
      <NavBar position="sticky" >
        <StyleToolbar  >
        <NavLeft >
           
           <Link to='/' style={{textDecoration:'none',color:'black'}}>
                <Box sx={{display:{xs:'none',sm:'none',md:'block'},cursor:'pointer',textDecoration:'none'}} >
                   <Typography sx={{fontSize:'40px',fontWeight:'700',color:'black',textDecoration:'none'}}>Clothes Store</Typography>   
                </Box>
           </Link>
                {/* <SearchBar/> */}
               
                <Box 
                value={location}
                onChange={updateValue}
                displayEmpty
                label='Slect State'
                sx={{width:'100px',borderBottom:'1px solid rgba(0,0,0,0.3)'}}
                >
                    <Typography sx={{fontSize:'20px',fontWeight:'500'}}>{address&&address.length!==0 && address[0].properties.county}</Typography>

                </Box>
            </NavLeft >


            <NavRight >

           


            <MyIcons sx={{justifyContent:{xs:'none',sm:'none'}}}>
                <Link to='/search' style={{textDecoration:'none',color:'black'}}>
           <Box sx={{"&:hover":{color:'orange'}}}>
            <Typography sx={{display:'flex',fontSize:'17px',fontWeight:'600',alignItems:'center',gap:'5px'}}><Search sx={{fontSize:'20px'}}/>Search</Typography>
           </Box>
           </Link>

           <Link to='/offers' style={{textDecoration:'none',color:'black'}}>
           <Box  sx={{"&:hover":{color:'orange'}}}>
            <Typography sx={{display:'flex',fontSize:'17px',fontWeight:'600',alignItems:'center',gap:'5px'}}><PercentRounded sx={{fontSize:'20px'}}/>Offers</Typography>
           </Box>
           </Link>

           <Box  sx={{"&:hover":{color:'orange'},display:{xs:'none',sm:'none',md:'block'}}} >
            <Typography sx={{display:'flex',fontSize:'17px',fontWeight:'600',alignItems:'center',gap:'5px',cursor:'pointer'}} onClick={handleSignin}><Person2Outlined sx={{fontSize:'20px'}}/>Login</Typography>
            <Drawer open={open} onClose={handleLogout} sx={{position:'absolute'}}>
                <Login  setOpen={setOpen}/>
            </Drawer>
           </Box>

           <Link to='/cart'  style={{textDecoration:'none',color:'black'}}>
           <Box  sx={{"&:hover":{color:'orange'}}}>
            <Typography sx={{display:'flex',fontSize:'17px',fontWeight:'600',alignItems:'center',gap:'5px'}}><Help sx={{fontSize:'20px'}}/>Help</Typography>
           </Box>
           </Link>

<Link to='/cart'  style={{textDecoration:'none',color:'black'}}>
           <Box  sx={{"&:hover":{color:'orange'}}}>
            <Typography sx={{display:'flex',fontSize:'17px',fontWeight:'600',alignItems:'center',gap:'5px'}}><ShoppingBag sx={{fontSize:'20px'}}/>Cart</Typography>
           </Box>
           </Link>
      </MyIcons>

      <Link to='/search' style={{color:'black'}}>
      <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},alignItems:'center'}}>

      <Search/>
      </Box>
      </Link>

      <Link to='/login' style={{color:'black'}}>
      <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},alignItems:'center'}}>

      <Person/>
      </Box>
      </Link>
      <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},justifyContent:'right'}}>
            <MenuButton onClick={handleOpen}>
                <Menu color='black'sx={{fontSize: {xs:'25px',sm:'25px'}}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute',display:{xs:'block',sm:'block',md:'none'}}}>
                <MenuButtons setOpen={setOpen}/>
            </Drawer>
            </Box>
            </NavRight>
        </StyleToolbar>
      </NavBar>

      <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},justifyContent:'center',padding:'20px'}}>
        <Box sx={{width:{xs:'300px',sm:'500px'},height:{xs:'120px',sm:'180px'},border:'1px solid rgba(0,0,0,0.2)',borderRadius:'20px'}}>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box sx={{display:'flex',flexDirection:'column',margin:'10px',justifyContent:'center'}}>
                    <Typography sx={{fontSize:'30px',fontWeight:'700'}}>Clothes</Typography>
                    <Typography>Enjoy your favourite shopping</Typography>
                    <Typography sx={{fontSize:'17px',fontWeight:'600'}}>View All</Typography>
                </Box>
                <Box sx={{margin:'10px'}}>
                   <img src='https://usplworld-static.s3.ap-south-1.amazonaws.com/static/img/wrogn/products/product_list/WNJK6349.jpeg' style={{height:'100px',width:'100px',borderRadius:'10px'}}/>
                </Box>
            </Box>

        </Box>

      </Box>
      </>

  )
}
