import React from 'react'
import { styled } from '@mui/styles'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const SliderContainer = styled("div")({
width:"100%",
height:"auto",
backgroundImage: `url(${"/images/category/bgdimg8.jpeg"})`,
backgroundSize:'cover',
position:'static',

})
const ImageContainer = styled("div")({
    width:'100%',
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    margin:"10px 20px",
    "@media (max-width: 480px)": {
        width:'100%',
        },

})
const Head = styled("h3")({
    fontFamily:'serif',
    fontSize: "30px",
    // paddingLeft:'30px',
    // fontWeight:"500",
    // textAlign:"center",
    // marginBottom:"5px",
    "@media (max-width: 1250px)": {
        fontSize: "20px",
        },
    "@media (max-width: 900px)": {
        fontSize: "15px",
        },
    "@media (max-width: 480px)": {
       fontSize: "7px",
       },
})
const Image = styled("img")({
    width:"300px",
    height:"400px",
    objectFit:"cover",
    margin:"10px",
    '&:hover':{
        transform:[{scaleX:"5px"}],
        // backgroundColor:"white"

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
                 width:'100%',
                 height:'400px',
                 paddingRight:'30px'
                 
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
    
       <Box>
       <SliderContainer>
        <ImageContainer>
            <Image src={posterLinks.image} />
            <Head>{posterLinks.name}</Head>
            
        </ImageContainer>
       </SliderContainer>
       </Box>
       </>
  )
}

export default SliderItem