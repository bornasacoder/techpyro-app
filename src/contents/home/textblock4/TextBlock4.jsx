import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import {useNavigate } from 'react-router-dom' 
import { ContentWriting } from '../../../constants/home/HomeUpperContent'
import { presentation } from '../../../constants/home/HomeUpperContent'
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


const TextBlock4 = () => {
const navigate = useNavigate();
    const handleRedirect = () =>{
        navigate("/contents")
    }
    const handleRedirect1 = () =>{
        navigate("/presentations")
    }


  return (
    <TopContainer>
        <Box sx={{ display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column", width:{md:"60%", sm:"60%", xs:"90%"}}} >
            <Typography variant='h1' sx={{fontWeight:"450", marginBottom:"10px", letterSpacing:"1px",textAlign:"center", fontSize:{md:"28px", sm:"20px", xs:"18px"}, lineHeight:{sm:"35px", xs:"25px"}}} > Apply Creative  <Span onClick={handleRedirect} >  {ContentWriting.heading} </Span>& <Span onClick={handleRedirect1} >  {presentation.heading}  </Span> for your business</Typography>
            <Typography variant='body' sx={{textAlign:{sm:"center", xs:"justify"}, fontSize:{sm:"16px", xs:"13px"}, fontWeight:"400",color:"#66667D", lineHeight:{sm:"25px", xs:"20px"}}} >{ContentWriting.content} <br /> {presentation.content}</Typography>
        </Box>
        <Box sx={{display:{sm:"flex", xs:"none"}}} >
            <Image src="/images/category/lotie5.gif" />
        </Box>
    </TopContainer>
  )
}
export default TextBlock4