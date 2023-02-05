import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block2 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    width:'350px',
    height:'450px',
    // backgroundColor:'#F2F2F2',
    borderRadius:'0px',
    // boxShadow:'none',
    [theme.breakpoints.down('lg')]: {
      width:'100vw',
      height:'400px',
     
    },
    [theme.breakpoints.down('md')]: {
      width:'100vw',
      height:'500px',
      flexDirection:'column',
      // paddingTop:'50px',
      // gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'500px',
      flexDirection:'column',
      // paddingTop:'50px',
      // gap:'50px',
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
    <Box sx={{background:'#FEF9ED'}}>
     {/* <Box1>

     </Box1> */}
  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'50px 0px',sm:'70px 0px',md:'100px'},textAlign:'center'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'700',color:'black'}}>Trusted By Our Partners</Typography>
       

       
       </Box>

<Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0px 10px',sm:'0px 20px',md:'0px 0px 80px 0px'}}}>

 

      <Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px 100px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'40px'}}>
      <CardBox >
      <Box sx={{height:{xs:'50%',sm:'50%',md:'30%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'50%',borderRadius:'100px',width:'20%'}}
          component="img"
          image="/images/category/teach6.png"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'50%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'0px 40px 40px 40px'},gap:{xs:'20px',sm:'0px',md:'0px'},textAlign:'center',borderBottom:'0.5px solid rgba(0,0,0,0.2)'}}>
       
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Teachmint is the one of the most user-friendly Integrated School solutions out there. Their Fee Module has helped keep a tab on the collection and dues. I recommend Teachmint to anyone who wants to digitize their school. </Typography>
       
       
       </Box>
       <Box sx={{height:{xs:'50%',sm:'50%',md:'30%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'25px',sm:'25px',md:'20px 40px 0px 40px'},gap:'10px',textAlign:'center'}}>
       
       <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'15px'},fontWeight:'700',}}>Mr.Rahul Yadav</Typography>
       
       
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',}}>Administrative Director, Virendra Tiny-Tots Paradise</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',}}>Jaipur, Rajasthan</Typography>
       </Box>
      
      </CardBox>

      <CardBox >
      <Box sx={{height:{xs:'50%',sm:'50%',md:'30%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'50%',borderRadius:'100px',width:'20%'}}
          component="img"
          image="/images/category/teach7.png"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'50%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'0px 40px 40px 40px'},gap:{xs:'20px',sm:'0px',md:'0px'},textAlign:'center',borderBottom:'0.5px solid rgba(0,0,0,0.2)'}}>
       
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Teachmint is the one of the most user-friendly Integrated School solutions out there. Their Fee Module has helped keep a tab on the collection and dues. I recommend Teachmint to anyone who wants to digitize their school. </Typography>
       
       
       </Box>
       <Box sx={{height:{xs:'50%',sm:'50%',md:'30%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'25px',sm:'25px',md:'20px 40px 0px 40px'},gap:'10px',textAlign:'center'}}>
       
       <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'15px'},fontWeight:'700',}}>Mr.Rahul Yadav</Typography>
       
       
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',}}>Administrative Director, Virendra Tiny-Tots Paradise</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',}}>Jaipur, Rajasthan</Typography>
       </Box>
      
      </CardBox>




      <CardBox >
      <Box sx={{height:{xs:'50%',sm:'50%',md:'30%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'50%',borderRadius:'100px',width:'20%'}}
          component="img"
          image="/images/category/teach8.png"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'50%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'0px 40px 40px 40px'},gap:{xs:'20px',sm:'0px',md:'0px'},textAlign:'center',borderBottom:'0.5px solid rgba(0,0,0,0.2)'}}>
       
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Teachmint is the one of the most user-friendly Integrated School solutions out there. Their Fee Module has helped keep a tab on the collection and dues. I recommend Teachmint to anyone who wants to digitize their school. </Typography>
       
       
       </Box>
       <Box sx={{height:{xs:'50%',sm:'50%',md:'30%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'25px',sm:'25px',md:'20px 40px 0px 40px'},gap:'10px',textAlign:'center'}}>
       
       <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'15px'},fontWeight:'700',}}>Mr.Rahul Yadav</Typography>
       
       
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',}}>Administrative Director, Virendra Tiny-Tots Paradise</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',}}>Jaipur, Rajasthan</Typography>
       </Box>
      
      </CardBox>
       </Box>
       
    
       </Box>
       
       
       </Box>
       
  )
    }
export default Block2
