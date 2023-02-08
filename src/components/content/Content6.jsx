import {
  ColorLensOutlined,
  CurrencyRupee,
  DesktopMacOutlined,
  DisplaySettingsOutlined,
  NoPhotography,
  PhotoCamera,
  PhotoCameraOutlined,
  Settings,
  SettingsOutlined,
  SettingsSuggestOutlined,
  Star,
} from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "58px 58px ",

  [theme.breakpoints.down("sm")]: {
    padding: "30px 20px ",
    flexDirection: "column",
  },

  gap: 2,
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "5px!important",
  // boxShadow: "none!important",
  textAlign: "center",
  maxWidth: "95%",
  backgroundColor: "#FFFFFF!important",
  fontSize: "18px",
  [theme.breakpoints.down("sm")]: {
   maxWidth:"100%"
  },
}));
export default function Content6() {
  return (
    <StyleToolbar>
      <Typography sx={{fontSize:"35px",paddingBottom:"40px"}}>Explore TechPyro Courses</Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column" },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            // height:"300px",
          }}
          columnSpacing={{ xs: 0, sm: 2, md: 1 }}
        >
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  // padding: "0px 10px",
                  // height:"55px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                 Data Sciences
                 <Typography>425 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                 Business
                 <Typography>1425 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/computer_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                Computer Sciences
                 <Typography>625 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/health.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                Arts and Humanities
                 <Typography>425 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  // padding: "0px 10px",
                  // height:"55px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                 Data Sciences
                 <Typography>425 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  // padding: "0px 10px",
                  // height:"55px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/social_sciences.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                 Data Sciences
                 <Typography>425 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  // padding: "0px 10px",
                  // height:"55px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/personal_development.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                 Data Sciences
                 <Typography>425 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  // padding: "0px 10px",
                  // height:"55px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/arts_and_humanities.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                 Data Sciences
                 <Typography>425 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  // padding: "0px 10px",
                  // height:"55px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/language_learning.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                 Data Sciences
                 <Typography>425 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  // padding: "0px 10px",
                  // height:"55px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/information_technology.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                 Data Sciences
                 <Typography>425 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:"10px",
                  // padding: "0px 10px",
                  // height:"55px",
                  "&:hover":{
                    boxShadow:"-1px 0px 5px 0px rgba(156,150,156,0.84)"
                  }
                }}
              >
                  <Box
                    sx={{background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/math_and_logic.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"})
                    center/cover no-repeat`,height:"80px",width:"80px" }}
                  />
                <Typography
                  variant="h5"
                >
                 Data Sciences
                 <Typography>425 Courses</Typography>
                </Typography>
              </Item>
            </Grid>
          </Grid>
      </Box>
    </StyleToolbar>
  );
}
