import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { cartValue } from '../../../redux/cartRedux';
import Item from './item/Item'

export default function Block1(props) {
  const cart = useSelector(cartValue);
  return (
    <Box sx={{width:{md:'65%',xs:'100%'},}}>
        {cart.products.map((item,index)=>(
          <Item key={index} index={index} product={item}/>
        ))}
    </Box>
  )
}
