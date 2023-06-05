import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  TextField,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import PublicIcon from "@mui/icons-material/Public";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PrimaryCard from "./topCourses/primarycard";
import SecondaryCard from "./topCourses/secondarycard";
const useStyles = makeStyles({
  root: {
    height: "100%",
    backgroundImage: "url(background-image.jpg)",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    display: "flex",

    fontWeight: "bold",
    marginBottom: "25px",
    alignItems: "center",
    margin: " 30px",
    justifyContent: "center",
    
  },
  paragraph: {
    textAlign: "center",
    marginBottom: "50px",
  },
  flexContainer: {
    display: "flex",
  },
  flexContainer1: {
    backgroundColor: "#1565c0",
    color: "white",

    display: "flex",
    justifyContent: "space-between", 
    "@media (max-width: 600px)":{
      display: "block",
   }

  },
  flexBox1: {
    maxWidth: "60%",
    margin: "15px",
    marginLeft: "50px",
  },
  flexBox2: {
    margin: "15px",
    marginLeft: "0px",
    "@media (max-width: 600px)":{
    marginLeft: "20px",
      
   }
  },
  paper: {
    padding: "10px",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  imageContainer: {
     
    "@media (max-width: 600px)":{
      display: "none",
   }
  },
  image: {
    maxWidth: "100%",
  },
  card: {
    height: "100%",
  },
  cardMedia: {
    height: 0,
    paddingTop: "75%",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    marginTop: "25px",
  },
  icon: {
    fontSize: "rem",
  },
  heading1: {
    fontSize: "2rem",
  },
  body: {
    fontSize: "1rem",
  },
  firstpart: {
    backgroundImage:
      "url(https://img.freepik.com/premium-vector/back-school-banner-illustration_272290-597.jpg?size=626&ext=jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  secondpart: {
    backgroundImage:
      "url(https://i.pinimg.com/originals/eb/80/2c/eb802c071fde1f7b81bf38927893f3f1.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  subs: {
    display: "flex",
    alignItems: "center",
  },
});

const MasterStudyBlog = () => {
  const classes = useStyles();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={classes.root}>
      <div className={classes.firstpart}>
        <Typography className={classes.heading} variant="h4">
          PLAY SCHOOL ACHIEVEMENTS
        </Typography>
        <Typography className={classes.paragraph} variant="body1">
          Here you can review some statistics about our Education Center
        </Typography>
        <div className={classes.flexContainer}>
     <Grid container >

  <Grid item lg={3} md={6} sm={9} xs={12}>

          <div className={classes.flexBox}>
            {" "}
            <Paper className={classes.paper}>
              <Icon className={classes.icon} size="large">
                <PublicIcon style={{ fontSize: 80 }} />
              </Icon>
              <Typography variant="h3" className={classes.heading1}>
                94532
              </Typography>
              <Typography variant="body2" className={classes.body}>
                FOREIGN FOLLOWERS
              </Typography>
            </Paper>
          </div></Grid>  <Grid item lg={3} md={6} sm={9} xs={12}>
          <div className={classes.flexBox}>
            <Paper className={classes.paper}>
              <Icon className={classes.icon} size="large">
                <GroupIcon style={{ fontSize: 80 }} />
              </Icon>
              <Typography variant="h3" className={classes.heading1}>
                94532
              </Typography>
              <Typography variant="body2" className={classes.body}>
                FOREIGN FOLLOWERS
              </Typography>
            </Paper>
          </div></Grid> <Grid item lg={3} md={6} sm={9} xs={12}>
          <div className={classes.flexBox}>
            <Paper className={classes.paper}>
              <Icon className={classes.icon} size="large">
                <NotificationsNoneIcon style={{ fontSize: 80 }} />
              </Icon>
              <Typography variant="h3" className={classes.heading1}>
                94532
              </Typography>
              <Typography variant="body2" className={classes.body}>
                FOREIGN FOLLOWERS
              </Typography>
            </Paper>
          </div></Grid><Grid item lg={3} md={6} sm={9} xs={12}>
          <div className={classes.flexBox}>
            <Paper className={classes.paper}>
              <Icon className={classes.icon} size="large">
                <BusinessCenterIcon style={{ fontSize: 80 }} />
              </Icon>
              <Typography variant="h3" className={classes.heading1}>
                94532
              </Typography>
              <Typography variant="body2" className={classes.body}>
                FOREIGN FOLLOWERS
              </Typography>
            </Paper>
          </div></Grid></Grid>
        </div>
      </div>

      <div className={classes.secondpart}>
        <div style={{display:"flex"}}>
        <div style={{ margin: "50px", color: "white", maxWidth: "40%" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            TEACHER OF MONTH
          </Button>
          <Typography variant="h3">Colt Anand</Typography>
          <Typography variant="subtitle1">
            Professor of Business Administration
          </Typography>
          <Typography variant="body1">
            Isn't days fill, after him bring. Set likeness meat seed whose for
            itself you can't seas itself. Herb replenish he, dry he. Firmament
            their. Thing had.Fruit morning signs years. All earth fowl upon,
            doesn't make, grass seed kind bearing multiply female void bring
            second.
          </Typography>
        </div>
        <div style={{ margin: "50px" ,   maxWidth: "60%",
    "@media (max-width: 600px)":{
      display: "none",
   }, }}><CardMedia
      component="img"
      alt="Example Image"
      height="400" className={classes.imageContainer}
      image="https://img.freepik.com/free-photo/medium-shot-girl-portrait-with-graduation-background_23-2150293683.jpg?size=626&ext=jpg"
    /> </div>
        </div>
        <Typography style={{ marginLeft: "40px", color: "white" }} variant="h5">
          Children COURSES:
        </Typography>
        <Grid style={{ margin : "20px",  justifyContent: "center" }} container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3} lg={3}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex === 0 ? <div  ><SecondaryCard /></div>  : <PrimaryCard />}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3} lg={3}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex === 1 ? <SecondaryCard /> : <PrimaryCard />}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3} lg={3}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex === 2 ?
               <SecondaryCard /> 
             : <PrimaryCard />}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3} lg={3}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex === 3 ? <SecondaryCard /> : <PrimaryCard />}
          </Grid>
        </Grid>
      </div>

      <div className={classes.flexContainer1}>
        <div className={classes.flexBox1}>
          {" "}
          <Typography variant="h6" component="h2" gutterBottom>
            Subscribe our newsletter
          </Typography>
          <Typography variant="body2" gutterBottom>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words
          </Typography>
        </div>
        <div className={classes.flexBox2}>
          <Typography variant="h6" component="h2" gutterBottom>
            YOUR E-MAIL ADDRESS
          </Typography>
          <div className={classes.subs}>
            <TextField
              style={{ height: "30px" }}
              label="Email"
              variant="filled"
            />
            <Button
              style={{ height: "60px", marginTop: "20px" }}
              variant="contained"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterStudyBlog;
