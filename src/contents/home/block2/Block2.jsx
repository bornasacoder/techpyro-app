import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled} from '@mui/material';

export default function Block2() {
    const theme = useTheme();
    const CardBox = styled(Box)(({theme})=>({
    background:'#FFFFFF',
    display:'flex',
    gap:'100px',
    fontFamily:' "Fakt Pro" "Helvetica Neue" Arial sans-serif',
    flexDirection:'row',
    padding:'100px',
    [theme.breakpoints.down('lg')]: {
     
    },
    [theme.breakpoints.down('md')]: {
     flexDirection:'column',
     flexDirection:'column-reverse',
     padding:'100px 20px',
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
  
          <Box sx={{ display:'flex',flex:'1',flexDirection:'column',gap:'20px',justifyContent:'center',alignItems:{xs:'flex-start',sm:'center',md:'flex-end'}}}>
             <Box sx={{display:'flex',flexDirection:'column',alignItems:{xs:'flex-start',sm:'center',md:'flex-end'}}}>
            <Typography sx={{color:'#3DCAD4',fontSize:'42px',fontWeight:'600'}}>150,000,000+</Typography>
            <Typography sx={{color:'#3DCAD4',fontSize:'20px',fontWeight:'600'}}>deliveries power</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:{xs:'flex-start',sm:'center',md:'flex-end'}}}>
            <Typography sx={{color:'#3DCAD4',fontSize:'42px',fontWeight:'600'}}>50,000,00+</Typography>
            <Typography sx={{color:'#3DCAD4',fontSize:'20px',fontWeight:'600'}}>deliveries power</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:{xs:'flex-start',sm:'center',md:'flex-end'}}}>
            <Typography sx={{color:'#3DCAD4',fontSize:'42px',fontWeight:'600'}}>150,000,+</Typography>
            <Typography sx={{color:'#3DCAD4',fontSize:'20px',fontWeight:'600'}}>deliveries power</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:{xs:'flex-start',sm:'center',md:'flex-end'}}}>
            <Typography sx={{color:'#3DCAD4',fontSize:'42px',fontWeight:'600'}}>150,0+</Typography>
            <Typography sx={{color:'#3DCAD4',fontSize:'20px',fontWeight:'600'}}>deliveries power</Typography>
            </Box>
         
         </Box>
     
         <Box sx={{height:'100%',display:'flex',flex:'3',gap:'30px',flexDirection:'column',alignItems:{xs:'flex-start',sm:'flex-start',md:'center'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'22px',md:'42px'},fontWeight:'600'}}>The ultimate beauty experience
</Typography>
          <Typography sx={{fontSize:{sm:'16px',md:'22px'},opacity:'0.8'}}>At our beauty parlour, we believe that beauty is for everyone. We offer a range of services that are tailored to suit all budgets and needs. Our prices are competitive, and we use only the highest quality products to ensure that you get the best results. We believe that everyone deserves to look and feel their best, and we are committed to making that a reality for all our clients.</Typography>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',flexWrap:'wrap'}}>
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/top-view-assortment-make-up-beauty-products_23-2148620013.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-psd/make-up-banner-template_23-2148663849.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/grouped-makeup-products-brushes_23-2148181394.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/beautiful-woman-with-roses-hair_144627-16462.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.1.833918949.1682592323&semt=ais" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/top-view-assortment-make-up-beauty-products_23-2148620013.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-psd/make-up-banner-template_23-2148663849.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/grouped-makeup-products-brushes_23-2148181394.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/beautiful-woman-with-roses-hair_144627-16462.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.1.833918949.1682592323&semt=ais" />
         
          </Box>
          <Typography sx={{fontSize:{sm:'18px',md:'22px'},color:'#3DCAD4',fontWeight:'500',}}>Discover to build our buisness on techpyro</Typography>
         </Box>
  
        </CardBox>
     
    );
}
