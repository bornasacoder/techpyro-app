import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/apiCalls';

const CardBox = styled(Card)(({theme})=>({
    display:'flex',

    flexDirection:'column',
    width:'300px',
    height:'400px',
    backgroundColor:'transparent',
    borderRadius:'0px',
    boxShadow:'none',
    "&:hover":{border:'1px solid rgba(0,0,0,0.3)',boxShadow:'1px 1px 1px 1px  rgba(0,0,0,0.1)'},
  
    [theme.breakpoints.down('md')]: {
        width:'100%',
        height:'200px',
        flexDirection:'row',
        // paddingTop:'50px',
        borderRadius:'10px',
        gap:'20px',
        boxShadow:'1px 1px 1px 1px  rgba(0,0,0,0.1)'
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'140px',
      flexDirection:'row',
      // paddingTop:'50px',
      borderRadius:'10px',
      gap:'0px',
      boxShadow:'1px 1px 1px 1px  rgba(0,0,0,0.1)'
    },
   
  }))

const Card2 = () => {
    const theme = useTheme();
    const products = useSelector((state) => state.product.products)
  
    // console.log(mainCarousel);
    const dispatch = useDispatch();
    useEffect(()=>{
       getProducts(dispatch)
    }, [dispatch])
 

  return (
    <Box>

   


<Box sx={{display:'flex',justifyContent:'center',padding:{xs:'20px 10px',sm:'0px 20px',md:'0px 0px 0px 0px'}}}>

 

      <Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'40px',flexWrap:"wrap"}}>
        
      {products.map((item)=>(
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'40%'},width:{xs:'30%',sm:'50%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center' }}>
      
        <CardMedia
        sx={{height:'100%',width:{xs:'100%',sm:'100%',md:'90%'},marginTop:'10px',borderRadius:{xs:'20px',sm:'20px',md:'0px'}}}
        component="img"
        image={item.image}
        alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'50%'},width:{xs:'70%',sm:'70%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'20px'},gap:{xs:'0px',sm:'0px',md:'0px'}}}>
       
      
        <Typography sx={{fontSize:{xs:'16px',sm:'30px',md:'18px'},fontWeight:'500'}}> {item.tagline}</Typography>
       <Typography>{item.shopname}</Typography>

       <Box sx={{display:'flex',marginTop:{xs:'10px',sm:'10px',md:'20px'},justifyContent:'space-between'}}>
        <Typography sx={{display:'flex',alignItems:'cebter',fontSize:'15px',fontWeight:'500',background:'#F56B11',color:'white',gap:'5px',paddingRight:'5px'}}><Star sx={{fontSize:'20px'}}/>{item.rating}</Typography>
        <Typography>37 mins</Typography>
        <Typography>{item.price.mrp}</Typography>
       </Box>
       <Typography sx={{fontSize:{xs:'20px',sm:'25px',md:'18px'},fontWeight:'500',color:'red',marginTop:'20px'}}> {item.price.discount}</Typography>
      
       </Box>
       <Box sx={{height:{xs:'30%',sm:'40%',md:'10%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',padding:{xs:'25px',sm:'25px',md:'0px'},gap:'10px',textAlign:'center',justifyContent:'center',display:{xs:'none',sm:'none',md:'flex'}}}>
       
       <Button variant='contained' sx={{fontSize:'15px',color:'black',borderRadius:'0px',border:'1px solid black',background:'transparent',"&:hover":{background:'transparent'}}}>Quick View</Button>
       </Box>
      
      </CardBox>
      ))}
      

     
       </Box>
       
    
       </Box>
       
       
       </Box>
       
  )
    }
export default Card2