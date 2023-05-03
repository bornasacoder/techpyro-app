import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';

const Block2 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'600px',
    
    [theme.breakpoints.down('lg')]: {
      width:'100vw',
      height:'400px',
     
    },
    [theme.breakpoints.down('md')]: {
      width:'100vw',
      height:'400px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'700px',
      flexDirection:'column',
      paddingTop:'50px',
      gap:'50px',
    },
   
  }))
  const Box1= styled(Box)(({ theme }) => ({
    height:'600px',
    width:'100%',
    backgroundImage: `url(${"https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
    backgroundSize:'cover',
    // backgroundAttachment:'fixed'
    }
  ));
  const Box2= styled(Box)(({ theme }) => ({
    height:'680px',
    width:'100%',
    backgroundImage: `url(${"https://images.pexels.com/photos/1390940/pexels-photo-1390940.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
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
      <Box sx={{padding:{xs:'10px',sm:'50px',md:'100px'},width:'100%'}}>
      <CardBox >
      
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'50%'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',alignItems:'center',paddingLeft:'20px'}}>
        <Box>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'700'}}>About Our Story</Typography>
        <Box>Who are in extremely love with eco friendly system. Lorem ipsum dolo</Box>
          <Box> sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Box>
           <Box> incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Box>
          <Box>  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </Box>
           <Box>commodo consequat. </Box>
           
      <Button variant='contained' sx={{borderRadius:'0',marginTop:'30px'}}>VIEW FULL MENU</Button>
      
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
        
      </Box>
       </Box>
        <Box sx={{height:{xs:'100%',sm:'100%',md:'500px'},width:{xs:'100%',sm:'100%',md:'500px'},paddingTop:{xs:'0px',sm:'opx',md:'80px'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
     </Box>
      </CardBox>
      
       </Box>
  
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'100px 30px',sm:'100px 50px',md:'100px'}}}>
       
       <Typography sx={{fontSize:{xs:'40px',sm:'30px',md:'40px'}}}>What kind of food we serve for you</Typography>

       <Typography>Who are in extremely love with eco friendly system.</Typography>
       </Box>
       <Box2>
           <Box sx={{width:{xs:'300px',sm:'400px',md:'450px'}}}>
         
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'35px'},color:`${theme.header.background}`,fontWeight:'700'}}>Reserve your seats to confirm if you come with your famoly</Typography>
          <Typography sx={{color:`${theme.header.background}`}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          </Typography>
          <Typography sx={{color:`${theme.header.background}`}}>
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </Typography>
          <Typography sx={{color:`${theme.header.background}`}}>
          veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
          </Typography>
          </Box>
          <Box sx={{backgroundColor:`${theme.header.background}`,width:{xs:'300px',sm:'400px',md:'480px'},height:'500px',display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:{xs:'50px',sm:'70px',md:'0px'}}}>
          <Box sx={{backgroundColor:`${theme.header.background}`,display:'flex',flexDirection:'column',width:'400px',gap:'10px'}}>
            <TextField variant='outlined' label='Name'></TextField>
            <TextField variant='outlined' label='Email id' sx={{borderRadius:'0px'}}></TextField>
            <TextField variant='outlined' label='Phone no'></TextField>
            <TextField variant='outlined' label='Date & Time'></TextField>
            <Select label="Select Event"></Select>
            <Button variant='contained' sx={{borderRadius:'0',marginTop:'0px',width:'200px'}}>Make Reservation</Button>
          </Box>
          </Box>
       </Box2>
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'100px 30px',sm:'100px 50px',md:'100px'}}}>
       
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'35px'},fontWeight:'700'}}>Food and Customer Gallery</Typography>

       <Typography>Who are in extremely love with eco friendly system.</Typography>
       </Box>
        <Box1>

     </Box1>
       </>
       
  )
}
export default Block2
