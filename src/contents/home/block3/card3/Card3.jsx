import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Box, Button, Checkbox } from "@mui/material";
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
    dispaly:"flex",
    justifyContent:"center"
  },
}));
export default function Card1({ sliderData }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <MainCard>
      <Card
        sx={{
          maxWidth: { md: "30vw", sm: "45vw", xs: "70vw" },
          borderRadius: "0px",
          boxShadow: "none",
          backgroundColor: "#F2F5F9",
          position: "relative",
          height: "auto",
          marginBottom: "50px",
          padding: "15px 20px",
          border: "2px solid #F1F1F1",
        }}
      >
    <Box sx={{height:"200px",
    width:'350px'
  }}>
        <Box sx={{
            height: { md: "100%", sm: "80%", xs: "100%" },
            width: { md: "100%", sm: "80%", xs: "60%" },
          //  border:"10px solid #000",
          }}>
        <CardMedia
          component="img"
          image={sliderData.image}
          alt="Paella dish"
          height="100%"
          width="100%"
          sx={{ "&:hover":{
            transform:" scale(1.1)",
            
          },transition:"0.5s all"}}
         />
         </Box>
         </Box>
        <Box sx={{}}>
          <br />
          <Typography
            variant="subtitle"
            sx={{ fontSize: {md:"20px",sm:"20px",xs:"16px"}, fontWeight: "600", "&:hover": {
              color: "#FC6539",
            }, }}
          >
            {sliderData.tagline}
          </Typography>
          <br />
          <br />
          <Typography>20 jan,2023 \ 0 Comments</Typography>
          <br />
          <Typography sx={{ fontSize:{md:"17px",sm:'16px',xs:"14px"} }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            Ratione nulla quaerat modi omnis.....
          </Typography>
        </Box>
        <br />
        <Box>
          <Button
            sx={{
              color: "#000",
              border: "1px solid #C1C1C1 ",
              borderRadius: "0px",
              padding:"10px 25px",
              "&:hover": {
                backgroundColor: "#FC6539",
                color: "#fff",
              },
            }}
          >
            Blog Details
          </Button>
        </Box>
        <Box sx={{ paddingLeft: "13px", marginTop: { sx: "6px" } }}>
          <Typography variant="subtitle" sx={{ fontWeight: "600" }}>
            {sliderData.new}
          </Typography>
        </Box>
        {/* <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            display: { md: "flex", sm: "flex", xs: "none" },
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "20px", fontWeight: "600" }}
          >
            Price:{" "}
          </Typography>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "600", color: "red" }}
            >
              Mrp {sliderData.price.mrp}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "line-through",
                color: "grey",
              }}
            >
              discount {sliderData.price.discount}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                color: "green",
                borderTop: "2px solid #EEEEEE",
              }}
            >
              Rs {sliderData.price.cost}/- only
            </Typography>
          </Box>
        </CardContent> */}
      </Card>
    </MainCard>
  );
}
