import { Box, styled, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  bgColor: "#F8F8F8",
  padding: "48px  22px",
  display: "flex",
  justifyContent: "space-around",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));
const Head = styled(Box)({});
const Footer = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{ bgColor: "#F8F8F8", padding: "58px  110px 0px" }}
      >
        Sweetcart
      </Typography>
      <StyleToolbar>
        <Box>
          <Typography
            variant="h4"
            margin="6px 0px"
            display="flex"
            flexDirection="column"
          >
            ABOUT SWEETCART
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "6px 0px",
              letterSpacing: 1,
            }}
          >
            <Typography varient="p">Who We Are</Typography>
            <Typography varient="p">Blog</Typography>
            <Typography varient="p">Work With Us</Typography>
            <Typography varient="p">Investor Relations</Typography>
            <Typography varient="p">Report Fraud</Typography>
            <Typography varient="p">Contact Us</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" margin="6px 0px">
            SWEETAVERSE
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "6px 0px",
              letterSpacing: 1,
            }}
          >
            <Typography varient="p">Sweetcart</Typography>
            <Typography varient="p">Blinkit</Typography>
            <Typography varient="p">Finding India</Typography>
            <Typography varient="p">Hyperpure</Typography>
            <Typography varient="p">Sweetland</Typography>
          </Box>
        </Box>
        <Box sx={{ letterSpacing: 1 }}>
          <Typography variant="h4" margin="6px 0px">
            FOR RESTAURANTS
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "6px 0px",
              letterSpacing: 1,
            }}
          >
            <Typography varient="p">Sweetcart</Typography>
            <Typography varient="p">Blinkit</Typography>
          </Box>
          <Typography variant="h4" margin="6px 0px">
            FOR ENTERPRISES
          </Typography>
          <Typography varient="p">Blinkit</Typography>
        </Box>
        <Box sx={{ letterSpacing: 1 }}>
          <Typography variant="h4" margin="6px 0px">
            LEARN MORE
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "6px 0px",
              letterSpacing: 1,
            }}
          >
            <Typography varient="p">Sweetcart</Typography>
            <Typography varient="p">Blinkit</Typography>
            <Typography varient="p">Finding India</Typography>
            <Typography varient="p">Hyperpure</Typography>
          </Box>
        </Box>
      </StyleToolbar>
    </Box>
  );
};

export default Footer;
