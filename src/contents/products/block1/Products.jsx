import { Box,styled } from '@mui/material'
import React from 'react'
import LeftBar from './blockleft/LeftBar'
import RightBar from './blockright/RightBar'
const MainContainer = styled(Box)((theme)=>({
display:"flex",
gap:"5px",
marginLeft:"5px"

}))


const Products = () => {
  return (
    <Box width="100%" height="auto" sx={{background:"#D9D9D9"}} >
        <MainContainer>
           <LeftBar/>
           <RightBar/>
        </MainContainer>
    </Box>
  )
}

export default Products