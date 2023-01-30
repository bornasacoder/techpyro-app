import { ArrowForward, Campaign, CurrencyRupee } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "58px 58px 120px",
  marginBottom:"58px",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: "58px 10px ",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "58px 10px ",
  },
}));
export default function Content7() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        justifyContent="center"
        gap={5}
        sx={{
          height: "300px",
          width: "100%",
          backgroundColor: "#000",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            alignItems: "center",
            textAlign: "center",
            fontSize:{md:"40px",sm:"34px",xs:"24px"}
          }}
        >
          Xolo Fast T2 Smartphone,
          <br /> Android
          <br />
          7.0 Unlocked.
        </Typography>
        <Box
          sx={{
            height: {md:"125",sm:"120px",xs:"110px"},
            width: {md:"175px",sm:"150px",xs:"145px"},
            position: "absolute",
            top: "0",
            left: "0px",
            clipPath: "circle(50% at 27% 41%)",
            // zIndex:"200",
            backgroundColor: "#5B5B63",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            paddingLeft:"10px",
            // borderRadius:"50%"
          }}
        >
          <Typography variant="h4" sx={{ fontSize: {md:'24px',sm:"20px",xs:"18px"} }}>
            ₹ 8799.00
          </Typography>
          <Typography
            variant="h4"
            sx={{  fontSize: {md:'20px',sm:"18px",xs:"16px"}, textDecoration: "line-through" }}
          >
           ₹ 9999.00
          </Typography>
        </Box>
        <Box
          sx={{
            display:{md:"flex",sm:"flex",xs:'none'},
            position: "absolute",
            top: "60px",
            bottom: "-50px",
            right: "30px",
            height: {md:"360px",sm:"320px",xs:"150px"},
            width:{md:"250px",sm:"220px",xs:"150px"},
            justifyContent:"flex-end",
            background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/banner/10.png"})
   center/cover no-repeat`,
          }}
        data-aos="fade-up"></Box>
      </Box>
    </StyleToolbar>
  );
}
