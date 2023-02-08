import {
  Box,
  Button,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF!important",
  padding: "78px 58px ",
  display: "flex",
  alignItems:"center",
  [theme.breakpoints.down("sm")]: {
    padding:"58px 20px"
  },
}));
const Right = styled(Box)(({ theme }) => ({
  display:"flex",
  flexDirection:"column",
  flex: "2",
  [theme.breakpoints.down("md")]: {
    flex:"4",
    // justifyContent:"center"
  },
  [theme.breakpoints.down("sm")]: {
    flex:"4",
    // justifyContent:"center"
  },
}));
const Left = styled(Box)(({ theme }) => ({
  flex: "2",
  display:"flex",
  justifyContent:"flex-end",
  [theme.breakpoints.down("md")]: {
    // paddind:"20px 20px",
    flex:"0",
  },
  [theme.breakpoints.down("sm")]: {
    // paddind:"20px 20px",
    flex:"0",
  },
}));
export default function Content2() {
  return (
    <StyleToolbar>
      <Right>
          <Typography  sx={{fontSize:{md:"60px",sm:"50px",xs:'40px'},}}>Learn without limits</Typography>
          <Typography sx={{fontSize:"18px"}}>
            Start, switch, or advance your career with more than 5,400 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </Typography>
          <br/>
          <Box display="flex" gap={2} sx={{flexDirection:{md:'row',sm:'row',xs:'column'}}}>
          <Button sx={{padding:{md:"10px 30px",sm:"10px 30px",xs:"20px 30px"},color:"#FFFFFF", backgroundColor:"#0056D2",borderRadius:"5px","&:hover":{
             backgroundColor:"#00419E"
            }}}>Join for free</Button>
            <Button sx={{padding:{md:"10px 30px",sm:"10px 30px",xs:"20px 30px"},color:"#00419E",border:"3px solid #00419E ",borderRadius:"5px"}}>Try TechPyro for Business</Button>
          </Box>
      </Right>
      <Left>
        <Box sx={{height:"65vh",width:"35vw",background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5CFC8u8XiXcbSOlVv6JZQx/4e6f898f57f9d798437b3aa22026e30b/CourseraLearners_C_Composition_Hillary_copy__3_.png?auto=format%2Ccompress&dpr=2&w=459&h=497&q=40"})
   center/cover no-repeat`,display:{md:"flex",sm:"none",xs:"none"}}}/>
      </Left>
    </StyleToolbar>
  );
}
