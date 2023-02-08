import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./Card2.css"
import Typography from "@mui/material/Typography";

import { Box, Checkbox } from "@mui/material";
import {
  CurrencyRupee,
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
const MainCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "20px",
  // padding:"10px 50px"
  [theme.breakpoints.down("sm")]:{
    justifyContent:"center"
  }
  
}));
export default function Card1({ sliderData }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <MainCard>
      <Card
        sx={{
          maxWidth: { md: "20vw", sm: "25vw", xs:"70vw" },
          borderRadius: "0px",
          boxShadow: "none",
          backgroundColor: "#F2F5F9",
          position: "relative",
          height: "auto",
        }}
      >
        {/* <CardHeader sx={{fontStyle:"italic", "& .MuiCardHeader-title":{fontSize:{xs:"13px"}}}} title={sliderData.shopname} subheader="September 14"  /> */}
        <CardMedia
          component="img"
          image={sliderData.image}
          alt="Paella dish"
          sx={{ height: { md: "15vh", sm: "15vh", xs: "15vh" },width:{md:"25vw"},paddingBottom:"30px" }}
        />
        <Box padding="30px 20px">
          <Typography sx={{color:"#428BEB"}}>{sliderData.tagline}</Typography>
          <br/>
          <Typography sx={{fontSize:"12px"}}>{sliderData.tagline1}</Typography>
        </Box>
        <Box sx={{ 
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,bgcolor:"#fc6539"}}>
    <svg style={{ width: "calc(100% + 1.3px)",
    height: "50px",
    transform: "rotateY(180deg)",}} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</Box>
      </Card>
    </MainCard>
  );
}
