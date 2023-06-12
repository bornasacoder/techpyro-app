import React from 'react'
import { styled } from '@mui/styles'
import zIndex from '@mui/material/styles/zIndex'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'


const ImageContainer = styled("div")({
    display:"flex",
    width:'340px',
    height:'280px',
    alignItems:"center",
    // justifyContent:"center",
    flexDirection:"column",
    // margin:"10px 20px"
    // border:'1px solid rgba(0,0,0,0.2)',
    borderRadius:'5%',
    backgroundColor:'#F8F8F8',
    gap:'10px',
    
        "@media (max-width: 480px)": {
            gap:'0px',
             width:'100%',
             padding:' 0px 5px',
             border:'none'
             },
        

})
const Image = styled("img")({
    width:"60px",
    height:"60px",
    objectFit:'cover',
    borderRadius:'50%',
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
 const SliderItem = ({posterLinks}) => {
    // console.log(posterLinks)
  return (
       <Box>
      
       
        <ImageContainer>
            <Box sx={{height:'140px',width:'150px',borderRadius:'5%'}}>
                <Box>
                    <Typography>{posterLinks.story}</Typography>
                </Box>
            </Box>
            <Box sx={{display:'flex',justifyContent:'', width:"85%",gap:'15px',margin:'30px 0px'}}>
                <Box >
                 <Image  src={posterLinks.image}/>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Box sx={{display:'flex',gap:'15px',marginTop:'10px'}}>
                          <Typography>{posterLinks.name}</Typography>
                           <Box sx={{height:'22px',width:'65px',backgroundColor:'#FF693D',color:'#FFFFFF',borderRadius:'7px',display:'flex',justifyContent:'center'}}>
                          <Typography >{posterLinks.type}</Typography>
                        </Box>
                    </Box>
                    <Typography>{posterLinks.percentile}</Typography>
                </Box>
                
            </Box>
           
        </ImageContainer>
    
       </Box>
  )
}

export default SliderItem