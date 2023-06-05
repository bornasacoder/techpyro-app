import { ArrowForward, Campaign, CurrencyRupee, Done, OpenInNew } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // padding: " 0px 58px 20px",
  // marginBottom:"58px",
  display: "flex",
  // justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
   
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection:"column",
    flex:"4"
  },
}));
export default function University4() {
  return (
    <StyleToolbar>
      <Box sx={{padding:{md:"50px 0px 50px 50px",sm:"50px 0px 50px 50px",xs:"0px"},flex:"2"}}>
      <Box sx={{background: `url(${"https://img.freepik.com/free-photo/people-work_144627-43046.jpg?w=996&t=st=1685975118~exp=1685975718~hmac=caf57dcca407ac48b9cb066e30adad9850d16ae2e1c49ba68e07deb7a06ca5ff"})
                    center/cover no-repeat`,height:{md:"80vh",sm:"120vh",xs:"50vh"},width:{md:"38vw",sm:"50vw",xs:"100vw"},borderRadius:"10px"}}/>
      </Box>
      <Box sx={{flex:"2",padding:{md:"50px 58px",sm:"58px 10px",xs:"48px 10px"}}}>
        <Typography sx={{fontWeight:"600",fontSize:"20px"}}>CAREER ACADEMY</Typography>
        <br/>
        <Typography  sx={{fontSize:{md:"40px",sm:"30px",xs:"20px"},fontWeight:"600",lineHeight:{md:"40px",sm:"30px",xs:"20px"}}}>Prepare your students for in-demand jobs</Typography>
        <br/>
        <Typography  sx={{fontSize:{md:"24px",sm:"20px",xs:"20px"},fontWeight:"400",lineHeight:"40px"}}>Strengthen student employability with skills training from the world's leading companies.</Typography>
        <br/>
        <Typography  sx={{fontSize:{md:"24px",sm:"20px",xs:"20px"},fontWeight:"400",lineHeight:"40px"}}>With Career Academy, enable your students to: </Typography>
        <br/>
        <Typography  sx={{fontSize:{md:"16px",sm:"16px",xs:"16px"},fontWeight:"400",display:"flex",gap:"10px",alignItems:"center",lineHeight:{md:"40px",sm:"35px",xs:"30px"}}}><Done color="primary"/>Earn a Professional Certificate designed to get them job-ready</Typography>
        <Typography  sx={{fontSize:{md:"16px",sm:"16px",xs:"16px"},fontWeight:"400",display:"flex",gap:"10px",alignItems:"center",lineHeight:{md:"40px",sm:"35px",xs:"30px"}}}><Done color="primary"/>Gain common job skills employers demand</Typography>
        <Typography  sx={{fontSize:{md:"16px",sm:"16px",xs:"16px"},fontWeight:"400",display:"flex",gap:"10px",alignItems:"center",lineHeight:{md:"40px",sm:"35px",xs:"30px"}}}><Done color="primary"/>Showcase skill mastery with a portfolio of work</Typography>
        <Typography  sx={{fontSize:{md:"16px",sm:"16px",xs:"16px"},fontWeight:"400",display:"flex",gap:"10px",alignItems:"center",lineHeight:{md:"40px",sm:"35px",xs:"30px"}}}><Done color="primary"/>Explore a range of in-demand roles across industries</Typography>
        <br/>
        <Box>
          <Button sx={{padding:"12px 32px",borderRadius:"5px","&:hover":{
            color:"#00419E",textDecoration:"underline"
          }
        }} endIcon={<ArrowForward/>}>
            Learn more about Career Academy
          </Button>
        </Box>
      </Box>
      
    </StyleToolbar>
  );
}
