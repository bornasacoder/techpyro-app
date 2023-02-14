import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletIcon from "@mui/icons-material/Tablet";
import LaptopIcon from "@mui/icons-material/Laptop";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import AppleIcon from '@mui/icons-material/Apple';
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  leftBox: {
    width: "40%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
    width: "100%",      
    },
    
  },
  rightBox: {
    width: "60%",
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
       display:"none",
       width: "0%",

    },
  },
  root1: {
    backgroundColor: '#00b0ff',
    borderRadius: '3.125vw',
    margin: '3.125vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:"-800px",
    opacity:"1",
    zIndex:"9",
  },
  leftContainer1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
       
      width: "100%",

   },
    
  },
  rightContainer1: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display:"none",
      width: "0%",

   },
  },
  heading1: {
    fontWeight: 'bold'
  },
  paragraph1: {
   color:"white",
    marginLeft:"3.125vw",
  },
  theading:{
    color: "grey", 
    fontWeight: "bold" ,
    [theme.breakpoints.down("sm")]: {
      variant: "h4",
    },
  },
}));

export default function TwoFlexBoxes() {
  const classes = useStyles();

  return (
    <>
    <Box>
    <Box className={classes.container}>
      <Box className={classes.leftBox}>
        <Typography className={classes.theading} variant="h2">
          {" "}
          Toppr app is available on all platforms
        </Typography>
        <Grid container style={{ marginTop: "1.5625vw" }} spacing={3}>
          <Grid item xs={4}>
            <div className={classes.card}>
              <SmartphoneIcon style={{ fontSize: "7.03125vw" }} />
              <Typography style={{ fontWeight: "bold" }} variant="h6">
                Mobiles
              </Typography>
              <Typography variant="body2" style={{ color: "grey" }}>
                iOS & Android
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.card}>
              <TabletIcon style={{ fontSize: "7.03125vw" }} />
              <Typography style={{ fontWeight: "bold" }} variant="h6">
                Tablets
              </Typography>
              <Typography variant="body2" style={{ color: "grey" }}>
                Android & iPad
              </Typography>
            </div>{" "}
          </Grid>
          <Grid item xs={4}>
            <div className={classes.card}>
              <LaptopIcon style={{ fontSize: "7.03125vw" }} />
              <Typography style={{ fontWeight: "bold" }} variant="h6">
                Desktops
              </Typography>
              <Typography variant="body2" style={{ color: "grey" }}>
                All Browsers
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.card}>
              {" "}
              <Button variant="contained" style={{ backgroundColor: "black" }}>
                <PlayArrowIcon style={{ color: "white" }} />
                <Typography style={{ color: "white" }} variant="h6">
                  Google Play
                </Typography>{" "}
              </Button>{" "}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.card}> <Button variant="contained" style={{ backgroundColor: "black" }}>
                <AppleIcon style={{ color: "white" }} />
                <Typography style={{ color: "white" }} variant="h6">
                  App Store
                </Typography>{" "}
              </Button>{" "}</div>
          </Grid>
        </Grid>{" "}
      </Box>
      <Box className={classes.rightBox}><img src="https://static-cf.toppr.com/marketing/6c448a3/images/home/tablet-and-phone-mock-for-grukhs@2x.png" alt="img" style={{ height:"500px",width:"650px" }} />  </Box>
    </Box>
    <Box style={{marginTop:"400px ", backgroundColor:"#212121", height:"500px"}}>

    </Box>

    <Box className={classes.root1}>
      <Box className={classes.leftContainer1}>
      <Typography className={classes.theading}  variant="h2">
          {" "}
          Book a free online
          counselling session        </Typography>
        <Typography variant="body1" style={{margin:"2.34375vw"}} className={classes.paragraph1}>
        Have any questions? An experienced Toppr Agent will be able to answer any questions you have and discuss academic goals as well as the unique needs of the learner.
        </Typography>
        <Box display="flex" justifyContent="space-between">
        <Button variant="contained" style={{ backgroundColor: "black" , margin:"50px"}}>
                <Typography style={{ color: "white" }} variant="h6">
                  BOOK DEMO--->
                </Typography>{" "}
              </Button>
              <Button variant="contained" style={{ backgroundColor: "black" , margin:"50px"}}>
                <Typography style={{ color: "white" }} variant="h6">
                  SUBSCRIBE NOW
                </Typography>{" "}
              </Button>
        </Box>
      </Box>
      <Box className={classes.rightContainer1}>
        <img src="https://static-cf.toppr.com/marketing/6c448a3/images/home/boy-with-tablet.png" alt="Placeholder" style={{ height:"450px",width:"450px" }} />
      </Box>
    </Box>
    </Box>

    </>
  );
}
