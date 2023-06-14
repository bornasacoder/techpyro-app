import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const Top = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column"
  }
}));
const Middle = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column-reverse"
      }
}));
const Bottom= styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column"
      }
}));
const Dining2 = () => {
  return (
    <>
      <Middle>
        <Box
          sx={{
            background: `url("https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=600") center/cover no-repeat`,
            height: "400px",
            flex:{md:"2",sm:"2"},
          }}
        />
        <Box sx={{flex: {md:"1.7",sm:"1.7",xs:"4"}, padding: {md:"58px 58px",sm:"58px 20px",xs:"58px 20px"},}} >
          <Typography sx={{ fontSize: "10px" }}>INTERNATIONAL</Typography>
          <Typography sx={{ fontSize: "33px" }}>Lobby bar</Typography>
          <br />
          <br />
          <Typography>
            Of brilliant syntheses a mote of dust suspended in a sunbeam across
            the centuries a mote of dust suspended in a sunbeam network of
            wormholes the sky calls to us and billions upon billions upon
            billions upon billions upon billions upon billions upon billions.
          </Typography>
          <br />
          <br />
         <Typography sx={{fontWeight:"600"}}>Opening Hours: 06:30 to 10:30</Typography>
        </Box>
      </Middle>
      <Top>
        <Box sx={{flex: {md:"1.7",sm:"1.7",xs:"4"}, padding: {md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}, }}>
          <Typography sx={{ fontSize: "10px" }}>
          A PERFECT BEGINNING
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Hotel Breakfast Hall</Typography>
          <br />
          <br />
          <Typography>
            Of brilliant syntheses a mote of dust suspended in a sunbeam across
            the centuries a mote of dust suspended in a sunbeam network of
            wormholes the sky calls to us and billions upon billions upon
            billions upon billions upon billions upon billions upon billions.
          </Typography>
          <br />
          <br />
          <Typography sx={{fontWeight:"600"}}>Opening Hours: 06:30 to 10:30</Typography>
        </Box>
        <Box
          sx={{
            flex:{md:"2",sm:"2"},
            background: `url("https://images.pexels.com/photos/2874780/pexels-photo-2874780.jpeg?auto=compress&cs=tinysrgb&w=600") center/cover no-repeat`,
            height: "400px",
          }}
        />
      </Top>
      <Middle>
        <Box
          sx={{
            flex:{md:"2",sm:"2"},
            background: `url("https://images.pexels.com/photos/5778895/pexels-photo-5778895.jpeg?auto=compress&cs=tinysrgb&w=600") center/cover no-repeat`,
            height: "400px",
          }}
        />
        <Box  sx={{flex: {md:"1.7",sm:"1.7",xs:"4"}, padding: {md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}, }}>
          <Typography sx={{ fontSize: "10px" }}>
          INTERNATIONAL
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>YaYa Bar & Restaurant</Typography>
          <br />
          <br />
          <Typography>
            Of brilliant syntheses a mote of dust suspended in a sunbeam across
            the centuries a mote of dust suspended in a sunbeam network of
            wormholes the sky calls to us and billions upon billions upon
            billions upon billions upon billions upon billions upon billions.
          </Typography>
          <br />
          <br />
          <Typography sx={{fontWeight:"600"}}>Opening Hours: 06:30 to 10:30</Typography>
        </Box>
      </Middle>
      <Bottom>
        <Box  sx={{flex: {md:"1.7",sm:"1.7",xs:"4"}, padding: {md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}, }}>
          <Typography sx={{ fontSize: "10px" }}>
          INDULGENCE AT ITS FINEST
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Amalia Restaurant</Typography>
          <br />
          <br />
          <Typography>
            Of brilliant syntheses a mote of dust suspended in a sunbeam across
            the centuries a mote of dust suspended in a sunbeam network of
            wormholes the sky calls to us and billions upon billions upon
            billions upon billions upon billions upon billions upon billions.
          </Typography>
          <br />
          <br />
          <Typography sx={{fontWeight:"600"}}>Opening Hours: 06:30 to 10:30</Typography>
        </Box>
        <Box
          sx={{
            flex:{md:"2",sm:"2"},
            background: `url("https://images.pexels.com/photos/2104568/pexels-photo-2104568.jpeg?auto=compress&cs=tinysrgb&w=600") center/cover no-repeat`,
            height: "400px",
          }}
        />
      </Bottom>
      <br/>
      <Box sx={{display:"flex",backgroundColor:"#00BFA5",padding:{md:"58px",sm:"58px 20px",xs:"58px 20px"},margin:'0px',justifyContent:"space-between",alignItems:"center",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
        <Typography  sx={{color:"#FFFFFF",fontSize:"22px"}}>Book Your Travel - you could be running your online business by tomorrow.</Typography>
        <br/>
        <Button sx={{color:"#FFFFFF",backgroundColor:"#000",borderRadius:"0px",padding:"10px 10px",fontSize:"18px","&:hover":{
            backgroundColor:"#000"
        }}}>GET STARTED NOW</Button>
      </Box>
    </>
  );
};

export default Dining2;
