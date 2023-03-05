import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";



import { Box } from "@mui/material";


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
const MainCard = styled(Box)(({theme})=>({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  gap: "10px",
 
}));
export default function Card1({ sliderData }) {

  return (
    <MainCard>
      <Card sx={{ maxWidth: { md: 250, sm: 220, xs: 150 }, }}>
        <CardHeader sx={{fontStyle:"italic", "& .MuiCardHeader-title":{fontSize:{xs:"13px"}}}} title={sliderData.shopname} subheader="September 14"  />
        <CardMedia
          component="img"
          image={sliderData.image}
          alt="Paella dish"
          sx={{ height: { md: "194", sm: "165", xs: "120" } }}
        />
        <Box
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
        </Box>
        <Box
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
        </Box>
        <Box sx={{ paddingLeft: "13px" ,marginTop:{sx:"6px"},display:{sm:'none',xs:"none"}}}>
          <Typography variant="subtitle" sx={{ fontStyle: "italic" }}>
            {sliderData.tagline}
          </Typography>
        </Box>
        <CardContent
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
        </CardContent>
      </Card>
    </MainCard>
  );
}