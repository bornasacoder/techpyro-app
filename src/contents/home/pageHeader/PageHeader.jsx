import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import "./pageHeader.css"
import Item from './item/Item';

const SliderContainer = styled('div')({
width:"100%",
// height:"auto",
margin:"90px 0 8px 0px",
overflow:"hidden",
//boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
// "@media (max-width: 1490px)": {
//  margin:"2% -1.5%"
// },

"@media (max-width: 600px)": {
  // width:"95%",
  margin:"82px 0 8px 0px",
 
 },

})
const SliderInnerContainer = styled('div')({
  display: "flex",
  justifyContent:"space-between",
  flexDirection:"column",
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  padding:"0px 40px",
  "@media (max-width: 600px)": {
    // width:"95%",
    padding:"0px 5px",
   
   },
})

export default function PageHeader(props) {

    const settings = {
        dots: false,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        // slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide:0,
        // prevArrow:<PreviousBtn />,
        // nextArrow:<NextBtn />,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 2,
                speed: 300,
                arrows:true,
              },
            },
             {
              breakpoint: 980,
              settings: {
                slidesToShow: 6,
                swipeToSlide: true,
                // slidesToScroll: 1,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 6,
                swipeToSlide: true,
                // slidesToScroll: 1,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 5,
                swipeToSlide: true,
                // slidesToScroll: 1,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 5,
                swipeToSlide: true,
                // slidesToScroll: 1,
                speed: 300,
                arrows:false,
              },
            },
        ]
      };

      const data = [
        {img:'https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Pizza'},
        {img:'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Coke'},
    
        {img:'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Burger'},
        {img:'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Pepsi'},
        {img:'https://images.pexels.com/photos/1583891/pexels-photo-1583891.jpeg?auto=compress&cs=tinysrgb&w=600',name:'French'},
        {img:'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Noodles'},
        {img:'https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Pizza'},
        {img:'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Coke'},
    
        {img:'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Burger'},
        {img:'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Pepsi'},
        {img:'https://images.pexels.com/photos/1583891/pexels-photo-1583891.jpeg?auto=compress&cs=tinysrgb&w=600',name:'French'},
        {img:'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Noodles'},
    
      ]

  return (
    <>
    <SliderContainer>       
       <SliderInnerContainer>
    <Slider {...settings}>
     { data.map((item)=>(
      <Item data={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>

      
    </>
  )
}
