import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // backgroundColor:"red",
  padding: "58px  85px  ",
  backgroundColor:"#FFFFFF",
  [theme.breakpoints.down("md")]: {
  justifyContent:"center",
  padding: "25px 5px ",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent:"center",
    padding: "25px 20px 10px ",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  // borderRadius: "!important",
  boxShadow: "none!important",
  textAlign: "center",
  fontSize: "18px",
}));
export default function Content12() {
  return (
    <StyleToolbar>
       <Box
        display="flex"
        justifyContent="center"
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
        Hot Deals On Top Brands
        </Typography>
        <br></br>
       
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={5}
        sx={
          {   
          }
        }
      ><Grid
          container
          rowSpacing={8}
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
                // borderRadius: "50%!important",
                height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"},
               
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/HotDealsOnBrands/Desktop/AllenSolly-D.jpg?q=80&auto=format"})
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
                // borderRadius: "10px!important",
                height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"},
               
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/HotDealsOnBrands/Desktop/Spykar-D.jpg?q=80&auto=format"})
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
                // borderRadius: "50%!important",
              height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"},
               
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/HotDealsOnBrands/Desktop/Levis-D.jpg?q=80&auto=format"})
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
                // borderRadius: "50%!important",
                height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"},
               
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/HotDealsOnBrands/Desktop/VH-D.jpg?q=80&auto=format"})
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
                // borderRadius: "50%!important",
                height:{md:'40vh',sm:'35vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"},
               
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/HotDealsOnBrands/Desktop/Celio-D.jpg?q=80&auto=format"})
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
                // borderRadius: "50%!important",
                height:{md:'40vh',sm:'40vh',xs:"25vh"},width:{md:"25vw",sm:'30vw',xs:"40vw"},
               
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/HotDealsOnBrands/Desktop/PeterEngland-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
            </Item>
          </Grid>
        </Grid>
      </Box>

        

    </StyleToolbar>
  );
}
