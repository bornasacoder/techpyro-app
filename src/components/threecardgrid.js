import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardForTHREE from './cardforthreeCs';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'lightgray',
    padding: '16px',
  },
});

function THREECARD() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" style={{ fontWeight: 'bold' }}>
      Our plans for competitive exams

      </Typography>
      <Grid container spacing={2}>
        <Grid item  xs={12} sm={12} md={4} lg={4}>
           <CardForTHREE />
        </Grid>
        <Grid item  xs={12} sm={12} md={4} lg={4}>
        <CardForTHREE />
           
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
        <CardForTHREE />
           
        </Grid>
      </Grid>
    </>
  )
};

export default THREECARD;
