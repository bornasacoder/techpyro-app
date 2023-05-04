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
    backgroundImage: `url(${"https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-design-chandelier_105762-2230.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"})`,
    backgroundSize:'cover',
    backgroundAttachment:'fixed'
    }
  ));
  const Box2= styled(Box)(({ theme }) => ({
    height:'680px',
    width:'100%',
    backgroundImage: `url(${"https://img.freepik.com/premium-photo/interior-design-living-area-reception-with-armchair_38322-455.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"})`,
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
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'700'}}>About Our Furniture</Typography>
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
          image="https://img.freepik.com/free-photo/chair-modern-table-interior-indoor_1122-2074.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
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
          image="https://img.freepik.com/free-photo/room-interior-design_23-2148899449.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
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
            Furniture
            
          </Typography>
       </Box2>
       </>
  )
}
export default Block2
