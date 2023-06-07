
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  Grid,
  Paper,
  Select,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import NavButton from "../../components/navbar/navButton/NavButton";
import React from "react";
// import styled from "styled-components";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "58px 58px ",
  display: "flex",
  gap: "50px",
  [theme.breakpoints.down("sm")]: {
   flexDirection:'column',
   padding: "48px 10px ",
    },
}));


export default function Content1() {
  return (
    <StyleToolbar>
        
      <Box sx={{flex:"2"}}>
       <Typography sx={{fontSize:"20px",fontWeight:"600"}}>MEASUREMENT & BENCHMARKING</Typography>
       <br/>
       <Typography sx={{fontSize:"48px",lineHeight:"48px",fontWeight:"600"}}>Demonstrate the business case for learning and focus your learning strategy</Typography>
       <br/>
       <Typography sx={{fontSize:"20px",lineHeight:"30px",}}>Leverage our Skills Dashboard to make informed decisions that maximize training effectiveness and advance company goals.</Typography>
       <br/>
       <Box>
        <Button endIcon={<ArrowForward/>} sx={{"&:hover":{
          textDecoration:"underline",color:"#00419E"
        }}}>
          Learn about Skills Dashboard
        </Button>
       </Box>
       <br/>
       <Typography sx={{fontSize:"20px",lineHeight:"30px",fontWeight:"600",}}>Understand the state of skills</Typography>
       <Typography sx={{}}>"The Skills Dashboard gives us a true sense of what our people know and are good at, which help us assess talent more intelligently."</Typography>
       <br/>
       <Typography sx={{fontWeight:"600"}}>Source: TechPyro for Business Case Study, feb 2023</Typography>
       <br/>
       <br/>
       <Box sx={{display:"flex",gap:"20px"}}>
       <Box sx={{ background: `url(${"https://images.ctfassets.net/2pudprfttvy6/2RhZw4bhH8Eq1VEcYGgen8/6da6ba190c0d7a9b86defdea549d7bb7/logo-adobe.svg"})
                center/cover no-repeat`,height:"29px",width:"114px",borderRadius:"5px"}}/>
                <Typography sx={{fontWeight:"600"}}>Justin M. <br/> Head of Talent Development and Digital Learning</Typography>
       </Box>
        </Box>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/2pudprfttvy6/18cDv7LyvXhf8BMXL25O5o/573fbbc4015253f9e77c8095d096e420/SkillsDashboard_1-5x.png"})
                center/cover no-repeat`,height:"80vh",width:"40vw",borderRadius:"5px"}}/>
    </StyleToolbar>
  );
}
