import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor:"#FFFFFF",
    padding: "58px 25px 58px 90px ",
  
    [theme.breakpoints.down("sm")]: {
      padding: "58px 20px ",
},
  
    gap: 2,
  }));
  const Item = styled(Paper)(({ theme }) => ({
    borderRadius: "0px!important",
    boxShadow: "none!important",
    textAlign: "center",
    backgroundColor:"#FFFFFF!important",
    fontSize: "18px",
    //   [theme.breakpoints.down("sm")]: {
    //     width: "150px",
    //   },
  }));
export default function Content6() {
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
            fontSize: { md: "48px", sm: "50px", xs: "18px" },
            fontWeight: "500",
          }}
        >
        Trendy Categories On Top Offers
        </Typography>
        <br></br>
       
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
          <Grid item xs={6} sm={4} md={3} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: {md:"220px",sm:"150px",xs:"130px"},
               width: {md:"220px",sm:"150px",xs:"130px"},
                borderRadius: "50%!important",
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/Category/Desktop/SweatersSweatshirts.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            <Item sx={{}}>
              
              <Typography
                sx={{  
             fontSize:{md:"18px",sm:"16px",xs:"14px"}}}
              >
                Sweaters & Sweatshirts
              </Typography>
              
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                 height: {md:"220px",sm:"150px",xs:"130px"},
                width: {md:"220px",sm:"150px",xs:"130px"},
                borderRadius: "50%!important",
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/Category/Desktop/Denims-Woman.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            <Item sx={{}}>
              
              <Typography
                sx={{fontSize:{md:"18px",sm:"16px",xs:"14px"}, }}
              >
               Women's Dresses
              </Typography>
              
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                 height: {md:"220px",sm:"150px",xs:"130px"},
                width: {md:"220px",sm:"150px",xs:"130px"},
                borderRadius: "50%!important",
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/Category/Desktop/FusionWear.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            <Item sx={{}}>
              
              <Typography
                sx={{ 
               fontSize:{md:"18px",sm:"16px",xs:"14px"}}}
              >
               Fusion Wear
              </Typography>
              
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                 height: {md:"220px",sm:"150px",xs:"130px"},
                width: {md:"220px",sm:"150px",xs:"130px"},
                borderRadius: "50%!important",
                background: `url(${"https://images.pexels.com/photos/1580270/pexels-photo-1580270.jpeg?auto=compress&cs=tinysrgb&w=600"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            <Item sx={{}}>
              
              <Typography
                sx={{fontSize:{md:"18px",sm:"16px",xs:"14px"},}}
              >
                Stunning Dresses
              </Typography>
              
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                 height: {md:"220px",sm:"150px",xs:"130px"},
                width: {md:"220px",sm:"150px",xs:"130px"},
                borderRadius: "50%!important",
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/Category/Desktop/Tracks.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            <Item sx={{}}>
              
              <Typography
                sx={{fontSize:{md:"18px",sm:"16px",xs:"14px"}}}
              >
                Kids Tracks
              </Typography>
              
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                 height: {md:"220px",sm:"150px",xs:"130px"},
                width: {md:"220px",sm:"150px",xs:"130px"},
                borderRadius: "50%!important",
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/Category/Desktop/Jacket-Men.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            <Item sx={{}}>
              
              <Typography
                sx={{ 
               fontSize:{md:"18px",sm:"16px",xs:"14px"},}}
              >
                Men's Jackets
              </Typography>
              
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                 height: {md:"220px",sm:"150px",xs:"130px"},
                width: {md:"220px",sm:"150px",xs:"130px"},
                borderRadius: "50%!important",
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/Category/Desktop/TShirts.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            <Item sx={{}}>
              
              <Typography
                sx={{ 
                fontSize:{md:"18px",sm:"16px",xs:"14px"}, }}
              >
                Trendy T-shirts
              </Typography>
              
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                 height: {md:"220px",sm:"150px",xs:"130px"},
                width: {md:"220px",sm:"150px",xs:"130px"},
                borderRadius: "50%!important",
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/Category/Desktop/Denims-Men.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            <Item sx={{}}>
              
              <Typography
                sx={{ 
              fontSize:{md:"18px",sm:"16px",xs:"14px"}}}
              >
                Men's Denims
              </Typography>
              
            </Item>
          </Grid>
          
         
          

          
        </Grid>
      </Box>
    </StyleToolbar>
  )
}
