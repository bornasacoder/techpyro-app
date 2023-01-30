import {
  ArrowDropDown,
  Battery0Bar,
  Battery90,
  Bluetooth,
  Cake,
  CameraAltOutlined,
  DesktopWindows,
  DesktopWindowsOutlined,
  DeviceHubOutlined,
  DirectionsCarOutlined,
  GamesOutlined,
  KebabDining,
  KeyboardArrowDown,
  KeyboardArrowRight,
  LunchDining,
  NotAccessibleRounded,
  PhonelinkRingSharp,
  SetMeal,
  SportsEsportsOutlined,
  TouchApp,
  TvOffOutlined,
  TvOutlined,
  VolumeUp,
  Water,
} from "@mui/icons-material";
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
import NavButton from "components/navbar/navButton/NavButton";
import React from "react";
// import styled from "styled-components";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "48px 42px ",
  display: "flex",
  gap: "30px",
  [theme.breakpoints.down("sm")]: {
   flexDirection:'column',
   padding: "48px 10px ",
    },
}));
const Left = styled(Box)(({ theme }) => ({
  flex: 1,
  boxShadow: "5px 5px 5px 5px #888888",
}));
const Right = styled(Box)(({ theme }) => ({
  flex: 3,
  [theme.breakpoints.down("sm")]: {
    padding: "48px 0px ",
     },
}));

export default function Content1() {
  return (
    <StyleToolbar>
      <Left>
        <Box
          sx={{
            display: "flex",
            bgcolor: "#000",
            color: "#fff",
            justifyContent:"space-between",
             padding: {md:"10px 10px",sm:"15px 15px",xs:"20px 15px"},
          }}
        >
          <Typography variant="h5">ALL DEPARTMENTS</Typography>
          <KeyboardArrowDown />
        </Box>
        <Box
          sx={{
            display: "flex",
             padding: {md:"10px 10px",sm:"15px 15px",xs:"20px 15px"},
            borderBottom: "1px solid #D2D2D2",gap:"20px"
          }}
        >
          <DesktopWindowsOutlined />
          <Typography variant="h5">Computers & laptops</Typography>
          <KeyboardArrowRight  sx={{display:{md:"flex",sm:"none",xs:"none"}}}/>
        </Box>
        <Box
          sx={{
            display: "flex",
             padding: {md:"10px 10px",sm:"15px 15px",xs:"20px 15px"},
            borderBottom: "1px solid #D2D2D2",gap:"20px"
          }}
        >
          <PhonelinkRingSharp />
          <Typography variant="h5" gap={3}>
            phone & tablets
          </Typography>
          <KeyboardArrowRight  sx={{display:{md:"flex",sm:"none",xs:"none"}}}/>
        </Box>
        <Box
          sx={{
            display: "flex",
             padding: {md:"10px 10px",sm:"15px 15px",xs:"20px 15px"},
            borderBottom: "1px solid #D2D2D2",gap:"20px"
          }}
        >
          <CameraAltOutlined />
          <Typography variant="h5">Camera & photo</Typography>
          <KeyboardArrowRight  sx={{display:{md:"flex",sm:"none",xs:"none"}}}/>
        </Box>
        <Box
          sx={{
            display: "flex",
             padding: {md:"10px 10px",sm:"15px 15px",xs:"20px 15px"},
            borderBottom: "1px solid #D2D2D2",gap:"20px"
          }}
        >
          <TvOutlined />
          <Typography variant="h5">Tv & Audio</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
             padding: {md:"10px 10px",sm:"15px 15px",xs:"20px 15px"},
            borderBottom: "1px solid #D2D2D2",gap:"20px"
          }}
        >
          <SportsEsportsOutlined />
          <Typography variant="h5">Games & Play Station</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
             padding: {md:"10px 10px",sm:"15px 15px",xs:"20px 15px"},
            borderBottom: "1px solid #D2D2D2",gap:"20px"
          }}
        >
          <DirectionsCarOutlined />
          <Typography variant="h5">Car Electronics</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
             padding: {md:"10px 10px",sm:"15px 15px",xs:"20px 15px"},
            borderBottom: "1px solid #D2D2D2",gap:"20px"
          }}
        >
          <NotAccessibleRounded />
          <Typography variant="h5">Accessories</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
             padding: {md:"10px 10px",sm:"15px 15px",xs:"20px 15px"},
            borderBottom: "1px solid #D2D2D2",gap:"20px"
          }}
        >
          <DeviceHubOutlined />
          <Typography variant="h5">Gagets</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
             padding: {md:"10px 10px",sm:"15px 15px",xs:"20px 15px"},
            borderBottom: "1px solid #D2D2D2",gap:"20px"
          }}
        >
          <DirectionsCarOutlined />
          <Typography variant="h5">Other Equipment</Typography>
        </Box>
      </Left>
      <Right>
        <NavButton />
        <Box
          sx={{
            background: `url(${"	https://template.hasthemes.com/ezone/ezone/assets/img/slider/5.jpg"})
   center/cover no-repeat`,
            height: {md:"80vh",sm:"80vh",xs:"50vh"},
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              paddingLeft: "40px",
              justifyContent: "center",
              flexDirection: "column",
            }}
            data-aos="fade-down"
          >
            <Typography
              variant="h1"
              sx={{ fontSize: {md:"48px",sm:"38px",xs:"30px"}, alignItems: "center" }}
            >
              Invention of <br /> Design Pletform
            </Typography>
            <Typography sx={{ fontSize: "16px", alignItems: "center" }}>
              Best Product with Warranty
            </Typography>
            <Button
              sx={{
                // border: "1px solid #000",
                background: "#ffffff",
                color: "#000",
                borderRadius: "3px",
                width: "150px",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#000",
                  color: "#ffffff",
                },
                // display: { md: "block", sm: "none", xs: "none" },
              }}
            >
              BUY NOW
            </Button>
          </Box>
        </Box>
      </Right>
    </StyleToolbar>
  );
}
