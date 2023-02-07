import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BlogCard from './blogcard';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin:"70px"
  },
  heading: {
    fontSize: "200%",
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '30px 0'
  },
  card: {
    width: '30%',
    height: '100%',
    margin: '10px'
  }
});

export default function Blog() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h3">
      MASTERSTUDY BLOG

      </Typography>
   
        
     <Grid container >
  <Grid item lg={4} md={6} sm={9} xs={12}>
    <BlogCard />
  </Grid>
  <Grid item lg={4} md={6} sm={9} xs={12} >
    <BlogCard />
  </Grid>
  <Grid item lg={4} md={6}  sm={9} xs={12}>
    <BlogCard />
  </Grid>
</Grid>
</div>
  )
};