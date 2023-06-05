import { ArrowForward, Campaign, CurrencyRupee, Done, OpenInNew } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // padding: " 0px 58px 20px",
  // marginBottom:"58px",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
   
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection:"column",
    flex:"4"
  },
}));
export default function University1() {
  return (
    <StyleToolbar>
      <Box sx={{flex:"2",padding:{md:"58px 58px",sm:"58px 10px",xs:"48px 10px"}}}>
        <Typography  sx={{fontSize:{md:"60px",sm:"30px",xs:"20px"},fontWeight:"600",lineHeight:{md:"60px",sm:"30px",xs:"20px"}}}>Strengthen employability to attract more students</Typography>
        <br/>
        <Typography  sx={{fontSize:{md:"24px",sm:"20px",xs:"20px"},fontWeight:"400",lineHeight:"40px"}}>Equip students with the most in-demand skills and prepare them for job success.</Typography>
        <br/>
        <br/>
        <br/>
        <Box>
          <Button sx={{backgroundColor:"#085cd1",padding:"12px 32px",borderRadius:"5px",color:"#fff","&:hover":{
            backgroundColor:"#00419E"
          }}}>
            Contact sales
          </Button>
        </Box>
        <br/>
        <Typography sx={{display:"flex",gap:"5px",flexDirection:{md:"row",sm:"row",xs:"column"}}}>Upskilling a small team? <Typography color="primary" sx={{textDecoration:"underline",cursor:"pointer",display:"flex",alignItems:"center"}}> Check out Coursera for Teams <OpenInNew sx={{fontSize:"14px"}}/></Typography> </Typography>
      </Box>
      <Box sx={{background: `url(${"https://img.freepik.com/free-photo/college-girl-boy-studying-together_23-2149038395.jpg?w=996&t=st=1685975015~exp=1685975615~hmac=8397b76b1912be741cf9973bda6f63dcc908139d53bbb83824255381e3adcd63"})
                    center/cover no-repeat`,height:{md:"120vh",sm:"120vh",xs:"50vh"},width:{md:"48vw",sm:"50vw",xs:"100vw"}}}/>
    </StyleToolbar>
  );
}
