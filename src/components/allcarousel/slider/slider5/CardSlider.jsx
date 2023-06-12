import { Box, Button, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { Link } from 'react-router-dom';
import { CardSliderData } from 'constants/slider/CardSliderData';
import SliderItem from './slideritems/SliderItem'
import styled from 'styled-components';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';

const SliderContainer = styled('div')({
    width:"100%",
    height:"auto",
    // margin:"2% 0.3%",
    overflow:"hidden",
    display:'flex',
    justifyContent:'center',
    // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
    // paddingTop:'80px',
    
    "@media (max-width: 1490px)": {
     margin:"2% -1.5%"
    
    },
    "@media (max-width: 1200px)": {
      width:"100%",
      margin:"0px",
      padding:'10px',
     
     },
    
    
    })
    const SliderInnerContainer = styled('div')({
      display: "flex",
      justifyContent:"center",
      flexDirection:"column",
      width:'85%',
      
      // alignItems:'center',
      // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
      padding:"0px 100px",
      "@media (max-width: 500px)": {
        width:"100%",
        margin:"0px",
        padding:'0px',
       
       },
    
    })
    
    
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
    const Image = styled('img')({
        height:'100px',
        width:'200px',
    })
    const Box1 = styled('Box')({
        height:'333px',
        width:'260px',
    })

export default function CardSlider(props) {
    // console.log(props)
    const settings = {
        prevArrow:<PreviousBtn />,
        nextArrow:<NextBtn />,
        dots: true,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide:0,
        
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 300,
                arrows:true,
              },
            },
             {
              breakpoint: 960,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 300,
                arrows:false,
                autoplay:true,
              },
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 300,
                arrows:false,
                autoplay:true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 300,
                arrows:false,
                autoplay:true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 300,
                arrows:false,
                autoplay:true,
                dots: true,
                infinite: true,
              },
            },
        ]
      };
    return (
      <Box sx={{backgroundColor:'white'}}>
          <Box sx={{display:"flex",justifyContent:"center",marginTop:'80px', gap:"20px" ,width:"100vw", }} >
            <Box sx={{display:"flex", justifyContent:"flex-start", width:"70%", flexDirection:"column", alignItems:"flex-start"}} >
                  <h1>All teachers teach.</h1>
                  <h1>Greatest teachers inspire</h1>
            
                <Box sx={{display:'flex',justifyContent:'space-around',padding:'10px',gap:'50px', width:"100%",backgroundColor:'#F8F8F8',margin:'20px 0px',borderRadius:'10px'}}>
                <Box sx={{display:'flex',}}>
                    <Box>
                      <img src='https://www.vedantu.com/cdn/images/new-home-page/icons/graduation-cap-icon.svg'/>
                    </Box>
                    <Box>
                      <Typography>From Top-tier colleges </Typography>
                      <Typography> with many years of </Typography>
                      <Typography> experience. </Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:'flex'}}>
                      <Box>
                        <img src='https://www.vedantu.com/cdn/images/new-home-page/icons/book-apple-icon.svg'/>
                      </Box>
                      <Box>
                          <Typography>Special - trained teachers to  </Typography>
                          <Typography>  bring out the best in every </Typography>
                          <Typography>  student. </Typography>
                      </Box>
                    </Box>
                    <Box sx={{display:'flex'}}>
                      <Box>
                        <img src='https://www.vedantu.com/cdn/images/new-home-page/icons/hourglass-icon.svg'/>
                      </Box>
                      <Box>
                          <Typography>Teaching experience of over 4.5 </Typography>
                          <Typography>   crore hours to 10 lakh students in </Typography>
                          <Typography> 1000+ cities in 57 countries. </Typography>
                      </Box>
                    </Box>
                </Box>
              </Box>
          </Box>

        <Box sx={{margin:'20px 0px'}}>
                <SliderContainer> 
                
                    <SliderInnerContainer>
                        
                        <Slider {...settings}>
                        { props.cardData.map((item)=>(
                          <SliderItem cardLinks={item} />
                        ))}
                        </Slider>
                    </SliderInnerContainer>  
                </SliderContainer>
        </Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',margin:'40px 0px'}}>
                <h1>Achieve more with Vedantu, get Free online counselling now</h1>
                <Box sx={{ display:'flex',gap:'20px'}}>
                 <Button variant='outlined' sx={{width:'230px',backgroundColor:'#FF693D',color:'white',fontWeight:'600'}}>Book a demo</Button>
                 <Button variant='outlined' sx={{width:'230px',backgroundColor:'white',color:'#FF693D',fontWeight:'600'}}>Learn Live</Button>
                </Box>
            </Box>
        </Box>
      )
}
