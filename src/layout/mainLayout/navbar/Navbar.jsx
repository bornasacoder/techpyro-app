import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './searchbar/SearchBar'
import NavButton from './navButton/NavButton'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    styled,
    Badge,
    Drawer,
    IconButton,
    useTheme
} from "@mui/material";

import { ShoppingCart, Menu,} from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import WestIcon from '@mui/icons-material/West';
import Siderbar from '../sideBar/Siderbar';

  const StyleToolbar = styled(Toolbar)(({theme}) => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
  }));
  
  const Cart = styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flex: '2',
        color: theme.header.textColor,
        [theme.breakpoints.down('md')]: {
            flex:'1',
        } 
  }));

  const Logo = styled(Box)(({theme}) => ({
        color: theme.header.textColor,
        [theme.breakpoints.down('md')]:{
            paddingBottom:'5px',
        }
}));

  const CartButton = styled(Link)`
    flex: 1;
    align-items: center;
    justify-Content: flex-end;
  `;

  const NavLeft = styled(Box)(({theme}) => ({

      flex:'4',
      display: 'flex',
      gap:'10px',
     justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        height: '50px',
    },
      [theme.breakpoints.down('md')]: {
        flex:'3',
    }
  }));

  const MenuButton = styled(IconButton)(({ theme }) => ({
    color: theme.colors.alpha.white[100],
    [theme.breakpoints.down('md')]: {
        right:'12px'
    }
}));

  const NavBar = styled(AppBar)(({ theme }) => ({
    backgroundColor:  theme.header.background,
}));




export default function Navbar(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false);
    }

    const navigate = useNavigate();
    const theme = useTheme();
    
  return (
      <NavBar  sx={{paddingLeft: '27px',paddingRight: '27px'}} position="fixed">
        <StyleToolbar sx={{height:`${props.page}`===('cart'||'checkout')?'64px':{xs:'100px',sm:'64px'},top:`${props.page}`===('cart'||'checkout')?'0':{xs:'-21px',sm:'0'},
            marginLeft:`${props.page}`==='checkout'?'150px':'0'}}>
            <MenuButton sx={{display:{md:'none',xs:`${props.arrow}`}}} onClick={()=>navigate(-1)}>
                <WestIcon/>
            </MenuButton>
            <MenuButton sx={{display:{md:'none',xs:`${props.menu}`}}} onClick={handleOpen}>
                <Menu/>
            </MenuButton>
            <Drawer anchor='left' open={open} onClose={handleClose} transitionDuration={{enter:400 , exit:400}} ModalProps={{sx:{position:'absolute'}}}>
                <Siderbar />
            </Drawer>
            <NavLeft sx={{flex: `${props.logo}`==='Cart'?'9':'4'}}>
                <Logo sx={{marginLeft: `${props.logo}`==='Cart'?{md:'50px'}:'0'}}>
                    <Typography  component="div" sx={{fontSize: {md:'35px',xs:'20px'}}}>
                        {props.logo}
                    </Typography>
                    {/* <Typography component="div" sx={{fontSize:{md:'13px',xs:'10px'}, fontWeight:100}}>
                        Make a simple Bussiness
                    </Typography> */}
                </Logo>
                <SearchBar page={props.page}/>
                {/* <Badge sx={{display:{sm:'block',md:'none'}, left:'48px'}}>
                    <ShoppingCart/>
                </Badge> */}
                <NavButton page={props.page}/>
            </NavLeft>
            <Cart sx={{flex: `${props.logo}`==='Cart'?'3':'2'}}>
                <Box sx={{display:{md:'flex',xs:'none'},justifyContent: `${props.logo}`==='Cart'?'flex-end':'flex-start',alignItems:'center',paddingLeft:'20px',flex:'2',color:`${theme.header.textColor}`}}>
                    <PhoneIcon/>
                    <Typography sx={{paddingLeft:'5px',fontSize:'20px',fontWeight:'400',color:`${theme.header.textColor}`}}>+91-9999999999</Typography>
                </Box>
                {!(`${props.page}`==='checkout') && <CartButton to={'/cart'} sx={{display:`${props.logo}`=== 'Cart'?'none':'flex',textDecoration:'none'}}>
                    <Badge sx={{cursor: {md:'pointer',sm:'none'},color:`${theme.header.textColor}`}}>
                        <ShoppingCart/>
                    </Badge>
                    <Typography sx={{display:{md:'block',xs:'none',fontSize:'20px',cursor: {md:'pointer',sm:'none'},color:`${theme.header.textColor}`}}}>Cart</Typography>
                </CartButton>}
            </Cart>
        </StyleToolbar>
      </NavBar>

  )
}
