import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import CardForTFT from './cardforTwobyTwo';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
     fontWeight: "bold"
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: '5px',
  },
   Button: {
    color: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: 'black',
    marginLeft: '10px',
    marginRight: '10px',
    padding: '5px',
  },
  buttonGroup: {
    display: "flex",
    marginLeft: " 70.3125vw",
  },
  card: {
    minWidth: 275,
    maxWidth: 345,
    margin: theme.spacing(2),
  },
}));

export default function TwoByTwo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
      <Toolbar style={{ backgroundColor: 'white' }}>
        <Paper className={classes.paper}>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <ArrowCircleUpRoundedIcon style={{color:"blue"}} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Toppr
          </Typography>
        </Paper>
        <div className={classes.buttonGroup}>
        <Typography className={classes.Button} variant="h6">Login</Typography>
        <Typography className={classes.Button} variant="h6">Sign Up</Typography>
        </div>
      </Toolbar>
      </AppBar>
      <Typography style={{  fontWeight: "bold"}} variant="h2" >
      Better Learning. Better Results.</Typography>

      <Typography style={{color: "blueviolet", fontWeight: "bold"}} variant="h2"  >
        One platform for all your learning needs
      </Typography>
      <Grid container  >
      <Grid  item xs={6}>
           < CardForTFT />
        </Grid>
        <Grid item xs={6}>
           < CardForTFT />
        </Grid>
        <Grid item xs={6}>
           < CardForTFT />
        </Grid>
        <Grid item xs={6}>
           < CardForTFT />
        </Grid>

        </Grid>
        </div>
  )
};