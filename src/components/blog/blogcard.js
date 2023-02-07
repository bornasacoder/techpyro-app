import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Divider } from '@material-ui/core';
export default function BlogCard() {
  return (
    
    <Card sx={{ maxWidth: 345,  }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://images.pexels.com/photos/1382728/pexels-photo-1382728.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="green iguana"
      />      <div style={{display:"flex",}}>
      <CardContent maxWidth="15%">
        <Typography gutterBottom variant="h5" component="div">
       < CalendarMonthIcon />
        </Typography>
        <Typography variant="body2" color="text.secondary">
         09/11
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

      </div>
      <Divider />
      <Typography style={{marginLeft:"25px"}}>
        <Button color='secondary' size="small">Posted in: Adverisement</Button></Typography>
      <Typography style={{marginLeft:"25px"}}>

        <Button color='secondary' size="small">Tags: developing, leader, target</Button></Typography>

    </Card>
  )

};