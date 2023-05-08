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
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'22px',md:'42px'},fontWeight:'600'}}>A world of possibilities</Typography>
          <Typography sx={{fontSize:{sm:'16px',md:'22px'},opacity:'0.8'}}>Our mall is more than just a place to shop - it's a community hub where you can connect with others and discover new experiences. We host a range of events and activities throughout the year, from cultural festivals to food fairs to live entertainment. So whether you're looking to shop, dine, or explore.</Typography>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',flexWrap:'wrap'}}>
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/dried-food-products-sold-market_181624-60209.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/superfoods-seeds-grains-vegan-vegetarian-eating-clean-eating_114579-3939.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.1.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-vector/grocery-bags-set-plastic-paper-packages-supermarket-basket-with-food-packs-cans-bread-milk-products-flat-vector-illustrations-shopping-food-delivery-charity-concept_74855-10074.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/food-cart_1098-14618.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/high-angle-asian-food-ingredients-with-copy-space_23-2148377383.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600" />
         
          </Box>
          <Typography sx={{fontSize:{sm:'18px',md:'22px'},color:'#3DCAD4',fontWeight:'500',}}>Discover to build our buisness on techpyro</Typography>
         </Box>
  
        </CardBox>
     
    );
}
