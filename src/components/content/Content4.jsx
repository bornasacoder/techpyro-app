import { ArrowForward, Shop, ShoppingCart } from "@mui/icons-material";
import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import React from "react";
// import styled from 'styled-components';
const StyleToolbar = styled(Box)(({ theme }) => ({
  // bgcolor: "#FFFFFF!important",
  padding: "68px 38px ",
  // marginTop:"50px",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
  background: `url(${"https://img.freepik.com/free-photo/woman-pushing-shopping-cart-shelves-supermarket_342744-1128.jpg?size=626&ext=jpg"})
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
      <Box  sx={{width:{md:"50%",sm:'100%',sx:"100%"},marginTop:"30px"}}>
        <Typography fontSize="20px">#Feel The Rhytham </Typography>
        <Typography
          variant="h1"
          sx={{color:"#FC6539", fontSize: { md: "58px", sm: "38px", xs: "28px" } }}
          data-aos="fade-left" >
          A grocery with advanced features ,
          <br />
          such as internet connectivity
        </Typography>
        <br/>
        <Typography
          sx={{
            // fontFamily: "Dancing Script",
            fontSize: { md: "20px", sm: "18px", xs: "14px" },
            color: "#EDE1D7",
          }}
        >
          New pullover hoodies and t-shirts in divine color pairings. With this
          Yard Love capsule, Reebok pledges to make a donation to UNCF (The
          United Negro College Fund).
        </Typography>
        <br/>
        <Box display="flex">
          <Button
          endIcon={<ShoppingCart/>}
            sx={{
              // border: "3px solid #000",
              background: "#000",
              color: "#FC6539",
              borderRadius: "40px",
              fontSize:"20px",
              padding:"15px 38px",
              "&:hover": {
                backgroundColor: "#FC6539",
                color: "#ffffff",
              },
              // display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            Explore More
          </Button>
        </Box>
      </Box>
    </StyleToolbar>
  );
}
