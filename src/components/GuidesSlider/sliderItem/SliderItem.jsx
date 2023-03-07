import React from "react";
import { styled } from "@mui/styles";
import zIndex from "@mui/material/styles/zIndex";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import  Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const SliderContainer = styled("div")({

  height: "auto",
  paddingLeft: "px",
  backgroundColor:""
  // zIndex:"1"
});
const ImageContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  border: "0.2px solid black",
 
 
});

// const Head = styled("h3")({
//     fontSize: "16px",
//     fontWeight:"500",
//     textAlign:"center",
//     marginBottom:"5px",
//     "@media (max-width: 600px)": {
//        fontSize: "13px",
//        },
// })
// const Para = styled("p")({
//     fontSize:"14px",
//     fontWeight:"600",
//     "@media (max-width: 600px)": {
//         fontSize: "12px",
//         },
// })
const SliderItem = ({ posterLinks }) => {
  console.log(posterLinks);
  return (
    
    <Card sx={{ maxWidth: 280 , margin:"10px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image="https://htmldesigntemplates.com/html/travelin/images/team/img1.jpg"
          alt="green iguana"
        />
        <CardContent style={{backgroundColor:"grey"}}>
          <Typography gutterBottom variant="h5" component="div">
            Hukes Pele
          </Typography>
          <Typography variant="subheading1" color="text.secondary">
            Supervisor
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     
  );
};

export default SliderItem;
