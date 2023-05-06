import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled,Button} from '@mui/material';

export default function Block12() {
    const theme = useTheme();
    const CardBox = styled(Box)(({theme})=>({
    background:'#F6F7FB',
    display:'flex',
    
   
    fontFamily:' "Fakt Pro" "Helvetica Neue" Arial sans-serif',
    flexDirection:'row',
    margin:'0px 0 10px',
   padding:'50px 50px',
    
    [theme.breakpoints.down('lg')]: {
        
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
  
          <Box sx={{ display:'flex',flex:'4',flexDirection:'column',gap:'0px',justifyContent:'center',alignItems:{xs:'flex-start'}}}>
             <Typography  sx={{color:'#3293E3',fontSize:{xs:'25px'},fontWeight:{xs:'600'}}}>Just Important Your Deliveries</Typography>
             <Typography sx={{color:'#3293E3',fontSize:{xs:'20px',opacity:'0.6'},fontWeight:{xs:'400'}}}>Get in touch with our sales team or start your 14-day free trial</Typography>
         </Box>
     
         <Box sx={{height:'100%',display:'flex',flex:'2',gap:'30px',alignItems:{xs:'flex-start'}}}>
          
         <Button sx={{opacity:'0.6',fontSize:'15px',fontWeight:'600',padding:'15px 30px'}} variant="contained">Start Free Trail</Button>
          <Button sx={{opacity:'0.6',fontSize:'15px',fontWeight:'600',padding:'15px 30px',color:'blue'}} variant="outlined">Contact Sales</Button>
         </Box>
  
        </CardBox>
     
    );
}
