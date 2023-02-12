import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import {useNavigate } from 'react-router-dom' 
import { uiux } from '../../../constants/home/HomeUpperContent'
import { digitalmarketing } from '../../../constants/home/HomeUpperContent'
const TopContainer = styled(Box)(({theme})=>({
    width:"100%",
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"20px",

[theme.breakpoints.down('sm')]: {
    flexDirection:"column",
    marginBottom:"30px"
},



}))
const Span = styled("span")({
    color:"crimson",
    cursor:"pointer"
})

const Image = styled("img")(({theme})=>({
    width:"220px",
    height:"220px",
    objectFit:"cover"
// display:"flex",
// justifyContent:"center"

}))


const TextBlock2 = () => {
const navigate = useNavigate();
    const handleRedirect = () =>{
        navigate("/uiux")
    }
    const handleRedirect1 = () =>{
        navigate("/digital")
    }


  return (
    <TopContainer>
        <Box sx={{ display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column", width:{md:"60%", sm:"60%", xs:"90%"}}} >
            <Typography variant='h1' sx={{fontWeight:"450", marginBottom:"10px", letterSpacing:"1px",textAlign:"center", fontSize:{md:"28px", sm:"20px", xs:"18px"}, lineHeight:{sm:"35px", xs:"25px"}}} >  <Span onClick={handleRedirect} >  {uiux.heading} </Span>& <Span onClick={handleRedirect1} >  {digitalmarketing.heading}  </Span></Typography>
            <Typography variant='body' sx={{textAlign:{sm:"center", xs:"justify"}, fontSize:{sm:"16px", xs:"13px"}, fontWeight:"400",color:"#66667D", lineHeight:{sm:"25px", xs:"20px"}}} >{uiux.content} <br /> {digitalmarketing.content}</Typography>
        </Box>
        <Box sx={{display:{sm:"flex", xs:"none"}}} >
            <Image src="/images/category/lotie6.gif" />
        </Box>
    </TopContainer>
  )
}

export default TextBlock2