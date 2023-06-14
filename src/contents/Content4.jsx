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
const Content4 = () => {
  return (
    <>
      <Top>
        <Box sx={{ flex: {md:"1.55",sm:"1.7",xs:"4"}, padding: {md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}, }}>
          <Typography sx={{ fontSize: "10px" }}>
            INDULGENCE AT ITS FINEST
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Dining & Bars</Typography>
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
          <Box>
            <Button
              sx={{
                padding: "5px 10px",
                backgroundColor: "#000",
                borderRadius: "0px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex:{md:"2",sm:"2",},
            background: `url("https://images.pexels.com/photos/4917176/pexels-photo-4917176.jpeg?auto=compress&cs=tinysrgb&w=600") center/cover no-repeat`,
            height: "400px",
            width:"100%"
          }}
        />
      </Top>
      <Middle>
        <Box
          sx={{
            flex:{md:"2",sm:"2"},
            background: `url("https://images.pexels.com/photos/6702943/pexels-photo-6702943.jpeg?auto=compress&cs=tinysrgb&w=600") center/cover no-repeat`,
            height: "400px",
            width:"100%"
          }}
        />
        <Box sx={{flex: {md:"1.7",sm:"1.7",xs:"4"}, padding: {md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}, }}>
          <Typography sx={{ fontSize: "10px" }}>
            LUXURIOUS EXPERIENCE
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Wellness & SPA</Typography>
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
          <Box>
            <Button
              sx={{
                padding: "5px 10px",
                backgroundColor: "#000",
                borderRadius: "0px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
      </Middle>
      <Bottom>
        <Box sx={{flex: {md:"1.55",sm:"1.7",xs:"4"}, padding: {md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}, }}>
          <Typography sx={{ fontSize: "10px" }}>
          INDULGENCE AT ITS FINEST
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Meetings & Events</Typography>
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
          <Box>
            <Button
              sx={{
                padding: "5px 10px",
                backgroundColor: "#000",
                borderRadius: "0px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex:{md:"2",sm:"2"},
            background: `url("https://images.pexels.com/photos/15434151/pexels-photo-15434151.jpeg?auto=compress&cs=tinysrgb&w=600") center/cover no-repeat`,
            height: "400px",
            width:{md:"100%",sm:"100%",xs:"100%"}
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

export default Content4;
