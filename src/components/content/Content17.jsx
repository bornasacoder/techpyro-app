import { ArrowForward, ForwardOutlined, LocalLibrary, LocalOffer, Mail, School, SearchRounded, SendOutlined } from "@mui/icons-material";
import { Button, InputBase, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "58px 58px",
  display: "flex",
  gap:"30px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
padding:"28px 20px"
  },
}));

const Content17 = () => {
  return (
    <StyleToolbar>
      <Box sx={{ background: `url(${"https://images.ctfassets.net/2pudprfttvy6/4kpG5MrokyyRyXk6MtQB7Y/9d5658bcbae5f0729d99e03fa98a4b3b/InDemandSkills_1_5x.png"})
                center/cover no-repeat`,height:{md:"70vh",sm:"70vh",xs:"45vh"},width:{md:"40vw",sm:"40vw",xs:"92vw"}}}/>
      <Box sx={{flex:{md:"2",sm:"2",xs:"4"}}}>
       <Typography sx={{fontSize:{md:"18px",sm:"16px",xs:"14px"}}}>IN-DEMAND SKILLS</Typography>
       <br/>
       <Typography sx={{fontSize:{md:"48px",sm:"36px",xs:"24px"},lineHeight:{md:"48px",sm:"36px",xs:"30px"},fontWeight:"600"}}>Drive digital transformation with highly skilled employees</Typography>
       <br/>
       <Typography sx={{fontSize:{md:"20px",sm:"18px",xs:"16px"},lineHeight:"30px",}}>Upskill your workforce to deliver business results and stay competitive. Use SkillSets from TechPyro to easily guide learners to develop the skills you need.</Typography>
       <br/>
       <Box>
        <Button endIcon={<ArrowForward/>} sx={{"&:hover":{
          textDecoration:"underline",color:"#00419E"
        }}}>
          Explore SkillSets
        </Button>
       </Box>
       <br/>
       <Typography sx={{fontSize:{md:"20px",sm:"18px",xs:"16px"},lineHeight:"30px",fontWeight:"600"}}>A Fortune 10 American automaker drove an 87% increase in employees proficient in machine learning since partnering with TechPyro.</Typography>
       <br/>
       <Typography sx={{fontWeight:"600"}}>Source: TechPyro for Business Case Study, feb 2023</Typography>
        </Box>
    </StyleToolbar>
  );
};

export default Content17;
