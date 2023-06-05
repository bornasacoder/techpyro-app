import React ,{useEffect, useState}from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import IsoIcon from '@mui/icons-material/Iso';
import ParkIcon from '@mui/icons-material/Park';
import MouseIcon from '@mui/icons-material/Mouse';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import Hambar from "./Hambar";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://img.freepik.com/free-vector/coaching-concept-illustration-idea-strategy-skills-improvement_613284-2305.jpg?size=626&ext=jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    flexGrow: 1,
    marginTop: "40px",
    marginBottom: "50px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    "@media (max-width: 600px)":{
      display:"none"
   }
  },
  paper: {
    margin: theme.spacing(2),
    // paddingTop: theme.spacing(4),
    marginLeft: theme.spacing(14),

    textAlign: "center",
    color: " ff7961",
    backgroundColor:"#757ce8",
    height: "100%",
    width: "100%",
  },
  button: {
     
    borderRadius: "50px",
    marginTop: theme.spacing(2),
    color: "#fff",
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
    textAlign: "center",
  },
  Typography: {
    margin: "5px",
    marginLeft: "15px",
    "@media (max-width: 600px)":{
      display:"none"
   }
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: "10px",
  },
  icon: {
    fontSize: "80px",
  },
  Cards: {
    "@media (max-width: 600px)":{
      marginRight:"200px"
   }
  },
  Hambar:{
    display:"none",
     "@media (max-width: 600px)":{
      display:"flex"
   }
  }
  
}));

export default function MainCarousel() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Toolbar>
        <Avatar className={classes.large}>MS</Avatar>

        <Typography variant="h6" className={classes.title}>
          MASTERSTUDY
        </Typography>
        <Typography className={classes.Typography} variant="h6">
          COURSES
        </Typography>
        <Typography className={classes.Typography} variant="h6">
          MEMBERSHIPS
        </Typography>
        <Typography className={classes.Typography} variant="h6">
          COURSE FORMATS
        </Typography>
        <Typography className={classes.Typography} variant="h6">
          ADD COURSE
        </Typography>
        <Typography className={classes.Typography} variant="h6">
          DEMOS
        </Typography>
        <Typography className={classes.Typography} variant="h6">
          PAGES
        </Typography>
        <IconButton className={classes.Typography} color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <FavoriteIcon />
        </IconButton>
         
      </Toolbar>
  
      <Typography
        variant="h2"
        style={{ textAlign: "center", marginTop: "50px", color: "yellow" }}
      >
        TAKE YOUR FIRST STEP
      </Typography>
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginTop: "0px" , color: "#fff"}}
      >
        {" "}
        OF JOURNEY TO SUCCESS.
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" className={classes.button}>
          Ready to get started?
        </Button>
      </div>
      <div className={classes.Cards}>

      <Grid container spacing={3}  className={classes.papercard} style={{ marginTop: "50px"  }}>
      <Grid item lg={2} md={6} sm={9} xs={12}>

          <Paper className={classes.paper}>
            {" "}
            <Typography>
              <IconButton>
                <InsertChartIcon style={{ fontSize: 80 }} />
              </IconButton>
            </Typography>{" "}
            <Typography>Analysis of Algorithm </Typography>
          </Paper>
        </Grid>
        <Grid item lg={2} md={6} sm={9} xs={12}>

          <Paper className={classes.paper}>
            {" "}
            <Typography>
              <IconButton>
                <IsoIcon style={{ fontSize: 80 }} />
              </IconButton>
            </Typography>{" "}
            <Typography>Economics and Finance</Typography>
          </Paper>
        </Grid>
        <Grid item lg={2} md={6} sm={9} xs={12}>

          <Paper className={classes.paper}>
            {" "}
            <Typography>
              <IconButton>
                <ParkIcon style={{ fontSize: 80 }} />
              </IconButton>
            </Typography>{" "}
            <Typography>Environmental Sciences</Typography>
          </Paper>
        </Grid>
        <Grid item lg={2} md={6} sm={9} xs={12}>

          <Paper className={classes.paper}>
            {" "}
            <Typography>
              <IconButton>
                <HighlightAltIcon style={{ fontSize: 80 }} />
              </IconButton>
            </Typography>{" "}
            <Typography>Graphic and Web Design</Typography>
          </Paper>
        </Grid>
        <Grid item lg={2} md={6} sm={9} xs={12}>

          <Paper className={classes.paper}>
            {" "}
            <Typography>
              <IconButton>
                <MouseIcon style={{ fontSize: 80 }} />
              </IconButton>
            </Typography>{" "}
            <Typography>Software Training</Typography>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}
