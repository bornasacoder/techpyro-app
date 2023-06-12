import React from 'react'
import { styled } from '@mui/styles'
import zIndex from '@mui/material/styles/zIndex'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const SliderContainer = styled("div")({
width:"100%",
height:"auto",
display:'flex',
paddingLeft:"0px",
// zIndex:"1",
// border:'1px solid black',
gap:'20px',

})
const ImageContainer = styled("div")({
    display:"flex",
    width:'260px',
    height:'400px',
    alignItems:"center",
    // justifyContent:"center",
    flexDirection:"column",
    // margin:"10px 20px"
    // border:'1px solid rgba(0,0,0,0.2)',
    borderRadius:'5%',
    backgroundColor:'#F8F8F8',
    // gap:'10px',
    
        "@media (max-width: 480px)": {
            gap:'0px',
             width:'100%',
             padding:' 0px 5px',
             border:'none'
             },
        

})
const Image = styled("img")({
    width:"187px",
    height:"260px",
    objectFit:"cover",
    // backgroundColor:'#F8F8F8',
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
                margin:'0',
                padding:'0px',
                gap:'0px'
                
                },
})
// const Head = styled("h3")({
//     fontSize: "15px",
//     fontWeight:"400",
//     // textAlign:"center",
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
 const SliderItem = ({cardLinks}) => {
    // console.log(posterLinks)
  return (
       <Box sx={{backgroundColor:'white',display:'flex',gap:'10px'}}>
      
       
        <ImageContainer>
            <Image src={cardLinks.image} />
            <Box sx={{height:'130px',width:'170px',backgroundColor:'#19353F',borderRadius:'5%',display:'flex',justifyContent:'center', alignItems:'center' }}>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center', color:'white',gap:'10px' }}>
                    <Box sx={{backgroundColor:'#DEEEFD',color:'black',width:'110%',borderRadius:'5px' }}>
                     <Typography sx={{display:'',justifyContent:'',fontWeight:'700',marginLeft:'5px'}}>{cardLinks.exp}</Typography>
                    </Box>
                    <Typography sx={{fontSize:'20px'}}>{cardLinks.name}</Typography>
                    <Typography sx={{fontSize:'17px'}}>{cardLinks.about}</Typography>
                </Box>
            </Box>
        </ImageContainer>
       
       </Box>
  )
}

export default SliderItem