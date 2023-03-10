import { Box, styled, } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { orderValue } from '../../../../redux/orderRedux'
import LeftBar from './blockLeft/LeftBar'
import Item from './item/Item'
import SearchBar from './searchBar/SearchBar'

const OrderContainer = styled(Box)(({theme})=>({
    margin:'20px 100px',
    "@media (max-width: 810px)": {
        margin:'20px 20px',
      },
    "@media (max-width: 600px)": {
        margin:'0px 0px',
      },
}))

export default function Block1() {
  const order = useSelector(orderValue);
  console.log(order.productList)
  return (
    <OrderContainer sx={{display:'flex',gap:'20px',marginTop:{sm:'0',xs:'100px'}}}>
        <Box sx={{flex:"1",display:{md:'block',xs:'none'}}}>
            <LeftBar/>
        </Box>
        <Box sx={{flex:'3',marginTop:'60px'}}>
            <SearchBar/>
            {order.productList.map((item,index)=>(
              <Item product={item} key={index} />          
            ))}
        </Box>
    </OrderContainer>
  )
}
