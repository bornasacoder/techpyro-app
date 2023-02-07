import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Image } from "@material-ui/icons";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Divider } from "@material-ui/core";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import EmailIcon from '@mui/icons-material/Email';
const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "gray",
    padding: theme.spacing(8),
  },
  footerItem: {
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  card1: {
    backgroundColor: "transparent",
    position:"relative"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  
   
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    marginTop: theme.spacing(2),
  },
  blackButton: {
    color: 'black',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.footerContainer}
      spacing={10}
      direction="row"
    >
      <Grid item xs={12} sm={3} md={3} className={classes.footerItem}>
        <Card
          className={classes.card}
          style={{ backgroundColor: "transparent" }}
        >  <Typography variant="h5" component="h2">
        ABOUT
      </Typography>
          <CardContent className={classes.cardContent}>
          
            <Typography variant="body2" component="p">
              Masterstudy is Education WordPress theme featured by Learning
              Management System (LMS) for online education. Developed by
              StylemixThemes. Lorem ipsum dolor sit amet, onsectetur adipiscing
              elit. Morbi at egestas magna.{" "}
            </Typography>
            <Button
              style={{ margin: "10px" }}
              variant=" "
              color="primary"
              size="medium"   className={classes.blackButton}
            >
              Button
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3} md={3} className={classes.footerItem}>
      <Card
          className={classes.card}
          style={{ backgroundColor: "transparent" }}
        >
        <Typography variant="h5" component="h2">
            Popular Courses
            </Typography>

         <CardContent className={classes.cardContent}>
          <Grid container>
        <Grid item xs={2}>
          <Image
            className={classes.image}
            alt="Image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRajISYyHrkjvfULHD1K2dlFC0JJ3naWsT-xtdljf&s"/>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" className={classes.heading}>
          Web Coding and Apache Basics theory
          </Typography>
          <Typography variant="body2" className={classes.subheading}>
           By Colt Anand
          </Typography>
        </Grid>
        </Grid>
        <Grid container>
        <Grid item xs={2}>
          <Image
            className={classes.image}
            alt="Image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRajISYyHrkjvfULHD1K2dlFC0JJ3naWsT-xtdljf&s"/>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" className={classes.heading}>
          Web Coding and Apache Basics theory
          </Typography>
          <Typography variant="body2" className={classes.subheading}>
           By Colt Anand
          </Typography>
        </Grid>
        </Grid>
        <Grid container>
        <Grid item xs={2}>
          <Image
            className={classes.image}
            alt="Image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRajISYyHrkjvfULHD1K2dlFC0JJ3naWsT-xtdljf&s"/>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" className={classes.heading}>
          Web Coding and Apache Basics theory
          </Typography>
          <Typography variant="body2" className={classes.subheading}>
           By Colt Anand
          </Typography>
        </Grid>
        </Grid>
      </CardContent>

      </Card>

      </Grid>
      <Grid item xs={12} sm={3} md={3} className={classes.footerItem}>
      <Card
          className={classes.card}
          style={{ backgroundColor: "transparent" }}
        ><Typography variant="h5" component="h2">
        Pages

        </Typography>
        
        <CardContent className={classes.cardContent}>

        <Typography variant="body2">
           <ChevronRightIcon/>
           COURSES
           </Typography>
          <Divider style={{ backgroundColor: 'black' }} />
          <Typography variant="body2">
           <ChevronRightIcon/>
            HOME
           </Typography>
          <Divider style={{ backgroundColor: 'black' }} />
          <Typography variant="body2">
           <ChevronRightIcon/>
           SHORTCODES
           </Typography>
          <Divider style={{ backgroundColor: 'black' }} />
          <Typography variant="body2">
           <ChevronRightIcon/>
           TYPOGRAPHY
           </Typography>
          <Divider style={{ backgroundColor: 'black' }} />
          <Typography variant="body2">
           <ChevronRightIcon/>
           MEMBERSHIPS
           </Typography>
          <Divider style={{ backgroundColor: 'black' }} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3} md={3} className={classes.footerItem}>
      <Card
          className={classes.card}
          style={{ backgroundColor: "transparent" }}
        ><Typography variant="h5" component="h2">
       CONTACT

        </Typography>
        
        <CardContent className={classes.cardContent}>

        <Typography variant="body2">
           
          <AddLocationIcon />
           USA, Callifornia 20, First Avenue, Callifornia
           </Typography>
          <Divider style={{ backgroundColor: 'black' }} />
          <Typography variant="body2">
           <PhoneIcon/>
           SHORTCODES
           </Typography>
          <Divider style={{ backgroundColor: 'black' }} />
          <Typography variant="body2">
           <LocalPrintshopIcon/>
           TYPOGRAPHY
           </Typography>
          <Divider style={{ backgroundColor: 'black' }} />
          <Typography variant="body2">
           <EmailIcon/>
           MEMBERSHIPS
           </Typography>
          <Divider style={{ backgroundColor: 'black' }} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Footer;
