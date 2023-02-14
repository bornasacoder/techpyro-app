import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardForYTS from './cardForytpls';
import Button  from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    
    marginTop: " 3.125vw",
    marginRight: "0.78125vw",
    marginLeft: "0.78125vw",

  },
  flexBox: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      flexDirection:"column",
    },
  },
  cardGrid: {
   
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    
  },
  cardContent: {
    flexGrow: 1,
  },
  typo1: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: '4vw',
    lineHeight: 1.2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      lineHeight: 1.5,
    },
  },
  typo2: {
     
    [theme.breakpoints.down('sm')]: {
      display:"none"
    },
  },
   
}));

export default function TwoFlexBoxesWithThreeCards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flexBox}>
        <div>
          <Typography className={classes.typo1}  variant="h2">
            Built for all boards and exams with widest syllabus coverage
          </Typography>
        </div>
        <div  className={classes.typo2}>
          <Typography style={{fontWeight:"bold"}} variant="h5">
            Your learning needs are unique and we do everything to ensure that
            they are met.
          </Typography>

          <Typography variant="body1">
            Students can chart their own path by creating customised syllabus
            that helps them attain their learning goals. With over 120,000
            syllabus combinations at their disposal to choose from, learning was
            never so easy.
          </Typography>
        </div>
      </div>
      <Grid container className={classes.cardGrid} spacing={4}>
        <Grid item lg={4}>
          < CardForYTS/>
        </Grid>
        <Grid item lg={4}>
          < CardForYTS/>
        </Grid>
        <Grid item lg={4}>
          < CardForYTS/>
        </Grid>
      </Grid>
      <div style={{margin:"40px"}}>
      <Button variant="contained"color="secondary" style={{borderRadius:"15px", fontWeight:"bold"}}  >
        <Typography variant="h5"> GET STARTED-----></Typography>
      </Button>
      </div>
      <div style={{margin:"0.78125vw"}}>
      <iframe  style={{ width: '100%' , height:'54.6875vw'}} src="https://www.youtube.com/embed/IJmcw7XuUQE?list=PLXyIamz14kHVYRPLqhQCbPEmnmZxQJ6iJ" title="Toppr Ad - Friends | Better learning better results | Switch to Soching" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      
    </div>
  );
}
