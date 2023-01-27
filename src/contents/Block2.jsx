import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block2 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    width:'400px',
    height:'400px',
    backgroundColor:'#FFFFFF',
    [theme.breakpoints.down('lg')]: {
      width:'100vw',
      height:'400px',
     
    },
    [theme.breakpoints.down('md')]: {
      width:'100vw',
      height:'500px',
      flexDirection:'column',
      paddingTop:'50px',
      gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'450px',
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
     <Box sx={{backgroundColor:'#FFFFFF',margin:{xs:'0px',sm:'0px 50px',md:'0px 100px'}}}>
<Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'20px'},fontWeight:'500',color:'black',padding:{xs:'20px',sm:'40px',md:'30px'},display:'flex'}}>For you</Typography>
</Box>

      <Box sx={{margin:{xs:'0px',sm:'0px 50px',md:'0px 100px'},width:'auto',backgroundColor:'#FFFFFF',display:'flex',justifyContent:'space-evenly',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <CardBox >
      <Box sx={{height:{xs:'60%',sm:'100%',md:'60%'},width:{xs:'100%',sm:'100%',md:'100%'},paddingTop:{xs:'0px',sm:'0px',md:'0px'}}}>
      
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/mart9.webp"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'40%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',background:'#F6F7FB',padding:'20px',gap:'20px',backgroundColor:'#FFFFFF'}}>
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',}}>Prep your outdoor oasis</Typography>
        <Typography>Get set for spring with patio furniture & more</Typography>
        <Button variant='contained' sx={{width:'130px',backgroundColor:'#FFFFFF',color:'black',border:'1px solid black',borderRadius:'20px',"&:hover":{backgroundColor:'black',color:'white'}}}>Shop now</Button>
     
       </Box>
      
      
      </CardBox>

      <CardBox >
      <Box sx={{height:{xs:'400px',sm:'100%',md:'60%'},width:{xs:'100%',sm:'100%',md:'100%'},paddingTop:{xs:'0px',sm:'0px',md:'0px'}}}>
      
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/mart10.webp"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',background:'#F6F7FB',padding:'20px',gap:'20px',backgroundColor:'#FFFFFF'}}>
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',}}>Prep your outdoor oasis</Typography>
        <Typography>Get set for spring with patio furniture & more</Typography>
        <Button variant='contained' sx={{width:'130px',backgroundColor:'#FFFFFF',color:'black',border:'1px solid black',borderRadius:'20px',"&:hover":{backgroundColor:'black',color:'white'}}}>Shop now</Button>
     
       </Box>
      
      
      </CardBox>


      <CardBox >
      <Box sx={{height:{xs:'400px',sm:'100%',md:'60%'},width:{xs:'100%',sm:'100%',md:'100%'},paddingTop:{xs:'0px',sm:'0px',md:'0px'}}}>
      
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/mart11.webp"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',background:'#F6F7FB',padding:'20px',gap:'20px',backgroundColor:'#FFFFFF'}}>
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',}}>Prep your outdoor oasis</Typography>
        <Typography>Get set for spring with patio furniture & more</Typography>
        <Button variant='contained' sx={{width:'130px',backgroundColor:'#FFFFFF',color:'black',border:'1px solid black',borderRadius:'20px',"&:hover":{backgroundColor:'black',color:'white'}}}>Shop now</Button>
     
       </Box>
      
      
      </CardBox>
      
       </Box>
     
       <Box sx={{margin:{xs:'0px',sm:'0px 50px',md:'0px 100px'},backgroundColor:'#FFFFFF',paddingTop:'20px'}}>
      <Box sx={{height:'70px',display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'#F2F8FD',margin:'0px 30px',borderRadius:'10px',gap:'10px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'700',color:'black'}}>Earn 5% cashback on Walmart.com.</Typography>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'400',color:'black'}}>See if you are pre-approved with no credit risk.</Typography>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300',color:'black',textDecoration:'underline'}}>Learn how.</Typography>
      </Box>
      </Box>
       
       </>
       
  )
    }
export default Block2
