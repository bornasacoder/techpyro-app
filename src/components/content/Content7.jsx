import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "28px 58px ",
  display: "flex",
  justifyContent: "center",
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
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                color: "#FC6539",
                fontSize: { md: "48px", sm: "38px", xs: "30px" },
                // fontFamily: "Dancing Script",
              }}
            >
              Deal Collection
            </Typography>
          </Box>
          <Typography sx={{ fontSize: { md: "25px", sm: "18px", xs: "14px" } }}>
            There are many variations of passages of Lorem
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{
            width: {md:"60vw",sm:"70vw",xs:"90vw"},
            height:{md:"100px",sm:"90px",xs:"85px"},
            boxShadow: " 5px 5px 5px 5px #888888",
           justifyContent:"center",
           alignItems:"center",
            gap:{md:"30px",sm:"20px",xs:"15px"}
          }}
        >
          <Box display="flex" alignItems="flex-end">
          <Typography variant="h1"sx={{fontSize:{md:"48px",sm:"40px",xs:"24px"}}}>0-60</Typography>
          <Typography>Day</Typography>
          </Box>
          <Box  display="flex" alignItems="flex-end">
          <Typography variant="h1"sx={{fontSize:{md:"48px",sm:"40px",xs:"24px"}}}>07</Typography>
          <Typography>Hrs</Typography>
          </Box>
          <Box display="flex" alignItems="flex-end">
          <Typography variant="h1"sx={{fontSize:{md:"48px",sm:"40px",xs:"24px"}}}>33</Typography>
          <Typography>Mins</Typography>
          </Box>
          <Box display="flex" alignItems="flex-end">
          <Typography variant="h1"sx={{fontSize:{md:"48px",sm:"40px",xs:"24px"}}}>57</Typography>
          <Typography>Secs</Typography>
          </Box>
         
         
        </Box>
       
      </Box>
    </StyleToolbar>
  );
}
