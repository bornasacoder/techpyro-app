import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'
const StyleToolbar = styled(Box)(({ theme }) => ({
    padding: "38px 58px ",
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.75)
        ),url(${"https://img.freepik.com/free-photo/beautiful-women-trying-out-make-up-accessories_23-2148431588.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
         center/cover no-repeat`,
    gap: 2,
  }));
  const Item = styled(Paper)(({ theme }) => ({
    borderRadius: "0px!important",
    boxShadow: "none!important",
    textAlign: "center",
    backgroundColor:"#F4F4F4!important",
    fontSize: "18px",
    width: { md: "60%!important", sm: "80%!important", xs: "100%!important" },
  
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
          Our Employ
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
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up" sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Avatar src='https://img.freepik.com/free-photo/vertical-portrait-young-lady-smiling-camera-high-quality-photo_144627-75331.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais' sx={{height: "250px",
               width: "250px",
               border: "15px solid lightGray","&:hover": {
                border: "15px solid red",
},
    }}/>
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
              <Typography>Customer service representatives</Typography>
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
          <Grid item xs={12} sm={6} md={3} data-aos="fade-down" sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
           
             <Avatar src='https://img.freepik.com/premium-photo/portrait-smiling-woman-cosmetologist-with-with-different-banks-creams-female-beautician-her-workplace-cosmetology-clinic_194143-9286.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais' sx={{height: "250px",
               width: "250px",
               border: "15px solid lightGray","&:hover": {
                border: "15px solid red",
},
    }}/>
            <br />
            <Item sx={{backgroundColor:"transparent!important",color:"white"}}>
              
              <Typography
                sx={{ display: "flex", justifyContent: "center", fontSize:"18PX","&:hover": {
                    color: "red",
                  },}}
              >
              MARTINA JOHNSON
              </Typography>
              <Typography>Cashiers</Typography>
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
          <Grid item xs={12} sm={6} md={3} data-aos="fade-up" sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Avatar src='https://img.freepik.com/premium-photo/cabinet-cosmetologist-dermatologist-massage-therapist-portrait-business-confident-woman-owner-manager-background-working-masseur-beautician-with-client_116407-9574.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais' sx={{height: "250px",
               width: "250px",
               border: "15px solid lightGray","&:hover": {
                border: "15px solid red",
},
    }}/>
            <br />
            <Item sx={{backgroundColor:"transparent!important",color:"white"}}>
              
              <Typography
                sx={{ display: "flex", justifyContent: "center", fontSize:"18PX", "&:hover": {
                    color: "red",
                  },}}
              >
               ALEXANDER HORO
              </Typography>
              <Typography>Department managers</Typography>
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
          <Grid item xs={12} sm={6} md={3} data-aos="fade-down" sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Avatar src='https://img.freepik.com/free-photo/woman-with-paper-bags-credit-card-near-laptop_23-2147786793.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais' sx={{height: "250px",
               width: "250px",
               border: "15px solid lightGray","&:hover": {
                border: "15px solid red",
},
    }}/>
            <br />
            <Item sx={{backgroundColor:"transparent!important",color:"white"}}>
              
              <Typography
                sx={{ display: "flex", justifyContent: "center", fontSize:"18PX","&:hover": {
                    color: "red",
                  }, }}
              >
               Julliya
              </Typography>
              <Typography>Online customer service representatives</Typography>
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
