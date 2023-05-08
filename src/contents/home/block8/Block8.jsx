import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled,Button} from '@mui/material';

export default function Block8() {
    const theme = useTheme();
    const CardBox = styled(Box)(({theme})=>({
    background:'#F6F7FB',
    display:'flex',
    gap:'0px',
    fontFamily:' "Fakt Pro" "Helvetica Neue" Arial sans-serif',
    flexDirection:'row',
    padding:'100px 0px 100px 100px',
    marginBottom:'10px',
    [theme.breakpoints.down('lg')]: {
     
    },
    [theme.breakpoints.down('md')]: {
     flexDirection:'column',
     flexDirection:'column-reverse',
     padding:'100px 20px',
     gap:'50px'
    },
    [theme.breakpoints.down('sm')]: {
        padding:'100px 0px',
    }
  }));

  

    return (
     
        <CardBox >
  
          <Box sx={{  display:'flex',flex:'1',flexDirection:'column',gap:'15px',justifyContent:'center',paddingLeft:'20px',alignItems:{xs:'flex-start'}}}>
             
            <Typography sx={{color:'rgba(0,0,0,0.6)',fontSize:'32px',fontWeight:'600'}}>Freshness delivered to you</Typography>
            <Typography sx={{color:'#C4CBD6',fontSize:'20px',fontWeight:'600'}}>TAt our grocery shop, we're committed to sustainability and eco-friendliness. We work with local farmers and suppliers to reduce our carbon footprint and support local communities. We also offer a range of organic and sustainable products, so you can feel good about your food choices while also supporting a healthier planet.</Typography>
            <Button variant="outlined" sx={{width:'150px',height:'30px'}}>Learn More</Button>
         
         </Box>
     
         <Box sx={{  height:'350px',display:'flex',flex:'1',gap:'30px',flexDirection:'column',alignItems:{xs:'flex-start',sm:'flex-start',md:'center'}}}>
          <img style={{height:'350px',width:'100%'}} src="https://img.freepik.com/free-vector/convenient-shop-family-composition_1284-18718.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
         </Box>
  
        </CardBox>
     
    );
}
