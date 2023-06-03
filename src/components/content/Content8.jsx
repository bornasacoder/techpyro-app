import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  width: "98vw",
  // background: `url(${"/images/category/shop1.webp"})
  //        center/cover no-repeat`,
  // padding: "28px 58px ",
  display: "flex",
  position: "relative",
  justifyContent: "center",
}));
export default function Content8() {
  return (
    <StyleToolbar>
      <video
        width="100%"
        height="500px"
        style={{ position: "absolute", zIndex: "-1", objectFit: "cover" }}
        src="https://player.vimeo.com/external/455794687.sd.mp4?s=827075b918431fae219c48c7c58d9509b7c75815&profile_id=164&oauth2_token_id=57447761"
        autoPlay
        loop
        muted
      ></video>
      {/* <iframe src="https://player.vimeo.com/video/737012493?h=75a3842fee&autoplay=1" style={{position:'absolute', top:0, left:0, width:'100%',height:'100%'}} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
      <Box
        gap={5}
        sx={{
          flexDirection: { md: "column", sm: "column", xs: "column" },
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "500px",
        }}
      >
        {/* <Box data-aos="fade-right">
          <Campaign sx={{ fontSize: "100px" }} />
          </Box>  */}
          
        <Box>
        <Typography variant="h3"  sx={{
                color: "red",
                fontSize: { md: "28px", sm: "25px", xs: "20px" },
                // fontFamily: "Dancing Script",
              }}
        >TECHPYRO UNLOCK</Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontSize: { md: "48px", sm: "38px", xs: "30px" },
                // fontFamily: "Dancing Script",
              }}
            >
              FREE SHIPPING,
              <br />
              EXCLUSIVES &
              <br />
              MORE
            </Typography>
          </Box>
          <Typography
            sx={{
              display:"flex",
              justifyContent:"center",
              color: "white",
              fontSize: { md: "25px", sm: "18px", xs: "14px" },
              textAlign:"center",
              alignItems: "center",
            }}
          >
             You must remember when you taste!. Now get
            <br/>
            rewarded for it
            with a loyalty program that gets you.
          </Typography>
        </Box>
        <Box sx={{padding:"0px 3px 3px 0px",borderBottom:'2px solid #000',borderRight:"2px solid #000",
      }}>
          <Button
            endIcon={<ArrowForward />}
            sx={{
          
              background: "white",
              color: "#000",
              borderRadius: "0px",
              // boxShadow: "0 3px 3px rgba(15,12, 10, 1)",
              "&:hover": {
                backgroundColor: "#000",
                color: "#ffffff",
              },
              // display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            Join Now
          </Button>
        </Box>
        {/* <Box data-aos="fade-right">
          <Campaign sx={{ fontSize: "100px" }} />
          </Box>  */}
      </Box>
    </StyleToolbar>
  );
}
