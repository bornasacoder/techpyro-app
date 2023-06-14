import { FiberManualRecord } from "@mui/icons-material";
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
const Dining1 = () => {
  return (
    <StyleToolbar>
      <Box sx={{ flex: "3" }}>
        <Typography sx={{ fontSize: "10px", color: "#9C9E9C" }}>
        THE DINING EXPERIENCE
        </Typography>
        <Typography sx={{ fontSize: "33px" }}>
        Where Every Taste Is a Journey
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
      <Box sx={{ flex: "1",backgroundColor:"#F5F5F5",padding:"20px 20px",textAlign:"center",flexDirection:"column" }}>
        <Typography sx={{display:"flex",alignItems:"center",gap:"20px"}}>
          <FiberManualRecord sx={{fontSize:"10px"}}/>
        Bar-B-Q and/or picnic area
        </Typography>
        <br/>
        <Typography sx={{display:"flex",alignItems:"center",gap:"20px"}}>
          <FiberManualRecord sx={{fontSize:"10px"}}/>
          Room service, 24-hour
        </Typography>
        <br/>
        <Typography sx={{display:"flex",alignItems:"center",gap:"20px"}}>
          <FiberManualRecord sx={{fontSize:"10px"}}/>
          Restaurants on-site
        </Typography>
      </Box>
    </StyleToolbar>
  );
};

export default Dining1;
