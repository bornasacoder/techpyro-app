import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardFORTHEEBYTWO from './cardforthreebytwosec';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:" 2vw"
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(2, 0),
    color: "grey"
  },
}));

export default function ThreeIntoTwoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.heading}>
      India's most awarded edtech platform

      </Typography>
      <Grid container spacing={2}>
        <Grid item  lg={4}>
           <CardFORTHEEBYTWO />
        </Grid>
        <Grid item  lg={4}>
           <CardFORTHEEBYTWO />
        </Grid>
        <Grid item  lg={4}>
           <CardFORTHEEBYTWO />
        </Grid>
        <Grid item  lg={4}>
           <CardFORTHEEBYTWO />
        </Grid>
        <Grid item  lg={4}>
           <CardFORTHEEBYTWO />
        </Grid>
        <Grid item  lg={4}>
           <CardFORTHEEBYTWO />
        </Grid>
         
      </Grid>
    </div>
  );
}
