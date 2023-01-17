import { ArrowForward } from "@mui/icons-material";
import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import React from "react";
// import styled from 'styled-components';
const StyleToolbar = styled(Box)(({ theme }) => ({
  // bgcolor: "#FFFFFF!important",
  padding: "68px 38px ",
  display: "flex",
  justifyContent: "flex-start",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
  background: `url(${"/images/category/shopheader.jpg"})
         center/cover no-repeat`,
  // [theme.breakpoints.down("md")]: {
  // padding: "68px 20px ",

  //     },
  // // display: "flex",
  // // justifyContent:"space-between",
  // gap: 2,
}));
export default function Content4() {
  const theme = useTheme();
  return (
    <StyleToolbar>
      <Box  sx={{width:{md:"40%",sm:'100%',sx:"100%"}}}>
        <Typography
          variant="h1"
          sx={{color:"#fff", fontSize: { md: "58px", sm: "38px", xs: "28px" } }}
        >
          CELEBRATE THE
          <br />
          YARD
        </Typography>
        <br/>
        <Typography
          sx={{
            // fontFamily: "Dancing Script",
            fontSize: { md: "20px", sm: "18px", xs: "14px" },
            color: "white",
          }}
        >
          New pullover hoodies and t-shirts in divine color pairings. With this
          Yard Love capsule, Reebok pledges to make a donation to UNCF (The
          United Negro College Fund).
        </Typography>
        <br/>
        <Box display="flex">
          <Button
          endIcon={<ArrowForward/>}
            sx={{
              // border: "3px solid #000",
              background: "white",
              color: "#000",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "#000",
                color: "#ffffff",
              },
              // display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            READ MORE
          </Button>
        </Box>
      </Box>
    </StyleToolbar>
  );
}
