import React, { useState } from "react";
import NavButton from "components/navbar/navButton/NavButton";
import {
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";



const NavBar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems:"space-between",
  gap: "50px",
  flexDirection: "column",
  height: "100vh",
  paddingBottom: "15px",
  color: "white",
  padding:"10px 20px",
  [theme.breakpoints.down("sm")]: {
    height: "120vh",
  },
  
  background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)
  ),url(${"https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
}));

export default function Navbar() {
  return (
    // <Box>
    <NavBar>
      <Box display="flex" flexDirection="column"sx={{gap:{md:'5px',sm:'20px',xs:'60px'}}}>
        {/* <Content /> */}
        <NavButton/>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Typography  sx={{ fontSize: {md:"68px",sm:"50px",xs:"30px"}, fontFamily: "Dancing Script",fontWeight:"200" }}>
        Best services available for the best <br/> customers
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button
            sx={{
              // border: "3px solid #000",
              background: "red",
              color: "white",
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
    </NavBar>
    // </Box>
  );
}
