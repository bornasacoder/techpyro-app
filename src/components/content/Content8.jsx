import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // width: "98vw",
  display: "flex",
  // position: "relative",
  justifyContent: "space-between",
  backgroundColor: "#00873D",
  marginTop:'40px',
  // justifyContent:"center",
  alignItems:"center",
  padding: "60px 68px",
  fontFamily: "Trirong",
  [theme.breakpoints.down("md")]: {
    flexDirection:'column',
    padding: "20px 8px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection:'column',
    padding: "20px 8px",
  },
}));
const Image = styled("img")(({ theme }) => ({
  height: "200px",
  width: "200px",
  objectFit:"cover",
  borderRadius:"20px",
  [theme.breakpoints.down("md")]: {
    height:"180px",
  width:'180px',
  },
  [theme.breakpoints.down("sm")]: {
    height:"150px",
  width:'150px',
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height:"55px",
  width:'60px',
  fontSize:"28px",
  variant:"h1",
  borderRadius:"0px",
  textAlign: "center",
  color: "white",
  
}));
export default function Content8() {
  return (
    <StyleToolbar>
      
      <Box display="flex" gap="20px" sx={{}}>
      <Box display="flex" >
        <Typography
          variant="h4"
          sx={{
            fontSize: {md:"35px",sm:'30px',xs:"28px"},
            fontFamily: "Trirong",
            color: "#fff",
            display: "flex",
            alignContent:"center",
            textAlign:"center"
          }}
        >
          Limited
          <br />
          Hour Deals
        </Typography>
      </Box>
      <Box sx={{  }}>
        <Grid container spacing={2} sx={{textAlign:"center",}}>
          <Grid item xs={4} >
          <Box sx={{border:"2px solid #fff",backgroundColor:"red",height:"55px",
  width:'60px',}}>
            <Typography fontSize="28px" color="#fff">07</Typography>
            </Box>
            <Typography color="#fff">HRS</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{border:"2px solid #fff",backgroundColor:"#404040",height:"55px",
  width:'60px',}}>
            <Typography fontSize="28px" color="#fff">40</Typography>
            </Box>
            <Typography color="#fff">MINS</Typography>
          </Grid>
          <Grid item xs={4}>
          <Box sx={{border:"2px solid #fff",backgroundColor:"#404040",height:"55px",
  width:'60px',}}>
            <Typography fontSize="28px" color="#fff">55</Typography>
            </Box>
            <Typography color="#fff">SECS</Typography>
          </Grid>
         
        </Grid>
      </Box>
      </Box>
      <Box>
        <br/>
        <br/>
      <Box sx={{display:"flex",gap:{md:'20px',sm:"15px",xs:"5px"},justifyContent:"center"}}>
        <Box >
         <Image src="https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/FlashSale/21st/3-12/SweatersSweatshirts.jpg?q=80&auto=format" />
         </Box>
         <Box>
        <Image src="https://imagescdn.pantaloons.com/static/brand/pantaloons/production/FashionForNation/Unisex/FlashSale/21st/3-12/FirstTimeDeal.jpg?q=80&auto=format" />
        </Box>
    </Box>
    </Box>  
    </StyleToolbar>
  );
}
