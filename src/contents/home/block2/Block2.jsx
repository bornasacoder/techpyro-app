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
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'22px',md:'42px'},fontWeight:'600'}}>A new level of luxury</Typography>
          <Typography sx={{fontSize:{sm:'16px',md:'22px'},opacity:'0.8'}}>Whether you're looking for the perfect engagement ring, a statement necklace, or a pair of dazzling earrings, our knowledgeable and friendly staff is here to guide you through every step of the selection process. We take pride in the quality of our jewelry.</Typography>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',flexWrap:'wrap'}}>
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/shiny-gemstone-necklace-reflects-elegance-glamour-generated-by-ai_188544-10583.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/jewels-sparkle-golden-wedding-rings-lying-leather_8353-763.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-vector/raksha-bandhan-green-background_1035-3344.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-vector/jewelry-accessories-realistic-set-with-rings-earrings-black-background_1284-27174.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/woman-accessories-black-side-view_155003-7887.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-vector/jewelry-realistic-set_1284-6728.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph" />
         
          </Box>
          <Typography sx={{fontSize:{sm:'18px',md:'22px'},color:'#3DCAD4',fontWeight:'500',}}>Discover to build our buisness on techpyro</Typography>
         </Box>
  
        </CardBox>
     
    );
}
