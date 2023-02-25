import { Box, styled } from '@mui/material'
import React from 'react'
import LeftBar from './blockleft/LeftBar'
import RightBar from './blockright/RightBar'

const MainContainer = styled(Box)(({theme})=>({


}))
const Wrapper = styled(Box)(({theme})=>({
  display:"flex",
  margin :"0px 40px",
  height:"auto",
  [theme.breakpoints.down('md')]: {
    margin:"0px 10px"
   },
   [theme.breakpoints.down('sm')]: {
    margin:"0px 0px",
    flexDirection:"column"
   },
   
}))


const ProductIndex = ({product, rating, setRating}) => {
  return (
    <MainContainer>
        <Wrapper>
            <LeftBar product ={product} />
            <RightBar product = {product} setRating={setRating} rating={rating}  />
        </Wrapper>
    </MainContainer>
  )
}

export default ProductIndex