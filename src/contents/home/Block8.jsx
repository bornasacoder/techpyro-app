import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material'
import { styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Card1 from 'components/card/card2/Card1'
import Card8 from 'components/card/card2/Card8'
import { Slider } from 'infinite-react-carousel/lib'
import React from 'react'

const Box1 = styled(Box)({
  width:'100%',
  // height:{md:'400px'},
   
  display:'flex',
  justifyContent:'center',
  // display:{xs:'none',sm:'none',md:'flex',lg:'flex'}

})
const Box2 = styled(Box)(({theme})=>({

  width:'70%',
  display:"flex",
  flexDirection:"column",
  fleWrap:"wrap",
  marginLeft:"10px",

  // height:{md:'350px'},
  [theme.breakpoints.down('md')]: {
   display:"none"
 
  },
}))
  
const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className} onClick={onClick}>
          <ChevronLeftOutlined sx={{color:'black',zIndex:'10',fontSize:'2.5rem' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className} onClick={onClick}>
       <ChevronRightOutlined sx={{color:'black',  zIndex:'10',fontSize:'2.5rem'}} />
     </div>
   )
}


export default function Block8() {
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
    initialSlide:0,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
            dots:true,
          },
        },
    ]
  };

  return (
    <Box1>
      <Box2>
      <Typography sx={{fontSize:'23px'}}>Study Materials</Typography>
       <Box sx={{ display:"flex",alignItems:"center",justifyContent:'space-between',flexWrap:"wrap",marginTop:'25px'}}>
          <Card8/> 
      </Box>
      </Box2>  
    </Box1>
  )
}
