import {
  Call,
  FacebookTwoTone,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  RssFeedSharp,
  Twitter,
  WhatsApp,
  YouTube,
  YoutubeSearchedForTwoTone,
} from "@mui/icons-material";
import { Button, InputBase, Typography } from "@mui/material";
import { alpha, Box, styled } from "@mui/system";
// import Head from 'next/head'
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "38px 58px",
  backgroundColor: "#000",
  [theme.breakpoints.down("sm")]: {
   padding:"38px 20px"
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  backgroundColor: "#FFFFFF",
  marginLeft: 0,
  width: "250px",
  padding: "6px 10px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: "0px",
  bottom: "0px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: 'inherit',
  "& .MuiInputBase-input": {
    width: "100%",
    height: "100%",
  },
}));
const Footer = () => {
  return (
    <StyleToolbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#FFFFFF",
          flexDirection: { md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box>
        <br/>
          <Typography sx={{ color: "#CCCCCC", fontSize: "20px" }}>
            Book Your Travel Hotel
          </Typography>
          <br />
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <LocationOn sx={{ fontSize: "14px" }} /> Prem Nager,
            Haridwar(Uttrakhand), India
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Call sx={{ fontSize: "14px" }} /> +91 9999999999
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Mail sx={{ fontSize: "14px" }} /> info@techpyro.com
          </Typography>
        </Box>
        <Box>
        <br/>
          <Typography sx={{ fontSize: "18px", color: "#CCCCCC" }}>
            Newsletter
          </Typography>
          <br />
          <Search>
            <StyledInputBase
              placeholder="Your email address"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <Button
                sx={{
                  backgroundColor: "#00BFA5",
                  padding: "8px 5px",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#000",
                  },
                }}
              >
                SIGN UP
              </Button>
            </SearchIconWrapper>
          </Search>
        </Box>
        <Box>
        <br/>
          <Typography sx={{ fontSize: "18px", color: "#CCCCCC" }}>
            Useful
          </Typography>
          <br />
          <Typography sx={{ color: "#FFFFFF" }}>
            Reservations: (1) – 555 – 555 – 555
          </Typography>
          <Typography sx={{ color: "#FFFFFF" }}>Check-in: 4 PM</Typography>
          <Typography sx={{ color: "#FFFFFF" }}>Check-Out: 11 AM</Typography>
        </Box>
      </Box>
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#FFFFFF",
          flexDirection:{md:"row",sm:"column",xs:"column"}
        }}
      >
        <Box>
          <Typography sx={{ color: "#CCCCCC", fontSize: "20px" }}>
            Follow us
          </Typography>
          <br />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <FacebookTwoTone
              sx={{
                fontSize: "30px",
                "&:hover": {
                  color: "#00BFA5",
                },
              }}
            />
            <Twitter
              sx={{
                fontSize: "30px",
                "&:hover": {
                  color: "#00BFA5",
                },
              }}
            />
            <RssFeedSharp
              sx={{
                fontSize: "30px",
                "&:hover": {
                  color: "#00BFA5",
                },
              }}
            />
            <LinkedIn
              sx={{
                fontSize: "30px",
                "&:hover": {
                  color: "#00BFA5",
                },
              }}
            />
            <YouTube
              sx={{
                fontSize: "30px",
                "&:hover": {
                  color: "#00BFA5",
                },
              }}
            />
            <WhatsApp
              sx={{
                fontSize: "30px",
                "&:hover": {
                  color: "#00BFA5",
                },
              }}
            />
            <Instagram
              sx={{
                fontSize: "30px",
                "&:hover": {
                  color: "#00BFA5",
                },
              }}
            />
          </Box>
        </Box>
        <Box>
          <br/>
          <Typography sx={{ fontSize: "18px", color: "#CCCCCC" }}>
            Awards
          </Typography>
          <br />
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Typography
              sx={{
                background: `url("https://themes.themeenergy.com/bookyourtravel/hotel/wp-content/uploads/sites/10/2018/12/logo-1.png")center/cover no-repeat`,
                height: "40px",
                width: "175px",
              }}
            />
            <Typography
              sx={{
                background: `url("https://themes.themeenergy.com/bookyourtravel/hotel/wp-content/uploads/sites/10/2018/12/logo-2.png")center/cover no-repeat`,
                height: "40px",
                width: "175px",
              }}
            />
            <Typography
              sx={{
                background: `url("https://themes.themeenergy.com/bookyourtravel/hotel/wp-content/uploads/sites/10/2018/12/logo-3.png")center/cover no-repeat`,
                height: "40px",
                width: "150px",
              }}
            />
            <Typography
              sx={{
                background: `url("https://themes.themeenergy.com/bookyourtravel/hotel/wp-content/uploads/sites/10/2018/12/logo-4.png")center/cover no-repeat`,
                height: "40px",
                width: "140px",
              }}
            />
          </Box>
        </Box>
      </Box>
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#FFFFFF",
        }}
      >
        <Typography sx={{ fontSize: "12px" }}>
          © Copyright 2023 - 2030 Techpyro.com
        </Typography>
        <Box sx={{ display: "flex", gap: {md:"20px",sm:"10px",xs:"0px"}, fontSize: "12px" }}>
          <Typography sx={{ fontSize: "12px" }}>Terms of service </Typography>
          <Typography sx={{ fontSize: "12px" }}>Privacy policy </Typography>
        </Box>
      </Box>
    </StyleToolbar>
  );
};

export default Footer;
