import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block2 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    width:'300px',
    height:'350px',
    // backgroundColor:'#F2F2F2',
    borderRadius:'0px',
    boxShadow:'none',
  
    [theme.breakpoints.down('md')]: {
      width:'50%',
      height:'auto',
      flexDirection:'column',
      // paddingTop:'50px',
      // gap:'50px',
      borderRadius:'10px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'50%',
      height:'250px',
      flexDirection:'column',
      // paddingTop:'50px',
      borderRadius:'0px',
      // gap:'50px',
    },
   
  }))
  const Box1= styled(Box)(({ theme }) => ({
    height:'600px',
    width:'100%',
    backgroundImage: `url(${"https://img.freepik.com/free-psd/horizontal-banner-university-education_23-2148957607.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"})`,
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
    display:'flex',
    justifyContent:'space-evenly',
    [theme.breakpoints.down('md')]: {
      flexDirection:'column',
      alignItems:'center'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column',
    },
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
    <Box sx={{background:'#FFFFFF'}}>
     
  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'50px 0px 0px 0px',sm:'70px 0px',md:'100px'},textAlign:'center'}}>
    
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'600',color:'black'}}>Our Mentors</Typography>
       
       </Box>

<Box sx={{display:'flex',justifyContent:'center',padding:{xs:'40px 0px',sm:'60px 0px',md:'0px 0px 80px 0px'}}}>

 

      <Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px 100px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'40px'}}>

        <Box sx={{display:'flex',gap:{xs:'10px',sm:'20px',md:'40px'}}}>
      <CardBox >
      <Box sx={{height:{xs:'70%',sm:'80%',md:'80%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'100%',"&:hover":{transform:'scale(1.1)'},transition:'0.5s all'}}
          component="img"
          image="/images/category/dps3.webp"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'30%',sm:'25%',md:'25%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'0px',sm:'0px',md:'0px'},gap:{xs:'0px',sm:'0px',md:'0px'},textAlign:'center'}}>
       
       <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:'white',background:'#0D2D62',fontFamily:'Butler'}}>Mrs. Marie</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Chairman </Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'400'}}>D P S Society </Typography>
       
       
       </Box>
      
      
      </CardBox>

      <CardBox >
      <Box sx={{height:{xs:'70%',sm:'80%',md:'80%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'100%',"&:hover":{transform:'scale(1.1)'},transition:'0.5s all'}}
          component="img"
          image="/images/category/dps4.webp"
          alt="green iguana"
        />
     </Box>
     <Box sx={{height:{xs:'30%',sm:'25%',md:'25%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'0px',sm:'0px',md:'0px'},gap:{xs:'0px',sm:'0px',md:'0px'},textAlign:'center'}}>
       
     <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:'white',background:'#0D2D62',fontFamily:'Butler'}}>Mr. Jason</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Chairman </Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'400'}}>D P S Society </Typography>
       
       
       </Box>
       
      
      </CardBox>
      </Box>


<Box sx={{display:'flex',gap:{xs:'10px',sm:'20px',md:'40px'}}}>
      <CardBox >
      <Box sx={{height:{xs:'70%',sm:'80%',md:'80%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'100%',"&:hover":{transform:'scale(1.1)'},transition:'0.5s all'}}
          component="img"
          image="/images/category/dps5.webp"
          alt="green iguana"
        />
     </Box>
     <Box sx={{height:{xs:'30%',sm:'25%',md:'25%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'0px',sm:'0px',md:'0px'},gap:{xs:'0px',sm:'0px',md:'0px'},textAlign:'center'}}>
       
     <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:'white',background:'#0D2D62',fontFamily:'Butler'}}>Mr. Jiggler</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Chairman </Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'400'}}>D P S Society </Typography>
       
       
       </Box>
       
      
      </CardBox>


      <CardBox >
      <Box sx={{height:{xs:'70%',sm:'50%',md:'75%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'100%',"&:hover":{transform:'scale(1.1)'},transition:'0.5s all'}}
          component="img"
          image="/images/category/dps6.webp"
          alt="green iguana"
        />
     </Box>
     <Box sx={{height:{xs:'30%',sm:'25%',md:'25%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'0px',sm:'0px',md:'0px'},gap:{xs:'0px',sm:'0px',md:'0px'},textAlign:'center'}}>
       
     <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:'white',background:'#0D2D62',fontFamily:'Butler'}}>Mrs. Martha</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Chairman </Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'400'}}>D P S Society </Typography>
       
       
       </Box>
       
      
      </CardBox>
      </Box>
       </Box>
       
    
       </Box>
       
       
       </Box>


       <Box1>
<Box sx={{color:'white',display:'flex',flexDirection:'column',justifyContent:'center',height:'100%'}}>
<Typography sx={{fontSize:{xs:'40px',sm:'50px',md:'60px'},fontWeight:'700',fontFamily:'Butler'}}>Best Results &</Typography>
       <Typography sx={{fontSize:{xs:'40px',sm:'30px',md:'60px'},fontWeight:'700',fontFamily:'Butler'}}>Best Discipline in</Typography>
       <Typography sx={{fontSize:{xs:'40px',sm:'30px',md:'60px'},fontWeight:'700',fontFamily:'Butler'}}>Kanpur</Typography>
</Box>
<Box sx={{color:'white',display:'flex',flexDirection:'column',justifyContent:'center',height:'100%',width:{xs:'300px',sm:'350px',md:'400px'},gap:'30px',marginBottom:{xs:'40px',sm:'40px',md:'0px'}}}>
<Button variant='contained' sx={{fontSize:'25px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'}}}>Academic Excellence</Button>

<Button variant='contained' sx={{fontSize:'25px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'}}}>Holistic Devlopment</Button>

<Button variant='contained' sx={{fontSize:'25px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'}}}>Infrastructure & Facilities</Button>

<Button variant='contained' sx={{fontSize:'25px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'}}}>Inter DPS Rankings</Button>
</Box>
     </Box1>
       </>
  )
    }
export default Block2
