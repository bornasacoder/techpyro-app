import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled} from '@mui/material';

export default function Block4() {
    const theme = useTheme();
    const CardBox = styled(Box)(({theme})=>({
    background:'#3DCAD4',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    fontFamily:' "Fakt Pro" "Helvetica Neue" Arial sans-serif',
    flexDirection:'row',
    margin:'0px 0 100px',
   padding:'100px 50px',
    
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
             <Typography  sx={{color:'#ffff',fontSize:{xs:'50px'},fontWeight:{xs:'900'}}}>United</Typography>
             <Typography sx={{color:'#ffff',fontSize:{xs:'20px',md:'25px'},fontWeight:{xs:'500'}}}>Supermarkets</Typography>
         </Box>
     
         <Box sx={{height:'100%',display:'flex',flex:'3',gap:'30px',flexDirection:'column',justifyContent:'center',alignItems:{xs:'flex-start',sm:'start'}}}>
          
          <Typography sx={{color:'#ffff',fontSize:{xs:'20px',md:'22px'}}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos hic, iure illo laboriosam libero neque vero, quaerat voluptates tempora deserunt est excepturi, asperiores blanditiis corrupti labore ullam? Provident, dolore facere?</Typography>
    
          <Typography sx={{color:'#ffff',fontSize:{xs:'18px',md:'22px'},color:'#ffff',fontWeight:'500',opacity:'0.7'}}>Discover to build our buisness on techpyro</Typography>
         </Box>
  
        </CardBox>
     
    );
}
