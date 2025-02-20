import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Box, Checkbox } from "@mui/material";
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
  justifyContent: "center",
  gap: "20px",
  // padding:"10px 50px"
}));
export default function Card6({ sliderData }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <MainCard>
      <Card
        sx={{
          maxWidth: { md: "60vw", sm: "95vw", xs:"100vw" },
          borderRadius: "0px",
          boxShadow: "none",
          backgroundColor: "#F2F5F9",
          position: "relative",
          height: "auto",
          borderRadius:"10px"
        }}
      >
        {/* <CardHeader sx={{fontStyle:"italic", "& .MuiCardHeader-title":{fontSize:{xs:"13px"}}}} title={sliderData.shopname} subheader="September 14"  /> */}
        <CardMedia
          component="img"
          image={sliderData.image}
          alt="Paella dish"
          sx={{ height: { md: "60vh", sm: "38vh", xs: "28vh" },
          maxWidth: {md:"60vw",sm:"90vw",xs:"100vw"},"&:hover":{
            display:"zoom-in",
          } }}
        />
      </Card>
    </MainCard>
  );
}
