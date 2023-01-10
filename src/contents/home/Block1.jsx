import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled} from '@mui/material';

export default function Card1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'row',
  width:'100vw',
  height:'500px',
  
  [theme.breakpoints.down('lg')]: {
    width:'100vw',
    height:'400px',
   
  },
  [theme.breakpoints.down('md')]: {
    width:'100vw',
    height:'400px',
  },
  [theme.breakpoints.down('sm')]: {
    width:'100vw',
    height:'400px',
    flexDirection:'column',
    padding:'10px'
  }
}))
  return (
   <Box sx={{paddingTop:'70px'}}>
      <CardBox >

        <Box sx={{height:{xs:'70%',sm:'50%',md:'100%'},width:{xs:'100%',sm:'100%',md:'60%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/blockimg2.jpeg"
          alt="green iguana"
        />
       </Box>
   
       <Box sx={{height:{xs:'40%',sm:'50%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},padding:'10px 20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#F6F7FB'}}>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'60px'},fontWeight:'700'}}>Get Your Food Today</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography>
       </Box>

      </CardBox>
      </Box>
  );
}