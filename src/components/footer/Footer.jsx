import { Facebook, Google, Instagram, Label, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
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
  // backgroundColor:"#000",
  // marginTop:"80px",
  backgroundColor: "#232323",
  color: "#fff",
  justifyContent: "space-around",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Footer = () => {
  return (
    <StyleToolbar>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "38px 58px ",
          // backgroundColor:"#000"
          //   alignItems: "center",
          // textAlign: "center",
          // bgcolor: "#000!important",
        }}
      >
        <Grid
          container
          // rowSpacing={6}
          spacing={12}
          // rowGap={3}
          sx={{
            // bgcolor: "#F4F4F4",
            // bgcolor: "#000!important",
            justifyContent: "space-between",
            display: "flex",
            color: "#fff",
            // textAlign: "center",
            // width: { md: "40%", sm: "80%", xs: "100%" },
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                letterSpacing: "3px",
                alignContent: "flex-start",
                color: "#fff",
              }}
            >
              ABOUT US
            </Typography>
            <br />
            <br />
            <Typography>
              Sed suscipit mauris nec mauris vulputate, a posuere libero congue.
              Nam laoreet elit eu erat pulvinar, et efficitur nibh euismod.
              Proin venenatis orci sit amet nisl finibus vehicula.
            </Typography>
            <br />
            <Typography>
              Nam metus lorem, hendrerit quis ante eget, lobortis elementum
              neque. Aliquam in ullamcorper quam. Integer euismod ligula in
              mauris vehicula imperdiet. Cras in convallis ipsum. Phasellus
              tortor turpis
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h3"
              sx={{
                // margin: "0px 0px 26px",
                // letterSpacing: "12px",
                // textAlign: "center",
                alignItems: "center",
                color: "#fff",
                // fontSize: { md: "48px", sm: "35px", xs: "30px" },
                // fontWeight: "650",
                // width: { md: "90%", sm: "80%", xs: "100%" },
              }}
            >
              LATEST POSTS
            </Typography>
            <br />
            <br />
            <Typography color="red">
            ARUGULA, MOZZARELLA, TOMATO ON FOCACCIA
            </Typography>
            <br />
            <Typography  >
Lorem Ipsum is simply dummy text of the printing and...
            </Typography>
            <br />
            <br />
            <Typography  color="red">
            BAKED SPAGHETTI
            </Typography>
            <br />
              <Typography variant="span">Lorem Ipsum is simply dummy text of the printing and...</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                letterSpacing: "3px",
                alignContent: "flex-start",
                color: "#fff",
                // fontSize: { md: "48px", sm: "35px", xs: "30px" },
                // fontWeight: "650",
                // width: { md: "90%", sm: "80%", xs: "100%" },
              }}
            >
             CONTACT INFO
            </Typography>
            <br />
            <br />
            <Typography>
            123 Bridge Street,
            </Typography>
            <Typography>
            New York, NY 666555
            </Typography>
            <Typography>
            Phone: +1-315-277-3623
            </Typography>
            <Typography>
            Email:<Typography color="red"> support@sitename.com</Typography>
            </Typography>
            <Typography>
            Web:<Typography color="red"> skthemes.net</Typography>
            </Typography>
            <br/>
            <br/>
            <Box sx={{display:"flex",gap:2,color:"red"}}>
              <Facebook/>
              <Twitter/>
              <Instagram/>
              <Google/>
              <LinkedIn/>
              <YouTube/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Footer;
