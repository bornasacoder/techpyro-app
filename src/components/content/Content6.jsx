import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'
const StyleToolbar = styled(Box)(({ theme }) => ({
    // bgcolor: "#F4F4F4",
    padding: "38px 58px ",
    // background: `url(${"/images/category/middle2.jpg"})
    //  center/cover no-repeat`,
    //  backgroundColor: "none!important",
    // [theme.breakpoints.down("sm")]: {
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.75)
        ),url(${"/images/category/ourteam.jpg"})
         center/cover no-repeat`,
    //   // left:'50px',
    //   padding: "68px 42px ",
    // },
    // display: "flex",
    // justifyContent:"space-between",
    gap: 2,
  }));
  const Item = styled(Paper)(({ theme }) => ({
    borderRadius: "0px!important",
    boxShadow: "none!important",
    textAlign: "center",
    backgroundColor:"#F4F4F4!important",
    // bgcolor:"none!important",
    // backgroundColor: "none!important",
    //   padding:"20px 0px!important",
    fontSize: "18px",
    // "&:hover": {
    //   opacity: "0.3",
    //   bgcolor: "black",
    // },
    width: { md: "60%!important", sm: "80%!important", xs: "100%!important" },
    //   [theme.breakpoints.down("sm")]: {
    //     width: "150px",
    //   },
  }));
export default function Content6() {
  return (
    <StyleToolbar>
       <Box
        display="flex"
        justifyContent="center"
        sx={{ padding: "26px 0px 28px", gap:"5px" }}
      >
        <Typography
          sx={{
            letterSpacing: "4px",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: { md: "68px", sm: "50px", xs: "30px" },
            fontWeight: "500",
            color:"red",
           
          }}
        >
          Meet 
        </Typography>
        <br></br>
        <Typography sx={{
            letterSpacing: "4px",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: { md: "68px", sm: "50px", xs: "30px" },
            fontWeight: "500",
            color:"#fff"
          }}>
          Our Chefs
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // bgcolor: "#F4F4F4!important",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          sx={{
            // bgcolor: "#F4F4F4",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up">
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               height: "250px",
               width: "250px",
                borderRadius: "50%!important",
                border: "15px solid lightGray",
                "&:hover": {
                    border: "15px solid red",
    },
                background: `url(${"/images/category/ourteam-1.png"})
                center/cover no-repeat`,
              }}
            >
              
            </Item>
            <br />
            <Item sx={{backgroundColor:"transparent!important",color:"white"}}>
              
              <Typography
                sx={{ display: "flex", justifyContent: "center", borderRadius: "0px!important",
                boxShadow: "none!important",backgroundColor:"transparent" ,fontSize:"18PX", "&:hover": {
                    color: "red",
                  },}}

              >
                JOHN DOE
              </Typography>
              <Typography>Auto Car Manager</Typography>
              <Typography>Mob : +1 (001) 6478</Typography>
              <br/>
              <Box display="flex" justifyContent="center">
                <Button
                  sx={{
                    // border: "3px solid #000",
                    background: "#000",
                    color: "white",
                    borderRadius: "0px",
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#ffffff",
                    },
                    // display: { md: "block", sm: "none", xs: "none" },
                  }}
                >
                  EMAIL
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-down">
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               height: "250px",
               width: "250px",
                borderRadius: "50%!important",
                border: "15px solid lightGray",
                border: "15px solid lightGray",
                "&:hover": {
                    border: "15px solid red",
    },
        
                background: `url(${"/images/category/ourteam-2.png"})
                center/cover no-repeat`,
              }}
            >
             
            </Item>
            <br />
            <Item sx={{backgroundColor:"transparent!important",color:"white"}}>
              
              <Typography
                sx={{ display: "flex", justifyContent: "center", fontSize:"18PX","&:hover": {
                    color: "red",
                  },}}
              >
              MARTINA JOHNSON
              </Typography>
              <Typography>Engine Specialist</Typography>
              <Typography>Mob : +1 (001) 6478</Typography>
              <br/>
              <Box display="flex" justifyContent="center">
                <Button
                  sx={{
                    // border: "3px solid #000",
                    background: "#000",
                    color: "white",
                    borderRadius: "0px",
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#ffffff",
                    },
                    // display: { md: "block", sm: "none", xs: "none" },
                  }}
                >
                  EMAIL
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up">
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               height: "250px",
               width: "250px",
                borderRadius: "50%!important",
                border: "15px solid lightGray",
                border: "15px solid lightGray",
                "&:hover": {
                    border: "15px solid red",
    },
        
                background: `url(${"/images/category/ourteam-3.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
            <br />
            <Item sx={{backgroundColor:"transparent!important",color:"white"}}>
              
              <Typography
                sx={{ display: "flex", justifyContent: "center", fontSize:"18PX", "&:hover": {
                    color: "red",
                  },}}
              >
               ALEXANDER HORO
              </Typography>
              <Typography>Wheel Alignment Specialist</Typography>
              <Typography>Mob : +1 (001) 6478</Typography>
              <br/>
              <Box display="flex" justifyContent="center">
                <Button
                  sx={{
                    // border: "3px solid #000",
                    background: "#000",
                    color: "white",
                    borderRadius: "0px",
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#ffffff",
                    },
                    // display: { md: "block", sm: "none", xs: "none" },
                  }}
                >
                  EMAIL
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-down">
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "250px",
                width: "250px",
                borderRadius: "50%!important",
                border: "15px solid lightGray",
                border: "15px solid lightGray",
                "&:hover": {
                    border: "15px solid red",
    },
        
                background: `url(${"/images/category/ourteam-4.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
            <br />
            <Item sx={{backgroundColor:"transparent!important",color:"white"}}>
              
              <Typography
                sx={{ display: "flex", justifyContent: "center", fontSize:"18PX","&:hover": {
                    color: "red",
                  }, }}
              >
               VICTORIA DOE
              </Typography>
              <Typography>Customer Support</Typography>
              <Typography>Mob : +1 (001) 6478</Typography>
              <br/>
              <Box display="flex" justifyContent="center">
                <Button
                  sx={{
                    // border: "3px solid #000",
                    background: "#000",
                    color: "white",
                    borderRadius: "0px",
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#ffffff",
                    },
                    // display: { md: "block", sm: "none", xs: "none" },
                  }}
                >
                  EMAIL
                </Button>
              </Box>
            </Item>
          </Grid>

          
        </Grid>
      </Box>
    </StyleToolbar>
  )
}
