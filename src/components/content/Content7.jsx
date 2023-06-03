import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  background: `url(${"/images/category/shop1.webp"})
         center/cover no-repeat`,
  padding: "28px 58px ",
  display:"flex",
  justifyContent:"center"
}));
export default function Content7() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        justifyContent="center"
        gap={5}
        sx={{
          flexDirection: { md: "column", sm: "column", xs: "column" },
          textAlign: "center",
        }}
      >
         {/* <Box data-aos="fade-right">
          <Campaign sx={{ fontSize: "100px" }} />
          </Box>  */}
         <Box>
        <Box sx={{ display:"flex", justifyContent:"center",}}>
          <Typography
            sx={{
              color: "white",
              fontSize: {md:'48px',sm:"38px",xs:"30px"},
              // fontFamily: "Dancing Script",
              
            }}
          >
            GET THE LATEST ON MENU, LOCATION
          </Typography>
        </Box>
          <Typography  sx={{ color:"white",fontSize: {md:'25px',sm:"18px",xs:"14px"},}}>
            Come with more than 8 people get 20% off. Bring all your friends
            here!
          </Typography>
          </Box> 
          <Box >
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
