import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block3 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    width:'300px',
    height:'300px',
    // backgroundColor:'#F2F2F2',
    borderRadius:'20px',
    // boxShadow:'none',
    
    [theme.breakpoints.down('md')]: {
      width:'300px',
      height:'250px',
      flexDirection:'column',
      // paddingTop:'50px',
      // gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'300px',
      height:'250px',
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
    <Box >
     {/* <Box1>

     </Box1> */}
  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'50px 0px',sm:'70px 0px',md:'80px'},textAlign:'center'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'25px'},fontWeight:'400',color:'black'}}>AWARDS</Typography>
       

       
       </Box>

<Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0px',sm:'0px 20px',md:'0px 0px 50px 0px'}}}>

 

      <Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px 50px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'40px'}}>
      <CardBox >
      <Box sx={{height:{xs:'50%',sm:'50%',md:'60%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'60%',width:'40%'}}
          component="img"
          image="/images/category/teach9.webp"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'50%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'0px 40px 40px 40px'},gap:{xs:'20px',sm:'0px',md:'0px'},textAlign:'center'}}>
       
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>EdTech startup of the
Year </Typography>
       
       
       </Box>
     
      
      </CardBox>

      <CardBox >
      <Box sx={{height:{xs:'50%',sm:'50%',md:'60%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'60%',width:'40%'}}
          component="img"
          image="/images/category/teach10.webp"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'50%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'0px 40px 40px 40px'},gap:{xs:'20px',sm:'0px',md:'0px'},textAlign:'center'}}>
       
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Most Transformational
Company </Typography>
       
       
       </Box>
      
      
      </CardBox>




      <CardBox >
      <Box sx={{height:{xs:'50%',sm:'50%',md:'60%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'60%',width:'40%'}}
          component="img"
          image="/images/category/teach11.png"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'50%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'0px 40px 40px 40px'},gap:{xs:'20px',sm:'0px',md:'0px'},textAlign:'center',borderBottom:'0.5px solid rgba(0,0,0,0.2)'}}>
       
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Best EduTech
Startup</Typography>
       
       
       </Box>
      
      
      </CardBox>
       </Box>
       
    
       </Box>
       
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'50px 0px',sm:'70px 0px',md:'0px'},textAlign:'center'}}>
       <Button variant='contained' sx={{width:'200px',marginTop:'10px',backgroundColor:'#1DA1F2',fontSize:'20px'}}>Get Started</Button>
       

       
       </Box>
       </Box>
       
  )
    }
export default Block3
