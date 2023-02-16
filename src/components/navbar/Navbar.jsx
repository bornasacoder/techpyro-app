import React, { useState } from "react";
import SearchBar from "components/navbar/searchbar/SearchBar";
import NavButton from "components/navbar/navButton/NavButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Navbar.css";
import {
  Box,
  styled,
  Drawer,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  Divider,
  ListItemText,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Grid,
  CardContent,
  Card,
  InputAdornment,
  FilledInput,
  FormControl,
  OutlinedInput,
  InputLabel,
} from "@mui/material";

import {
  Apple,
  Facebook,
  Google,
  Menu,
  Search,
  SearchOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import MenuButtons from "./menuButtons/MenuButtons";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { joinSchema, signUpSchema } from "components/schemas";
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  zIndex: "200",
  [theme.breakpoints.down("md")]: {
    display: "block",
    marginRight: "0px!important",
  },
}));
const NavLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
}));
const MoreButton = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "400",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const NavRight = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
}));
const NavBar = styled(Box)(({ theme }) => ({
  color: theme.colors.alpha.black[60],
  display: "flex",
  justifyContent: "space-between",
  zIndex: "20",
  alignItems: "center",
  padding: "15px 20px",
  backgroundColor: "#FFFFFF",
  position: "sticky",
  top: "0",
  borderBottom: "1px solid #e6e6e6",
}));

