import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "58px  58px  ",
  backgroundColor:"#F5F7F8",
  [theme.breakpoints.down("md")]: {
  justifyContent:"center",
  padding: "25px 5px ",
  },
  [theme.breakpoints.down("sm")]: {
    // justifyContent:"center",
    padding: "10px 20px  ",
  },
}));
export default function University6() {
  return (
    <StyleToolbar>
      <Box sx={{ background: `url(${"https://images.ctfassets.net/2pudprfttvy6/76bRJxFCGKsVEOgZmngB2H/08bb80b6d549a83014d6d2d989db8d8d/banner-bg.png"})
                center/cover no-repeat`,height:"60vh",width:"90vw",padding:"40px 40px",display:"flex",alignItems:"center"}}>
     <Box sx={{width:{md:"50vw",sm:"60vw",xs:"100vw"},}}>
           <Typography sx={{fontSize:{md:"32px",sm:"30px",xs:"26px"},lineHeight:{md:"32px",sm:"30px",xs:'25px'},fontWeight:"600"}}>The Top Job Skills for 2023: A Discussion with Learning Leaders</Typography>
           <br/>
           <Typography>Discover the in-demand skills being prioritized across the public and private sectors.</Typography>
           <br/>
            <Typography  sx={{fontWeight:"600",display:"flex",alignItems:"center","&:hover":{
              textDecoration:"underline"
            }}} color="primary">Watch Now <ArrowForward sx={{fontWeight:"200!important"}}/></Typography>
      </Box>       
     </Box>
    </StyleToolbar>
  );
}
