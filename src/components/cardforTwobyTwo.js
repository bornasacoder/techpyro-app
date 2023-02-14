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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const useStyles = makeStyles({
  cardContent: {
    marginRight: '1.5625vw',
  },
  cardActions: {
    justifyContent: 'space-between',
    marginLeft: "7.8125vw"
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '0.390625vw',
    borderRadius: '0.390625vw',
    marginLeft: "5.46875vw",
    marginTop: '1.5625vw',
     
  },
  title: {
    flexGrow: 1,
     fontWeight: "bolder", 
     color: "blueviolet",
      
     
  },
  title1: {
    flexGrow: 1,
     fontWeight: "bolder", 
     color: "white",
 
  },
});
export default function CardForTFT() {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Paper style={{ margin: "3.125vw" }}>
  <div className={classes.paper}>
    <Button variant="outlined" color="secondary" className={classes.button}>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <ArrowCircleUpRoundedIcon sx={{ fontSize: { xs: 25, md: 35 }, color: "blue" }} />
      </IconButton>
      <Typography
        variant="h6"
        className={classes.title}
        sx={{ fontSize: { xs: 20, sm: 25, md: 30 }, fontWeight: "bolder", color: "blueviolet" }}
      >
        Toppr
      </Typography>
    </Button>
    <Button variant="contained" color="secondary" className={classes.button}>
      <Typography
        variant="h4"
        className={classes.title1}
        sx={{ fontSize: { xs: 25, sm: 30, md: 35 }, fontWeight: "bolder", color: "white" }}
      >
        learning app
      </Typography>
    </Button>
  </div>

  <Card
    sx={{
      backgroundColor: "white",
      margin: { xs: "30px", sm: "50px", md: "80px" },
      marginTop: "0px",
    }}
  >
    <CardMedia
      sx={{ height: 200 }}
      image="https://static-cf.toppr.com/marketing/6c448a3/images/home/productLearnNew@2x.png"
      title="green iguana"
    />
    <CardContent className={classes.cardContent}>
      <Typography
        style={{ fontWeight: "bold" }}
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontSize: { xs: 25, sm: 35, md: 40 } }}
      >
        Complete learning app
      </Typography>
      <Typography
        style={{ color: "blueviolet", fontWeight: "bold" }}
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontSize: { xs: 25, sm: 35, md: 40 } }}
      >
        for school and exams
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}>
        Class 5-12
      </Typography>
    </CardContent>

    <CardActions className={classes.cardActions}>
      <Button color="secondary" size="">
        Explore------>
      </Button>
    </CardActions>
  </Card>
</Paper>

  );
}