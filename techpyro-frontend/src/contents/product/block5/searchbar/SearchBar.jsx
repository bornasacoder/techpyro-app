import { Box, Input } from '@mui/material'
import React from 'react'
import "./searchbar.css"
const SearchBar = () => {
    // const [close, setClose] = useState("")
    // const handleClose=()=>{
    //     setClose("none")
    // }
    const ariaLabel = { 'aria-label': 'description' };
  return (
    <Box sx={{width:{sm:"80%", xs:"100%"}}} >
        
        <Input sx={{width:{sm:"100%", xs:"60%"}, height:"100%", fontSize:{sm:"20px", xs:"13px"}}}  placeholder="Having A Question? Search For Answers " inputProps={ariaLabel} />
       {/* <Clear sx={{fontSize:"25px", cursor:"pointer"}} onclick={handleClose}  /> */}
    </Box>
  )
}

export default SearchBar