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
           <LeftBar query={query} setQuery = {setQuery} sort ={sort} setSort={setSort} minvalue={minvalue} setMinValue = {setMinValue} maxvalue={maxvalue} setMaxValue = {setMaxValue} value={value} setValue={setValue} rating={rating} setRating={setRating}  filter={filter} setFilter={setFilter} />
           <RightBar  query={query} setQuery = {setQuery} sort ={sort} setSort={setSort} filter={filter} setFilter={setFilter} />
        </MainContainer>
    </Box>
  )
}

export default Products