import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
// import "./card1.css"
import Typography from "@mui/material/Typography";

import { Box, Checkbox } from "@mui/material";
import {
  CurrencyRupee,
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
  Loop,
  Opacity,
  Search,
  ShoppingBag,
  ShoppingBagOutlined,
  SlideshowRounded,
} from "@mui/icons-material";
// import zIndex from "@mui/material/styles/zIndex";
import Slider from "@mui/material/Slider";

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
  padding:"0px",
  display: "flex",
  flexWrap: "wrap",
  width:"30vw",
  justifyContent: "space-between",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    width:"120vw",
    marginLeft: "0px",
    padding: "0px",
  },
 
}));

export default function Card1({ sliderData }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <MainCard sx={{}}>
      <Card
        sx={{
          maxWidth: { md: "30vw", sm: "45vw", xs: "80vw" },
          borderRadius: "0px",
          // boxShadow: "none",
          backgroundColor: "#F2F5F9",
          position: "relative",
          height: "auto",
          marginBottom: "50px",
          "&:hover": {
            border: { md: "1px solid #fff", sm: "none", xs: "none" },
          },
        
        }}
      >
        <CardMedia
          component="img"
          image={sliderData.image}
          alt="Paella dish"
          sx={{ height: { md: "60vh", sm: "25vh",xs:"35vh" },
         }}
        />
        <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "#000" }} />}
          />
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignsliderDatas: "center",
            padding: " 5px 16px 5px 16px",
            display: { md: "flex", sm: "flex", xs: "none" },
          }}
        >
          <b> Category: </b>
          {sliderData.category.map((cat) => (
            <Typography
              variant="subtitle"
              sx={{
                color: "green",
                padding: "2px 0px 0px 5px",
                fontSize: "11px",
              }}
              color="text.primary"
            >
              {cat},
            </Typography>
          ))}
        </Box> */}
        {/* <Box
          sx={{
            display: "flex",
            paddingLeft: "16px",
            justifyContent: "flex-start",
            alignsliderDatas: "center",
            gap: "10px",
            marginTop:{xs:"10px"},
            padding:{xs:"5px"}
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", fontWeight: "600" ,  }}
          >
            Rating:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              background: "green",
              color: "white",
              fontSize: "15px",
              fontWeight: "600",
              borderRadius: "10px",
              padding: "2px 4px",
              
            }}
          >
            {sliderData.rating}
          </Typography>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 10px",
          }}
        >
          <Typography
            variant="subtitle"
            sx={{ display: "flex", fontSize: "16px" }}
          >
            Sold:
            <Typography sx={{ color: "#FC6539", fontSize: "16px" }}>
              10
            </Typography>
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ display: "flex", fontSize: "16px" }}
          >
            Avilable:
            <Typography sx={{ color: "#FC6539", fontSize: "16px" }}>
              10
            </Typography>
          </Typography>
        </Box>
        <Box padding="2px 10px">
        <Slider defaultValue={70} sx={{ color: "#FC6539",  }} />
        </Box>
        <Box sx={{ paddingLeft: "10px", marginTop: { sx: "6px" } }}>
          <Typography variant="subtitle" sx={{ fontSize: "18px" }}>
            {sliderData.tagline1}
          </Typography>
        </Box>
        <Box
          sx={{
            paddingLeft: "13px",
            marginTop: { sx: "6px" },
            display: "flex",
            alignItems: "center",
            gap: "3px",
            color: "#FC6539",
          }}
        >
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "600", textDecoration: "line-through" }}
          >
            $130.00
          </Typography>
          <Typography variant="h3" color="#FC6539" >$110.00</Typography>
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
