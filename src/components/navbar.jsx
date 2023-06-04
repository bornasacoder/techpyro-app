// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    
    top: '0', left: '0', right: '0', bottom: '0',
    flexGrow: 1,
    margin: '10px' ,
   
    overflow: 'hidden',
    zIndex: 1,
    "@media (max-width: 800px)": {
         
      
     
      },
    
  },
  title: {
    flexGrow: 1,
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    border : '1px solid white',
    
    backgroundColor: 'white',
    borderRadius: '10px',
    justifyContent: 'space-between'

  },
  logo:{
    height:'80px',
    width:'80px'
  },
  menuButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  button: {
    marginRight: theme.spacing(2),
  },
  rightButton: {
     
    border: '1px solid orange',
    backgroundColor: 'orange',
    alignItems: 'right',
    
    '&:hover': {
      backgroundColor: '#ffa726',
    },
  }
}));

export default function Navbar() {
  const classes = useStyles();
   
  


  return (
    
    <div className={classes.root}>
      {/* {isSmall ? ( */}
        
      {/* ) : ( */}
        <AppBar position="static">
        <Toolbar className={classes.navigation}>
        <img src="https://elanta.app/nazar/tastyc-demo/img/logo-sm.svg" alt="logo" className={classes.logo} />
         <div className={classes.menuButtons}>
              <Button className={classes.button}>HOME</Button>
              <Button className={classes.button}>ABOUT</Button>
              <Button className={classes.button}>MENU</Button>
              <Button className={classes.button}>BLOG</Button>
              <Button className={classes.button}>CONTACT</Button>
          </div> 
   
          <div>
          <Button className={classes.rightButton}>RESERVATION</Button>
          
          <IconButton aria-label="cart" color="black">
            <ShoppingCartIcon />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      
     
    </div>
  )
};
