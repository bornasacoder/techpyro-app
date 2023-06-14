import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "58px 58px",
  backgroundColor: "#FFFFFF",
  gap:"80px",
  [theme.breakpoints.down('md')]:{
    padding: "58px 20px",
  },
  [theme.breakpoints.down('sm')]:{
    flexDirection:"column",
    padding: "58px 10px",
  }
}));
const Content2 = () => {
  return (
    <StyleToolbar>
      <Box sx={{ flex: "3" }}>
        <Typography sx={{ fontSize: "10px", color: "#9C9E9C" }}>
          BOOK YOUR TRAVEL HOTEL
        </Typography>
        <Typography sx={{ fontSize: "33px" }}>
          In the heart of Amalfi
        </Typography>
        <br />
        <br />
        <Typography sx={{}}>
          Of brilliant syntheses a mote of dust suspended in a sunbeam across
          the centuries a mote of dust suspended in a sunbeam network of
          wormholes the sky calls to us and billions upon billions upon billions
          upon billions upon billions upon billions upon billions. Courage of
          our questions hearts of the stars at the edge of forever realm of the
          galaxies not a sunrise but a galaxyrise the only home we’ve ever
          known.
        </Typography>
      </Box>
      <Box sx={{ flex: "1",backgroundColor:"#F5F5F5",padding:"20px 20px",textAlign:"center" }}>
        <Typography sx={{fontStyle:"italic"}}>
          “We just returned from a six night stay at the Hotel in Sunny Isles
          Beach, Florida. The suite was large, clean and had a beautiful view
          from every window. Staff is really friendly too.”
        </Typography>
        <Image
        src="/ta.png"
        width={60}
        height={60}
        />
      </Box>
    </StyleToolbar>
  );
};

export default Content2;
