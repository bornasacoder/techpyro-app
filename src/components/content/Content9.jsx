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
  justifyContent: "center",
  flexDirection: "column",
  gap:"50px",
  backgroundColor: "#F7F2F1",
  
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
        <Typography variant="h2" fontFamily=" Trirong">What People Say</Typography>
        <Typography color="#9FA19F">
        How real people said about Education WordPress Theme.
        </Typography>
      </Box>
      <Box sx={{
        display:"flex",
        justifyContent:"center",
        gap:3,

      }}>
       <Sliders sliderData = {studentPortfolio}/>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
