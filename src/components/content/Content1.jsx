import { Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
const StyleToolbar = styled(Box)(({ theme }) => ({
  bgcolor: "#F4F4F4",
  padding: "68px 92px ",
  // [theme.breakpoints.down("sm")]: {

  //   // left:'50px',
  //   padding: "68px 42px ",
  // },
  // display: "flex",
  // justifyContent:"space-between",
  gap: 2,
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  textAlign: "center",
  // bgcolor:"none!important",
  backgroundColor:"#F4F4F4!important",
  //   padding:"20px 0px!important",
  fontSize: "18px",
  "&:hover": {
    opacity: "0.3",
    bgcolor:"black"
  },
  width:{md:"60%!important",sm:"80%!important",xs:"100%!important"}
  //   [theme.breakpoints.down("sm")]: {
  //     width: "150px",
  //   },
}));
export default function Content1() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ padding: "36px 0px 28px" }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: "0px 0px 26px",
            letterSpacing: "4px",
            textAlign: "center",
            fontSize: { md: "48px", sm: "35px", xs: "30px" },
            fontWeight:'600',
            width:{md:"60%",sm:"80%",xs:"100%"}
          }}
        >
          CINNAMON DEMOS
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#F4F4F4!important",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          sx={{
            bgcolor: "#F4F4F4",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/gridbg1.jpg"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>SplitMenu</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/gridbg2.jpg"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Left Menu</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/gridbg3.jpg"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Center Menu</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/gridbg4.jpg"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Boxed W/O Social Header</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/gridbg6.jpg"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>One Page</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/gridbg7.jpg"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Vidio Page</Item>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={4}>
            <Item sx={{background:`linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/gridbg8.jpg"})
   center/cover no-repeat`,height:"200px"}}>Techpyro</Item>
            <Item>4</Item>
          </Grid> */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <Item sx={{background:`linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/gridbg9.jpg"})
   center/cover no-repeat`,height:"200px"}}>Techpyro</Item>
            <Item>4</Item>
          </Grid> */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <Item sx={{background:`linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/gridbg5.jpg"})
   center/cover no-repeat`,height:"200px"}}>Techpyro</Item>
            <Item>4</Item>
          </Grid> */}
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
