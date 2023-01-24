import React, { useState } from 'react';
import { AppBar, IconButton, Drawer, List, ListItem ,Grid} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function  Hambar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <AppBar style={{display: 'flex', flexDirection:"row",
    justifyContent: 'flex-end', zIndex: 1}} color='white'>
        <img src="https://elanta.app/nazar/tastyc-demo/img/logo-sm.svg" alt="logo" style={{ height:'80px',
    width:'40px'}} />

        <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
          <MenuIcon  />
        </IconButton>
        <IconButton aria-label="cart" color="black">
            <ShoppingCartIcon />
          </IconButton>
      </AppBar>
      <Drawer anchor='top' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <Grid container justify="center" alignItems="center">

        <List direction="row" >
          <ListItem>
            <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
              <MenuIcon />
            </IconButton>
          </ListItem>
          <ListItem>HOME</ListItem>
          <ListItem>ABOUT</ListItem>
          <ListItem>MENU</ListItem>
          <ListItem>BLOG</ListItem>
          <ListItem>CONTACT</ListItem>
          <ListItem>RESERVATION</ListItem>


        </List>
        </Grid>

      </Drawer>
    </div>
  )
};
