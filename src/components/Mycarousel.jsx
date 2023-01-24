import React,{useEffect} from 'react'
import Carousel from "react-material-ui-carousel"
import {styled} from "@mui/styles"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import AOS from 'aos';


import { Paper } from '@material-ui/core';
import { margin } from '@mui/system';
const useStyles = makeStyles((theme) => ({
  menuButtons: {
    display: 'flex',
    alignItems: 'center',
    margin:'40px',
    flexWrap: 'wrap'
  },
  button: {
    color: 'white',
    marginRight: theme.spacing(6),
  },
   
  rightButton: {
     
    border: '1px solid orange',
    backgroundColor: 'orange',
    
    
    '&:hover': {
      backgroundColor: '#ffa726',
    },
  }
}));

const  Mycarousel = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile'
    });
  }, []);
  return (
    <Carousel data-aos="fade-up" data-aos-duration="1000" style={{ position: "relative", "@media (max-width: 800px)": {
      position:"absolute",
      marginTop:"100px" ,  
      height:"800px"
     
      }, }}
    nextButton= {{ position: "absolute", left: "40px", top: "500px" }}  
    prevButton= {{ position: "absolute", right: "600px", top: "500px" }} 
    autoplay="true"
    pauseOnHover="true"
    animation='slide'
    indicators={false}>
 
 <div  data-aos="fade-right" data-aos-duration="2000" style={{
      width: '100%',
      height: '600px',
      backgroundImage: 'url(https://elanta.app/nazar/tastyc-demo/img/banners/banner-1.jpg)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      "@media (max-width: 800px)": {
        marginTop:"200px" ,  
        height:"800px"
       
        },
     
    }}>
      <div style={{flex: 1,
        color: 'white', 
        alignText: 'center',
        margin: '40px',
        "@media (max-width: 800px)": {
         
        margin: "300px"
       
        },
        }}> 
     <h1>  Lorem ipsum dolor <br/>sit amet consectetur adipisicing elit.</h1> <br /> Laboriosam quisquam officia 
       eos facere rerum corrupti reiciendis minima fuga, sunt culpa <br /> blanditiis 
       pariatur omnis ipsa harum, illo laborum veniam ex architecto! <br /> Laboriosam quisquam officia 
       eos facere rerum corrupti reiciendis minima fuga, sunt culpa <br /> blanditiis 
       pariatur omnis ipsa harum, illo laborum veniam ex architecto!
       <div className={classes.menuButtons}>
       <Button className={classes.rightButton}>RESERVATION</Button>
       <Button className={classes.button}>Open Menu</Button>

       </div>
      </div>
      <div style={{flex: 1}}>
        
      </div>
    </div> 
    <div data-aos="fade-left" data-aos-duration="3000" style={{
      width: '100%',
      height: '600px',
      backgroundImage: 'url(https://elanta.app/nazar/tastyc-demo/img/banners/banner-2.jpg)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{flex: 1,
        color: 'white', 
        alignText: 'center',
        margin: '40px',
        "@media (max-width: 800px)": {
         
          margin: "300px"
         
          },
        }}> 
     <h1>  Lorem ipsum dolor <br/>sit amet consectetur adipisicing elit.</h1> <br /> Laboriosam quisquam officia 
       eos facere rerum corrupti reiciendis minima fuga, sunt culpa <br /> blanditiis 
       pariatur omnis ipsa harum, illo laborum veniam ex architecto! <br /> Laboriosam quisquam officia 
       eos facere rerum corrupti reiciendis minima fuga, sunt culpa <br /> blanditiis 
       pariatur omnis ipsa harum, illo laborum veniam ex architecto!
       <div className={classes.menuButtons}>
       <Button className={classes.rightButton}>RESERVATION</Button>
       <Button className={classes.button}>Open Menu</Button>

       </div>
      </div>
      <div style={{flex: 1}}>
        
      </div>
    </div>   
    <div data-aos="fade-left" data-aos-duration="3000" style={{
      width: '100%',
      height: '600px',
      backgroundImage: 'url(https://elanta.app/nazar/tastyc-demo/img/banners/banner-3.jpg)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{flex: 1,
        color: 'white', 
        alignText: 'center',
        margin: '40px',
        "@media (max-width: 800px)": {
         
          margin: "300px"
         
          },
        }}> 
   <h1>  Lorem ipsum dolor <br/>sit amet consectetur adipisicing elit.</h1> <br /> Laboriosam quisquam officia 
       eos facere rerum corrupti reiciendis minima fuga, sunt culpa <br /> blanditiis 
       pariatur omnis ipsa harum, illo laborum veniam ex architecto!
       <br /> Laboriosam quisquam officia 
       eos facere rerum corrupti reiciendis minima fuga, sunt culpa <br /> blanditiis 
       pariatur omnis ipsa harum, illo laborum veniam ex architecto!
       <div className={classes.menuButtons}>
       <Button className={classes.rightButton}>RESERVATION</Button>
       <Button className={classes.button}>Open Menu</Button>

       </div>
      </div>
      <div style={{flex: 1}}>
        
      </div>
    </div> 
  </Carousel>


  )
};

export default  Mycarousel;