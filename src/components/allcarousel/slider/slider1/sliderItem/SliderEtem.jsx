import React from 'react'
import { styled } from '@mui/styles'
import zIndex from '@mui/material/styles/zIndex'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { Star, StarHalf } from '@mui/icons-material'

const SliderContainer = styled("div")({
width:"100%",
height:"auto",
paddingRight:"0px",
background:'transparent',
// zIndex:"1",
// border:'1px solid black'
"@media (max-width: 480px)": {
    
     },

})
const ImageContainer = styled("div")({
    display:"flex",
    width:'202px',
    // alignItems:"center",
    borderRadius:'20px',
    // justifyContent:"center",
    flexDirection:"column",
    // margin:"10px 20px",
    background:'transparent',
    border:'1px solid rgba(0,0,0,0.2)',
    "@media (max-width: 480px)": {
       gap:'0px',
        width:'100%',
        paddingLeft:'20px',
        border:'none'
        },

})
const Image = styled("img")({
    width:"200px",
    height:"200px",
    objectFit:"cover",
    borderRadius:'20px',
    // margin:"40px",
    zIndex:"1",
    // border:'1px solid black',
    "@media (max-width: 960px)": {
       width:'200px',
       height:'230px',
       
       },
       "@media (max-width: 770px)": {
        width:'160px',
        height:'200px',
        
        },
        "@media (max-width: 600px)": {
            width:'120px',
            height:'170px',
            
            },
            "@media (max-width: 480px)": {
                width:'100%',
                height:'150px',
               
              
                
                },
})
const Head = styled("h6")({
    // fontSize: "10px",
    // fontWeight:"400",
    // textAlign:"center",
    marginBottom:"0px",
    "@media (max-width: 600px)": {
    //    fontSize: "23px",
       },
})
// const Para = styled("p")({
//     fontSize:"14px",
//     fontWeight:"600",
//     "@media (max-width: 600px)": {
//         fontSize: "12px",
//         },
// })
 const SliderEtem = ({posterLinks}) => {
    console.log(posterLinks)
  return (
    <>
      
    <SliderContainer>
     <ImageContainer>
         <Image src={posterLinks.image} />
         <Box>
         <Button variant='contained' sx={{borderRadius:'20px'}}>+Add</Button>
         </Box>
         
         <Box sx={{width:{xs:'120px',sm:'200px',md:'180px'},display:'flex',gap:{xs:'5px',sm:'10px',md:'20px'}}}>
         <Head style={{fontWeight:{xs:'200',sm:'400',md:'400'},fontSize:'20px'}}>{posterLinks.price.mrp}</Head>
        
         
         </Box>
         <Box sx={{width:{xs:'120px',sm:'200px',md:'180px'}}}>
          <Head style={{fontSize:'12px'}}>{posterLinks.tagline}</Head>
          </Box>
          <Typography><Star /><Star /><Star /><StarHalf /></Typography>
     </ImageContainer>
    </SliderContainer>
    </>
  )
}

export default SliderEtem