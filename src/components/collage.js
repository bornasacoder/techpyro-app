import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  heading: {
    fontWeight: 'bold',
    marginBottom:"20px"
    
  },
 
 
  card: {
    height:"20vw" ,
    backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5b0eb59df793928fa7f488ff/1536780543743-TZT0SJMRKV5LUOOY8FS0/Industryyyy.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    margin:"20px",
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  cardButton: {
    marginTop: '2rem',
    backgroundColor: '#FFF',
    color: '#000',
    fontWeight: 'bold',
  },
});

const Collage = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.heading} variant="h2">Explore Top Destinations
</Typography>
      <Typography   variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</Typography>
      <Grid container spacing={2}>
        {[1, 2, 3, 4].map((id) => (
          <Grid key={id} item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.cardTitle} variant="h5">Card {id}</Typography>
                <Button className={classes.cardButton} variant="contained">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Collage;
