import { Box, Button, Grid, Paper, styled, Typography, useTheme } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor:"#FFFFFF",
  display:"flex",
   justifyContent:"center",
   alignItems:"center",
   flexDirection:"column",
   [theme.breakpoints.down("md")]: {
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
  },
  [theme.breakpoints.down("sm")]: {
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  textAlign: "center",
  backgroundColor:"#FFFFFF!important",
  fontSize: "18px",
}));
export default function Content4() {
  const theme = useTheme();
  return (
    <StyleToolbar>
     <Box sx={{maxWidth:{md:"80vw",sm:'95vw',xs:"100vw"}}} >
      <Grid container sx={{ display:"flex",gap:"20px",}}>
        <Box display="flex">
        <Grid item xs={6} sm={6} md={6} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               height: {md:'70vh',sm:'50vh',xs:'40vh'},
               width: {md:"40vw",sm:'43vw',xs:"50vw"},
                background: `url(${"https://images.pexels.com/photos/5872364/pexels-photo-5872364.jpeg?auto=compress&cs=tinysrgb&w=600"})
                center/cover no-repeat`,
              }}
           />
        </Grid>
        <Grid item xs={6} sm={6} md={6} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: {md:'70vh',sm:'50vh',xs:'40vh'},
                width: {md:"40vw",sm:'43vw',xs:"50vw"},
                background: `url(${"https://images.pexels.com/photos/3806753/pexels-photo-3806753.jpeg?auto=compress&cs=tinysrgb&w=600"})
                center/cover no-repeat`,
              }}
           />
        </Grid>
        </Box>
        <Grid item xs={12} sm={12} md={12} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               height: {md:'10vh',sm:'6vh',xs:"3vh"},
               width: {md:"80vw",sm:"86vw",xs:"100vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/Strip/Desktop/StripMid-D%20copy.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
           />
        </Grid>
        <Grid item xs={12} sm={12} md={12} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: {md:'85vh',sm:'50vh',xs:'30vh'},
               width: {md:"80vw",sm:"86vw",xs:"100vw"},
                background: `url(${"https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/Banner/Desktop/WomensCasuals-D.jpg?q=80&auto=format"})
                center/cover no-repeat`,
              }}
           />
        </Grid>
      </Grid>
    </Box>
    </StyleToolbar>
  );
}
