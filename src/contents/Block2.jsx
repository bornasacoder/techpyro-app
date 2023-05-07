import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block2 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'550px',
    height:'300px',
    backgroundColor:'#F2F2F2',
    borderRadius:'20px',
    boxShadow:'none',
    [theme.breakpoints.down('lg')]: {
      width:'100vw',
      height:'400px',
     
    },
    [theme.breakpoints.down('md')]: {
      width:'100vw',
      height:'250px',
      flexDirection:'row',
      // paddingTop:'50px',
      // gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'250px',
      flexDirection:'row',
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
    <>
     {/* <Box1>

     </Box1> */}
     <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',margin:'30px'}}>
<Typography sx={{fontSize:{xs:'20px',sm:'25px',md:'25px'},fontWeight:'700',color:'black'}}>Comprehensive learning programs</Typography>
<Typography sx={{fontSize:{xs:'20px',sm:'25px',md:'25px'},fontWeight:'700',color:'black'}}>& classes for all students</Typography>
<Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'500',color:'black'}}>Become lifelong learners with India's best teachers,</Typography>
<Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'500',color:'black'}}>engaging video lessons and personalised learning.</Typography>
</Box>

<Box sx={{display:'flex',justifyContent:'center',}}>
<Box sx={{backgroundColor:'#F2F2F2',display:'flex',flexDirection:'column',alignItems:'center',width:'1100px',boxShadow:'1px 2px 5px 1px rgba(0,0,0,0.1)',borderRadius:'20px',margin:'10px'}}>
  <Typography sx={{backgroundColor:'#616DFF',color:'white',fontSize:'20px',fontWeight:'600',width:'150px',display:'flex',justifyContent:'center',borderRadius:'10px'}}>Class 1-5</Typography>

      <Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px 100px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'50%',sm:'50%',md:'50%'},padding:{xs:'20px',sm:'0px',md:'50px'}}}>
      
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://img.freepik.com/free-psd/realistic-banner-education-template_23-2149359687.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'50%',sm:'50%',md:'50%'},display:'flex',flexDirection:'column',paddingTop:{xs:'40px',sm:'0px',md:'40px'},gap:{xs:'20px',sm:'0px',md:'20px'}}}>
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',}}>Personalised learning app to learn anytime,anywhere</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500',textDecoration:'underline'}}>Know More  </Typography>
        <Button variant='contained' sx={{backgroundColor:'#FC6570',color:'black',border:'1px solid black',borderRadius:'10px',"&:hover":{backgroundColor:'black',color:'white'}}}>Book a FREE class</Button>
     
       </Box>
      
      
      </CardBox>

      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},padding:{xs:'20px',sm:'0px',md:'50px'}}}>
      
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://img.freepik.com/free-vector/realistic-nursery-school-webinar-template_23-2149671410.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},display:'flex',flexDirection:'column',paddingTop:'40px',gap:'20px'}}>
       
       <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',}}>Personalised learning app to learn anytime,anywhere</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500',textDecoration:'underline'}}>Know More </Typography>
        <Button variant='contained' sx={{backgroundColor:'#FC6570',color:'black',border:'1px solid black',borderRadius:'10px',"&:hover":{backgroundColor:'black',color:'white'}}}>Book a FREE class</Button>
       </Box>
      
      </CardBox>


       </Box>
       
       </Box>
       </Box>
       
       
       </>
       
  )
    }
export default Block2
