import React from 'react'
import { styled } from '@mui/styles'
import { Box, Typography } from '@mui/material'

const SliderContainer = styled("div")({
width:"100%",
height:"auto",


})
const ImageContainer = styled("div")({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    margin:"10px 20px"

})
const Image = styled("img")({
    width:"100px",
    height:"100px",
    objectFit:"cover",
    borderRadius:'100px',
    margin:"10px",
    "@media (max-width: 960px)": {
        width:'200px',
        height:'230px',
        
        },
        "@media (max-width: 770px)": {
         width:'160px',
         height:'160px',
         
         },
         "@media (max-width: 600px)": {
             width:'120px',
             height:'120px',
             
             },
             "@media (max-width: 480px)": {
                 width:'60px',
                 height:'60px',
                 
                 },
})
// const Head = styled("h3")({
//     fontSize: "16px",
//     fontWeight:"500",
//     textAlign:"center",
//     marginBottom:"5px",
//     "@media (max-width: 600px)": {
//        fontSize: "13px",
//        },
// })
// const Para = styled("p")({
//     fontSize:"14px",
//     fontWeight:"600",
//     "@media (max-width: 600px)": {
//         fontSize: "12px",
//         },
// })
 const SliderItem = ({posterLinks}) => {
  return (
    <>
   
       <SliderContainer>
        <ImageContainer>
           
            <Image src={posterLinks.image} />
        </ImageContainer>
       </SliderContainer>
       </>
  )
}

export default SliderItem