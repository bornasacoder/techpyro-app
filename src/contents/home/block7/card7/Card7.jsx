import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Avatar, Box, Button, Checkbox } from "@mui/material";
import {
  CurrencyRupee,
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));
const MainCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "30px",
  [theme.breakpoints.down("sm")]: {
    dispaly: "flex",
    justifyContent: "center",
  },
}));
export default function Card7({ sliderData }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <MainCard>
      <Card
        sx={{
          maxWidth: { md: "22vw", sm: "30vw", xs: "70vw" },
          borderRadius: "0px",
          backgroundColor: "#F2F5F9",
          position: "relative",
          height: "auto",
          marginBottom: "50px",
          border: "2px solid #F1F1F1",
          "&:hover":{
            boxShadow:"-1px 0px 5px 0px rgba(0,0,0,0.75)"
          }
        }}
      >
        <CardMedia
          component="img"
          image={sliderData.image}
          alt="Paella dish"
          height="180px"
          width="250px"
          sx={{ position: "relative" }}
        />
        <Typography component="span" variant="h4" sx={{margin:"10px",padding:"2px 15px",backgroundColor:"#FFE057",position:"absolute",right:"0",borderRadius:"30px",fontSize:"10px"}}>free</Typography>
        <Box
          sx={{
            height: "60px",
            width: "60px ",
            position: "absolute",
            top: "150px",
            left: "15px",
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: "#FFFFFF",
            boxShadow: "1px 0px 5px 0px rgba(0,0,0,0.10)",
          }}
        >
          <Avatar
            src={sliderData.image1}
            sx={{
              borderRadius: "5px!important",
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
        <Box sx={{padding:"40px 15px",height:"100px",color:"blue"}}>
          <Typography
            variant="subtitle"
            sx={{
              fontWeight: "600",
            }}
          >
            {sliderData.tagline}
          </Typography>
          <br/>
          <Typography
            sx={{
              fontWeight: "600",
              color:"#898989",
            }}
          >
            {sliderData.tagline1}
          </Typography>
          </Box>
        <Box sx={{padding:"40px 15px 10px"}}>
          <Typography
            variant="subtitle"
            sx={{
              fontWeight: "600",
            }}
          >
           COURSE
          </Typography>
          </Box>
      </Card>
    </MainCard>
  );
}
