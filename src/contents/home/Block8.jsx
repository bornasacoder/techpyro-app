import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block8 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'column',
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
      width:'100%',
      height:'250px',
      flexDirection:'row',
      paddingTop:'40px', 
      alignItems:'center',
      // gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'200px',
      flexDirection:'row',
      paddingTop:'40px',
     alignItems:'center',
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


<Box sx={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
<Box sx={{backgroundColor:'#F2F2F2',display:'flex',flexDirection:'column',alignItems:'center',width:'1100px',boxShadow:'1px 2px 5px 1px rgba(0,0,0,0.1)',borderRadius:'20px',margin:'10px'}}>
  <Typography sx={{backgroundColor:'#616DFF',color:'white',fontSize:'20px',fontWeight:'600',width:'150px',display:'flex',justifyContent:'center',borderRadius:'10px'}}>Medical</Typography>

      <Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'50%'},width:{xs:'50%',sm:'50%',md:'100%'},margin:{xs:'20px',sm:'10px',md:'20px',display:'flex',justifyContent:'center',alignItems:'center'}}}>
      
        <CardMedia
        sx={{height:{xs:'70%',sm:'80%',md:'100%'},width:{xs:'100%',sm:'100%',md:'40%'}}}
          component="img"
          image="/images/category/byjus5.png"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'50%'},width:{xs:'50%',sm:'50%',md:'100%'},display:'flex',flexDirection:'column',padding:'0px',gap:'20px',alignItems:'center'}}>
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500',}}>Comprehensive learning program for JEE preparation</Typography>
       
        <Button variant='contained' sx={{backgroundColor:'#FE8C3C',color:'black',border:'1px solid black',borderRadius:'10px',"&:hover":{backgroundColor:'black',color:'white'},width:'150px'}}>MBBS</Button>
     
       </Box>
      
      
      </CardBox>

      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'50%'},width:{xs:'50%',sm:'50%',md:'100%'},margin:{xs:'20px',sm:'20px',md:'20px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:{xs:'70%',sm:'80%',md:'100%'},width:{xs:'100%',sm:'100%',md:'40%'}}}
          component="img"
          image="/images/category/byjus6.png"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'50%'},width:{xs:'50%',sm:'50%',md:'100%'},display:'flex',flexDirection:'column',padding:'0px',gap:'20px',alignItems:'center'}}>
       
       <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500',}}>Comprehensive learning program for NEET aspirants</Typography>
        
        <Button variant='contained' sx={{backgroundColor:'#FE8C3C',color:'black',border:'1px solid black',borderRadius:'10px',"&:hover":{backgroundColor:'black',color:'white'},width:'150px'}}>PHARMA</Button>
       </Box>
      
      </CardBox>


       </Box>
       
       </Box>
       </Box>
       
       
       </>
       
  )
    }
export default Block8
