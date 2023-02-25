import React from 'react'
import { Box, Button } from '@mui/material';
import { styled } from '@mui/styles';
import { East } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SliderHead = styled("div")({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  })
  const Head = styled('span')({
  fontSize:"24px",
  fontWeight:"600",
  paddingLeft:'10px',
  })

export default function Header() {
  return (
    <Box>
      <SliderHead>  
        <Head>Restaurant</Head>
        <Link to='/products' style={{textDecoration:'none'}}>
        <Button color="primary" variant="contained" endIcon={<East/>} size="small" sx={{margin:"10px 10px 0px 0", }} >View More  </Button>
        </Link>
      </SliderHead>
    </Box>
  )
}
