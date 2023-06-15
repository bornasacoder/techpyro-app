import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const Top = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
const Middle = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));
const Bottom = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
const Dining2 = () => {
  return (
    <>
      <Middle>
        <Box
          sx={{
            background: `url("https://img.freepik.com/free-photo/medical-massage-leg-physiotherapy-center_1139-1212.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais") center/cover no-repeat`,
            height: "400px",
            flex: { md: "2", sm: "2" },
          }}
        />
        <Box
          sx={{
            flex: { md: "1.7", sm: "1.7", xs: "4" },
            padding: { md: "58px 58px", sm: "58px 20px", xs: "58px 20px" },
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>INTERNATIONAL</Typography>
          <Typography sx={{ fontSize: "33px" }}>Physical Therapy Department</Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            consequatur accusantium distinctio, et, cumque qui praesentium ipsam
            laborum labore quo inventore obcaecati nisi impedit. Sapiente iste a
            esse voluptatibus fugiat, mollitia natus atque nesciunt tempora odit
            id amet, commodi necessitatibus.
          </Typography>
          <br />
          <br />
          <Typography sx={{ fontWeight: "600" }}>
            Opening Hours: 06:30 to 10:30
          </Typography>
        </Box>
      </Middle>
      <Top>
        <Box
          sx={{
            flex: { md: "1.7", sm: "1.7", xs: "4" },
            padding: { md: "58px 58px", sm: "58px 20px", xs: "58px 20px" },
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>A PERFECT BEGINNING</Typography>
          <Typography sx={{ fontSize: "33px" }}>
          Occupational Therapy Department
          </Typography>
          <br />
          <br />
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            distinctio ipsa officia, quaerat maiores dolorum eum placeat quae
            possimus sit enim eaque similique deleniti quod quo ad non
            recusandae nobis, accusantium optio aperiam atque sunt expedita
            porro. Harum, at facilis!
          </Typography>
          <br />
          <br />
          <Typography sx={{ fontWeight: "600" }}>
            Opening Hours: 06:30 to 10:30
          </Typography>
        </Box>
        <Box
          sx={{
            flex: { md: "2", sm: "2" },
            background: `url("https://img.freepik.com/free-photo/doctor-helping-patient-during-rehabilitation_23-2150321621.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais") center/cover no-repeat`,
            height: "400px",
          }}
        />
      </Top>
      <Middle>
        <Box
          sx={{
            flex: { md: "2", sm: "2" },
            background: `url("https://img.freepik.com/free-photo/doctor-giving-high-five-with-little-patient-medical-office-healthcare-practitioner-physician-specialist-medicine-providing-health-care-services-consultation-diagnostic-treatment-hospital_482257-14544.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais") center/cover no-repeat`,
            height: "400px",
          }}
        />
        <Box
          sx={{
            flex: { md: "1.7", sm: "1.7", xs: "4" },
            padding: { md: "58px 58px", sm: "58px 20px", xs: "58px 20px" },
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>INTERNATIONAL</Typography>
          <Typography sx={{ fontSize: "33px" }}>
          Speech Therapy Department
          </Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            dolorem sequi ipsum consectetur itaque! Nesciunt consequuntur sint
            enim voluptates velit esse ab repudiandae, pariatur nihil.
            Reprehenderit earum nihil libero, cupiditate neque sequi explicabo
            quam repellendus impedit! Voluptatum quae exercitationem provident.
          </Typography>
          <br />
          <br />
          <Typography sx={{ fontWeight: "600" }}>
            Opening Hours: 06:30 to 10:30
          </Typography>
        </Box>
      </Middle>
      <Bottom>
        <Box
          sx={{
            flex: { md: "1.7", sm: "1.7", xs: "4" },
            padding: { md: "58px 58px", sm: "58px 20px", xs: "58px 20px" },
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>
            INDULGENCE AT ITS FINEST
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Cardiac Rehabilitation Center</Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            tempore reiciendis, est a suscipit enim labore cupiditate ex eveniet
            quam blanditiis sed, dolores minus nobis tenetur aspernatur minima
            maiores ab obcaecati quos repellat, natus adipisci ipsa? Neque,
            laudantium! Adipisci, itaque.
          </Typography>
          <br />
          <br />
          <Typography sx={{ fontWeight: "600" }}>
            Opening Hours: 06:30 to 10:30
          </Typography>
        </Box>
        <Box
          sx={{
            flex: { md: "2", sm: "2" },
            background: `url("https://img.freepik.com/free-photo/female-assistant-holding-tablet-with-cardiovascular-system-illustration-explaining-heart-condition-retired-person-during-covid-19-pandemic-nurse-showing-cardiology-diagnosis-gadget_482257-43173.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais") center/cover no-repeat`,
            height: "400px",
          }}
        />
      </Bottom>
      <br />
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#00BFA5",
          padding: { md: "58px", sm: "58px 20px", xs: "58px 20px" },
          margin: "0px",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { md: "row", sm: "row", xs: "column" },
        }}
      >
        <Typography sx={{ color: "#FFFFFF", fontSize: "22px" }}>
          Book Your Travel - you could be running your online business by
          tomorrow.
        </Typography>
        <br />
        <Button
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#000",
            borderRadius: "0px",
            padding: "10px 10px",
            fontSize: "18px",
            "&:hover": {
              backgroundColor: "#000",
            },
          }}
        >
          GET STARTED NOW
        </Button>
      </Box>
    </>
  );
};

export default Dining2;
