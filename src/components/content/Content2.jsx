import { Apple, Facebook, Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    textAlign:"center"
    // justifyContent:"center"
  },
}));
const Left = styled(Box)(({ theme }) => ({
  flex: "2",
  display:"flex",
  justifyContent:"flex-end",
  [theme.breakpoints.down("md")]: {
    flex:"0",
  },
  [theme.breakpoints.down("sm")]: {
    flex:"0",
  },
}));
export default function Content2({setJoinopen}) {
  const navigate = useNavigate()
  const handlebutton = () =>{
    navigate("/about")
  }
  const handleJoinOpen = () => {
    setJoinopen(true);
  };
  return (
    <StyleToolbar>
      <Right>
          <Typography  sx={{fontSize:{md:"60px",sm:"50px",xs:'45px'},}}>Learn without limits</Typography>
          <Typography sx={{fontSize:"18px"}}>
            Start, switch, or advance your career with more than 5,400 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </Typography>
          <br/>
          <Box display="flex" gap={2} sx={{flexDirection:{md:'row',sm:'row',xs:'column'}}}>
          <Button sx={{padding:{md:"10px 30px",sm:"10px 30px",xs:"20px 30px"},color:"#FFFFFF", backgroundColor:"#0056D2",borderRadius:"5px","&:hover":{
             backgroundColor:"#00419E"
            }}} onClick={handleJoinOpen}>Join for free</Button>
            <Button sx={{padding:{md:"10px 30px",sm:"10px 30px",xs:"20px 30px"},color:"#00419E",border:"3px solid #00419E ",borderRadius:"5px"}} onClick={handlebutton} >Try TechPyro for Business</Button>
          </Box>
      </Right>
      <Left>
        <Box sx={{height:"65vh",width:"35vw",background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5CFC8u8XiXcbSOlVv6JZQx/4e6f898f57f9d798437b3aa22026e30b/CourseraLearners_C_Composition_Hillary_copy__3_.png?auto=format%2Ccompress&dpr=2&w=459&h=497&q=40"})
   center/cover no-repeat`,display:{md:"flex",sm:"none",xs:"none"}}}/>
      </Left>
    </StyleToolbar>
  );
}
