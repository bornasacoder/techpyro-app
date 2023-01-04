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
  } from "@mui/material";

import { Help, Menu, PercentRounded, PercentTwoTone, Person2Outlined, Search, ShoppingBag, ShoppingCart} from '@mui/icons-material';

import MenuButtons from 'components/menuButtons/MenuButtons';

const StyleToolbar = styled(Toolbar)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
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
        // [theme.breakpoints.down('md')]: {
            //     justifyContent:"space-between"
            // },
            [theme.breakpoints.down('sm')]: {
                height: '50px',
                
            },
            
            
        }));
        const MyIcons = styled(Box)((ListItemButton) => ({
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center', 
           width:'100%'
           
           
            
            
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    color:'#333',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        alignItems:'center'
        
    }
}));

const NavBar = styled(AppBar)(({theme}) =>({
    backgroundColor:theme.colors.alpha.white[50],
    color:theme.colors.alpha.black[100],
    justifyContent:"space-evenly",
    width:'100%',
    margin:"0",
    padding:'0'
    
}));



export default function Navbar() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false);
    }
    

    
  return (
      <NavBar position="static" >
        <StyleToolbar  >
        <NavLeft >
            <MenuButton onClick={handleOpen}>
                <Menu color='black'sx={{fontSize: {xs:'15px',sm:'25px'}}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
                <Box  >
                    <Typography  component="div" sx={{fontSize: {xs:'15px',sm:'25px',md:'60px'},fontFamily:'revert-layer',color:`${theme.header.textColor}`}}>
                        TECHPYRO
                    </Typography>
                    {/* <Typography component="div" sx={{fontSize:{md:'13px',xs:'10px'}, fontWeight:100}}>
                        Make a simple Bussiness
                    </Typography> */}
                </Box>
                {/* <SearchBar/> */}
                {/* <Badge sx={{display:{sm:'block',md:'none'}, left:'48px'}}>
                    <ShoppingCart/>
                </Badge> */}
                <NavButton/>
            </NavLeft >
            <NavRight >
            <MyIcons sx={{justifyContent:{xs:'none',sm:'none'}}}>
            <ListItemButton sx={{width:{xs:'10px' ,sm:'10px',md:'80px'}}} >
        <ListItemIcon sx={{alignItems:'center',gap:'7px',fontSize: {xs:'7px',sm:'12px',md:'17px'}}}>
          <Search sx={{fontSize: {xs:'9px',sm:'12px',md:'17px'}}}/>
          <ListItemText primaryTypographyProps={{fontSize: {xs:'9px',sm:'12px',md:'17px'},fontWeight:'500',color:`${theme.header.textColor}`}} >Search
            </ListItemText>
        </ListItemIcon>
      </ListItemButton >

      <ListItemButton sx={{display:{xs:'none', sm:'none',md:'block'},width:'80px'}}>
        <ListItemIcon sx={{alignItems:'center',gap:'7px',justifyContent:'center'}}>
        <PercentTwoTone />
        <Badge badgeContent={"NEW"} >
        <ListItemText primaryTypographyProps={{fontSize:'17px',fontWeight:'500',color:`${theme.header.textColor}`}} primary="Offers" />
          </Badge>
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton sx={{display:{xs:'none', sm:'none',md:'block'},width:'80px'}} >
        <ListItemIcon sx={{alignItems:'center',gap:'7px',justifyContent:'center'}}>
          <Help />
          <ListItemText primaryTypographyProps={{fontSize:'17px',fontWeight:'500',color:`${theme.header.textColor}`}} primary="Help" />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton sx={{width:{xs:'10px' ,sm:'10px',md:'80px'}}}>
        <ListItemIcon sx={{alignItems:'center',gap:'7px',justifyContent:'center'}}>
          <Person2Outlined sx={{fontSize: {xs:'9px',sm:'12px',md:'17px'}}}/>
          <ListItemText primaryTypographyProps={{fontSize: {xs:'9px',sm:'12px',md:'17px'},fontWeight:'500',color:`${theme.header.textColor}`}} primary="Account" />
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton sx={{width:{xs:'10px' ,sm:'10px',md:'80px'}}}>
        <ListItemIcon sx={{alignItems:'center',gap:'7px',justifyContent:'center'}}>
          <ShoppingBag sx={{fontSize: {xs:'9px',sm:'12px',md:'17px'}}}/>
          <ListItemText primaryTypographyProps={{fontSize: {xs:'9px',sm:'12px',md:'17px'},fontWeight:'500',color:`${theme.header.textColor}`}} primary="Cart" />
        </ListItemIcon>
      </ListItemButton>
      </MyIcons>
            </NavRight>
        </StyleToolbar>
      </NavBar>

  )
}
