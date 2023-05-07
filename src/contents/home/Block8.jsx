import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

const Block8 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'400px',
    backgroundColor:'#FFFFFF',
    borderRadius:'0px',
    boxShadow:'none',
    border:'1px solid rgba(0,0,0,0.3)',
    [theme.breakpoints.down('lg')]: {
      width:'100vw',
      height:'400px',
     
    },
    [theme.breakpoints.down('md')]: {
      width:'100%',
      height:'250px',
      flexDirection:'column',
      paddingTop:'0px', 
      alignItems:'center',
      // gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'auto',
      height:'400px',
      flexDirection:'column',
      paddingTop:'0px',
     alignItems:'center',
     margin:'10px',
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




 

      <Box sx={{width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},margin:{xs:'0px',sm:'0px 0px',md:'80px 150px'}}}>
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},margin:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://img.freepik.com/free-photo/student-online-cute-young-guy-studying-computer-glasses-green-shirt-with-cup-happy_140725-164742.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'30px',md:'40px'},gap:'0px',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'30px'},fontWeight:'600',color:'black'}}>President's Welcome</Typography>
       <Typography>“Welcome to our website. I am honored to be the new president of Eduma University. I have been entrusted with continuing the academic excellence of this university and enriching the quality of student life.”</Typography>

       </Box>
      
      
      </CardBox>

   


       </Box>
       
      
    
       
       
       </>
       
  )
    }
export default Block8
