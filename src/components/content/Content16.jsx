import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor:"#F5F7F8",
  padding: "58px  58px  ",
  display:"flex",
  gap:"45px",
  [theme.breakpoints.down("md")]: {
  // justifyContent:"center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
padding:"28px 20px"
  },
}));
export default function Content16() {
  return (
    <StyleToolbar>
        
      <Box sx={{flex:{md:"2",sm:"2",xs:"4"}}}>
       <Typography sx={{fontSize:{md:"18px",sm:"16px",xs:"14px"},fontWeight:"600"}}>WORLD-CLASS CONTENT</Typography>
       <br/>
       <Typography sx={{fontSize:{md:"48px",sm:"36px",xs:"24px"},lineHeight:{md:"48px",sm:"36px",xs:"30px"},fontWeight:"600"}}>Offer your learners content from 275+ leading universities and industry partners</Typography>
       <br/>
       <Typography sx={{fontSize:{md:"20px",sm:"18px",xs:"16px"},lineHeight:"30px",}}>Train teams with engaging content available in multiple formats and lengths suited to different learning needs and schedules.</Typography>
       <br/>
       <Box>
        <Button endIcon={<ArrowForward/>} sx={{"&:hover":{
          textDecoration:"underline",color:"#00419E"
        }}}>
          Explore our content
        </Button>
       </Box>
        </Box>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/2pudprfttvy6/2eC1z7LVc0mMog2PnVxS5u/c211f33c65ec087d559b715a8579b6f8/university-collage.png"})
                center/cover no-repeat`,height:{md:"70vh",sm:"70vh",xs:"45vh"},width:{md:"40vw",sm:"40vw",xs:"92vw"},borderRadius:"5px"}}/>
    </StyleToolbar>
  );
}
