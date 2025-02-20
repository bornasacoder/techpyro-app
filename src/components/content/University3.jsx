import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor:"#FFFFFF",
  padding: "58px  58px  ",
  display:"flex",
  gap:"45px",
  [theme.breakpoints.down("md")]: {
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
padding:"28px 20px"
  },
}));
export default function University3() {
  return (
    <StyleToolbar>
        
      <Box sx={{flex:{md:"2",sm:"2",xs:"4"}}}>
       <Typography sx={{fontSize:{md:"48px",sm:"36px",xs:"24px"},lineHeight:{md:"48px",sm:"36px",xs:"30px"},fontWeight:"600"}}>Offer students 5,200 courses from 275+ leading universities and industry partners </Typography>
        </Box>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/2pudprfttvy6/2eC1z7LVc0mMog2PnVxS5u/c211f33c65ec087d559b715a8579b6f8/university-collage.png"})
                center/cover no-repeat`,height:{md:"70vh",sm:"70vh",xs:"45vh"},width:{md:"40vw",sm:"40vw",xs:"92vw"},borderRadius:"5px"}}/>
    </StyleToolbar>
  );
}
