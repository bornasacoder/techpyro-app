import React from 'react'
import {
    styled,
    Badge,
    Button,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    Dialog,
    DialogContent,
  } from "@mui/material";
import Login from '../../../pages/auth/Login';
import Signup from '../../../pages/auth/Signup';

export default function MenuButtons() {
  const handleCloseForm = () => {
    setOpener(false);
  };
  const handleSignup = () => {
    setSignupopen(false);
  };
  const [opener, setOpener] = React.useState(false);
  const [signupopen, setSignupopen] = React.useState(false);

  const handleClickOpen = () => {
  setOpener(true);
  };
  const handleSignupOpen = () => {
  setSignupopen(true);
  };

  return (
    <List component="nav" aria-label="mailbox folders" sx={{padding:'20px',width:"80vw",background:"#0C487C",height:"100%",color:"#fff"}}>
       <Dialog open={opener} onClose={handleCloseForm} >
        <DialogContent>
       <Login opener={opener} setOpener={setOpener} signupopen ={signupopen} setSignupopen={setSignupopen}/>
        </DialogContent>
      </Dialog>
   <Dialog open={signupopen} onClose={handleSignup} >
        <DialogContent>
       <Signup signupopen ={signupopen} setSignupopen={setSignupopen} opener={opener} setOpener={setOpener}/>
        </DialogContent>
      </Dialog>
      <ListItem button>
        <ListItemText primary=" Investor Relation" sx={{color:"#fff",fontSize:"1.3rem"}} />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Add Restaurant" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Log in" onClick={handleClickOpen} />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Sign up" onClick={handleSignupOpen}/>
      </ListItem>
    </List>
  )
}
