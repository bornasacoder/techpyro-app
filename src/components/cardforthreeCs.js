import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import  Paper  from '@material-ui/core/Paper';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  cardContent: {
    marginRight: ' ',
  },
  cardActions: {
    justifyContent: 'space-between',
    marginLeft: "60px "
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
   
    borderRadius: '5px',
    marginLeft: " ",
    marginTop: " "
  },
  title: {
    flexGrow: 1,
     fontWeight: "bolder", 
     color: "blueviolet"
     
  },
  title1: {
    flexGrow: 1,
     fontWeight: "bolder", 
     color: "white"
     
  },
});
export default function CardForTHREE() {
    const classes = useStyles();

  return (
    <Card style={{backgroundColor: "white", margin: " ", marginTop: "30px" }}  >

       <Button variant="outlined" color="secondary" className={classes.button}>


          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <ArrowCircleUpRoundedIcon style={{color:"blue", fontSize:"20px"}} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Toppr
          </Typography> </Button>
          <Button variant="contained"color="secondary" className={classes.button}>
          <Typography variant="h4" className={classes.title1}>

            JEE</Typography>
          </Button>

      

      <CardMedia
        sx={{ height: 200 }}
        image="https://static-cf.toppr.com/marketing/6c448a3/images/home/examJEE2x.png"
        title="green iguana"
      />
      <CardContent className={classes.cardContent}>
        
     
        <Typography style={{fontWeight:"bold"}} gutterBottom variant="h5" component="div">
           Complete learning app </Typography><Typography style={{color: "blueviolet",fontWeight:"bold"}} gutterBottom variant="h5" component="div">for school and exams </Typography>
        
      </CardContent>
      
      <CardActions  className={classes.cardActions}>
        <Button color='secondary' size=" 50px"> Explore------></Button>
      </CardActions>
    </Card>
  )
};
