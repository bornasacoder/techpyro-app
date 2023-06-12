import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./navbar.css"
import {
    Box,
    Typography,
    styled,
    Drawer,   
    MenuItem,    
    MenuList,
    TextField,
    Autocomplete,
  } from "@mui/material";
import {  Facebook, Instagram, LinkedIn, MailOutline, Menu , Phone, Twitter} from '@mui/icons-material';

 

    const NavLeft = styled(Box)(({theme}) => ({
        display:'flex',
        gap:'20px',
        marginleft:'',
        [theme.breakpoints.down('lg')]: {
            gap:"5px",
            width:'100%',

        },
        [theme.breakpoints.down('sm')]: {
            // paddingLeft:'0px',
            marginLeft:'px',
            width:'100%'
        },
      //   [theme.breakpoints.down('xs')]: {
      //     // paddingLeft:'0px',
      //     marginLeft:'0px',
      //     width:'100%'
      // },
        
        
    }));

    const NavRight = styled(Box)(({theme}) => ({
             display:'flex',
             alignItems:'center',
             gap:'5px',
            [theme.breakpoints.down('sm')]: {
              //  paddingRight:'0px',
              //  margin:'0px'
              //  display:'block',
              // marginRight:'0px',
                // display:''
                width:'auto',
            },
            [theme.breakpoints.up('down')]:{
              width:'auto',
            }
            
            
    }));


const NavBar1 = styled(Box)(({theme}) =>({
  backgroundColor:theme.header.background,
  width:'100%',
  height:'55px',
  borderBottom:"1px solid #eee",
  margin:"0",
  padding:'0',
  display:'flex',
  alignItems:'center', // x- axis
  justifyContent:'space-between',
  
  [theme.breakpoints.down('sm')]: {
    height:'80px',
    width:'100%',
  },
  [theme.breakpoints.down('md')]:{
    height:'55px',
    width:'100%',
  }
  
}));

const NavBar2 = styled(Box)(({ theme }) => ({
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  height:'100px',
  width:'100%',
  position:'sticky',
  top:"0px",
  zIndex:'500',
  
  [theme.breakpoints.down('sm')]: {
    display:'flex',
    height:'auto',
    width:'100%'  
  },

      
  }
));


export default function Navbar() {
  
    const [open, setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false)
    }

    
   
    const top100Films = [
      { title: 'Who we are' },
      { title: 'Guest review', },
      
    ]
    const defaultProps = {
      options: top100Films,
      getOptionLabel: (option) => option.title,
    };
   
  return (
    <>
        <NavBar1>
              <Box sx={{width:'100%',display:'flex',justifyContent:{xs:'space-between',sm:'space-between'},padding:{ xs:'0px 30px',sm:'0px 60px',md:'0px 120px',lg:'0px 160px',xl:'0px 200px'}}}>

                    <NavLeft>

                          <Box sx={{display:'flex',gap:'5px',alignItems:'center',justifyContent:'center'}}>
                              <MailOutline sx={{color:'black',fontSize:'18px'}} />
                              <Typography sx={{color:'black'}}>info@makejourneys.com</Typography>
                            </Box>
                            
                            <Box sx={{display:'flex',gap:'5px',alignItems:'center'}}>
                              <Phone sx={{color:'black',fontSize:'16px',display:{xs:'none',sm:'none',md:'block',lg:'block'}}}/>
                              <Typography sx={{color:'black',fontSize:'17px',display:{xs:'none',sm:'none',md:'block',lg:'block'}}} >9978456215</Typography>
                          </Box>

                    </NavLeft>

                    <NavRight>
                          <Facebook sx={{color:'black',fontSize:'20px'}}/>
                          <Twitter sx={{color:'black',fontSize:'20px'}}/>
                          <LinkedIn sx={{color:'black',fontSize:'20px'}}/>
                          <Instagram sx={{color:'black',fontSize:'20px'}}/>
                    </NavRight>
              </Box>
        </NavBar1>
        <NavBar2>
            <Box sx={{width:'100%',display:'flex',justifyContent:{xs:'space-between',sm:'space-between'},padding:{ xs:'0px 40px 0px 15px',sm:'0px 60px',md:'0px 120px',lg:'0px 160px',xl:'0px 200px'}}}>
                <Box>
                    <img style={{height:'55px' , width:'200px',}} src='https://makejourneys.com/assets/images/myamazingjourney.png' alt='' />
                </Box>
                <Box sx={{display:'flex',gap:'25px',alignItems:'center',justifyContent:'center'}}>
                     <Link to="/"> <Typography sx={{fontSize:'16px',fontWeight:"500", display:{xs:'none',sm:'none',md:'flex'}}}>HOME</Typography></Link>
                     <Link to="/travel-blog"><Typography variant='body'  sx={{fontSize:"18px",fontWeight:"500",display:{xs:'none',sm:'none',md:'flex'}}}>TRAVEL BLOG</Typography></Link>

                      <Box sx={{width:{xs:'0px',sm:"150px"}, height:"50px", }} >

                          <Autocomplete 
                            {...defaultProps}
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                              <TextField {...params} sx={{display:{xs:'none',sm:'none',md:'flex'}, fontWeight:"500", ".css-1hz84qq-MuiFormLabel-root-MuiInputLabel-root ":{fontSize:"18px"}}} label="About us" variant="standard" /> // About us
                              )}
                          />
                     

                      <Box sx={{width:'100%'}}>
                          <Menu onClick={handleOpen} sx={{display:{xs:'block',sm:'flex',md:'none',lg:'none'},marginTop:{xs:'12px'}}} />
                         <Drawer anchor="left" open={open} onClick={handleClose} sx={{display:{xs:'block',sm:'block',md:'none',lg:'none'},width:{xs:'0px'}}}>
                              <MenuList>
                                <Link to="/"><MenuItem>HOME</MenuItem></Link>
                                <Link to="/travel-blog"><MenuItem>TRAVEL BLOG</MenuItem></Link>
                                <MenuItem>ABOUT US</MenuItem>
                              </MenuList>
                            </Drawer>
          
                         </Box>
                     </Box>
                </Box>
            </Box>
        </NavBar2> 
   </>
 
  )
}
