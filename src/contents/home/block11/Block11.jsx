import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled} from '@mui/material';

export default function Block11() {
    const theme = useTheme();
    const CardBox = styled(Box)(({theme})=>({
        background:'#Fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:' "Fakt Pro" "Helvetica Neue" Arial sans-serif',
    gap:'10px',
 margin:'0px 0 10px',
  // padding:'100px 100px 50px',
    
    [theme.breakpoints.down('lg')]: {
        
    },
    [theme.breakpoints.down('md')]: {
     flexDirection:'column',
     gap:'10px'
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

<Box sx={{  padding:{xs:'20px',lg:'100px 0px 100px 100px'}, background:'#F6F7FB',display:'flex',flex:'1',flexDirection:'column',gap:'20px'}}>
              <Box>
                <img style={{height:'300px',width:'100%'}} src="https://img.freepik.com/free-vector/gradient-flyer-supermarket-poster_23-2149611746.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
              </Box>
              <Box sx={{ display:'flex',flex:'1',flexDirection:'column',gap:'0px',justifyContent:'center',alignItems:{xs:'center',sm:'center'}}}>
             <Typography  sx={{color:'rgba(0,0,0,0.8)',fontSize:{xs:'22px',md:'25px'},fontWeight:{xs:'600'}}}>Good Foods</Typography>
             
         </Box>
         <Box sx={{height:'100%',display:'flex',flex:'3',gap:'30px',flexDirection:'column',justifyContent:'center',alignItems:{xs:'flex-start',md:'center'}}}>
    
          <Typography sx={{color:'#000',fontSize:{xs:'18px',md:'20px'},fontWeight:'500',opacity:'0.5'}}>Discover to build our buisness on techpyro Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias incidunt consequatur nostrum tenetur cupiditate, ea sequi quisquam aliquid tempore dolor ducimus culpa. Tempora, qui recusandae.</Typography>
         </Box>
         </Box>

         <Box sx={{  padding:{xs:'20px',lg:'100px 0px 100px 0px'}, background:'#F6F7FB',display:'flex',flex:'1',flexDirection:'column',gap:'20px'}}>
              <Box>
                <img style={{height:'300px',width:'100%'}} src="https://img.freepik.com/free-vector/flat-design-supermarket-poster-template_23-2149569404.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
              </Box>
              <Box sx={{ display:'flex',flex:'1',flexDirection:'column',gap:'0px',justifyContent:'center',alignItems:{xs:'center',sm:'center'}}}>
             <Typography  sx={{color:'rgba(0,0,0,0.8)',fontSize:{xs:'22px',md:'25px'},fontWeight:{xs:'600'}}}>Good Dry Food</Typography>
             
         </Box>
         <Box sx={{height:'100%',display:'flex',flex:'3',gap:'30px',flexDirection:'column',justifyContent:'center',alignItems:{xs:'flex-start',md:'center'}}}>
    
          <Typography sx={{color:'#000',fontSize:{xs:'18px',md:'20px'},fontWeight:'500',opacity:'0.5'}}>Discover to build our buisness on techpyro Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias incidunt consequatur nostrum tenetur cupiditate, ea sequi quisquam aliquid tempore dolor ducimus culpa. Tempora, qui recusandae.</Typography>
         </Box>
         </Box>

         <Box sx={{  padding:{xs:'20px',lg:'100px 100px 100px 20px'}, background:'#F6F7FB',display:'flex',flex:'1',flexDirection:'column',gap:'20px'}}>
              <Box>
                <img style={{height:'300px',width:'100%'}} src="https://img.freepik.com/free-vector/healthy-food-restaurant-poster-template_23-2148508118.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
              </Box>
              <Box sx={{ display:'flex',flex:'1',flexDirection:'column',gap:'0px',justifyContent:'center',alignItems:{xs:'center',sm:'center'}}}>
             <Typography  sx={{color:'rgba(0,0,0,0.8)',fontSize:{xs:'22px',md:'25px'},fontWeight:{xs:'600'}}}>More Discount</Typography>
             
         </Box>
         <Box sx={{height:'100%',display:'flex',flex:'3',gap:'30px',flexDirection:'column',justifyContent:'center',alignItems:{xs:'flex-start',md:'center'}}}>
    
          <Typography sx={{color:'#000',fontSize:{xs:'18px',md:'20px'},fontWeight:'500',opacity:'0.5'}}>Discover to build our buisness on techpyro Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias incidunt consequatur nostrum tenetur cupiditate, ea sequi quisquam aliquid tempore dolor ducimus culpa. Tempora, qui recusandae.</Typography>
         </Box>
         </Box>

        </CardBox>
     
    );
}
