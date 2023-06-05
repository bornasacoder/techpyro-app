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
export default function Content7() {
  return (
    <StyleToolbar>
      <Box sx={{flex:"2",padding:{md:"58px 58px",sm:"58px 10px",xs:"48px 10px"}}}>
        <Typography  sx={{fontSize:{md:"60px",sm:"30px",xs:"20px"},fontWeight:"600",lineHeight:{md:"60px",sm:"30px",xs:"20px"}}}>Accelerate business transformation</Typography>
        <br/>
        <Typography  sx={{fontSize:{md:"24px",sm:"20px",xs:"20px"},fontWeight:"400",lineHeight:"40px"}}>Upskill your employees to excel in the digital economy</Typography>
        <br/>
        <Typography  sx={{fontSize:{md:"18px",sm:"16px",xs:"16px"},fontWeight:"400",display:"flex",gap:"10px",alignItems:"center",lineHeight:{md:"40px",sm:"35px",xs:"30px"}}}><Done color="primary"/>Upskill your employees to excel in the digital economy</Typography>
        <Typography  sx={{fontSize:{md:"18px",sm:"16px",xs:"16px"},fontWeight:"400",display:"flex",gap:"10px",alignItems:"center",lineHeight:{md:"40px",sm:"35px",xs:"30px"}}}><Done color="primary"/>Offer content from top universities and companies</Typography>
        <Typography  sx={{fontSize:{md:"18px",sm:"16px",xs:"16px"},fontWeight:"400",display:"flex",gap:"10px",alignItems:"center",lineHeight:{md:"40px",sm:"35px",xs:"30px"}}}><Done color="primary"/>Provide hands-on guided learning</Typography>
        <Typography  sx={{fontSize:{md:"18px",sm:"16px",xs:"16px"},fontWeight:"400",display:"flex",gap:"10px",alignItems:"center",lineHeight:{md:"40px",sm:"35px",xs:"30px"}}}><Done color="primary"/>Track and benchmark skills</Typography>
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
      <Box sx={{background: `url(${"https://img.freepik.com/free-photo/front-view-female-student-white-shirt-holding-pen-copybook-blue-desk_140725-38454.jpg?w=996&t=st=1685974445~exp=1685975045~hmac=e8bc297ef74281cc7b870c44fd890a6b75c9910648adc9d4c53c1000ae9e9232"})
                    center/cover no-repeat`,height:{md:"120vh",sm:"120vh",xs:"50vh"},width:{md:"48vw",sm:"50vw",xs:"100vw"}}}/>
    </StyleToolbar>
  );
}
