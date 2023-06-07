import {
  BorderBottom,
  CircleOutlined,
  DirectionsCarOutlined,
  Facebook,
  FacebookTwoTone,
  HealthAndSafetyOutlined,
  Instagram,
  LocationOn,
  Mail,
  Phone,
  Pinterest,
  SupportAgentOutlined,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Paper,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Footer from "../../components/footer/Footer";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // padding:"58px 58px",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
export default function Content4() {
  const theme = useTheme();
  return (
    <StyleToolbar>
      <Box
        sx={{
          display: "flex",
          padding: { md: "58px 80px ", sm: "58px 20px", xs: "58px 20px" },
          // backgroundColor: "#282828",
          
          fontFamily: " Trirong",
          justifyContent: "space-around",
          gap:"30px",
          flexDirection: { md: "row", sm: "row", xs: "column" }, BorderBottom:"1px solid red"
        }}
      >
        <Box sx={{}}>
          <Typography
            sx={{ fontSize:'18px',fontWeight:"600" }}
          >
            Start or advance your career
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google Data Analyst
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google Digital Marketing & E-commerce Professional Certificate
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google IT Automation with Python Professional Certificate
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google IT Support
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google Project Management
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google UX Design
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          Preparing for Google Cloud Certification: Cloud Architect
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Cybersecurity Analyst
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Data Analyst
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           IBM Data Engineering
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Data Science
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         IBM Full Stack Cloud Developer
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Machine Learning
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         Intuit Bookkeeping
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         Meta Front-End Developer
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          DeepLearning.AI TensorFlow Developer Professional Certificate
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         SAS Programmer Professional Certificate
          </Typography><br/>
         
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{ fontSize:'18px',fontWeight:"600" }}
          >
            Popular Courses and Certifications
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Free Courses
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          
Artificial Intelligence Courses
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          Blockchain Courses
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          Computer Science Courses
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          Cursos Gratis
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          Cybersecurity Courses
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          Data Analysis Courses
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          Data Science Courses
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          English Speaking Courses
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           IBM Data Engineering
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Data Science
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         IBM Full Stack Cloud Developer
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Machine Learning
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         Intuit Bookkeeping
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         Meta Front-End Developer
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          DeepLearning.AI TensorFlow Developer Professional Certificate
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         SAS Programmer Professional Certificate
          </Typography><br/>
         
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{ fontSize:'18px',fontWeight:"600" }}
          >
            Popular collections and articles
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google Data Analyst
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google Digital Marketing & E-commerce Professional Certificate
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google IT Automation with Python Professional Certificate
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google IT Support
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google Project Management
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google UX Design
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          Preparing for Google Cloud Certification: Cloud Architect
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Cybersecurity Analyst
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Data Analyst
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           IBM Data Engineering
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Data Science
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         IBM Full Stack Cloud Developer
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Machine Learning
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         Intuit Bookkeeping
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         Meta Front-End Developer
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          DeepLearning.AI TensorFlow Developer Professional Certificate
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         SAS Programmer Professional Certificate
          </Typography><br/>
         
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{ fontSize:'18px',fontWeight:"600" }}
          >
           Earn a degree or certificate online
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google Data Analyst
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google Digital Marketing & E-commerce Professional Certificate
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google IT Automation with Python Professional Certificate
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google IT Support
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google Project Management
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           Google UX Design
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          Preparing for Google Cloud Certification: Cloud Architect
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Cybersecurity Analyst
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Data Analyst
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
           IBM Data Engineering
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Data Science
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         IBM Full Stack Cloud Developer
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          IBM Machine Learning
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         Intuit Bookkeeping
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         Meta Front-End Developer
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
          DeepLearning.AI TensorFlow Developer Professional Certificate
          </Typography><br/>
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              
              alignItems: "center",
              "&:hover": {
                textDecoration:"underline"
              },
            }}
          >
         SAS Programmer Professional Certificate
          </Typography><br/>
         
        </Box>
      </Box>
      <Box sx={{padding:{md:"58px 58px",sm:"58px 20px",xs:"10px 20px"},display:"flex",justifyContent:"space-around",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
        <Box>
          <br/>
<Typography sx={{fontSize:"18px",fontWeight:"600"}}>TechPyro</Typography>
<br/>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >About</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >What We Offer</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Leadership</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Careers</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Catalog</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Coursera Plus</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >Professional Certificates</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
MasterTrack® Certificates</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Degrees</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
For Enterprise</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
For Government</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
For Campus</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Become a Partner</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Coronavirus Response</Typography>
</Box>
        <Box>
          <br/>
<Typography sx={{fontSize:"18px",fontWeight:"600"}}>Community
</Typography>
<br/>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}}>Learners</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Partners</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Beta Testers</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Translators</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Blog</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Tech Blog</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Teaching Center</Typography>
</Box>
        <Box>
          <br/>
<Typography sx={{fontSize:"18px",fontWeight:"600"}}>More
</Typography>
<br/>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}}>professional</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Investors</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Terms</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Privacy</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Help</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Accessibility</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Contact</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Articles</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Directory</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Affiliates</Typography>
<Typography sx={{"&:hover":{
  textDecoration:"underline"
}}} >
Affiliates</Typography>
</Box>
        <Box>
          <br/>
<Typography sx={{ background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&dpr=2&w=152&h=45&q=40"})
                    center/cover no-repeat`,height:"40px",width:"130px"}}/>
                    <br/>
                    <br/>
<Typography sx={{ background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&dpr=2&w=152&h=45&q=40"})
                    center/cover no-repeat`,height:"40px",width:"130px"}}/>
                    <br/>
                    <br/>
<Typography sx={{ background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/2018-B-Corp-Logo-Black-S.png?auto=format%2Ccompress&dpr=2&w=151&h=120&q=40"})
                    center/cover no-repeat`,height:"133px",width:"95px"}}/>
</Box>
</Box>
      <Box sx={{padding:"0px 58px"}} >
      <Box sx={{borderBottom:"1.5px solid #e5e7e8",height:"5px",width:"100%"}}/>
        <Footer/>
      </Box>
    </StyleToolbar>
  );
}
