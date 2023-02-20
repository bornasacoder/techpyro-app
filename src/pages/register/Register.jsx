import { Facebook, Google, Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Register = () => {
  return (
    <>
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
    </>
  )
}

export default Register
