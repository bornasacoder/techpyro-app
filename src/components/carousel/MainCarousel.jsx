import React from 'react'
import Carousel from "react-material-ui-carousel"
import {styled} from "@mui/styles"
import "../carousel/maincarousel.css"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';
import {mainCarousel} from "../../constants/mainCarousel"

const Item = styled('div')({
  width: '100vw',
  height: '400px'
  
});

const Img = styled("img")({
  objectFit: "cover",
  width:"100%",
  height: "400px",
})


const MainCarousel = () => {

  return (
    <Box>

    <Carousel
    autoplay="true"
    pauseOnHover="true"
    animation='slide'
    indicators={false}
  //  className="css-z2nlyy css-1abc02a css-hn784z css-hn784z css-eq6jb3"
  //  sx={{
  //   '& .css-hn784z': {
  //      display:"none"
  //   },
  //   '& .css-1abc02a':{
    //     display: "none"
    //   },
    // }}
>
      {mainCarousel.map((item)=>(
      <Item>
        <Img src={item} />
    </Item>
      ))}
    {/* <Item><Img src='/images/category/bg-2.jpg' /></Item> */}
    {/* <Item><Img src='/images/category/bg-3.jpg' /></Item>
    <Item><Img src='/images/category/bg-4.jpg' /></Item>
    <Item><Img src='/images/category/bg-5.jpg' /> </Item>
   <Item> <Img src='/images/category/bg-6.jpg' />  </Item>
     <Item><Img src='/images/category/bg-7.jpg' /> </Item> */}
  </Carousel>


  </Box>
  )
}

export default MainCarousel