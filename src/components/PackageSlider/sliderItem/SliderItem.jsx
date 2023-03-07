import React from "react";
import { styled } from "@mui/styles";
import zIndex from "@mui/material/styles/zIndex";
import { Avatar } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
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
    <Card sx={{margin:"10px", maxWidth: 320 }}>
      <Box position="relative">
        <CardMedia
          component="img"
          alt="green iguana"
          height="190"
          image="https://htmldesigntemplates.com/html/travelin/images/trending/trending3.jpg"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{
            position: 'absolute',
            top: '90%',
            left: '70%',
            display: 'flex',
            alignItems: 'center',
            transform: 'translate(-50%, -50%)',
          }}
        >  
          <DateRangeIcon style={{ marginRight: '8px' }} /> 
          <Typography variant="body1">9daysTours</Typography>
        </Button>
      </Box>
     <CardContent style={{ textAlign: "left" }}>
     <Typography gutterBottom variant="bod1" style={{color:"green"}}  component="div">
    Greece
  </Typography>
  <Typography gutterBottom variant="h5" component="div">
    Santorini, ORIA
  </Typography>
  <Rating name="rating-stars" value={3.5} precision={0.5} readOnly size="small"/>

  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography>
</CardContent>

      <CardActions>
        <Button size="medium">$180</Button>
        < Typography variant='body1' color="grey">| per person</Typography>
      </CardActions>
    </Card>
  );
};

export default SliderItem;
