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
        <Box sx={{height:"65vh",width:"35vw",background: `url(${"https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg?w=996&t=st=1685973919~exp=1685974519~hmac=ff39dfcda8ebf3c52319fc6bea5c9b5190053bd62230976413459bd998a13783"})
   center/cover no-repeat`,display:{md:"flex",sm:"none",xs:"none"}}}/>
      </Left>
    </StyleToolbar>
  );
}
