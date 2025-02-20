import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
const StyleToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
   justifyContent:"space-between",
   backgroundColor:"#FFFFFF",
    [theme.breakpoints.down("md")]: {
      
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection:"column",
    },
  }));
const Career1 = () => {
  return (
    <StyleToolbar>
      <Box sx={{flex:"3",padding:{md:"48px 0px 58px 40px",sm:"58px 10px",xs:"28px 10px"}}}>
        <Typography  sx={{fontSize:{md:"36px",sm:"30px",xs:"20px"},fontWeight:"600",lineHeight:{md:"48px",sm:"30px",xs:"20px"}}}>Launch your new career with a Professional Certificate on Coursera</Typography>
        <br/>
        <Typography  sx={{fontSize:{md:"20px",sm:"20px",xs:"20px"},fontWeight:"400",lineHeight:"28px"}}>Professional certificates offer flexible, online training designed to get you job-ready for high-growth fields.</Typography>
        <br/>
        <Box sx={{display:"flex",justifyContent:"space-between",paddingRight:"30px",flexWrap:"wrap"}}>
<Typography sx={{fontWeight:"600",}}>7 day free trial</Typography>
<Typography sx={{fontWeight:"600",}}>|</Typography>
<Typography sx={{fontWeight:"600",}}>Starting at $39 per month</Typography>
<Typography sx={{fontWeight:"600",}}>|</Typography>
<Typography sx={{fontWeight:"600",}}>Less than 6 months at your own pace</Typography>
        </Box>
     <br/>   
        <Box>
          <Button sx={{backgroundColor:"#085cd1",padding:"12px 32px",borderRadius:"5px",color:"#fff","&:hover":{
            backgroundColor:"#00419E"
          }}}>
            Explore Careers
          </Button>
        </Box>
      </Box>
      <Box sx={{background: `url(${"https://images.ctfassets.net/wp1lcwdav1p1/5MeAXCoQVVbMTiqEmLwvd8/9e3a544103cecacecca1b718168a4138/learner-header-image-4x.png"})
                    center/cover no-repeat`,height:{md:"70vh",sm:"120vh",xs:"50vh"},width:{md:"45vw",sm:"50vw",xs:"100vw"}}}/>
    </StyleToolbar>
  )
}

export default Career1
