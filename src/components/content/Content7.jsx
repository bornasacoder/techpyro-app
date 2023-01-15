import { Campaign } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "red",
  padding: "48px 58px ",
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
          flexDirection: { md: "row", sm: "column", xs: "column" },
          textAlign: "center",
        }}
      >
         <Box data-aos="fade-right">
          <Campaign sx={{ fontSize: "100px" }} />
          </Box> 
         <Box>
        <Box sx={{display:{md:"flex",sm:"block",xs:"block"}}}>
          <Typography
            sx={{
              color: "white",
              fontSize: {md:'68px',sm:"48px",xs:"30px"},

              fontFamily: "Dancing Script",
              
            }}
          >
            Special Promotion For this
           
          </Typography>
          <Typography
              sx={{
                color: "black",
                fontSize: {md:'68px',sm:"48px",xs:"30px"},
                fontFamily: "Dancing Script",
              }}
            >
              Month!
            </Typography>
        </Box>
          <Typography  sx={{ color:"white",fontSize: {md:'25px',sm:"18px",xs:"14px"},}}>
            Come with more than 8 people get 20% off. Bring all your friends
            here!
          </Typography>
          </Box> 
          <Box data-aos="fade-right">
          <Campaign sx={{ fontSize: "100px" }} />
          </Box> 
      </Box>
    </StyleToolbar>
  );
}
