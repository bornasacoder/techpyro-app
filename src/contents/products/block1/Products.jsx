import { Box,styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/apiCalls'
import LeftBar from './blockleft/LeftBar'
import RightBar from './blockright/RightBar'
const MainContainer = styled(Box)((theme)=>({
display:"flex",
gap:"5px",
marginLeft:"5px"

}))


const Products = () => {


  const [sort, setSort] = useState({})
  const [query, setQuery] = useState({}); 
  const [rating, setRating] = useState(null);
  const [minvalue, setMinValue] = React.useState(500);
  const [maxvalue, setMaxValue] = React.useState(10000);
  const [value, setValue] = React.useState([1000, 5000]);
  
  const [filter, setFilter] = useState(false);

  const dispatch = useDispatch();
  useEffect(()=>{
   addProduct(query, sort, dispatch)
  }, [query, sort, dispatch])

  return (
    <Box width="100%" height="auto" sx={{background:"#D9D9D9"}} >
        <MainContainer>
           <LeftBar query={query} setQuery = {setQuery} sort ={sort} setSort={setSort} minvalue={minvalue} setMinValue = {setMinValue} maxvalue={maxvalue} setMaxValue = {setMaxValue} value={value} setValue={setValue} rating={rating} setRating={setRating}  filter={filter} setFilter={setFilter} />
           <RightBar  query={query} setQuery = {setQuery} sort ={sort} setSort={setSort} filter={filter} setFilter={setFilter} minvalue={minvalue} setMinValue = {setMinValue} maxvalue={maxvalue} setMaxValue = {setMaxValue} value={value} setValue={setValue} rating={rating} setRating={setRating}  />
        </MainContainer>
    </Box>
  )
}

export default Products