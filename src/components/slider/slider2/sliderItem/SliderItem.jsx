import React from 'react'
import { styled } from '@mui/styles'


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