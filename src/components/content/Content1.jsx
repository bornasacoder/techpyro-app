import { Cake, KebabDining, LunchDining, SetMeal } from "@mui/icons-material";
import { Avatar, Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "38px 92px ",
  background: `url(${"https://img.freepik.com/free-photo/couple-jewelry-shop-choosing-necklace-together_1303-30656.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais"})
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
export default function Content1() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ padding: "26px 0px 28px",gap:"10px" }}
      >
        <Typography
          sx={{
            // display:"flex",
            margin: "0px 0px 26px",
            letterSpacing: "4px",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: { md: "58px", sm: "50px", xs: "28px" },
            fontWeight: "500",
            color:"red",
            // width: { md: "60%", sm: "80%", xs: "100%" },
          }}
        >
          Our 
        </Typography>
        <Typography  sx={{
            // margin: "0px 0px 26px",
            letterSpacing: "4px",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: { md: "58px", sm: "50px", xs: "28px" },
            fontWeight: "500",
            color:"#fff"
            // width: { md: "60%", sm: "80%", xs: "100%" },
          }}>
          Services
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
          <Grid item xs={12} sm={6} md={3} data-aos="fade-down" sx={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
              <Avatar src="https://img.freepik.com/free-photo/cheerful-female-jeweler-handing-purchase-shopping-bag-he_7502-7616.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais" sx={{height:"200px",width:"200px", border: "15px solid lightGray",
                "&:hover": {
                  border: "15px solid #01808A",
  },
              }}/>
            <br />
              <Typography
                variant="h3"
                sx={{ display: "flex", justifyContent: "center",color:"#fff",textAlign:"center" }}
              >
           Retail Sales
              </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-down" sx={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
              <Avatar src="https://img.freepik.com/free-photo/master-processes-valuable-metal-home-workshop_1153-3524.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais" sx={{height:"200px",width:"200px", border: "15px solid lightGray",
                "&:hover": {
                  border: "15px solid #01808A",
  },
              }}/>
            <br />
              <Typography
                variant="h3"
                sx={{ display: "flex", justifyContent: "center",color:"#fff",textAlign:"center" }}
              >
          Custom Design
              </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-down" sx={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center",textAlign:'center'}}>
              <Avatar src="https://img.freepik.com/premium-photo/craft-jewelery-making-ring-polishing_38705-47.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais" sx={{height:"200px",width:"200px", border: "15px solid lightGray",
                "&:hover": {
                  border: "15px solid #01808A",
  },
              }}/>
            <br />
              <Typography
                variant="h3"
                sx={{ display: "flex", justifyContent: "center",color:"#fff" }}
              >
          Jewelry Cleaning and Polishing
              </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} data-aos="fade-down" sx={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
              <Avatar src="https://img.freepik.com/free-photo/jeweler-working-his-workshop-cutting-gold-ring-with-saw_181624-55539.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais" sx={{height:"200px",width:"200px", border: "15px solid lightGray",
                "&:hover": {
                  border: "15px solid #01808A",
  },
              }}/>
            <br />
              <Typography
                variant="h3"
                sx={{ display: "flex", justifyContent: "center",color:"#fff" ,textAlign:"center"}}
              >
               Jewelry Repairs
              </Typography>
          </Grid>

          
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
