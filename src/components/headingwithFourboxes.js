import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button, Icon } from '@material-ui/core';
import FlagIcon   from '@mui/icons-material/Flag';
const cards = [
  {
    id: 1,
    icon: 'FlagIcon style={{fontSize:"60p"}}',
    heading: 'Card 1',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '#',
  },
  {
    id: 2,
    icon: 'account_circle',
    heading: 'Card 2',
    paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    id: 3,
    icon: 'settings',
    heading: 'Card 3',
    paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '#',
  },
  {
    id: 4,
    icon: 'info',
    heading: 'Card 4',
    paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    link: '#',
  },
];

const MyCardsWithHeading = () => {
  return (
    <div style={{margin:"8vw"}}>
      <Typography variant="h2"  style={{fontWeight:"bold"}} component="h1" gutterBottom>
      Find Travel Perfection
      </Typography>
      <Typography variant="subtitle1" component="h2" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </Typography>
      <Grid container spacing={2}>
       
          <Grid item  style={{margin:"30px"}} lg={2}>
            <Card>
            <Icon fontSize="large">  <FlagIcon style={{fontSize:"60px"}}/></Icon>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                Card
                </Typography>
                <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" style={{marginLeft:"35px"}} href="">
   

100+ Reviews
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item  style={{margin:"30px"}} lg={2}>
            <Card>
            <Icon fontSize="large">  <FlagIcon style={{fontSize:"60px"}}/></Icon>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                Card
                </Typography>
                <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" style={{marginLeft:"35px"}} href="">
                100+ Reviews

                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item  style={{margin:"30px"}} lg={2}>
            <Card>
            <Icon fontSize="large">  <FlagIcon style={{fontSize:"60px"}}/></Icon>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                Card
                </Typography>
                <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" style={{marginLeft:"35px"}} href="">
                100+ Reviews
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item  style={{margin:"30px"}} lg={2}>
            <Card>
            <Icon fontSize="large">  <FlagIcon style={{fontSize:"60px"}}/></Icon>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                Card
                </Typography>
                <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" style={{marginLeft:"35px"}} href="">
                100+ Reviews
                </Button>
              </CardActions>
            </Card>
          </Grid>
      </Grid>
    </div>
  );
};

export default MyCardsWithHeading;