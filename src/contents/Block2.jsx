import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block2 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'700px',
    
    [theme.breakpoints.down('lg')]: {
      width:'100vw',
      height:'400px',
     
    },
    [theme.breakpoints.down('md')]: {
      width:'100vw',
      height:'1100px',
      flexDirection:'column',
      paddingTop:'50px',
      gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'1100px',
      flexDirection:'column',
      paddingTop:'50px',
      gap:'50px',
    },
   
  }))
  const Box1= styled(Box)(({ theme }) => ({
    height:'600px',
    width:'100%',
    backgroundImage: `url(${"/images/category/bgdimg4.jpeg"})`,
    backgroundSize:'cover',
    // backgroundAttachment:'fixed'
    }
  ));
  const Box2= styled(Box)(({ theme }) => ({
    height:'680px',
    width:'100%',
    backgroundImage: `url(${"/images/category/bgdimg5.webp"})`,
    backgroundSize:'cover',
    // backgroundAttachment:'fixed',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    gap:'150px',
    // flexDirection:'column'
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'900px',
      flexDirection:'column',
      padding:'0px',
      justifyContent:'center',
      gap:'50px'
    },
    }
  ));
  return (
    <>
     {/* <Box1>

     </Box1> */}
      <Box sx={{padding:{xs:'10px',sm:'50px',md:'100px 100px 0px 100px'},width:'100%'}}>
      <CardBox >
      <Box sx={{height:{xs:'400px',sm:'100%',md:'700px'},width:{xs:'100%',sm:'100%',md:'50%'},paddingTop:{xs:'0px',sm:'0px',md:'0px'}}}>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'50px'},fontWeight:'700'}}>25+</Typography>
        <hr></hr>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'700'}}>Years of Experiences</Typography>
        </Box>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/blockimg8.webp"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'50%'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',alignItems:'center',paddingLeft:'20px'}}>
        <Box>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700'}}>About Us</Typography>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'40px'},fontWeight:'700'}}>Enjoy an Exceptional journey of Taste</Typography>
        <Box>Who are in extremely love with eco friendly system. Lorem ipsum dolo</Box>
          <Box> sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Box>
           <Box> incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Box>
          <Box>  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </Box>
           <Box>commodo consequat. </Box>
           <Box>
            <Typography sx={{fontWeight:'500',fontSize:{xs:'15px',sm:'20px',md:'20px'}}}><TaskAlt /> Project Quality Management Plan</Typography>
            <Typography sx={{fontWeight:'500',fontSize:{xs:'15px',sm:'20px',md:'20px'}}}><TaskAlt />The Ability to Deligate Task</Typography>
            <Typography sx={{fontWeight:'500',fontSize:{xs:'15px',sm:'20px',md:'20px'}}}><TaskAlt />It Might be Finished or Unfinishaed</Typography>
           </Box>
           
      <Button variant='contained' sx={{borderRadius:'0',marginTop:'30px'}}>VIEW FULL MENU</Button>
      
        
        
      </Box>
       </Box>
      
      
      </CardBox>
      
       </Box>
      
       </>
       
  )
    }
export default Block2
