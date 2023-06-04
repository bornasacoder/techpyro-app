import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Container, Avatar, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { zIndex } from '@material-ui/core/styles/zIndex';
import AOS from 'aos';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: 1,
    width: "100%",
    overflow:"hidden"

    
  },
  flexbox2: {
    backgroundImage:
      "url(https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  parent3: {
    margin: "2%",
    display: "flex",
    flexDirection: "row",
  },
  menuButtons: {
    display: "flex",
    direction: "row",
    alignItems: "center",
    margin: "2.34375vw",
    flexWrap: "wrap",
  },

  rightButton: {
    margin: " 0.15625vw",
    border: "1px solid orange",
    backgroundColor: "orange",

    "&:hover": {
      backgroundColor: "#ffa726",
    },
  },
  imgContainer: {
    marginleft: "5%",

    height: "27.34375vw",
    width: "150%",
    color: "white",
  },
}));
const MySecondComponent = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile'
    });
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.parent3}>
        <Container data-aos="fade-right" data-aos-duration="2000" className={classes.imgContainer}>
          <div style={{ margin: "10%" }}>
            {" "}
            MOBILE APPLICATION
            <Typography className={classes.heading1} variant="h2">
              Download our application
            </Typography>
            Rolorem, beatae dolorum, praesentium itaque et quam quaerat.
          </div>
          <div className={classes.menuButtons} style={{ margin: "10%" }}>
            <Button className={classes.rightButton}>Reservation</Button>
            <Button className={classes.rightButton}>Reservation</Button>
          </div>
        </Container>
        <Container data-aos="fade-left" data-aos-duration="2000" margin="2%">
          <Box sytle={{ display: "flex", flexDirection: "column" }}>
            <img height="500px" src="https://elanta.app/nazar/tastyc-demo/img/phone.png" alt="" />
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default MySecondComponent;
