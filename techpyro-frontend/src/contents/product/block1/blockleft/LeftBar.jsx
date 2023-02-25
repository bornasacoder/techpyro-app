import { Launch } from '@mui/icons-material'
import { Box, styled } from '@mui/material'
import React from 'react'
import "./leftbar.css"
import Sliders from './Slider/Sliders'
import SlidersLeft from "./slider2/SlidersLeft"
const LeftContainer = styled(Box)(({ theme }) => ({
  flex: "2",
  background: "#fff",
  marginRight: "10px",
  maxHeight: "100vh",
  position: "sticky",
  top: "0px",
  [theme.breakpoints.down('sm')]: {
    width:"100%",
    position:"static",
    marginRight:"0px"
},


}))
const LeftMainImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",


}))
const ButtonHover = styled("button")(({ theme }) => ({
  width: "40%",
  height: "50px",
  position: "absolute",
  display: "none",
  background: "rgba( 255, 255, 255, 0.9 )",
  borderRadius:"5px",
  border:"none",
  left: "40%",
  alignItems: "center",
  justifyContent: "center",
  "&:hover":{
    background: "rgba( 5, 35, 65, 0.55 )",
     color:"white",
     transition:"all 0.2s linear"
  }
,
  [theme.breakpoints.down('md')]: {
      left:"30%",
      width:"50%"
  },

}))
const Button = styled("button")(({ theme }) => ({
  width: "190px",
  height: "50px",
  fontSize: "16px",
  backgroundColor: "darkorange",
  border: "none",
  color: "white",
  cursor: "pointer",
  [theme.breakpoints.down('lg')]: {
    width: "150px",
  },
  [theme.breakpoints.down('md')]: {
    width: "120px",
  },
  [theme.breakpoints.down('sm')]: {
    width: "33%",
  },


}))
const Button1 = styled("button")(({ theme }) => ({
  width: '190px',
  height: "50px",
  border: "none",
  backgroundColor: "tomato",
  fontSize: "16px",
  color: "white",
  cursor: "pointer",
  [theme.breakpoints.down('lg')]: {
    width: "150px",
  },
  [theme.breakpoints.down('md')]: {
    width: "120px",
  },
  [theme.breakpoints.down('sm')]: {
    width: "33%",
  },

}))
const Button2 = styled("button")(({ theme }) => ({
  width: '250px',
  border: "none",
  backgroundColor: "teal",
  fontSize: "16px",
  color: "white",
  height: '50px',
  alignSelf: "center",
  display: 'flex',
  justifyContent: "center",
  cursor: "pointer",
  alignItems: "center",
  marginLeft: "65px",
  [theme.breakpoints.down('md')]: {
    marginLeft:"0px",
    width:"180px"
  },
  [theme.breakpoints.down('sm')]: {
  display:"none"
  },


}))
const Button3 = styled("button")(({ theme }) => ({
  width: '250px',
  border: "none",
  backgroundColor: "teal",
  fontSize: "16px",
  color: "white",
  height: '50px',
  alignSelf: "center",
  display: 'none',
  
  justifyContent: "center",
  cursor: "pointer",
  alignItems: "center",
  marginLeft: "65px",
  [theme.breakpoints.down('md')]: {
    marginLeft:"0px",
    width:"180px"
    
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft:"0px",
    width:"33%",
    display:"flex"
  },


}))
const LowerContainer = styled(Box)(({theme})=>({
  display:"flex",
  justifyContent:"space-between",
  [theme.breakpoints.down('xl')]: {
    margin:  "10px 20px 10px 100px",
  },
  [theme.breakpoints.down('lg')]: {
    margin:  "10px 20px 10px 100px",
  },
  [theme.breakpoints.down('md')]: {
    margin:  "10px 20px",
  },
  [theme.breakpoints.down('sm')]: {
  display:'none'
   
  },

}))

const LeftBar = () => {
//  window.addEventListener("scroll", (event)=>{
//    if(this.scrollY > 100){
//      console.log("hello world")
//    }
//  })



  return (
    <LeftContainer>
      <LeftMainImageContainer>
        <Box sx={{ position: "relative", width: "100%", height: "100%", display: { md: "flex", xs: "none" }, justifyContent: "center", alignItems: "center" }} >
          <Sliders />
          <ButtonHover className="hidden-button" >Live Preview  <Launch /> </ButtonHover>
        </Box>
        <Box sx={{ position: "relative", width: "100%", height: "100%", display: {md:"none", sm:"flex"}, justifyContent: "center", alignItems: "center"}} >
            <Box  sx={{width:"100%", height:"100%"}}  >
            <SlidersLeft />
            </Box>
          <ButtonHover className="hidden-button" >Live Preview  <Launch /> </ButtonHover>
        </Box>
        {/* <Box sx={{position:"relative",width:"100%", height:"100%",display:"flex", justifyContent:"center", alignItems:"center"}} >
      <MainImage src="https://colorlib.com/wp/wp-content/uploads/sites/2/education-free-template.jpg" />
      <ButtonHover className="hidden-button" >Live Preview  <Launch/> </ButtonHover>
      </Box> */}
        <LowerContainer  >
       <Button>Add To Cart</Button>
          <Button3 >Live Preview <Launch/> </Button3>
          <Button1 >Buy Now</Button1>
        </LowerContainer>
        <Button2 >Live Preview <Launch /> </Button2>
      </LeftMainImageContainer>
    </LeftContainer>
  )
}

export default LeftBar