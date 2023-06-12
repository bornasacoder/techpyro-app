    import React from 'react'
    import Slider from "react-slick";
    import {Avatar, styled } from '@mui/material';
    import "slick-carousel/slick/slick.css"; 
    import "slick-carousel/slick/slick-theme.css";
    import "./slick-theme-second.css";
    import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
    import ChevronRightIcon from '@mui/icons-material/ChevronRight';

    const SliderContainer = styled('div')({
        width: {xs:'100%'},
        // height: '200px',
        marginTop:{md:"100px"},
        margin:{md:"10px 50px"},
    })
    function Block11(props) {
        const PreviousBtn = (props) =>{
            const {className,onClick} = props;
            
             return (
                   <div className={className}   onClick={onClick}>
                    <KeyboardArrowLeftIcon sx={{color:'black',zIndex:'100',background:'white',borderRadius:'50px',fontSize:'40px' }} />
                   </div>  
             )
          }
          
          const NextBtn = (props) =>{
             const {className,onClick} = props;
             return (
               <div  className={className}  onClick={onClick}>
                 <ChevronRightIcon sx={{color:'black',zIndex:'200' ,background:'white',borderRadius:'50px',fontSize:'40px' }} />
               </div>
             )
          }
    
        const settings = {
            dots: false,
            arrows:true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            cssEase: "linear",
            initialSlide:0,
            prevArrow:<PreviousBtn />,
            nextArrow:<NextBtn />,
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
                    arrows:true,
                    autoplay:false,
                  },
                },
                {
                  breakpoint: 770,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 300,
                    arrows:true,
                    autoplay:false,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 300,
                    arrows:true,
                    autoplay:false,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 300,
                    arrows:true,
                    autoplay:false,
                    dots: false,
                  },
                },
            ]
          };
    return (
        <div className='mt-[120px]'>
            <div className='flex flex-col justify-between h-[25px] gap-2'>
                <h1 className='text-4xl font-bold ml-5'>Explore by types of stays</h1>
                <p className='text-gray-300 font-normal text-xl ml-5'>Explore houses based on 10 types of stays </p>
            </div>
            <div className='md:mt-[100px] mt-[150px] w-[100%]'>
                <SliderContainer >
                <div  className='w-[100%]'>
                            <Slider {...settings} >
                            {
                                props.Block11_data.map((item)=>(
                                    <div>
                                        <Avatar src={item.image} alt="" sx={{height:{md:"200px",xs:"120px"},width:{md:"200px",xs:"155px"},borderRadius:"20px"}}/>
                                        <h1 className='text-lg font-semibold px-4'>{item.heading}</h1>
                                        <p className='text-gray-500 px-4'>{item.para}</p>
                                    </div>
                                ))
                            }
                            </Slider>
                </div>

        </SliderContainer>
            </div>
        </div>
    )
    }
    
    export default Block11
    



