import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled} from '@mui/material';

export default function Block5() {
    const theme = useTheme();
    const CardBox = styled(Box)(({theme})=>({
  
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:' "Fakt Pro" "Helvetica Neue" Arial sans-serif',
    flexDirection:'column',
    gap:'70px',
    margin:'0px 0 100px',
   padding:'0px 100px 50px',
    
    [theme.breakpoints.down('lg')]: {
        padding:'100px 50px',
    },
    [theme.breakpoints.down('md')]: {
     flexDirection:'column',
     padding:'50px 20px',
     gap:'50px'
    },
    [theme.breakpoints.down('sm')]: {
      
    }
  }));

  const Image = styled(Card)(({img})=>({
      height:'50px',
      width:'50px',
      objectFit:'cover'
  }));

    return (
     
        <CardBox >
  
          <Box sx={{ display:'flex',flex:'1',flexDirection:'column',gap:'0px',justifyContent:'center',alignItems:{xs:'center',sm:'center'}}}>
             <Typography  sx={{color:'rgba(0,0,0,0.6)',textAlign:"center",fontSize:{xs:'30px',md:'40px'},fontWeight:{xs:'600'}}}>Timeless beauty, modern design</Typography>
             
         </Box>
     
         <Box sx={{height:'100%',display:'flex',flex:'3',gap:'30px',flexDirection:'column',justifyContent:'center',alignItems:{xs:'flex-start',md:'center'}}}>
          
          <Typography sx={{color:'#000',fontSize:{xs:'18px',md:'22px',opacity:'0.7'}}}>We take great pride in the quality of our jewelry and are committed to providing our customers with exceptional customer service. Our knowledgeable staff is always on hand to assist customers in finding the perfect piece of jewelry for their needs.</Typography>
    
          <Typography sx={{color:'#000',fontSize:{xs:'18px',md:'22px'},color:'#2468F7',fontWeight:'500',opacity:'0.7'}}>Discover to build our buisness on techpyro</Typography>
         </Box>
  
        </CardBox>
     
    );
}
