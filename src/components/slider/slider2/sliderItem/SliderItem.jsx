import React from 'react'
import { styled } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import { Avatar, Grid, Typography } from '@mui/material'
const SliderContainer = styled("div")({
width:"100%",
height:"auto",
boxShadow:"none!important"
})
const ImageContainer = styled("div")({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    margin:"10px 20px"
})
const Image = styled("img")({
    width:"150px",
    height:"150px",
    objectFit:"cover",
    borderRadius:"20px",
    margin:"10px",
    "@media (max-width: 960px)": {
        width:'150px',
        height:'150px',
        },
        "@media (max-width: 770px)": {
         width:'150px',
         height:'150px',
         },
         "@media (max-width: 600px)": {
             width:'110px',
             height:'120px',
             },
             "@media (max-width: 480px)": {
                 width:'80px',
                 height:'90px',
                 },
})

 const SliderItem = ({posterLinks}) => {
    const nevigate = useNavigate()
    const handleClick =(id)=>{
      nevigate(`/Product/${id}`)
    }
  return (
    <>
       <SliderContainer>
        <Grid item sx={{display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",marginY:"10px","&:hover":{
  boxShadow:" rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
  transition: "all 0.3s ease-out"
}}}>
        <ImageContainer>
            <Avatar src={posterLinks.image} onClick={()=>handleClick(posterLinks.id)} sx={{height:{md:"170px",sm:"150px",xs:"120px"},width:{md:"170px",sm:"150px",xs:"120px"}}}/>
        </ImageContainer>
        <Typography sx={{fontSize:{md:"20px",sm:"18px",xs:"16px"},fontWeight:"600",marginBottom:"10px",textAlign:"center",color:"hotpink"}}>{posterLinks.brand}</Typography>
        </Grid>
       </SliderContainer>
       </>
  )
}

export default SliderItem