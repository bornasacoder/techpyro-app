import React from 'react'
import { styled } from '@mui/styles'

const SliderContainer = styled("div")({
width:"100%",
height:"auto",


})
const ImageContainer = styled("div")({
    display:"flex",
    // alignItems:"center",
    // justifyContent:"center",
    flexDirection:"column",
    margin:"10px 20px"

})

const Head = styled("h3")({
    fontFamily:'serif',
    fontSize: "10px",
    paddingLeft:'30px',
    // fontWeight:"500",
    // textAlign:"center",
    // marginBottom:"5px",
    "@media (max-width: 480px)": {
       fontSize: "3px",
       },
})
const Para = styled("p")({
    fontSize:"14px",
    fontWeight:"600",
    "@media (max-width: 600px)": {
        fontSize: "12px",
        },
})
 const SliderItem = ({posterLinks,border}) => {
    const Image = styled("img")({
        borderRadius:`${border}%`,
        width:"250px",
        height:"250px",
        objectFit:"cover",
        margin:"10px",
        '&:hover':{
            transform:[{scaleX:"5px"}],
            backgroundColor:"white"
    
        },
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
    });
  return (
       <SliderContainer>
        <ImageContainer>
            <Image  src={posterLinks.image} />
            <Head>{posterLinks.shopname}</Head>
        </ImageContainer>
       
       </SliderContainer>
  )
}

export default SliderItem