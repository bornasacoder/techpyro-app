import { Cake, KebabDining, LunchDining, SetMeal } from "@mui/icons-material";
import { Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // bgcolor: "#F4F4F4",
  padding: "38px 92px ",
  background: `url(${"/images/category/middle2.jpg"})
   center/cover no-repeat`,
  //  backgroundColor: "none!important",
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
  backgroundColor:"#F4F4F4!important",
  // bgcolor:"none!important",
  // backgroundColor: "none!important",
  //   padding:"20px 0px!important",
  fontSize: "18px",
  // "&:hover": {
  //   opacity: "0.3",
  //   bgcolor: "black",
  // },
  width: { md: "60%!important", sm: "80%!important", xs: "100%!important" },
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
        sx={{ padding: "26px 0px 28px",gap:"10px" }}
      >
        <Typography
          sx={{
            // display:"flex",
            margin: "0px 0px 26px",
            letterSpacing: "4px",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: { md: "58px", sm: "50px", xs: "28px" },
            fontWeight: "500",
            color:"red",
            // width: { md: "60%", sm: "80%", xs: "100%" },
          }}
        >
          Our 
        </Typography>
        <Typography  sx={{
            // margin: "0px 0px 26px",
            letterSpacing: "4px",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: { md: "58px", sm: "50px", xs: "28px" },
            fontWeight: "500",
            // width: { md: "60%", sm: "80%", xs: "100%" },
          }}>
          Services
          </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // bgcolor: "#F4F4F4!important",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          sx={{
            // bgcolor: "#F4F4F4",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up">
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                width: "200px",
                borderRadius: "50%!important",
                border: "15px solid lightGray",
                "&:hover": {
                  border: "15px solid red",
  },
              }}
            >
              <SetMeal sx={{ fontSize: "75px", color: "red" }} />
            </Item>
            <br />
            <Item>
              
              <Typography
                variant="h3"
                sx={{ display: "flex", justifyContent: "center", borderRadius: "0px!important",
                boxShadow: "none!important",backgroundColor:"transparent" }}
              >
                MEAL
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-down">
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                width: "200px",
                borderRadius: "50%!important",
                border: "15px solid lightGray",
                "&:hover": {
                  border: "15px solid red",
  },
              }}
            >
              <Cake sx={{ fontSize: "75px", color: "red" }} />
            </Item>
            <br />
            <Item>
              
              <Typography
                variant="h3"
                sx={{ display: "flex", justifyContent: "center" }}
              >
               CAKE
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up">
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                width: "200px",
                borderRadius: "50%!important",
                border: "15px solid lightGray",
                "&:hover": {
                  border: "15px solid red",
  },
              }}
            >
              <LunchDining sx={{ fontSize: "75px", color: "red" }} />
            </Item>
            <br />
            <Item>
              
              <Typography
                variant="h3"
                sx={{ display: "flex", justifyContent: "center", }}
              >
                LUNCH
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-down">
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                width: "200px",
                borderRadius: "50%!important",
                border: "15px solid lightGray",
                "&:hover": {
                  border: "15px solid red",
  },
              }}
            >
              <KebabDining sx={{ fontSize: "75px", color: "red" }} />
            </Item>
            <br />
            <Item>
              
              <Typography
                variant="h3"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                KEBAB DINING
              </Typography>
            </Item>
          </Grid>

          
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
