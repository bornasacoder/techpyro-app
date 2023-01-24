import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // backgroundColor:"red",
  // padding: "58px 10px 58px 85px ",
  // maxWidth:"100vw",
  backgroundColor:"#FFFFFF",
  display:"flex",
   justifyContent:"center",
   alignItems:"center",
   flexDirection:"column",
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
  backgroundColor:"#F4F4F4!important",
  fontSize: "18px",
 
  width: { md: "60%!important", sm: "80%!important", xs: "100%!important" },
  //   [theme.breakpoints.down("sm")]: {
  //     width: "150px",
  //   },
}));
export default function Content15() {
  return (
    <StyleToolbar>
       <Box
       
        sx={{ padding: "26px 0px 28px", gap:"5px",maxWidth:"75vw"  }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Trirong",
            fontSize: { md: "48px", sm: "35px", xs: "24px" },
            fontWeight: "500",
          }}
        >
        Value Store - Shop Until You Drop
        </Typography>
        <br></br>
       
    
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
                height:{md:"38vh",sm:"30vh",xs:"18vh"},
                width:{md:"35vw",sm:"37vw",xs:"80vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/ValueStore/Desktop/Under399-D.jpg?q=80&auto=format"})
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
                height:{md:"38vh",sm:"30vh",xs:"18vh"},
                width:{md:"35vw",sm:"37vw",xs:"80vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/ValueStore/Desktop/Under699-D.jpg?q=80&auto=format"})
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
                height:{md:"38vh",sm:"30vh",xs:"18vh"},
                width:{md:"35vw",sm:"37vw",xs:"80vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/ValueStore/Desktop/Under999-D.jpg?q=80&auto=format"})
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
                height:{md:"38vh",sm:"30vh",xs:"18vh"},
                width:{md:"35vw",sm:"37vw",xs:"80vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/ValueStore/Desktop/Under1999-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            
          </Grid>
        </Grid>
      </Box>
      </Box>
        

    </StyleToolbar>
  );
}
