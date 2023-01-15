import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block2 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'600px',
    height:'100px',
    borderRadius:'50px',
    backgroundColor:theme.header.textColor,
    
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
      height:'100px',
      flexDirection:'row',
      // paddingTop:'50px',
      gap:'50px',
    },
   
  }))
  const Box3= styled(Box)(({ theme }) => ({
    height:'auto',
    width:'100%',
    backgroundImage: `url(${"/images/category/bgdimg4.jpeg"})`,
    backgroundSize:'cover',
    // backgroundAttachment:'fixed'
    }
  ));

 
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'100px 30px',sm:'100px 50px',md:'100px'}}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'25px'},fontWeight:'700'}}>From our Menu</Typography>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'40px'},fontWeight:'700'}}>Delicious Food Forever</Typography>

       
       </Box>
     {/* <Box1>

     </Box1> */}
     <Box3>
      <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'}}} >
     <Box  >
      <Box sx={{padding:{xs:'10px',sm:'50px',md:'100px 100px 0px 100px'},width:'100%'}}>
      <CardBox >
      <Box sx={{height:{xs:'100px',sm:'100px',md:'100px'},width:{xs:'100px',sm:'100px',md:'100px'},paddingTop:{xs:'0px',sm:'0px',md:'0px'},borderRadius:'50px'}}>
        
        <CardMedia
        sx={{height:'100%',borderRadius:'50px'}}
          component="img"
          image="/images/category/food1.jpeg"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'auto',sm:'50%',md:'auto'},width:{xs:'50%',sm:'70%',md:'70%'},display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},background:'#F6F7FB',justifyContent:'center',alignItems:'center',gap:{xs:'0px',sm:'30px',md:'60px'},backgroundColor:`${theme.header.textColor}`}}>
        <Box>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>Chicken Biriyani</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'700',color:`${theme.header.background}`}}>Enjoy an Exceptional journey of Taste</Typography>
        
      </Box>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>--$14.07</Typography>
       </Box>
      
      
      </CardBox>
      
       </Box>

       <Box sx={{padding:{xs:'10px',sm:'50px',md:'30px 100px 0px 100px'},width:'100%'}}>
      <CardBox >
      <Box sx={{height:{xs:'100px',sm:'100px',md:'100px'},width:{xs:'100px',sm:'100px',md:'100px'},paddingTop:{xs:'0px',sm:'0px',md:'0px'},borderRadius:'50px'}}>
        
        <CardMedia
        sx={{height:'100%',borderRadius:'50px'}}
          component="img"
          image="/images/category/food2.jpeg"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'50%',sm:'100%',md:'70%'},display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},background:'#F6F7FB',justifyContent:'center',alignItems:'center',gap:{xs:'0px',sm:'30px',md:'60px'},backgroundColor:`${theme.header.textColor}`}}>
        <Box>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>Chicken Tikka</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:`${theme.header.background}`}}>Enjoy an Exceptional journey of Taste</Typography>
        
      </Box>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>--$14.07</Typography>
       </Box>
      
      
      </CardBox>
      
       </Box>

       <Box sx={{padding:{xs:'10px',sm:'50px',md:'30px 100px 0px 100px'},width:'100%'}}>
      <CardBox >
      <Box sx={{height:{xs:'100px',sm:'100px',md:'100px'},width:{xs:'100px',sm:'100px',md:'100px'},paddingTop:{xs:'0px',sm:'0px',md:'0px'},borderRadius:'50px'}}>
        
        <CardMedia
        sx={{height:'100%',borderRadius:'50px'}}
          component="img"
          image="/images/category/food3.jpeg"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'50%',sm:'100%',md:'70%'},display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},background:'#F6F7FB',justifyContent:'center',alignItems:'center',gap:{xs:'0px',sm:'30px',md:'60px'},backgroundColor:`${theme.header.textColor}`}}>
        <Box>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>Kadai paneer</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:`${theme.header.background}`}}>Enjoy an Exceptional journey of Taste</Typography>
        
      </Box>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>--$14.07</Typography>
       </Box>
      
      
      </CardBox>
      
       </Box>

       <Box sx={{padding:{xs:'10px',sm:'50px',md:'30px 100px 0px 100px'},width:'100%'}}>
      <CardBox >
      <Box sx={{height:{xs:'100px',sm:'100px',md:'100px'},width:{xs:'100px',sm:'100px',md:'100px'},paddingTop:{xs:'0px',sm:'0px',md:'0px'},borderRadius:'50px'}}>
        
        <CardMedia
        sx={{height:'100%',borderRadius:'50px'}}
          component="img"
          image="/images/category/food4.jpeg"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'50%',sm:'100%',md:'70%'},display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},background:'#F6F7FB',justifyContent:'center',alignItems:'center',gap:{xs:'0px',sm:'30px',md:'60px'},backgroundColor:`${theme.header.textColor}`}}>
        <Box>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>Paneer Do Pyaza</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:`${theme.header.background}`}}>Enjoy an Exceptional journey of Taste</Typography>
        
      </Box>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>--$14.07</Typography>
       </Box>
      
      
      </CardBox>
      
       </Box>
       </Box>


       
       <Box>
      <Box sx={{padding:{xs:'10px',sm:'50px',md:'100px 40px 0px 0px'},width:'100%'}}>
      <CardBox >
      <Box sx={{height:{xs:'100px',sm:'100px',md:'100px'},width:{xs:'100px',sm:'100px',md:'100px'},paddingTop:{xs:'0px',sm:'0px',md:'0px'},borderRadius:'50px'}}>
        
        <CardMedia
        sx={{height:'100%',borderRadius:'50px'}}
          component="img"
          image="/images/category/food5.jpg"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'50%',sm:'60%',md:'70%'},display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},background:'#F6F7FB',justifyContent:'center',alignItems:'center',gap:{xs:'0px',sm:'30px',md:'60px'},backgroundColor:`${theme.header.textColor}`}}>
        <Box>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>Sahi Paneer</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'30px',md:'15px'},fontWeight:'700',color:`${theme.header.background}`}}>Enjoy an Exceptional journey of Taste</Typography>
        
      </Box>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>--$14.07</Typography>
       </Box>
      
      
      </CardBox>
      
       </Box>

       <Box sx={{padding:{xs:'10px',sm:'50px',md:'30px 100px 0px 0px'},width:'100%'}}>
      <CardBox >
      <Box sx={{height:{xs:'100px',sm:'100%',md:'100px'},width:{xs:'100px',sm:'100%',md:'100px'},paddingTop:{xs:'0px',sm:'0px',md:'0px'},borderRadius:'50px'}}>
        
        <CardMedia
        sx={{height:'100%',borderRadius:'50px'}}
          component="img"
          image="/images/category/food6.jpeg"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'50%',sm:'100%',md:'70%'},display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},background:'#F6F7FB',justifyContent:'center',alignItems:'center',gap:{xs:'0px',sm:'30px',md:'60px'},backgroundColor:`${theme.header.textColor}`}}>
        <Box>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>Burger</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:`${theme.header.background}`}}>Enjoy an Exceptional journey of Taste</Typography>
        
      </Box>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>--$14.07</Typography>
       </Box>
      
      
      </CardBox>
      
       </Box>

       <Box sx={{padding:{xs:'10px',sm:'50px',md:'30px 100px 0px 0px'},width:'100%'}}>
      <CardBox >
      <Box sx={{height:{xs:'100px',sm:'100px',md:'100px'},width:{xs:'100px',sm:'100px',md:'100px'},paddingTop:{xs:'0px',sm:'0px',md:'0px'},borderRadius:'50px'}}>
        
        <CardMedia
        sx={{height:'100%',borderRadius:'50px'}}
          component="img"
          image="/images/category/food7.webp"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'50%',sm:'60%',md:'70%'},display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},background:'#F6F7FB',justifyContent:'center',alignItems:'center',gap:{xs:'0px',sm:'30px',md:'60px'},backgroundColor:`${theme.header.textColor}`}}>
        <Box>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>Noodles</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:`${theme.header.background}`}}>Enjoy an Exceptional journey of Taste</Typography>
        
      </Box>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>--$14.07</Typography>
       </Box>
      
      
      </CardBox>
      
       </Box>

       <Box sx={{padding:{xs:'10px',sm:'50px',md:'30px 100px 100px 0px'},width:'100%'}}>
      <CardBox >
      <Box sx={{height:{xs:'100px',sm:'100px',md:'100px'},width:{xs:'100px',sm:'100px',md:'100px'},paddingTop:{xs:'0px',sm:'0px',md:'0px'},borderRadius:'50px'}}>
        
        <CardMedia
        sx={{height:'100%',borderRadius:'50px'}}
          component="img"
          image="/images/category/food8.jpeg"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'50%',sm:'100%',md:'70%'},display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},background:'#F6F7FB',justifyContent:'center',alignItems:'center',gap:{xs:'0px',sm:'30px',md:'60px'},backgroundColor:`${theme.header.textColor}`}}>
        <Box>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>Sandwiches</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'700',color:`${theme.header.background}`}}>Enjoy an Exceptional journey of Taste</Typography>
        
      </Box>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700',color:`${theme.header.background}`}}>--$14.07</Typography>
       </Box>
      
      
      </CardBox>
      
       </Box>
       </Box>
       </Box>
       <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'40px',paddingBottom:'80px'}}>
       <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'400',color:`${theme.header.background}`}}>During Winter daily from 08:30 am to 09:00 pm</Typography>
       <Button variant='contained' sx={{borderRadius:'0px'}}>BROWSE MENU</Button>
       </Box>
       </Box3>
       </>
       )
}
export default Block2