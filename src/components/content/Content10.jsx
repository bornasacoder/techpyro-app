import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // backgroundColor:"red",
  padding: "58px 58px ",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
  justifyContent:"center",
  padding: "25px 5px ",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent:"center",
    padding: "25px 20px 10px ",
  },
}));
const Image = styled("img")(({ theme }) => ({
 maxHeight:"550px",
 maxWidth:"450px",
 [theme.breakpoints.down("md")]: {
  height: "500px",
  width: "400px",
},
[theme.breakpoints.down("sm")]: {
  height: "350px",
  width: "250px",
},
}));
export default function Content10() {
  return (
    <StyleToolbar>
      
      <Box
        display="flex"
        // justifyContent="center"
        flexDirection="column"
        gap={5}
        sx={
          {
            // flexDirection: { md: "row", sm: "column", xs: "column" },
            // textAlign: "center",
            
          }
        }
      >
         <Grid
          container
          rowSpacing={2}
          sx={{
            // bgcolor: "#F4F4F4",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            // padding: "78px 58px ",
            // rowSpacing:{ xs: 1, sm: 3, md: 4 },
            columnSpacing:{ xs: 1, sm: 2, md:6 },
           
          }}
          
         
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid xs={12} sm={6} md={6} sx={{ paddingTop:{md:"30px",sm:"30px",xs:"100px"}}}>
<Image src="https://img.freepik.com/free-psd/coffee-store-banner-template_23-2148715687.jpg?size=626&ext=jpg"/>
      </Grid>
        <Grid xs={12} sm={6} md={6} sx={{ paddingTop:{md:"30px",sm:"30px",xs:"100px"}}}>
          <Typography fontSize="20px">FEATURED PRODUCT</Typography>
          <Typography
            sx={{
              color: "#FC6539",
              fontSize: { md: "48px", sm: "34px", xs: "24px" },
              // fontFamily: "Dancing Script",
              // textAlign:"center"
            }}
          >
            Michelin-starred, 
            <br />
            Buffet: A self-service
          </Typography>
          <Typography variant="h1" color= "#FC6539">_______</Typography>
          <br/>
          <Typography fontSize="20px">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. sint occaeca Excepteur sint occaecat
            cupidatat non proident.
          </Typography>
          <br/>
          <Box>
          <Button
            // endIcon={<ArrowForward />}
            sx={{
              // border: "3px solid #000",

              backgroundColor: "#FC6539",
              color: "#ffffff",
              borderRadius: "40px",
              padding:"15px 38px",
              "&:hover": {
                background: "#000",
                color: "#FC6539",
              },
              // display: { md: "block", sm: "none", xs: "none" },
            }}
          >
           Buy Now
          </Button>
        </Box>
        </Grid>
        <Grid xs={12} sm={6} md={6} sx={{ paddingTop:{md:"30px",sm:"30px",xs:"100px"}}}>
          <Typography fontSize="20px">MINIMAL PRODUCT</Typography>
          <Typography
            sx={{
              color: "#FC6539",
              fontSize: { md: "48px", sm: "34px", xs: "24px" },
              // fontFamily: "Dancing Script",
              // textAlign:"center"
            }}
          >
          Buffet: A self-service 
            <br />
            And cofee
          </Typography>
          <Typography variant="h1" color= "#FC6539">_______</Typography>
          <br/>
          <Typography fontSize="20px">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. sint occaeca Excepteur sint occaecat
            cupidatat non proident.
          </Typography>
          <br/>
          <Box>
          <Button
            // endIcon={<ArrowForward />}
            sx={{
              // border: "3px solid #000",

              backgroundColor: "#FC6539",
              color: "#ffffff",
              fontSize:"18px",
              borderRadius: "40px",
              padding:"15px 38px",
              "&:hover": {
                background: "#000",
                color: "#FC6539",
              },
              // display: { md: "block", sm: "none", xs: "none" },
            }}
          >
           Buy Now
          </Button>
          <br />
        </Box>
        
        </Grid>
       
        <Grid xs={12} sm={6} md={6} sx={{ paddingTop:{md:"30px",sm:"30px",xs:"100px"}}}>
<Image src="https://img.freepik.com/free-vector/set-coffee-elements-coffee-accessories-vector_53876-66783.jpg?size=626&ext=jpg"/>
      </Grid>
        </Grid>
      </Box>

        

    </StyleToolbar>
  );
}
