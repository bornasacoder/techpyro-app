import {
  ArrowForwardIosOutlined,
  Liquor,
  LocalFlorist,
  Photo,
  Restaurant,
  Send,
} from "@mui/icons-material";
import { Box, Button, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "68px 42px ",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection:'column'
  },
  [theme.breakpoints.down("md")]: {
    flexDirection:'column'
  },
  // background: `url(${"/images/category/middle1.jpg"})
  // center/cover no-repeat `,
  // position:"relative",

  zIndex: "0",
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  // textAlign: "center",
  // bgcolor:"none!important",
  backgroundColor: "#F4F4F4!important",
    padding:"18px 0px!important",
  fontSize: "18px",
  // fontWeight:"400px"
  // "&:hover": {
  //   opacity: "0.3",
  //   bgcolor: "black",
  // },
  // width:{md:"60%!important",sm:"80%!important",xs:"100%!important"}
  //   [theme.breakpoints.down("sm")]: {
  //     width: "150px",
  //   },
}));
export default function MiddleContent() {
  return (
    <StyleToolbar>
      
      <Box
        sx={{
          width:{md:'30%',sm:"100%",xs:"100%"},
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#F4F4F4!important",
          borderRight:{md:"10px solid gray",sm:"none",xs:"none"}
        }}
      >
        <Grid
          container
          rowSpacing={4}
          sx={{
            bgcolor: "#F4F4F4",
            // justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Box display="flex" >
              <Item>
                <Restaurant sx={{ fontSize: "75px" }} />
              </Item>
              <br/>
              <Box display="flex" flexDirection="column" data-aos="fade-down">
              <Item> <Typography variant="h1"  fontSize="18px"> OUR SERVICES</Typography> </Item>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box display="flex" >
              <Item>
                <Liquor sx={{ fontSize: "75px" }} />
                <br/>
              </Item>
              <Box display="flex" flexDirection="column">
              <Item><Typography variant="h1"  fontSize="18px"> OUR SERVICES 1</Typography></Item>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box display="flex" >
              <Item>
                <Photo sx={{ fontSize: "75px" }} />
              </Item>
              <br/>
              <Box display="flex" flexDirection="column" data-aos="fade-up">
              <Item><Typography variant="h1" fontSize="18px"> OUR SERVICES 2</Typography></Item>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flex: "2",
          // alignItems: "center",
          flexDirection: "column",
          paddingLeft:'10px',
          // gap: 2,
          // position: "relative",
          // flexDirection: { xs: "column", md: "row", sm: "row" },
          // paddingLeft: { xs: "0px" },
        }}
      data-aos="zoom-in">
        <Typography
          sx={{ fontFamily: "Dancing Script", color: "red", fontSize: "48px" }}
        >
          Why choose us?
        </Typography>
        <Typography sx={{ fontFamily: "Dancing Script", fontSize: "68px" }}>
          For many reasons
        </Typography>
        <Typography sx={{}}>
          Proin scelerisque felis quam, a venenatis magna vestibulum at.
          Praesent sollicitudin nibh diam, eget commodo tellus tempor egestas.
          Ut sed tincidunt purus. Aliquam accumsan ipsum dolor, tincidunt
          hendrerit nunc maximus et. Sed condimentum iaculis semper. Proin
          semper tellus in neque ultrices convallis. Mauris feugiat quam sit
          amet turpis aliquet. Integer et neque accumsan, consectetur tincidunt
          hendrerit nunc maximus et urna in, commodo massa non venenatis dolor
          volutpat. Suspendisse hendrerit lobortis sapien, in finibus lacus
          ullamcorper vel.
        </Typography>
        <br />
        <Typography sx={{}}>
          Donec non ligula vitae libero malesuada fermentum. Phasellus non
          tempus augue. Duis sodales turpis ac aliquam varius. Nullam pharetra
          ante tempor erat aliquet Integer et neque accumsan, consectetur urna
          in, commodo massa.
        </Typography>
        <br />
        <Box display="flex">
          <Button
            sx={{
              // border: "3px solid #000",
              background: "red",
              color: "white",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "#000",
                color: "#ffffff",
              },
              // display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            READ MORE
          </Button>
        </Box>
        {/* <Button
              variant="contained"
              endIcon={<ArrowForwardIosOutlined />}
              sx={{
                color: "#AC78F6",
                bgcolor: "white",
                fontSize:{md:"14px",sm:"14px",xs:"10px"},
                width:{md:"200px",sm:"180px",xs:"130px"},
                
              }}
            >
              Start free trial
            </Button> */}
        {/* <ArrowForwardIosOutlined sx={{position:'absolute'}}/> */}

        {/* <Button
              variant="contained"
              endIcon={<Send />}
              sx={{
                color: "#fff",
                bgcolor: "transparent",
                border: "1px solid white",
                fontSize:{md:"14px",sm:"14px",xs:"10px"},
                width:{md:"200px",sm:"180px",xs:"130px"}
              }}
            >
              Contact sales
            </Button> */}
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          
          margin: "20px 0px",
          color: "#C9A46B",
        }}
      >
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
      </Box> */}
      {/* <Box
        sx={{
          display: "flex",
          color: "#666666",
          padding: { sm: "0px 25px", md: "0px 270px", xs: "0px 25px" },
        }}
      ></Box> */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "Sofia",
          fontSize: "25px",
          //   padding: "0px 170px",
          marginTop: "55px",
          padding: { md: "0px 170px", sm: "0px 30px", xs: "0px 30px" },
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum
        sed ipsum aliquid! Sunt laudantium totam optio rem ad. Quos dolorum
        facere veritatis commodi sint. In possimus harum nesciunt ipsum
      </Box> */}
      {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Dancing Script",
            fontWeight: 600,
            fontSize: "3rem",
            paddingTop: "70px",
            marginBottom: "-10px",
          }}
        >
          Our Food Items
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0px",
          color: "#C9A46B",
        }}
      >
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
      </Box> */}
    </StyleToolbar>
  );
}
