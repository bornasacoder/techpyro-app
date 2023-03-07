import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MYCard() {
  return (
    <Card sx={{ maxWidth: 280 }}>
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
}