import { Label } from "@mui/icons-material";
import {
  Box,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // bgColor: "#F8F8F8",
  // bgcolor: "#FFFFFF!important",
  padding: "48px  42px",
  display: "flex",
  justifyContent: "space-around",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  backgroundColor: "#F4F4F4!important",
  // textAlign: "center",
  alignContent: "flex-start",
  padding: "10px 0px!important",
  // fontSize: "14px",
  display: "flex",
  flexDirection: "column",
}));
const Footer = () => {
  return (
    <StyleToolbar>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          //   alignItems: "center",
          // textAlign: "center",
          bgcolor: "#F4F4F4!important",
        }}
      >
        <Grid
          container
          // rowSpacing={6}
          spacing={12}
          // rowGap={3}
          sx={{
            bgcolor: "#F4F4F4",
            justifyContent: "space-between",
            display: "flex",
            // textAlign: "center",
            // width: { md: "40%", sm: "80%", xs: "100%" },
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{}}>
              <Typography
                variant="h3"
                sx={{
                  display: "flex",
                  letterSpacing: "3px",
                  alignContent: "flex-start",
                }}
              >
                WELCOME TO CINNNAMON
              </Typography>
            </Item>
            <Item>
              Fusce aliquam tincidunt hendrerit. Nunc tincidunt id velit sit
              amet vestibulum. In venenatis tempus odio ut dictum. Curabitur ac
              nisl molestie, facilisis nibh ac, facilisis ligula. Integer congue
              malesuada eros congue varius. Sed malesuada dolor eget velit
              euismod pretium. Etiam porttitor finibus pretium. Nam suscipit vel
              ligula at dharetra.
            </Item>
            <Item sx={{}}></Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{}}>
              <Typography
                variant="h3"
                sx={{
                  // margin: "0px 0px 26px",
                  // letterSpacing: "12px",
                  // textAlign: "center",
                  alignItems: "center",
                  // fontSize: { md: "48px", sm: "35px", xs: "30px" },
                  // fontWeight: "650",
                  // width: { md: "90%", sm: "80%", xs: "100%" },
                }}
              >
                OPENING HOURS
              </Typography>
            </Item>
            <Item>
              {" "}
              Fusce aliquam tincidunt hendrerit. Nunc tincidunt id velit sit
              amet vestibulum. In venenatis tempus odio ut dictum curabitur ac
              nisl molestie, facilisis nibh ac.
            </Item>
            <Item>
              {" "}
              <Typography variant="h4">LUNCH</Typography>
            </Item>
            <Box display="flex" justifyContent="space-around">
              <Typography variant="span">Mon to Sun </Typography>
              <Typography variant="span">12:00 to 15:00</Typography>
            </Box>
            <Item sx={{ fontsize: "18px" }}>
              {" "}
              <Typography variant="h4">DINNER</Typography>
            </Item>
            <Box display="flex" justifyContent="space-around">
              <Typography variant="span">Mon to Thur </Typography>
              <Typography variant="span"> 18:00 to 22:30</Typography>
            </Box>
            <Box display="flex" justifyContent="space-around">
              <Typography variant="span">Fri & Sat </Typography>
              <Typography variant="span"> 17:30 to 22:30</Typography>
            </Box>
            <Box display="flex" justifyContent="space-around">
              <Typography variant="span">Sunday</Typography>
              <Typography variant="span"> 18:00 to 21:30</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{}}>
              <Typography
                variant="h3"
                sx={{
                  display: "flex",
                  letterSpacing: "3px",
                  alignContent: "flex-start",
                  // fontSize: { md: "48px", sm: "35px", xs: "30px" },
                  // fontWeight: "650",
                  // width: { md: "90%", sm: "80%", xs: "100%" },
                }}
              >
                RESERVATION
              </Typography>
            </Item>
            <Item>
              Book online or give us a call on 020 3375 1515 between 9.30am–6pm
              on weekdays, and between 12pm–5pm on weekends.
            </Item>
            <Item>
             
            </Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Footer;
