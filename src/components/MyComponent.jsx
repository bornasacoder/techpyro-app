import React from "react";
import Media from "react-media";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { CardMedia } from "@material-ui/core";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import { GoogleFont } from "react-google-fonts";
import ReactPlayer from "react-player";
import { styled } from "@mui/styles";
import { Container, Avatar, Box } from "@material-ui/core";
import { color } from "@mui/system";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: " -7.8125vw",
    left: "0",
    right: "0",
    bottom: "0",
    width: "98%",
    height: "100%",
    overflow: "hidden",
    margin: " 0.78125vw",
    zIndex: 1,
    borderRadius: " 0.78125vw",
    backgroundColor: "white",
    border: "1px solid black",
    marginTop:"50px"
  },
  parent: {
    display: "flex",
    direction: "row",

    margin:"20px",
    padding:"30px 0px",
    "@media (max-width: 1000px)": {
              display: "block",
              direction:"column",
              marginLeft: "2vw"
             
              },
   
    
  },
   
  sibling1: {
    backgroundColor: "blue",
    display: "flex",
   
    direction: "row",
    alignItems: "center",
    "@media (max-width: 680px)": {
      display: "none",
       
     
      },
    
  },
  sibling2: {
    backgroundColor: "white",
    marginTop: "8.210180623973727vh",
  },
  menuButtons: {
    display: "flex",
    direction: "row",
    alignItems: "center",
    margin: " 2.34375vw",
    flexWrap: "wrap",
    "@media (max-width: 980px)": {
      
      margin: " 1vw",
     
      },
  },

  rightButton: {
    marginRight: "0px",
    border: "1px solid orange",
    backgroundColor: "orange",

    "&:hover": {
      backgroundColor: "#ffa726",
    },
  },
  heading1: {
    fontfamily: "Roboto Mono",
  },
  heading2: {
    fontfamily: "Roboto Mono",
  },
  img: {
    width: "30%",
    height: "30%",
    display: "inline",

    marginleft: "50%",
    marginright: "auto",
  },
  parent2: {
    margin: "1.5625vw",
     display:"flex",
     direction:"row",
     alignItems: "center"
  },
  parent3: {
    margin: "2%",
    display: "flex",
    flexDirection: "row",
    color: "sky-blue",
    "@media (max-width: 500px)": {
      display: "flex",
      flexDirection: "column",
      alignItems:"center"
       
     
      },
    
  },
   
  imgContainer: {
    marginleft: "5%",

    backgroundImage: `url(https://images.pexels.com/photos/2836945/pexels-photo-2836945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "27.34375vw",
    width: "150%",
    "@media (max-width: 980px)": {
      backgroundImage:"none",
      backgroundColor:"white",
    },
      
     
    "@media (max-width: 980px)": {
      backgroundImage:"none",
      backgroundColor:"white",
      marginBottom: "150px "
    },

  },
}));

export default function MyComponent() {
  const classes = useStyles();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <Grid item className={classes.sibling1}>
          <container maxWidth="md">
            <ReactPlayer
              url=" https://youtu.be/SXJqEnauNaY"
              muted={false}
              playing={true}
            />
          </container>
        </Grid>
        <Grid item className={classes.sibling2}>
          <Container>
            ABOUT US
            <Typography className={classes.heading1} variant="h4">
              We invite you to visit our Coffee Cafe
            </Typography>{" "}
            Assumenda possimus eaque illo iste, autem. Porro eveniet, autem
            ipsam vitae amet repellat repudiandae tenetur, quod corrupti
            consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore
            aspernatur quae repudiandae dolorem, beatae dolorum, praesentium
            itaque et quam quaerat. Cumque, consequatur!
            <div className={classes.menuButtons}>
              <Button className={classes.rightButton}>Read More</Button>
              <Button>
                <Grid item>
                  <IconButton>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <YouTubeIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Button>
            </div>
          </Container>
        </Grid>
      </div>
      <Divider />
      <div className={classes.parent2}>
        <Grid container className={classes.heading2} spacing={3}>
          <Grid item xs={12}>
            <Container>
              <Typography variant="h7">FEATURES</Typography>
              <Typography className={classes.heading1} variant="h4">
                <Typography variant="h4">Why people choose us?</Typography>
              </Typography>
              Porro eveniet, autem ipsam vitae consequatur!
            </Container>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Container>
              <img
                className={classes.img}
                src="https://elanta.app/nazar/tastyc-demo/img/icons/1.svg"
                alt="image-description"
              />
              <Typography className={classes.heading1} variant="h6">
                {" "}
                Menu for every taste{" "}
              </Typography>
              <Typography>
                Dolor sit amet, consectetur adipisicing elit et molestias
                possimus{" "}
              </Typography>
            </Container>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Container>
              <img
                className={classes.img}
                src="https://elanta.app/nazar/tastyc-demo/img/icons/2.svg"
                alt="image-description"
              />
              <Typography className={classes.heading1} variant="h6">
                Always fresh ingredients
              </Typography>
              <Typography>
                Assumenda possimus eaque illo iste, autem. Porro eveniet autem
              </Typography>
            </Container>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Container>
              <img
                className={classes.img}
                src="https://elanta.app/nazar/tastyc-demo/img/icons/3.svg"
                alt="image-description"
              />
              <Typography className={classes.heading1} variant="h6">
                Experienced chefs
              </Typography>
              <Typography>
                Rolorem, beatae dolorum, praesentium itaque et quam quaerat
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div className={classes.parent3}>
        <Container className={classes.imgContainer}>
          <div style={{ margin: "10%" ,  "@media (max-width: 500px)": {    margin: " "
       
    },}}>
            {" "}
            ABOUT US
            <Typography className={classes.heading1} variant="h3">
              Working hours
            </Typography>
            <Typography className={classes.heading1} variant="h5">
            Rolorem, beatae dolorum, praesentium itaque et quam quaerat.

            </Typography>
          </div>
          <div className={classes.menuButtons} style={{ margin: "10%" ,"@media (max-width: 500px)": {
       marginBottom:" 100px"
     
      }, }}>
            <Button className={classes.rightButton}>Reservation</Button>
            <Button style={{ color: "white" }}>Contact us</Button>
          </div>
        </Container>
        <Container margin="2%">
          <Box sytle={{ display: "flex", flexDirection: "column","@media (max-width: 500px)": {
       
     
      }, }}>
            <Box margin="10%">
              <Typography variant="h7"> SUNDAY TO TUESDAY</Typography>
              <Typography variant="h4"> 09 : 00</Typography>
              <Typography variant="h4"> 22 : 00</Typography>
            </Box>
            <Box margin="10%">
              <Typography variant="h7"> FRIDAY TO SATURDAY</Typography>
              <Typography variant="h4"> 11 : 00</Typography>
              <Typography variant="h4"> 19 : 00</Typography>
            </Box>
          </Box>
        </Container>
      </div>
      <Divider />
      <div>
        <Grid container className={classes.parent2}>
          <Grid item sm={3} xs={6}>
            <Typography variant="h2"> 200+</Typography>
            <Typography variant="h7"> VISITORS DAILY</Typography>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Typography variant="h2">400+</Typography>
            <Typography variant="h7"> DELIVERIES MONTHLY</Typography>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Typography variant="h2"> 100%</Typography>
            <Typography variant="h7">POSITIVE FEEDBACK</Typography>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Typography variant="h2"> 40+</Typography>
            <Typography variant="h7"> AWARDS AND HONORS</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
