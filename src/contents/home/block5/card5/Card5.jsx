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
  // flexWrap: "wrap",
  justifyContent: "center",
  // gap: "20px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0px",
    padding: "0px",
    justifyContent: "flex-start",
  },
}));
export default function Card5({ sliderData }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <MainCard>
      <Card
        sx={{
          maxWidth: { md: "80vw", sm: "95vw", xs:"100vw" },
          borderRadius: "0px",
          boxShadow: "none",
          backgroundColor: "#F2F5F9",
          position: "relative",
          height: "auto",
        }}
      >
        <CardMedia
          component="img"
          image={sliderData.image}
          alt="Paella dish"
          sx={{ height: { md: "100vh", sm: "38vh", xs: "30vh" },
          maxWidth: {md:"80vw",sm:"90vw",xs:"100vw"}, }}
        />
      </Card>
    </MainCard>
  );
}
