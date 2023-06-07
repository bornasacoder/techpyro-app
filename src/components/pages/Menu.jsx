import { Star } from '@mui/icons-material'
import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts } from '../../redux/apiCalls'

const Menu = () => {
    const products = useSelector((state) => state.product.products);
    console.log(products.length)
    const dispatch = useDispatch();
    const[item,setItem]=useState();

    useEffect(() =>{
        getProducts(dispatch);
        console.log(products)
    },[dispatch])
  return (
    <Box>
   {products && products.map((item)=>(
    <Box>
       <Box sx={{display:'flex',justifyContent:'space-between',padding:{xs:'10px',sm:'10px',md:'20px'}}}>
                <Box>
                    <Typography sx={{color:'green',display:'flex',alignItems:'center',gap:'5px',fontSize:'20px',fontWeight:'600'}}><Star/>4.0</Typography>
                    <Typography sx={{fontSize:{xs:'18px',sm:'18px',md:'20px'},fontWeight:'700'}}>{item.tagline}</Typography>
                    <Typography sx={{fontSize:'20px'}}>{item.price.mrp}</Typography>
                </Box>

                <Box sx={{position:'relative'}}>
                    <img src={item.image} style={{height:'120px',width:'150px',borderRadius:'10px'}}/>

                    <Box sx={{position:'absolute',top:'90px',left:'40px'}}>
                        <Button variant='outlined' sx={{background:'white',color:'green',"&:hover":{background:'white',color:'green'}}}>ADD</Button>
                    </Box>
                </Box>
                
            </Box>
            <Divider/>
            </Box>
            ))}

    </Box>
  )
}

export default Menu
