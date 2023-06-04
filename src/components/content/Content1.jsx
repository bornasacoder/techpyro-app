import { Cake, KebabDining, LunchDining, SetMeal } from "@mui/icons-material";
import { Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // bgcolor: "#F4F4F4",
  padding: "38px 42px ",
  // background: `url(${"/images/category/middle2.jpg"})
  //  center/cover no-repeat`,
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
            // fontFamily: "Dancing Script",
            fontSize: { md: "48px", sm: "40px", xs: "28px" },
            fontWeight: "500",
            // color:"red",
            // width: { md: "60%", sm: "80%", xs: "100%" },
          }}
        >
         POPULAR NOW
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
            // justifyContent: "space-between",
            // display: "flex",
            // alignItems: "center",
          }}
          columnSpacing={{ xs: 1, sm: 1, md: 2}}
          //   xs={{xs:12,sm:6,md:4}}
        >
          
          <Grid item xs={12} sm={6} md={4} >
            <Item
              sx={{
                height: "300px", 
   background: `url(${"/images/category/popular1.jpg"})
   center/cover no-repeat`,
  
              }}
            >
              {/* <Cake sx={{ fontSize: "75px", color: "red" }} /> */}
            </Item>
            <br />
            <Item sx={{display:"flex",justifyContent:"center"}}>
              <Typography
              variant="span"
              sx={{ borderBottom:"1px solid #000","&:hover":{
                backgroundColor:"#000",
                color:'#fff'
              }}}
              >
               Tshirt
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Item
              sx={{
                height: "300px",
   background: `url(${"/images/category/popular2.jpg"})
   center/cover no-repeat`,
  
              }}
            >
              {/* <Cake sx={{ fontSize: "75px", color: "red" }} /> */}
            </Item>
            <br />
            <Item sx={{display:"flex",justifyContent:"center"}}>
              
              <Typography
              variant="span"
              sx={{ borderBottom:"1px solid #000" ,"&:hover":{
                backgroundColor:"#000",
                color:'#fff'}}}
              >
               Jeans
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Item
              sx={{
                height: "300px",
   background: `url(${"/images/category/popular3.jpg"})
   center/cover no-repeat`,
  
              }}
            >
              {/* <Cake sx={{ fontSize: "75px", color: "red" }} /> */}
            </Item>
            <br />
            <Item sx={{display:"flex",justifyContent:"center"}}>
              
              <Typography
              variant="span"
                sx={{ borderBottom:"1px solid #000","&:hover":{
                  backgroundColor:"#000",
                  color:'#fff'} }}
              >
               Saree
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