export default function Navbar(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseForm = () => {
    setOpener(false);
  };
  const [opener, setOpener] = React.useState(false);

  const handleClickOpen = () => {
  setOpener(true);
  };

  
  const handleJoinClose = () => {
    props.setJoinopen(false);
  };
  const handleJoinOpen = () => {
    props.setJoinopen(true);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate()
  const handlehome = () =>{
    navigate("/")
  }
  const initialValues = {
    email:"",
    password:"",
  
 }
 const [value , setValue]=useState(null)
    const {values,handleBlur,handleChange,handleSubmit,}=useFormik({
       initialValues:initialValues,
      //  initialValues:initialValues1,
       validationSchema:signUpSchema,
       onSubmit:(values , action)=>{
        // console.log(value/s);
  
        setValue(values.email);
        console.log(value)
        action.resetForm();
       }
      
    });
    const initialValues1 = {
    // name1:"",
    email1:"",
    password1:""
 }
    const {values1,handleBlur1,handleChange1,handleSubmit1}=useFormik({
       initialValues:initialValues1,
       validationSchema:joinSchema,
       onSubmit:(values1 , action)=>{
        console.log(values1.name1);
        action.resetForm();
       }
      
    });
  
  return (
    <NavBar>
      {/* dialog for login button  */}
      <Dialog open={opener} onClose={handleCloseForm} >
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Card
              sx={{ maxWidth: "450px", margin: "0 auto ", boxShadow: "none" }}
            >
              <DialogTitle>
                <Typography
                  variant="h2"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  Welcome Back
                </Typography>
              </DialogTitle>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={{
                    "& .MuiInputoutlined-input": {
                      fontSize: "20px",
                      paddingLeft: "30px",
                      boxShadow: "none",
                    },
                  }}
                >
                  <Grid xs={12} sm={6} item></Grid>
                  <Grid xs={12} item>
                    <Typography variant="h5">Email</Typography>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      placeholder="name@gmail.com"
                      name="email"
                      value={values.email}
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Typography variant="h5">Password</Typography>
                    <FormControl
                      sx={{ margin: "10px 0px", width: "420px" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        placeholder="Enter your password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                    <Typography
                      sx={{
                        color: "blue",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Forgot password?
                    </Typography>
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid xs={12} item>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom:"20px"
                      }}
                    >
                      <Typography
                        sx={{
                          width: "45%",
                          borderBottom: "1px solid #ebe6e6a5",
                          marginRight: "20px",
                        }}
                      />{" "}
                      or{" "}
                      <Typography
                        sx={{
                          width: "45%",
                          borderBottom: "1px solid #ebe6e6a5",
                          marginLeft: "20px",
                        }}
                      />
                    </Box>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{backgroundColor:"#fff",display:"flex", justifyContent:"flex-start", border:"1px solid #000",color:"#000","&:hover":{
                        color:"blue"
                      }}}
                    >
                      <Google sx={{color:"red"}}/>
                      <Box sx={{display:"flex", justifyContent:"center",  width:"100%"}} > Continue With Google
                      </Box>
                    </Button>
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{backgroundColor:"#fff",border:"1px solid #000",display:"flex",justifyContent:"flex-start",color:"#000","&:hover":{
                        color:"blue"
                      }}}
                    >
                      <Facebook sx={{backgroundColor:"#00419E",color:"#fff"}}/>
                      <Box sx={{display:"flex",justifyContent:"center",width:"100%"}}>Continue With facebook
                      </Box>
                    </Button>
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{backgroundColor:"#fff",border:"1px solid #000",display:"flex",justifyContent:"flex-start",color:"#000","&:hover":{
                        color:"blue"
                      }}}
                    >
                      <Apple sx={{color:"#000"}}/>
                       <Box sx={{display:"flex",justifyContent:"center",width:"100%"}}> Continue With apple
                      </Box>
                    </Button>
                  </Grid>
                  <Grid xs={12} item>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                    <Typography sx={{display:"flex",gap:"10px"}}> New to TechPyro? <Typography sx={{color:"blue","&:hover":{
                      textDecoration:"underline"
                    }}}>sign In</Typography></Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} item>
                    <Box sx={{borderBottom:"2px solid #ebe6e6a5"}}/>
                  </Grid>
                  <Grid xs={12} item>
                    <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                     <Typography sx={{color:"blue",fontSize:"16px","&:hover":{
                      textDecoration:"underline"
                    }}}>Log in with Organization</Typography>
                    <br/>
                    <br/>
                    <Typography sx={{display:"flex",gap:"10px"}}>Having trouble logging in?<Typography sx={{textDecoration:"underline"}}>Leanner help center</Typography>  </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={handleCloseForm}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      {/* Dilog for Join Button */}

      { (props.joinopen) &&
      <Dialog open={props.joinopen} onClose={handleJoinClose}>
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit1}>
            <Card
              sx={{ maxWidth: "450px", margin: "0 auto ", boxShadow: "none" }}
            >
              <DialogTitle>
                <Typography
                  variant="h2"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  Welcome Back
                </Typography>
              </DialogTitle>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={{
                    "& .MuiInputoutlined-input": {
                      fontSize: "20px",
                      paddingLeft: "30px",
                      boxShadow: "none",
                    },
                  }}
                >
                  <Grid xs={12} sm={6} item></Grid>
                  <Grid xs={12} item>
                    <Typography variant="h5">Name</Typography>
                    <TextField
                      autoFocus
                      margin="dense"
                      name="name"
                      // value={values1.name1}
                      onChange={handleChange1}
                      onBlur={handleBlur1}
                      placeholder="Enter Your Name"
                      type="text"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Typography variant="h5">Email</Typography>
                    <TextField
                      autoFocus
                      margin="dense"
                      name="email"
                      value={values1.email1}
                      onChange={handleChange1}
                      onBlur={handleBlur1}
                      placeholder="name@gmail.com"
                      type="text"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Typography variant="h5">Password</Typography>
                    <TextField
                      autoFocus
                      margin="dense"
                      name="password"
                      value={values1.password1}
                      onChange={handleChange1}
                      onBlur={handleBlur1}
                      placeholder="Enter Your Password"
                      type="password"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Join for free
                    </Button>
                  </Grid>
                  <Grid xs={12} item>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom:"20px"
                      }}
                    >
                      <Typography
                        sx={{
                          width: "45%",
                          borderBottom: "1px solid #ebe6e6a5",
                          marginRight: "20px",
                        }}
                      />{" "}
                      or{" "}
                      <Typography
                        sx={{
                          width: "45%",
                          borderBottom: "1px solid #ebe6e6a5",
                          marginLeft: "20px",
                        }}
                      />
                    </Box>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{backgroundColor:"#fff",display:"flex", justifyContent:"flex-start", border:"1px solid #000",color:"#000","&:hover":{
                        color:"blue"
                      }}}
                    >
                      <Google sx={{color:"red"}}/>
                      <Box sx={{display:"flex", justifyContent:"center",  width:"100%"}} > Continue With Google
                      </Box>
                    </Button>
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{backgroundColor:"#fff",border:"1px solid #000",display:"flex",justifyContent:"flex-start",color:"#000","&:hover":{
                        color:"blue"
                      }}}
                    >
                      <Facebook sx={{backgroundColor:"#00419E",color:"#fff"}}/>
                      <Box sx={{display:"flex",justifyContent:"center",width:"100%"}}>Continue With facebook
                      </Box>
                    </Button>
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      fullWidth
                      sx={{backgroundColor:"#fff",border:"1px solid #000",display:"flex",justifyContent:"flex-start",color:"#000","&:hover":{
                        color:"blue"
                      }}}
                    >
                      <Apple sx={{color:"#000"}}/>
                       <Box sx={{display:"flex",justifyContent:"center",width:"100%"}}> Continue With apple
                      </Box>
                    </Button>
                  </Grid>
                  <Grid xs={12} item>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                    <Typography sx={{display:"flex",gap:"10px"}}> New to TechPyro? <Typography sx={{color:"blue","&:hover":{
                      textDecoration:"underline"
                    }}}>sign In</Typography></Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} item>
                    <Box sx={{borderBottom:"2px solid #ebe6e6a5"}}/>
                  </Grid>
                  <Grid xs={12} item>
                    <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                     <Typography sx={{color:"blue",fontSize:"16px","&:hover":{
                      textDecoration:"underline"
                    }}}>Log in with Organization</Typography>
                    <br/>
                    <br/>
                    <Typography sx={{display:"flex",gap:"10px"}}>Having trouble logging in?<Typography sx={{textDecoration:"underline"}}>Leanner help center</Typography>  </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleJoinClose}>Cancel</Button>
          <Button onClick={handleJoinClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
}
      <MenuButton onClick={handleOpen}>
        <Menu sx={{ fontSize: "30px" }} />
      </MenuButton>
      <Drawer open={open} onClose={handleClose} sx={{ position: "absolute" }}>
        <MenuButtons setOpen={setOpen} setJoinopen={props.setJoinopen} setlogin={setOpener} sx={{ marginTop: { sm: "20px", sx: "20px" } }} />
      </Drawer>
      <NavLeft>
        <Typography
          variant="h2"
          onClick={handlehome}
          sx={{
            color: "#0056D2",
            cursor:"pointer",
            justifyContent: { sm: "center", xs: "center" },
          }} 
        >
          TechPyro
        </Typography>
        <MoreButton
          sx={{
            cursor: "pointer",
            "&:hover .MuiBox-root": { display: "flex" },
            "&:hover .MuiSvgIcon-root": { transform: "rotate(180deg)" },
          }}
        >
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#0056D2",
              border: "2px solid #000",
              padding: "3px 5px",
              borderRadius: "5px",
              "&:hover": {
                color: "#0056D2",
                backgroundColor: "#fff",
              },
            }}
            endIcon={
              <Badge>
                <ExpandMoreIcon />
              </Badge>
            }
          >
            Explore
          </Button>
          <Box
            sx={{
              display: "none",
              flexDirection: "column",
              bgcolor: "background.paper",
              position: "absolute",
              color: "red",
              margin: "250px 0 0 0px",
            }}
          >
            <List component="nav" aria-label="mailbox folders" sx={{width:"30vw",height:"auto"}}>
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Box>
        </MoreButton>
        <SearchBar />
      </NavLeft>
      <NavRight>
        <SearchOutlined
          sx={{
            display: { md: "none", sm: "block", xs: "block" },
            fontSize: "30px",
          }}
        />
        <NavButton />
        <Typography
          variant="p"
          sx={{
            color: "#0056D2",
            display: { md: "flex", sm: "none", xs: "none" },
            margin: "0px 10px",
            cursor:"pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          onClick={handleClickOpen}
        >
          {value===null ?"Login":value}
        </Typography>
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#0056D2",
            padding: "3px 5px",
            borderRadius: "5px",
            display: { md: "flex", sm: "none", xs: "none" },
            "&:hover": {
              backgroundColor: "blue",
            },
          }}
          onClick={handleJoinOpen}
        >
          Join for free
        </Button>
      </NavRight>
    </NavBar>
  );
}
