import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor:"#FFFFFF",
  // padding: "58px  85px  ",
  padding: "58px  85px  ",
  backgroundColor:"#FFFFFF",
  // gap:"35px",
  [theme.breakpoints.down("md")]: {
  justifyContent:"center",
  // padding: "25px 25px ",
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent:"center",
    padding: "25px 20px 10px",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  // borderRadius: "!important",
  boxShadow: "none!important",
  fontSize: "18px",
  textAlign: "center",
}));
export default function Content16() {
  return (
    <StyleToolbar>
       <Box
       display="flex"
       justifyContent="center"
       flexDirection="column"
       sx={{ padding: "26px 0px 28px", gap:"5px",  }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Trirong",
            fontSize: { md: "48px", sm: "35px", xs: "20px" },
            fontWeight: "500",
          }}
        >
        Value Store - Shop Until You Drop
        </Typography>
        <br></br>
       
    
      <Box
        display="flex"
        gap={5}
        sx={
          {   
          }
        }
      >
         <Grid
          container
          rowSpacing={4}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
         <Grid item xs={6} sm={6} md={4} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/MoreBrandsForYou/Desktop/People-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
            </Item>
            
          </Grid>
         <Grid item xs={6} sm={6} md={4} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"}, 
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/MoreBrandsForYou/Desktop/ForeverGlam-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            > 
            </Item>
          </Grid>
         <Grid item xs={6} sm={6} md={4} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/MoreBrandsForYou/Desktop/Byford-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
            </Item>
          </Grid>
         <Grid item xs={6} sm={6} md={4} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/MoreBrandsForYou/Desktop/PTJ-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
            </Item>
          </Grid>
         <Grid item xs={6} sm={6} md={4} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/MoreBrandsForYou/Desktop/Ajile-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
            </Item>
          </Grid>
         <Grid item xs={6} sm={6} md={4} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"}, 
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/MoreBrandsForYou/Desktop/YU-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
            </Item>
          </Grid>
        </Grid>
      </Box>
      </Box>
      <Box sx={{display:{md:'flex',sm:"flex",xs:'none'}}}>
       <Grid item xs={12} sm={12} md={12} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "none!important",
                paddingBottom:"none!important",
                height: {md:'10vh',sm:'8vh',},
                width: {md:"90vw",sm:"82vw",},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/Strip/Desktop/StripFooter-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            > 
            </Item>
          </Grid>
          </Box>
    </StyleToolbar>
  );
}
