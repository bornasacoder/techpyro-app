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
    Menu,
  } from "@mui/material";
import { Close } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';
import {  useNavigate } from 'react-router-dom';
 
export default function MenuButtons({setOpen,setJoinopen,setlogin}) {
  const navigate = useNavigate()
  const handleClose = ()=>{
    setOpen(false)
  }
  const handleabout = () =>{
    navigate("/about")
  }
  const handleuniversity = () =>{
    navigate("/university")
  }
  const handleCareer = () =>{
    navigate("/career")
  }
  const handlebutton = () =>{
    navigate("/about")
  }
  const handleJoinOpen = () => {
    setJoinopen(true);
  };
  const handleLogin=()=>{
    setlogin(true)
    console.log("asjishdi")
  }
  return (
    <List component="nav" aria-label="mailbox folders" sx={{margin:'10px',width:'100vw',position:"relative",height:"100vh"}}>
      <Box sx={{display:"flex",justifyContent:"space-between",margin:"5px 15px",zIndex:"50",alignItems:"center",height:"10vh"}} >
        <Typography variant='h2' sx={{color:"#0056D2"}}>TechPyro</Typography>
        <Close onClick={handleClose}/></Box>
      <ListItem button>
        <ListItemText primary="For Enterprise" onClick={handleabout} />
      </ListItem>
      {/* <Divider /> */}
      <ListItem button>
        <ListItemText primary="For Universities" onClick={handleuniversity} />
      </ListItem>
      <ListItem button >
        <ListItemText primary="Find Your new Career" onClick={handleCareer} />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Login"  onClick={handleLogin}/>
      </ListItem>
      {/* <Divider light /> */}
      <ListItem button>
        <ListItemText primary="Signup" onClick={handleLogin} />
      </ListItem>
      <Box display="flex" gap={2} sx={{flexDirection:{md:'row',sm:'row',xs:'column',position:"absolute",bottom:"0px",width:"90%"}}}>
          <Button sx={{padding:{md:"10px 30px",sm:"10px 30px",xs:"20px 30px"},color:"#FFFFFF", backgroundColor:"#0056D2",borderRadius:"5px","&:hover":{
             backgroundColor:"#00419E"
            }}} onClick={handleJoinOpen}>Join for free</Button>
            <Button sx={{padding:{md:"10px 30px",sm:"10px 30px",xs:"20px 30px"},color:"#00419E",border:"3px solid #00419E ",borderRadius:"5px"}} onClick={handlebutton} >Try TechPyro for Business</Button>
          </Box>
    </List>
   
  )
}
