import {
  Liquor,
  Photo,
  Restaurant,
} from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Paper, styled, Typography } from "@mui/material";
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

  zIndex: "0",
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  backgroundColor: "#F4F4F4!important",
    padding:"18px 0px!important",
  fontSize: "18px",
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
            <Box display="flex" gap="20px" >
                <Avatar src="https://img.freepik.com/free-photo/boutique-owner-giving-yellow-paper-bag-smiling-young-woman_23-2148101564.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais" sx={{height:"100px",width:"100px",borderRadius:"20px"}} />
              <Box display="flex" flexDirection="column">
            <Typography variant="h1"  fontSize="18px">Personal shopping</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box display="flex" gap="20px" >
                <Avatar src="https://img.freepik.com/free-photo/portrait-male-personal-shopper-working_23-2148924131.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais" sx={{height:"100px",width:"100px",borderRadius:"20px"}} />
              <Box display="flex" flexDirection="column">
            <Typography variant="h1"  fontSize="18px">Alterations</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box display="flex" gap="20px" >
                <Avatar src="https://img.freepik.com/free-photo/personal-shopper-helping-cutomer_23-2148924100.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais" sx={{height:"100px",width:"100px",borderRadius:"20px"}} />
              <Box display="flex" flexDirection="column">
            <Typography variant="h1"  fontSize="18px">Styling advice</Typography>
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
          flexDirection: "column",
          paddingLeft:'10px',
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
              background: "red",
              color: "white",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "#000",
                color: "#ffffff",
              },
            }}
          >
            READ MORE
          </Button>
        </Box>
       
      </Box>

    </StyleToolbar>
  );
}
