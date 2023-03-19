import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';


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
  
    [theme.breakpoints.down('md')]: {
      width:'100vw',
      height:'450px',
      flexDirection:'column',
      // paddingTop:'50px',
      // gap:'50px',
      borderRadius:'10px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'400px',
      flexDirection:'column',
      // paddingTop:'50px',
      borderRadius:'10px',
      // gap:'50px',
    },
   
  }))
 

  return (
    <Box sx={{background:'#17A2B8'}}>
    
  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'50px 0px 0px 0px',sm:'70px 0px',md:'100px'},textAlign:'center'}}>
    <Typography sx={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Packages You Like</Typography>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'600',color:'white'}}>Our Packages</Typography>
       
       </Box>

<Box sx={{display:'flex',justifyContent:'center',padding:{xs:'50px 10px',sm:'0px 20px',md:'0px 0px 80px 0px'}}}>

 

      <Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px 100px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'40px'}}>
      <CardBox >
      <Box sx={{height:{xs:'50%',sm:'50%',md:'50%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'70%',width:'30%'}}
          component="img"
          image="/images/category/kid3.svg"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'40%',sm:'40%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'0px 40px 40px 40px'},gap:{xs:'20px',sm:'0px',md:'30px'},textAlign:'center'}}>
       
       <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'20px'},fontWeight:'700',color:'violet'}}>Indoor Gmaes</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae? </Typography>
       
       
       </Box>
       <Box sx={{height:{xs:'30%',sm:'40%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',padding:{xs:'25px',sm:'25px',md:'20px 40px 60px 40px'},gap:'10px',textAlign:'center',justifyContent:'center'}}>
       
       <Button variant='contained' sx={{width:'200px',marginTop:'10px',backgroundColor:'#FFC107',fontSize:'15px',color:'black',borderRadius:'0px 50px 0px 50px'}}>LEARN MORE</Button>
       </Box>
      
      </CardBox>

      <CardBox >
      <Box sx={{height:{xs:'50%',sm:'50%',md:'50%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'70%',width:'30%'}}
          component="img"
          image="/images/category/kid4.svg"
          alt="green iguana"
        />
     </Box>
     <Box sx={{height:{xs:'40%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'0px 40px 40px 40px'},gap:{xs:'20px',sm:'0px',md:'30px'},textAlign:'center'}}>
       
       <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'20px'},fontWeight:'700',color:'green'}}>Outdoor Gmaes & Events</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae? </Typography>
       
       
       </Box>
       <Box sx={{height:{xs:'30%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',padding:{xs:'25px',sm:'25px',md:'20px 40px 60px 40px'},gap:'10px',textAlign:'center',justifyContent:'center'}}>
       
       <Button variant='contained' sx={{width:'200px',marginTop:'10px',backgroundColor:'red',fontSize:'15px',color:'white',borderRadius:'0px 50px 0px 50px'}}>LEARN MORE</Button>
       </Box>
      
      </CardBox>




      <CardBox >
      <Box sx={{height:{xs:'50%',sm:'50%',md:'50%'},width:{xs:'100%',sm:'100%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'70%',width:'30%'}}
          component="img"
          image="/images/category/kid5.svg"
          alt="green iguana"
        />
     </Box>
     <Box sx={{height:{xs:'40%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'0px 40px 40px 40px'},gap:{xs:'20px',sm:'0px',md:'30px'},textAlign:'center'}}>
       
       <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'20px'},fontWeight:'700',color:'red'}}>Campings for Kids</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae? </Typography>
       
       
       </Box>
       <Box sx={{height:{xs:'30%',sm:'50%',md:'40%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',padding:{xs:'25px',sm:'25px',md:'20px 40px 60px 40px'},gap:'10px',textAlign:'center',justifyContent:'center'}}>
       
       <Button variant='contained' sx={{width:'200px',marginTop:'10px',backgroundColor:'#71BC42',fontSize:'15px',color:'black',borderRadius:'0px 50px 0px 50px'}}>LEARN MORE</Button>
       </Box>
      
      </CardBox>
       </Box>
       
    
       </Box>
       
       
       </Box>
       
  )
    }
export default Block2
