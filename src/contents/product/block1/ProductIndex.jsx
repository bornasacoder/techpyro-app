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


const ProductIndex = () => {
  return (
    <MainContainer>
        <Wrapper>
            <LeftBar/>
            <RightBar/>
        </Wrapper>
    </MainContainer>
  )
}

export default ProductIndex