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
    
    
  } from "@mui/material";

import { Help, LocationCityRounded, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Person3Outlined,  ShoppingBag, ShoppingCart} from '@mui/icons-material';

import MenuButtons from 'components/menuButtons/MenuButtons';


const StyleToolbar = styled(Toolbar)(({theme}) => ({
  height:'auto',
  width:'100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    [theme.breakpoints.down('md')]: {
        height: 'auto',
        // width: '93vw',
            // top: '-21px'
            marginLeft:'10px',
            marginRight:'15px'
        },
        [theme.breakpoints.up('sm')]: {
            height: 'auto',
            // marginTop:'20px'
              //   marginLeft:'30px',
              //   marginRight:'30px'
            },
        [theme.breakpoints.down('sm')]: {
          height: '70px',
          // marginTop:'20px'
            //   marginLeft:'30px',
            //   marginRight:'30px'
          },
        // marginLeft:'150px',
        // marginRight:'150px'
    }));
    
    const Cart = styled(Box)`
    flex:1;
    `;
    
    
    const NavLeft = styled(Box)(({theme}) => ({
        
        // flex:'3',
        display: 'flex',
        gap:'30px', 
        //   justifyContent: 'space-between',
        paddingLeft:'30px',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gap:"10px"
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'0px'
        },
        
        
    }));
    const NavRight = styled(Box)(({theme}) => ({
       
        // flex:'3',
        display: 'flex',
         gap:'10px',
        paddingRight:'30px',
        //    flexDirection:"column",
        alignItems: 'center',
        // [theme.breakpoints.down('md')]: {
            //     justifyContent:"space-between"
            // },
            [theme.breakpoints.down('sm')]: {
               paddingRight:'0px',
                
            },
            
            
        }));
        const Login = styled(Button)(({theme}) => ({
          
          backgroundColor:theme.header.background,
        color:theme.header.textColor,
        boxShadow:theme.header.boxShadow,
        ":hover":{
          backgroundColor:theme.header.textColor,
          color:theme.header.background,
          boxShadow:theme.header.boxShadow,
        },
        alignItems:'center'
          
      }));
      const Signup = styled(Button)(({theme}) => ({
        
        backgroundColor:theme.header.textColor,
        boxShadow:theme.header.boxShadow,
        ":hover":{
          backgroundColor:theme.header.background,
          color:theme.header.textColor,
          boxShadow:theme.header.boxShadow,
        }
          
      }));
      

const MenuButton = styled(IconButton)(({ theme }) => ({
    fontSize:'50px',
    color:'#333',
    
        
    }
));

const NavBar = styled(AppBar)(({theme}) =>({
    backgroundColor:theme.header.background,
    color:theme.header.textColor,
    // justifyContent:"space-evenly",
    width:'100%',
    height:'750px',
    margin:"0",
    padding:'0',
    zIndex:'0',
    backgroundImage: `url(${"/images/category/rstnt6.jpeg"})`,
   backgroundSize:'cover',
position:'static'

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
      <NavBar >
        <Box sx={{position:{xs:'none',sm:'none',md:'fixed'},width:'100%',alignItems:'center',backgroundColor:{xs:'none',sm:'none',md:`${theme.header.background}`},zIndex:'100',height:'100px',display:'flex'}}>
        <StyleToolbar  >
        <NavLeft >
            <MenuButton onClick={handleOpen}>
                <Menu color='black'sx={{fontSize: {xs:'30px',sm:'35px'}}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
                <Box  >
                    <Typography  component="div" sx={{fontSize: {xs:'25px',sm:'25px',md:'40px'},fontFamily:'revert-layer',color:`${theme.header.textColor}`}}>
                        Uber Eats
                    </Typography>
                    {/* <Typography component="div" sx={{fontSize:{md:'13px',xs:'10px'}, fontWeight:100}}>
                        Make a simple Bussiness
                    </Typography> */}
                </Box>
                {/* <SearchBar/> */}
                {/* <Badge sx={{display:{sm:'block',md:'none'}, left:'48px'}}>
                    <ShoppingCart/>
                </Badge> */}
                {/* <NavButton/> */}
            </NavLeft >
            <NavRight > 
              
               <Login variant='contained' sx={{borderRadius:'30px',fontSize:'20px' ,display:{xs:'none',sm:'none',md:'block'},alignItems:'center'}}><Person3Outlined />Log in</Login>
              <Person3Outlined sx={{fontSize:'30px',backgroundColor:`${theme.header.background}`,boxShadow:`${theme.header.boxShadow}`,
            borderRadius:'50px',width:'40px',height:'30px',display:{md:'none'}}}/>
               
               <Signup variant='contained' sx={{borderRadius:'30px',fontSize:{xs:'10px',sm:'15px',md:'20px'}}}>Sign up</Signup>
              
            </NavRight>
        </StyleToolbar>
        </Box>
        <Box sx={{paddingTop:{xs:'30px',sm:'100px',md:'250px'}}} paddingLeft={"30px"}>
          <Typography sx={{fontSize: {xs:'40px',sm:'45px',md:'50px'},fontWeight:'700'}}>Order Food To Your Door</Typography>
        </Box>
        <Box display={'flex'} gap={{xs:'20px',sm:'50px',md:'10px'}} paddingTop={'40px'}flexDirection={{xs:'column',sm:'column',md:'row'}}
    marginLeft={ {xs:'15px',sm:'25px'}} marginRight={ {xs:'15px',sm:'25px'}} position={'static'}>
        <SearchBar />
        <Autocomplete  sx={{height:{xs:'55px',sm:'40px'}}}  
        disablePortal
        options={arr}
        getOptionLabel={(option) => option.name}
        renderInput = {(params) => (
            <TextField 
            sx={{ fontSize:'15px',width:{xs:'100%',sm:'100%',md:'200px'},backgroundColor:`${theme.header.background}`}}
            {...params}
            label='Deliever now'
            />
        )}
        />
        <Signup variant='contained' sx={{borderRadius:'10px',fontSize:'15px',height:{xs:'50px',sm:'50px'}}}>Find Food</Signup>
        </Box>
        <Typography sx={{paddingLeft:'30px',fontWeight:'700',paddingTop:'20px'}}>Sign in for your recent addresses</Typography>
      </NavBar>
    
  )
}
