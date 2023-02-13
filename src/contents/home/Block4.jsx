import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block4 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    width:'450px',
    height:'400px',
    // backgroundColor:'#F2F2F2',
    borderRadius:'0px',
    boxShadow:'none',
  
    [theme.breakpoints.down('md')]: {
      width:'100%',
      height:'300px',
      flexDirection:'column',
      // paddingTop:'50px',
      // gap:'50px',
      borderRadius:'0px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'300px',
      flexDirection:'column',
      // paddingTop:'50px',
      borderRadius:'0px',
      // gap:'50px',
    },
   
  }))
  const Box1= styled(Box)(({ theme }) => ({
    height:'700px',
    width:'100%',
    backgroundImage: `url(${"/images/category/dps11.jpeg"})`,
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
    display:'flex',
    justifyContent:'space-evenly',
    [theme.breakpoints.down('md')]: {
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-evenly',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column',
      justifyContent:'space-evenly',
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
    
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'45px'},fontWeight:'600',color:'black'}}>Level of Education</Typography>
       
       </Box>

<Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0px 0px',sm:'0px 0px',md:'0px 0px 80px 0px'}}}>

 

      <Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px 100px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:{xs:'10px',sm:'20px',md:'40px'}}}>
      <CardBox >
      <Box sx={{height:{xs:'80%',sm:'80%',md:'80%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'100%',"&:hover":{transform:'scale(1.1)'},transition:'0.5s all'}}
          component="img"
          image="/images/category/dps8.jpg"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'20%',sm:'20%',md:'20%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'0px',sm:'0px',md:'0px'},gap:{xs:'20px',sm:'0px',md:'0px'},textAlign:'center'}}>
       
       <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'700',color:'white',background:'#0D2D62',fontFamily:'Butler'}}>Class PG-VIII</Typography>
       
       
       
       </Box>
      
      
      </CardBox>

      <CardBox >
      <Box sx={{height:{xs:'80%',sm:'80%',md:'80%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'100%',"&:hover":{transform:'scale(1.1)'},transition:'0.5s all'}}
          component="img"
          image="/images/category/dps9.jpg"
          alt="green iguana"
        />
     </Box>
     <Box sx={{height:{xs:'20%',sm:'20%',md:'20%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'0px',sm:'0px',md:'0px'},gap:{xs:'0px',sm:'0px',md:'0px'},textAlign:'center'}}>
       
     <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'700',color:'white',background:'#0D2D62',fontFamily:'Butler'}}>Classes IX-X</Typography>
        
       
       
       </Box>
       
      
      </CardBox>




      <CardBox >
      <Box sx={{height:{xs:'80%',sm:'80%',md:'80%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'100%',"&:hover":{transform:'scale(1.1)'},transition:'0.5s all'}}
          component="img"
          image="/images/category/dps10.jpg"
          alt="green iguana"
        />
     </Box>
     <Box sx={{height:{xs:'20%',sm:'20%',md:'30%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'0px',sm:'0px',md:'0px'},gap:{xs:'0px',sm:'0px',md:'0px'},textAlign:'center'}}>
       
     <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'700',color:'white',background:'#0D2D62',fontFamily:'Butler'}}>Classes XI-XII</Typography>
        
       
       
       </Box>
       
      
      </CardBox>


  
       </Box>
       
    
       </Box>
       
       
       </Box>


       <Box1>
<Box sx={{color:'white',display:'flex',flexDirection:'column',justifyContent:'center',height:'100%'}}>
<Typography sx={{fontSize:{xs:'40px',sm:'50px',md:'60px'},fontWeight:'700',fontFamily:'Butler'}}>A Holistic Pedagogy</Typography>
       <Typography sx={{fontSize:{xs:'40px',sm:'50px',md:'60px'},fontWeight:'700',fontFamily:'Butler'}}>to foster All Round</Typography>
       <Typography sx={{fontSize:{xs:'40px',sm:'50px',md:'60px'},fontWeight:'700',fontFamily:'Butler'}}>devlopment</Typography>
</Box>
<Box sx={{color:'white',display:'flex',flexDirection:'column',justifyContent:'center',height:'100%',width:{xs:'300px',sm:'350px',md:'400px'},gap:'30px',marginBottom:{xs:'40px',sm:'40px',md:'0px'}}}>
<Button variant='contained' sx={{fontSize:'25px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'}}}>Clubs & Activities</Button>

<Button variant='contained' sx={{fontSize:'25px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'}}}>Dance Music & Dramatics</Button>

<Button variant='contained' sx={{fontSize:'25px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'}}}>Arts & Crafts</Button>

<Button variant='contained' sx={{fontSize:'25px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'}}}>Sports & Fitness</Button>

<Button variant='contained' sx={{fontSize:'25px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'}}}>DPS Times</Button>
</Box>
     </Box1>
       </>
  )
    }
export default Block4
