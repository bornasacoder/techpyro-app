import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Link, Icon, Button } from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  GitHub as GitHubIcon,
  Telegram as TelegramIcon,
  //   Discord as DiscordIcon,
} from '@material-ui/icons';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AppleIcon from '@mui/icons-material/Apple';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#212121',
    padding: theme.spacing(2),
  },
  paper: {
    margin: theme.spacing(5),
    padding: theme.spacing(2),
    backgroundColor: "#37474f",

  },
  list: {
    padding: theme.spacing(0, 2),
    backgroundColor: "#37474f",
    [theme.breakpoints.down("sm")]: {
      marginRight:"80px"
    },

  },
  copyright: {
   marginTop:"1.5625vw",
   marginLeft:"80px",

   [theme.breakpoints.down("sm")]: {
    marginLeft:"60px"
  },
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:"33.59375vw",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginLeft:"20px"
    },
  },
  flag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  buttons: {
    display:"flex",
      
     marginTop:"20px",
     [theme.breakpoints.down("sm")]: {
      marginLeft:"10px"
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>Card 1</Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>Card 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>Card 3</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container style={{ marginLeft: "7.8125vw", color:"blue" }} spacing={2}>

        <Grid item xs={12} sm={2}>
          <Paper className={classes.list}>
            <Typography variant="h6">List 1</Typography>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.list}>
            <Typography variant="h6">List 2</Typography>

            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.list}>
            <Typography variant="h6">List 3</Typography>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.list}>
            <Typography variant="h6">List 4</Typography>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.list}>
            <Typography variant="h6">List 5</Typography>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item lg={3}>
      <div className={classes.buttons}>
      <Button variant="contained" style={{ backgroundColor: "black" }}>
                <PlayArrowIcon style={{ color: "white" }} />
                <Typography style={{ color: "white" }} variant="body2">
                  Google Play
                </Typography>{" "}
              </Button>{" "}
              <Button variant="contained" style={{ backgroundColor: "black",marginLeft:"5px" }}>
                <AppleIcon style={{ color: "white" }} />
                <Typography style={{ color: "white" }} variant="body2">
                  App Store
                </Typography>{" "}
              </Button>
      </div>
     
      </Grid>
      
      <Grid item lg={3}>
      <div className={classes.copyright}>
        <Typography style={ {color:"white",} } variant="h6">
          Copyright &copy; Your Name
        </Typography>
      </div>
      
      </Grid>
      <Grid item lg={3}>
      <div className={classes.socialIcons}>
        <Link href="#">
          <FacebookIcon  style={{margin:"10px"}}/>
        </Link>
        <Link href="#">
          <TwitterIcon  style={{margin:"10px"}}/>
        </Link>
        <Link href="#">
          <LinkedInIcon  style={{margin:"10px"}}/>
        </Link>
        <Link href="#">
          <InstagramIcon  style={{margin:"10px"}}/>
        </Link>
        <Link href="#">
          <GitHubIcon  style={{margin:"10px"}}/>
        </Link>
        <Link href="#">
          <TelegramIcon style={{margin:"10px"}} />
        </Link>
        <Link href="#">
          {/* <DiscordIcon /> */}
        </Link>
      </div>
       
      </Grid>
      </Grid>
    </footer>
  )
};

export default Footer;
