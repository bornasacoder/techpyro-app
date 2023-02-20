import {
  MailOutline,
  PeopleAltOutlined,
  Phone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Box, Button, Card, CardContent, Container, createTheme, FormControl, Grid, IconButton, InputAdornment, Modal, OutlinedInput, styled, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderBottom:"1px solid #E4E4E4",
  padding:"15px 50px!important",
  backgroundColor:"#222222",
  color:"#95A0A7",
  [theme.breakpoints.down("md")]: {
   
  },
  [theme.breakpoints.down("sm")]: {
 
  },
  
}));
const Left = styled(Box)(({ theme }) => ({
  gap: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent:"center",
  [theme.breakpoints.down("sm")]: {
  },
  [theme.breakpoints.down("md")]: {
  },
}));
const Right = styled(Box)(({ theme }) => ({
  display: "flex",
gap: "10px",
justifyContent:"space-between",
alignItems: "center",
[theme.breakpoints.down("md")]: {
 
  },
  [theme.breakpoints.down("sm")]: {
    
  },
  
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {md:"40vw",sm:"60vw",xs:"100vw"},
  bgcolor: 'background.paper',
  p: "30px 0px",
};
const Content = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <StyleToolbar
      >
     <Left>   
      <Box display="flex" alignItems="center" gap="10px"  >
        <Typography sx={{display:{md:"flex",sm:"none",xs:"none"}}}>Contact Us :</Typography>
        <Phone sx={{fontSize:"14px"}} />
        <Typography sx={{display:{md:"flex",sm:"none",xs:"none"}}}>+91 9999999999</Typography>
      </Box>
      <Box  sx={{display:"flex",alignItems:"center",gap:"10px"}}>
        <MailOutline  sx={{fontSize:"14px"}} />
        <Typography sx={{display:{md:"flex",sm:"none",xs:"none"}}} > techpyro@domain.info</Typography>
      </Box>
      <Box  sx={{display:"flex",alignItems:"center",gap:"10px"}}>
        <PeopleAltOutlined  sx={{fontSize:"14px"}} />
        <Typography sx={{display:{md:"flex",sm:"none",xs:"none"},cursor:"pointer","&:hover":{
          color:"#FFB606",textDecoration:"underline"
        } }} >   Demo account</Typography>
        
    
      </Box>
  </Left> 
     <Right >
      <Box sx={{display:"flex",gap:"20px"}}>
      <Box display="flex">
        <Typography  sx={{ cursor:"pointer" ,"&:hover":{
          color:"#FFB606",textDecoration:"underline"
        } }} onClick={handleOpen}>
        Register
        </Typography>
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <form noValidate autoComplete="off" >
            <Card
              sx={{ Width: "100%", height:{md:"80vh",sm:"70vh",xs:"50vh"},overflowY:"scroll", boxShadow: "none" }}
            >
              <br/>
                <Typography
                  variant="h2"
                  sx={{ display: "flex", justifyContent: "center" ,}}
                >
                  Register a new account
                </Typography>
              <CardContent>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    "& .MuiInputoutlined-input": {
                      fontSize: "20px",
                      paddingLeft: "30px",
                      boxShadow: "none",
                      borderRadius:"0px"
                    },
                  }}
                >
                  <Grid xs={12} sm={6} item></Grid>
                  <Grid xs={12} item>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="Username"
                      name="email"
                      // value={values.email}
                      fullWidth
                      variant="outlined"
                      
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Grid><Grid xs={12} item>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="Email"
                      name="email"
                      
                      // value={values.email}
                      fullWidth
                      variant="outlined"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Grid><Grid xs={12} item>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="Password"
                      name="email"
                      // value={values.email}
                      fullWidth
                      
                      variant="outlined"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="Repeat Password"
                      name="email"
                      // value={values.email}
                      fullWidth
                      
                      variant="outlined"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Grid>
                 
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      variant="contained"
                      
                      fullWidth
                      sx={{backgroundColor:"#FAB519",padding:"6px ",fontSize:"18px",cursor:"pointer","&:hover":{
                        backgroundColor:"#E6A303",
                      }}}
                    >
                      Login
                    </Button>
                  </Grid>
                 
                </Grid>
                <br/>
                  <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>Are you a member? <Typography sx={{color:'#FAB519',cursor:"pointer"}}>Login now</Typography> </Typography>
                <br/>
                  <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",}}>Wanna see how Student, Instructor, or Admin look?  </Typography>
                  <Typography sx={{color:'#FAB519',fontWeight:"600",display:"flex",justifyContent:"center"}}>Click here to access Demo Account</Typography>
              </CardContent>
            </Card>
          </form>
        </Box>
      </Modal>
        </Box><Typography sx={{ fontWeight: "50", }}>
            |
          </Typography>
        <Box display="flex">
        <Typography  sx={{ cursor:"pointer","&:hover":{
          color:"#FFB606",textDecoration:"underline"
        }   }} onClick={handleOpen}>
         login
        </Typography>
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <form noValidate autoComplete="off" >
            <Card
              sx={{ Width: "100%",maxHeight:"80vh",overflowY:"scroll", boxShadow: "none" }}
            >
              
                <Typography
                  variant="h2"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  Register a new account
                </Typography>
              <CardContent>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    "& .MuiInputoutlined-input": {
                      fontSize: "20px",
                      paddingLeft: "30px",
                      boxShadow: "none",
                      borderRadius:"0px"
                    },
                  }}
                >
                  <Grid xs={12} sm={6} item></Grid>
                  <Grid xs={12} item>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="Username"
                      name="email"
                      // value={values.email}
                      fullWidth
                      variant="outlined"
                      
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Grid><Grid xs={12} item>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="Email"
                      name="email"
                      
                      // value={values.email}
                      fullWidth
                      variant="outlined"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Grid><Grid xs={12} item>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="Password"
                      name="email"
                      // value={values.email}
                      fullWidth
                      
                      variant="outlined"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="Repeat Password"
                      name="email"
                      // value={values.email}
                      fullWidth
                      
                      variant="outlined"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Grid>
                 
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      variant="contained"
                      
                      fullWidth
                      sx={{backgroundColor:"#FAB519",padding:"6px ",fontSize:"18px",cursor:"pointer","&:hover":{
                        backgroundColor:"#E6A303",
                      }}}
                    >
                      Login
                    </Button>
                  </Grid>
                 
                </Grid>
                <br/>
                  <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>Are you a member? <Typography sx={{color:'#FAB519',cursor:"pointer"}}>Login now</Typography> </Typography>
                <br/>
                  <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",}}>Wanna see how Student, Instructor, or Admin look?  </Typography>
                  <Typography sx={{color:'#FAB519',fontWeight:"600",display:"flex",justifyContent:"center"}}>Click here to access Demo Account</Typography>
              </CardContent>
            </Card>
          </form>
        </Box>
      </Modal>
        </Box>
        </Box>
       
        </Right>  
    </StyleToolbar>
  );
};

export default Content;
