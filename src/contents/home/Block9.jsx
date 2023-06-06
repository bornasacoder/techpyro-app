import React from 'react'
import {Card, CardMedia, Typography, Box,styled, Button} from '@mui/material';
// import { TaskAlt } from '@mui/icons-material';

const Block9 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'530px',
    height:'300px',
    backgroundColor:'#F2F2F2',
    borderRadius:'20px',
    boxShadow:'none',
    [theme.breakpoints.down('lg')]: {
      width:'100vw',
      height:'400px',
     
    },
    [theme.breakpoints.down('md')]: {
      width:'100vw',
      height:'250px',
      flexDirection:'row',
      // paddingTop:'50px',
      // gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'250px',
      flexDirection:'row',
      
      // paddingTop:'50px',
      // gap:'50px',
    },
   
  }))

  return (
    <>
     {/* <Box1>

     </Box1> */}
  

<Box sx={{display:'flex',justifyContent:'center',}}>
<Box sx={{margin:{xs:'40px 10px',sm:'0px 50px',md:'40px 100px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row',gap:'40px'}}}>

<Box sx={{backgroundColor:'#F2F2F2',display:'flex',flexDirection:'column',alignItems:'center',width:{xs:'100%',sm:'100%',md:'530px'},boxShadow:'1px 2px 5px 1px rgba(0,0,0,0.1)',borderRadius:'20px'}}>
  <Typography sx={{backgroundColor:'#616DFF',color:'white',fontSize:'20px',fontWeight:'600',width:'150px',display:'flex',justifyContent:'center',borderRadius:'10px'}}>Classes LKG - 3</Typography>

      
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'50%',sm:'50%',md:'50%'},margin:{xs:'20px',sm:'0px',md:'50px'},paddingTop:'40px'}}>
      
        <CardMedia
       sx={{height:{xs:'auto',sm:'50%',md:'50%'},width:{xs:'100%',sm:'100%',md:'100%'}}}
          component="img"
          image="/images/category/byjus7.png"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'50%',sm:'50%',md:'50%'},display:'flex',flexDirection:'column',padding:{xs:'15px',sm:'20px',md:'40px'},gap:'20px'}}>
       
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',}}>Personalised learning app to learn anytime,anywhere</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500',textDecoration:'underline'}}>Know More  </Typography>
        <Button variant='contained' sx={{backgroundColor:'#FC6570',color:'black',border:'1px solid black',borderRadius:'10px',"&:hover":{backgroundColor:'black',color:'white'},width:'100px'}}>Explore</Button>
     
       </Box>
      
      
      </CardBox>
</Box>


<Box sx={{backgroundColor:'#F2F2F2',display:'flex',flexDirection:'column',alignItems:'center',width:{xs:'100%',sm:'100%',md:'530px'},boxShadow:'1px 2px 5px 1px rgba(0,0,0,0.1)',borderRadius:'20px'}}>
  <Typography sx={{backgroundColor:'#616DFF',color:'white',fontSize:'20px',fontWeight:'600',width:'150px',display:'flex',justifyContent:'center',borderRadius:'10px'}}>IAS</Typography>

      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'50%',sm:'50%',md:'50%'},padding:{xs:'20px',sm:'0px',md:'50px'}}}>
      
        <CardMedia
         sx={{height:{xs:'100%',sm:'80%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}
          component="img"
          image="/images/category/byjus8.png"
          alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'50%',sm:'50%',md:'50%'},display:'flex',flexDirection:'column',padding:{xs:'15px',sm:'20px',md:'40px'},gap:'20px'}}>
       
       <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',}}>Personalised learning program for the leaders of tomorrrow</Typography>
        <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500',textDecoration:'underline'}}>Know More </Typography>
        <Button variant='contained' sx={{backgroundColor:'#FC6570',color:'black',border:'1px solid black',borderRadius:'10px',"&:hover":{backgroundColor:'black',color:'white'},width:'100px'}}>Explore</Button>
       </Box>
      
      </CardBox>


       </Box>
       
       </Box>
       </Box>
       
       
       </>
       
  )
    }
export default Block9
