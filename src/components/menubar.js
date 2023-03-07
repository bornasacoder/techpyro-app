import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:"40px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:"black",
  },
  title: {
    flexGrow: 1,
    color:"black",
  },
  menubar: {
    backgroundColor: 'white',
  },
  logo: {
    height: 50,
    marginRight: theme.spacing(2),
    color:"black",
  },
}));

const MenuBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menubar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <img src="https://htmldesigntemplates.com/html/travelin/images/logo.png" alt="logo" className={classes.logo} />
          <div  style={{ display:"flex",marginLeft:"32vw"}}>
          <Button color="dark">  <form className={classes } noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
         
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form></Button>
          <Button color="dark">Login/Register</Button>
          <Button color="dark">Book Now</Button></div>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem  >
              Home
               
            </MenuItem>
            <MenuItem  >
              About Us
               
            </MenuItem>
            <MenuItem  >
              Destinations
              
            </MenuItem>
            <MenuItem  >
              Tours
               
            </MenuItem>
            <MenuItem >
              Pages
              
        </MenuItem>
        <MenuItem  >
          Blog
          
        </MenuItem>
      </Menu>
    </Toolbar>
  </AppBar>
</div>
);
};

export default MenuBar;