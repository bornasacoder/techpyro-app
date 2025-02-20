import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import SearchBar from "../navbar/searchbar/SearchBar";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent:"space-around",
  backgroundColor: "#FFFFFF",
  gap: "50px",
  alignItems: "center",
  padding: "58px 80px",
  fontFamily: "Trirong",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "20px 8px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "20px 8px",
  },
}));
export default function Content21({setJoinopen}) {
  const handleJoinOpen = () => {
    setJoinopen(true);
  };
  return (
    <StyleToolbar>
       <Box sx={{ flex: "2",  background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/secondary-consumer-cta/Image-Next-Step.png?auto=format%2Ccompress&dpr=2&w=471&h=330&q=40"})
                    center/cover no-repeat`,height:"60vh",width:"auto"}}/>
      <Box sx={{ flex: "2" }}>
        <Typography  sx={{ fontSize:{md:"35px",sm:"28px",xs:"20px"},fontWeight:"600" }}>Take the next step toward your personal and professional goals with Coursera.</Typography>
        <br />
        <Typography sx={{ }}>
        Join now to receive personalized recommendations from the full Coursera catalog.
        </Typography>
        <br />
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button sx={{  borderRadius: "5px",backgroundColor:"#0056D2",color:"#fff","&:hover":{
            backgroundColor:"#00419E"
          } }}   onClick={handleJoinOpen}>
            Join for free
          </Button>
        </Box>
      </Box>
      <br />
     
    </StyleToolbar>
  );
}
