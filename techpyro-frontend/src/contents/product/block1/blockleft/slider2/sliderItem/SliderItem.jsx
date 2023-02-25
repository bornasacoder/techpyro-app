import React from 'react'
import { styled } from '@mui/material'



const Image = styled("img")(({ theme }) => ({
    width:"450px",
    height:"250px",
    objectFit:"cover",
  
    [theme.breakpoints.down('lg')]: {
      width:'350px',
      height:"250px"
  },
  [theme.breakpoints.down('md')]: {
    width:'100%',
    height:"300px"
  },
  [theme.breakpoints.down('sm')]: {
    width:'100%',
    height:"300px"
  },
}));

 const SliderItem = ({posterLinks}) => {
  return (
            <Image src={posterLinks.productsurl} />
      
  )
}

export default SliderItem