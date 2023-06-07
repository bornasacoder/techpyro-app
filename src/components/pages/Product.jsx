import { AccessTime, CurrencyRupeeRounded, Search, Star } from '@mui/icons-material'
import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/apiCalls'
import BigSlider from '../allcarousel/slider/slider3/BigSlider'
import Menu from '../pages/Menu'


const Product = () => {
    const products = useSelector((state) => state.product.products);
    const [productDetail,setProductDetail] = useState([]);
    const dispatch = useDispatch();

   useEffect(()=>{
    getProducts(dispatch)
    let id =window.location.pathname.slice(-3);
    console.log(id)
     let a = products.filter((item) => {
          console.log(item.id,id)
        return item.id===Number(id);
     })
     setProductDetail(a);
     console.log(a);
   },[dispatch])
  return (
    <>
      <Navbar/>
      <Box sx={{width:'100%',justifyContent:'center',display:'flex'}}>
        <Box sx={{width:{xs:'90%',sm:'90%',md:'50%'}}}>
           
                <Box sx={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
                    <Typography>{productDetail.length>0 && productDetail[0].shopname}</Typography>
                    <Search/>
                </Box>
                <Divider/>
                
                <Box sx={{width:{xs:'90%',sm:'90%',md:'100%'},display:{xs:'none',sm:'none',md:'flex'},justifyContent:'center',padding:'20px'}}>
                    <img src={productDetail.length>0 && productDetail[0].image} style={{height:'300px'}}/>
                </Box>
                <Box sx={{width:{xs:'90%',sm:'100%',md:'100%'},display:{xs:'none',sm:'flex',md:'none'},justifyContent:'center',padding:'20px'}}>
                    <img src={productDetail.length>0 && productDetail[0].image} style={{height:'300px',width:'400px'}}/>
                </Box>
                <Box sx={{width:{xs:'100%',sm:'90%',md:'100%'},display:{xs:'flex',sm:'none',md:'none'},justifyContent:'center',padding:'20px'}}>
                    <img src={productDetail.length>0 && productDetail[0].image} style={{height:'200px',width:'300px'}}/>
                </Box>
<Divider/>

                <Box sx={{display:'flex',justifyContent:'space-between',margin:'10px'}}>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography sx={{fontSize:{xs:'18px',sm:'18px',md:'20px'},fontWeight:'700'}}>{productDetail.length>0 && productDetail[0].shopname}</Typography>
                    {/* <Typography>{productDetail.length>0 && productDetail[0].tagline}</Typography> */}
                </Box>
                <Box sx={{border:'1px solid black',height:'70px',borderRadius:'10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'5px'}}>
                   <Typography sx={{color:'green',display:'flex',alignItems:'center',gap:'5px',fontSize:'20px',fontWeight:'600'}}><Star/>{productDetail.length>0 && productDetail[0].rating}</Typography>
                  
                   <Typography>10k+ ratings</Typography>
                </Box>
            </Box>
            <Divider/>
           
            <Box sx={{display:'flex',margin:'10px',gap:'30px'}}>
              <Typography sx={{display:'flex',alignItems:'center',fontSize:{xs:'18px',sm:'18px',md:'20px'},fontWeight:'700',gap:'10px'}}><AccessTime/>20 MINS</Typography>
              <Typography sx={{display:'flex',alignItems:'center',fontSize:{xs:'18px',sm:'18px',md:'20px'},fontWeight:'700',gap:'10px'}}>{productDetail.length>0 && productDetail[0].price.discount}</Typography>
            </Box>
            <Divider/>

            <Typography sx={{fontSize:{xs:'18px',sm:'18px',md:'25px'},fontWeight:'700',padding:'10px'}}>Recommended(17)</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between',padding:{xs:'10px',sm:'10px',md:'20px'}}}>
                {/* <Box>
                    <Typography sx={{color:'green',display:'flex',alignItems:'center',gap:'5px',fontSize:'20px',fontWeight:'600'}}><Star/>4.0</Typography>
                    <Typography sx={{fontSize:{xs:'18px',sm:'18px',md:'20px'},fontWeight:'700'}}>Paneer Butter Masala</Typography>
                    <Typography sx={{fontSize:'20px'}}>₹289</Typography>
                </Box> */}
{/* 
                <Box sx={{position:'relative'}}>
                    <img src='https://www.shutterstock.com/image-photo/collection-electronic-gadgets-all-black-260nw-1936328692.jpg' style={{height:'120px',width:'150px',borderRadius:'10px'}}/>

                    <Box sx={{position:'absolute',top:'90px',left:'40px'}}>
                        <Button variant='outlined' sx={{background:'white',color:'green',"&:hover":{background:'white',color:'green'}}}>ADD</Button>
                    </Box>
                </Box> */}
            </Box>
            {/* <Divider/> */}

            <Menu/>
        

        </Box>

      </Box>
      {/* <BigSlider border='20' sliderData={content}/> */}
      <Footer/>
    </>
  )
}

export default Product
