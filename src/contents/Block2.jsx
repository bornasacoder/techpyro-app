import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block2 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'700px',
    
    [theme.breakpoints.down('lg')]: {
      width:'100vw',
      height:'400px',
     
    },
    [theme.breakpoints.down('md')]: {
      width:'100vw',
      height:'1100px',
      flexDirection:'column',
      paddingTop:'50px',
      gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'1100px',
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
      <Box sx={{padding:{xs:'10px',sm:'50px',md:'100px 100px 0px 100px'},width:'100%'}}>
      <CardBox >
      <Box sx={{height:{xs:'400px',sm:'100%',md:'700px'},width:{xs:'100%',sm:'100%',md:'50%'},paddingTop:{xs:'0px',sm:'0px',md:'0px'}}}>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'50px'},fontWeight:'700'}}>25+</Typography>
        <hr></hr>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'700'}}>Years of Experiences</Typography>
        </Box>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/blockimg8.webp"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'50%'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',alignItems:'center',paddingLeft:'20px'}}>
        <Box>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700'}}>About Us</Typography>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'40px'},fontWeight:'700'}}>Enjoy an Exceptional journey of Taste</Typography>
        <Box>Who are in extremely love with eco friendly system. Lorem ipsum dolo</Box>
          <Box> sit amet, consectetur adipisicing elit, sed do eiusmod tempor</Box>
           <Box> incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Box>
          <Box>  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </Box>
           <Box>commodo consequat. </Box>
           <Box>
            <Typography sx={{fontWeight:'500',fontSize:{xs:'15px',sm:'20px',md:'20px'}}}><TaskAlt /> Project Quality Management Plan</Typography>
            <Typography sx={{fontWeight:'500',fontSize:{xs:'15px',sm:'20px',md:'20px'}}}><TaskAlt />The Ability to Deligate Task</Typography>
            <Typography sx={{fontWeight:'500',fontSize:{xs:'15px',sm:'20px',md:'20px'}}}><TaskAlt />It Might be Finished or Unfinishaed</Typography>
           </Box>
           
      <Button variant='contained' sx={{borderRadius:'0',marginTop:'30px'}}>Sign up</Button>
      
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
        
      </Box>
       </Box>
      
      
      </CardBox>
      
       </Box>
       {/* <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <CardBox >
      
      
        <Box sx={{height:{xs:'50%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/blockimg5.webp"
          alt="green iguana"
        />
     </Box> */}
     {/* <Box sx={{height:{xs:'100%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'50%'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',alignItems:'center'}}>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'700'}}>About Our Product</Typography>
        <pre>This is your About section. It’s a great space to</pre>
          <pre> tell your story and to describe who you are and what</pre>
           <pre> you do. If you're a business, talk about how you </pre>
          <pre>  started and tell the story of your professional journey. </pre>
           <pre> People want to know the real you, so don't be afraid to </pre>
           <pre>  share personal anecdotes. Explain your core values and how you,</pre>
            <pre>  your organization, or your business stand out from the crowd.</pre> */}
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
        {/* <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'30px',sm:'50px',md:'100px'},zIndex:'0'}}>
      <Button variant='contained' sx={{borderRadius:'0'}}>Shop Now</Button>
      </Box>
       </Box>
      </CardBox>
      
       </Box> */}
       {/* <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'100px 30px',sm:'100px 50px',md:'100px'}}}>
       
       <Typography sx={{fontSize:{xs:'40px',sm:'30px',md:'40px'}}}>What kind of food we serve for you</Typography>

       <Typography>Who are in extremely love with eco friendly system.</Typography>
       </Box> */}
       {/* <Box2>
           <Box sx={{width:{xs:'300px',sm:'400px',md:'450px'}}}>
         
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'35px'},color:`${theme.header.background}`,fontWeight:'700'}}>Reserve your seats to confirm if you come with your famoly</Typography>
          <Typography sx={{color:`${theme.header.background}`}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          </Typography>
          <Typography sx={{color:`${theme.header.background}`}}>
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </Typography>
          <Typography sx={{color:`${theme.header.background}`}}>
          veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
          </Typography>
          </Box>
          <Box sx={{backgroundColor:`${theme.header.background}`,width:{xs:'300px',sm:'400px',md:'480px'},height:'500px',display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:{xs:'50px',sm:'70px',md:'0px'}}}>
          <Box sx={{backgroundColor:`${theme.header.background}`,display:'flex',flexDirection:'column',width:'400px',gap:'10px'}}>
            <TextField variant='outlined' label='Name'></TextField>
            <TextField variant='outlined' label='Email id' sx={{borderRadius:'0px'}}></TextField>
            <TextField variant='outlined' label='Phone no'></TextField>
            <TextField variant='outlined' label='Date & Time'></TextField>
            <Select label="Select Event"></Select>
            <Button variant='contained' sx={{borderRadius:'0',marginTop:'0px',width:'200px'}}>Make Reservation</Button>
          </Box>
          </Box>
       </Box2> */}
       {/* <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'100px 30px',sm:'100px 50px',md:'100px'}}}>
       
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'35px'},fontWeight:'700'}}>Food and Customer Gallery</Typography>

       <Typography>Who are in extremely love with eco friendly system.</Typography>
       </Box> */}
        {/* <Box1>

     </Box1> */}
       </>
       
  )
    }
export default Block2
