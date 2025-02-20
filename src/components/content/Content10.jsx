import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "58px 48px ",
  backgroundColor:"#FFFFFF",
  display:"flex",
  gap:"50px",
  [theme.breakpoints.down("md")]: {
  // justifyContent:"center",
  // padding: "25px 5px ",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding:"28px 20px"
  },
}));

export default function Content10() {
  return (
    <StyleToolbar>
            <Box sx={{ background: `url(${"https://images.ctfassets.net/2pudprfttvy6/6GkGMGaxHYprzVanlGgOsl/a0d1b878457892bee1adaee5c4109cfc/GuidedProjects_1-5x.png"})
                center/cover no-repeat`,height:{md:"85vh",sm:"70vh",xs:"45vh"},width:{md:"40vw",sm:"40vw",xs:"92vw"},borderRadius:"5px"}}/>
      <Box sx={{flex:{md:"2",sm:"2",xs:"4"}}}>
       <Typography sx={{fontSize:{md:"18px",sm:"16px",xs:"14px"},fontWeight:"600"}}>HANDS-ON LEARNING</Typography>
       <br/>
       <Typography sx={{fontSize:{md:"48px",sm:"36px",xs:"24px"},lineHeight:{md:"48px",sm:"36px",xs:"30px"},fontWeight:"600"}}>Increase skills proficiency and durability with applied learning</Typography>
       <br/>
       <Typography sx={{fontSize:{md:"20px",sm:"18px",xs:"16px"},lineHeight:"30px",}}>Help employees quickly master skills with Guided Projects: hands-on, single-session training programs with step-by-step guidance from an expert.</Typography>
       <br/>
       <Box>
        <Button endIcon={<ArrowForward/>} sx={{"&:hover":{
          textDecoration:"underline",color:"#00419E"
        }}}>
          Learn about Guided Projects
        </Button>
       </Box>
       <br/>
       <Typography sx={{fontSize:{md:"20px",sm:"18px",xs:"16px"},lineHeight:"30px",fontWeight:"600"}}>Provide applicable learning</Typography>
       <Typography sx={{}}>"Guided Projects are a demonstration of competency because they bring applications to life."</Typography>
       <br/>
       <Typography sx={{fontWeight:"600"}}>Source: TechPyro for Business Case Study, feb 2023</Typography>
       <br/>
       <br/>
       <Box sx={{display:"flex",gap:"20px"}}>
       <Box sx={{ background: `url(${"https://images.ctfassets.net/2pudprfttvy6/301LnIOlpasEJamE2k01DT/a4e7ccc08da745b2b98cf9877e3ec169/blue-shield-of-california-vector-logo-2022.svg"})
                center/cover no-repeat`,height:"45px",width:"100px",borderRadius:"5px"}}/>
                <Typography sx={{fontWeight:"600"}}>Becky M. <br/> Senior Director, Talent Acquisition & Pipeline Programs</Typography>
       </Box>
        </Box>
  
    </StyleToolbar>
  );
}
