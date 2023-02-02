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
  backgroundColor: "#F2F2F2",
  padding: "0px 58px ",

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
          sx={{
            display: "flex",
            alignItems: "center",
            height:"300px",
          }}
          columnSpacing={{ xs: 0, sm: 2, md: 1 }}
        >
          <Grid item md={3.5} xs={12}>
            <Item
              sx={{
                display: "flex",
                boxShadow: "none!important",
                backgroundColor: "#F2F2F2!important",
              }}
            >
              <Typography variant="h2">Top Categories</Typography>
            </Item>
            <br/>
          </Grid>
          <Grid
            md={8.5}
            xs={12}
            sx={{ display: "flex", rowGap: "20px" }}
            container
          >
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                  height:"55px",
                  "&:hover":{
                    borderBottom:"3px solid #6CE6B4",
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <SettingsSuggestOutlined
                    sx={{ fontSize: "40px", color: "#7C7C7C" }}
                  />
                  Arts & Craft
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                   padding: "0px 10px",
                  height:"55px",
                  "&:hover":{
                    borderBottom:"3px solid #6CE6B4",
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <SettingsSuggestOutlined
                    sx={{ fontSize: "40px", color: "#7C7C7C" }}
                  />
                  Coaching
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                   padding: "0px 10px",
                  height:"55px",
                  "&:hover":{
                    borderBottom:"3px solid #6CE6B4",
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <ColorLensOutlined
                    sx={{
                      fontSize: "40px",
                      fontWeight: "400!important",
                      color: "#7C7C7C",
                    }}
                  />
                  Online Business
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                   padding: "0px 10px",
                  height:"55px",
                  "&:hover":{
                    borderBottom:"3px solid #6CE6B4",
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <DisplaySettingsOutlined
                    sx={{ fontSize: "40px",color: "#7C7C7C", }}
                  />
                  Passive Income
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                   padding: "0px 10px",
                  height:"55px",
                  "&:hover":{
                    borderBottom:"3px solid #6CE6B4",
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <PhotoCameraOutlined
                    sx={{ fontSize: "40px",color: "#7C7C7C", }}
                  />
                  Photography
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  alignItems: "center",
                   padding: "0px 10px",
                  height:"55px",
                  "&:hover":{
                    borderBottom:"3px solid #6CE6B4",
                  }
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <DesktopMacOutlined
                    sx={{ fontSize: "40px",color: "#7C7C7C", }}
                  />
                Teaching Training
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
