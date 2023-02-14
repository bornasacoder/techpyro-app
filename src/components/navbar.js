import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: "blue",
    marginLeft: "15px",
  },
  menuButton1: {
    color: "grey",
    marginLeft: "15px",

  },
  menuButton2: {
    color: "grey",
    marginLeft: "180px",

  },
  drawer: {
    width: 250,
    display:"flex",
    flexDirection:"column",
    justify:"center",
    alignItems:"center",
    marginLeft:"40px"
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('xs'));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'white' }}>
        <Toolbar>
          {isSmallScreen ? (<>
             <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
             <HomeIcon style={{ fontSize: "35px" }} />
           </IconButton>
            <IconButton edge="start" className={classes.menuButton2} color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon style={{ fontSize: "35px" }} />
            </IconButton></>
          ) : (<>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <HomeIcon style={{ fontSize: "35px" }} />
            </IconButton>
             <Typography variant="h6" className={classes.menuButton1}>
             LEARNING APP
           </Typography>
           <Typography variant="h6" className={classes.menuButton1}>
             CODER
           </Typography>
           <Typography variant="h6" className={classes.menuButton1}>
             SCHOOL OS
           </Typography>
           <Typography variant="h6" className={classes.menuButton1}>
             STAR
           </Typography>
           </> )}
         

          <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
            <div className={classes.drawer} >
              <List>
                <ListItem button>
                  <ListItemText primary="LEARNING APP" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="CODER" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="SCHOOL OS" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="STAR" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};
