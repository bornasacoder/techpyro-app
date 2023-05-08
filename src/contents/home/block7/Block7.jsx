import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled,Button} from '@mui/material';

export default function Block7() {
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
     padding:'100px 20px',
     gap:'50px'
    },
    [theme.breakpoints.down('sm')]: {
        padding:'100px 0px',
    }
  }));

  

    return (
     
        <CardBox >
    <Box sx={{  height:'350px',display:'flex',flex:'1',gap:'30px',flexDirection:'column',alignItems:{xs:'flex-start',sm:'flex-start',md:'center'}}}>
          <img style={{height:'350px',width:'100%'}} src="https://img.freepik.com/free-vector/realistic-pair-golden-wedding-rings_52683-13737.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
         </Box>
          <Box sx={{  display:'flex',flex:'1',flexDirection:'column',gap:'15px',justifyContent:'center',paddingLeft:'20px',alignItems:{xs:'flex-start'}}}>
             
            <Typography sx={{color:'rgba(0,0,0,0.6)',fontSize:'32px',fontWeight:'600'}}>The perfect expression of love</Typography>
            <Typography sx={{color:'#C4CBD6',fontSize:'20px',fontWeight:'600'}}>That's why we have made it our mission to offer the finest selection of jewelry that will help our customers celebrate life's most special moments. From diamond engagement rings to statement necklaces and bracelets.</Typography>
            <Button variant="outlined" sx={{width:'150px',height:'30px'}}>Learn More</Button>
         
         </Box>
     
       
  
        </CardBox>
     
    );
}
