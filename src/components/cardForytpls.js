import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cardimage from "./images/cardimage.png"

export default function CardForYTS() {
  return (
    <Card  >
      <CardMedia
        sx={{ height: 300 }}
        image="https://i.pinimg.com/originals/af/f4/78/aff478f12d370b8506ec4ab70efa3633.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          22 Boards
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Toppr caters to students across the country from all major boards
          including CBSE, ICSE, IGCSE and state boards like Maharashtra,
          Karnataka, Madhya Pradesh, Rajasthan, UP, West Bengal and many others.
        </Typography>
      </CardContent>
    </Card>
  );
}
