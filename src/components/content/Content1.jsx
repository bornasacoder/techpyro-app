import {
  Battery0Bar,
  Battery90,
  Bluetooth,
  Cake,
  KebabDining,
  LunchDining,
  SetMeal,
  TouchApp,
  VolumeUp,
  Water,
} from "@mui/icons-material";
import { Box, Button, Grid, Paper, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
// import styled from "styled-components";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#EE8798!important",
  // zIndex:"2",
  color: "#ffffff",
  padding: "48px 42px ",
  // marginTop:"150px",
  [theme.breakpoints.down("md")]: {
    justifyContent:"center",
    padding: "25px 5px ",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent:"center",
      padding: "25px 20px ",
      // marginTop:"95px"
    },
  gap: 2,
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  textAlign: "center",
  fontSize: "18px",
  width: { md: "60%!important", sm: "80%!important", xs: "100%!important" },
}));
const Image = styled("img")(({ theme }) => ({
height: "600px",
width: "550px",
[theme.breakpoints.down("md")]: {
  height: "500px",
  width: "400px",
},
[theme.breakpoints.down("md")]: {
  height: "300px",
  width: "320px",
},
  backgroundColor:"transparent"
}));
export default function Content1() {
  return (
    <StyleToolbar>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={12} sm={6} md={6} sx={{ paddingTop:{md:"30px",sm:"30px",xs:"100px"}}}>
            <Image src="https://img.freepik.com/free-photo/vegetables-herbs-basket_23-2147694078.jpg?size=626&ext=jpg" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} sx={{ paddingTop:{md:"30px",sm:"30px",xs:"100px"}}}>
            <Typography variant="span" sx={{ fontSize: "20px" }}>
              #Action Feature
            </Typography>
            <br />
            <br />
            <br />
            <Typography variant="h1" sx={{ fontSize: {md:"48px",sm:"38px",xs:"28px"},color:"#FC6539" }}>
              Ultimate comfort.
            </Typography>
            <Typography variant="h1" sx={{ fontSize: "68px" }}>
              _____
            </Typography>
            <br />
            <Typography sx={{ fontSize:{md:"28px",sm:"24px",xs:"20px"} }}>
              <Bluetooth />
              Grocery

            </Typography>
            <br />
            <Typography sx={{ fontSize:{md:"28px",sm:"24px",xs:"20px"} }}>
              <Battery90 />
              Fruits
            </Typography>
            <br />
            <Typography sx={{ fontSize:{md:"28px",sm:"24px",xs:"20px"} }}>
              <TouchApp />
              Vegitables
            </Typography>
            <br />
            <Typography sx={{ fontSize:{md:"28px",sm:"24px",xs:"20px"} }}>
              <VolumeUp />
             Eggs
            </Typography>
            <br />
            <Typography sx={{ fontSize:{md:"28px",sm:"24px",xs:"20px"} }}>
              <Water />
              Breads
            </Typography>
            <br />
            <Box>
              <Button
                sx={{

                  backgroundColor: "#FC6539",
                  color: "#ffffff",
                  borderRadius: "40px",
                  padding: "15px 38px",
                  "&:hover": {
                    background: "#000",
                    color: "#FC6539",
                  },
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
