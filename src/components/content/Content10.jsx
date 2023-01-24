import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // backgroundColor:"red",
  padding: "58px 10px 58px 90px ",
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
export default function Content10() {
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
        Army of Winter Fashion
        </Typography>
        <br></br>
       
      </Box>
      <Box
        display="flex"
        // justifyContent="center"
        flexDirection="column"
        // gap={5}
        sx={
          {   
          }
        }
      >
         <Grid
          container
          rowSpacing={2}
          sx={{
            // bgcolor: "#F4F4F4",
            // justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            // columnSpacing:{ xs: 1, sm: 2, md:"1 !impportant"},
           
          }}
        >
         <Grid item xs={12} sm={6} md={6} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "50%!important",
                height:{md:"50vh",sm:"50vh",xs:"23vh"},
                width:{md:"40vw",sm:"45vw",xs:"90vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/WinterEssentials/Desktop/PrintedWinterWear-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            
          </Grid>
         <Grid item xs={12} sm={6} md={6} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "10px!important",
                height:{md:"50vh",sm:"50vh",xs:"23vh"},
                width:{md:"40vw",sm:"45vw",xs:"90vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/WinterEssentials/Desktop/KidsWinterWear-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            
          </Grid>
         <Grid item xs={12} sm={6} md={6} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "50%!important",
                height:{md:"50vh",sm:"50vh",xs:"23vh"},
                width:{md:"40vw",sm:"45vw",xs:"90vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/WinterEssentials/Desktop/Jackets-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            
          </Grid>
         <Grid item xs={12} sm={6} md={6} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "50%!important",
                height:{md:"50vh",sm:"50vh",xs:"23vh"},
                width:{md:"40vw",sm:"45vw",xs:"90vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/WinterEssentials/Desktop/SweatersSweatshirts-D.jpg?q=80&auto=format"})
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
