import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';

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
      width:'300px',
      height:'600px',
      flexDirection:'column',
      padding:'0px'
    },
   
  }))
  const Box1= styled(Box)(({ theme }) => ({
    height:'680px',
    width:'100%',
    backgroundImage: `url(${"https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
    backgroundSize:'cover',
    backgroundAttachment:'fixed'
    }
  ));
  const Box2= styled(Box)(({ theme }) => ({
    height:'680px',
    width:'100%',
    backgroundImage: `url(${"https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
    }
  ));
  return (
    <>
     <Box1>

     </Box1>
      <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <CardBox >
      
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'50%'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',alignItems:'center'}}>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'700'}}>About Our Grocery</Typography>
        <pre>This is your About section. It’s a great space to</pre>
          <pre> tell your story and to describe who you are and what</pre>
           <pre> you do. If you're a business, talk about how you </pre>
          <pre>  started and tell the story of your professional journey. </pre>
           <pre> People want to know the real you, so don't be afraid to </pre>
           <pre>  share personal anecdotes. Explain your core values and how you,</pre>
            <pre>  your organization, or your business stand out from the crowd.</pre>
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
        <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'30px',sm:'50px',md:'100px'},zIndex:'0'}}>
      <Button variant='contained' sx={{borderRadius:'0'}}>Read More</Button>
      </Box>
       </Box>
        <Box sx={{height:{xs:'50%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'500px'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
     </Box>
      </CardBox>
      
       </Box>
       <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <CardBox >
      
      
        <Box sx={{height:{xs:'50%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://images.pexels.com/photos/2693828/pexels-photo-2693828.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
     </Box>
     <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'50%'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',alignItems:'center'}}>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'700'}}>About Our Product</Typography>
        <pre>This is your About section. It’s a great space to</pre>
          <pre> tell your story and to describe who you are and what</pre>
           <pre> you do. If you're a business, talk about how you </pre>
          <pre>  started and tell the story of your professional journey. </pre>
           <pre> People want to know the real you, so don't be afraid to </pre>
           <pre>  share personal anecdotes. Explain your core values and how you,</pre>
            <pre>  your organization, or your business stand out from the crowd.</pre>
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
        <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'30px',sm:'50px',md:'100px'},zIndex:'0'}}>
      <Button variant='contained' sx={{borderRadius:'0'}}>Shop Now</Button>
      </Box>
       </Box>
      </CardBox>
      
       </Box>
       <Box2>
           
         
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'40px'},height:{xs:'0px',sm:'170px',md:'0px'},color:`${theme.header.background}`}}>Just Start Your Day with a walk</Typography>
          <Typography sx={{fontSize:{xs:'100px',sm:'150px',md:'200px'},fontWeight:'1000',height:{xs:'110px',sm:'170px',md:'200px'},color:`${theme.header.background}`}}>
            Groceries
            
          </Typography>
       </Box2>
       </>
  )
}
export default Block2
