import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
  Home,
  AccountCircle,
  Settings,
  Instagram,
  Facebook,
  Twitter,
  YouTube,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#1565c0",
    height: "3.125vw",
    maxWidth:"100%",
    "@media (max-width: 600px)":{
       height:"50px"
    }
  },
  
  typography: {
    marginTop: "-25px",
    color: "#fff",
    marginRight: theme.spacing(2),
    "@media (max-width: 1180px)":{
      display:"none"
    }
  },
  typography1: {
    marginTop: "-25px",
    color: "#fff",
    marginRight: theme.spacing(2),
    
  },
  button: {
    marginTop: "-4.6875vw",

    color: "#fff",
    "@media (max-width: 500px)":{
      display:"none"
    }
    // border: "1px solid #fff",
  },
  icon: {
    marginTop: "-4.6875vw",

    color: "#fff",
    "@media (max-width: 600px)":{
      marginTop: "-30px",

   }
   
    // marginRight: theme.spacing(2),
  },
  loginIcon:{
    display:"none",
    color: "#fff",

    "@media (max-width: 600px)":{
      display:"block",
      marginTop: "-20px",

   }
  },
  arrow: {
    marginTop: "0px",
    color: "#fff",
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar  >
        <Grid   container direction="row" justify="space-between">
          <Grid item>
            <Grid   container direction="row">
              
              <IconButton className={classes.loginIcon}  size="small">
              < PermIdentityIcon />
            </IconButton>
              <Typography className={classes.typography} variant="body2">
              <IconButton className={classes.arrow}  size="small">
              < SettingsPhoneIcon />
            </IconButton>
            +1 212-226-3126
              </Typography>
              <Typography className={classes.typography} variant="body2">
              <IconButton className={classes.arrow}  size="small">
              < PlaceIcon />
            </IconButton> 
            1010 Moon ave, New York, NY US
              </Typography>
              <Typography className={classes.typography} variant="body2">
              <IconButton className={classes.arrow}  size="small">
              < AccessTimeIcon />
            </IconButton>
            Mon-Sat 8.00-18.00 
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton className={classes.icon} size="small">
              <Instagram />
            </IconButton>
            <IconButton className={classes.icon} size="small">
              <Facebook />
            </IconButton>
            <IconButton className={classes.icon} size="small">
              <Twitter />
            </IconButton>
            <IconButton className={classes.icon} size="small">
              <YouTube />
            </IconButton>
            
             
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
