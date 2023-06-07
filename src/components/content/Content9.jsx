import { FacebookOutlined, Instagram, Public, Twitter, YouTube } from "@mui/icons-material";
import { Avatar, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import SearchBar from "../../components/navbar/searchbar/SearchBar";
import Sliders from "../../components/slider/slider1/Sliders";
import { studentPortfolio } from "../../constants/studentportfollio";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "78px 48px ",
  display: "flex",
  justifyContent:"space-between",
  flexDirection: "column",
  gap:"50px",
  backgroundColor: "#FFFFFF",
  [theme.breakpoints.down("sm")]:{
    padding:"78px 10px"
  }
  
}));
const Content9 = () => {
  return (
    <StyleToolbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign:"center",
          alignItems:"center",
          flexDirection:"column"
        }}
      >
        <Typography variant="h2" sx={{fontSize:{md:"58px",sm:"40px",xs:"30px",maxWidth:{md:"50%",sm:"60%",xs:"90%"}}}}>From the Techpyro community</Typography>
        <Typography sx={{fontSize:{md:"28px",sm:"24px",xs:"20px"}}}>
        113+ million people have already joined Techpyro
        </Typography>
      </Box>
      <Box sx={{
        display:"flex",
       justifyContent:"space-evenly",
       alignItems:"center",
        gap:3,
padding:"0px 48px",
flexDirection:{md:"row",sm:"row",xs:"column"}
      }}>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",}}>
          <Avatar src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4Tixoe62Y1u5VXqpM2mGPY/622b963f1113d56d1cea7f2b9260f231/Mid_Year_US_Brand_Campaign-headshot_1.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40" sx={{height:"200px",width:"200px"}}/>
          <Typography fontSize="25px" color="#382D8B">Chitranshee A.</Typography>
          <Typography>INDIA</Typography>
          <Box sx={{borderBottom:"2px solid #2A73CC",height:"20px",width:"10vw"}}/>
          <br/>
        <Typography sx={{fontSize:"18px"}}>"Even more important than
knowledge is confidence, which
I have gained through my
learningjourney. No matter
what you are looking to learn, or
gain confidence in, Coursera has
something for you"</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",}}>
          <Avatar src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/yi0wou0N5EsZGDfVejLKR/131ccae137e3c20412573883c463a02c/CarlosC-Coursera-Learner.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40" sx={{height:"200px",width:"200px"}}/>
          <Typography fontSize="25px" color="#382D8B">Chitranshee A.</Typography>
          <Typography>INDIA</Typography>
          <Box sx={{borderBottom:"2px solid #2A73CC",height:"20px",width:"10vw"}}/>
          <br/>
        <Typography sx={{fontSize:"18px"}}>"I was able to prove to potential
employers that I have a solid
understanding of computers
and hardware-and started to
receive real, viable job offers."</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",}}>
          <Avatar src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7caQWjB2R0E1urlsdNUpdW/052d891da7a7c3a566c8e81be68a3d3a/Mid_Year_US_Brand_Campaign-headshot_3.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40" sx={{height:"200px",width:"200px"}}/>
          <Typography fontSize="25px" color="#382D8B">Chitranshee A.</Typography>
          <Typography>INDIA</Typography>
          <Box sx={{borderBottom:"2px solid #2A73CC",height:"20px",width:"10vw"}}/>
          <br/>
        <Typography sx={{fontSize:"18px"}}>"I went from having no
computer skills to being able to
apply for a software engineering
job at a serious company and
pass their interviews, which
were really rigorous. I have this
career in front of me now that
wasn't even in sight before, and
it's whatI want to be doing.
That's really powerful."</Typography>
        </Box>

       {/* <Sliders sliderData = {studentPortfolio}/> */}
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
