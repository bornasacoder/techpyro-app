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
const Spa2 = () => {
  return (
    <>
      <Middle>
        <Box
          sx={{
            flex: { md: "2", sm: "2" },
            background: `url("https://img.freepik.com/premium-photo/emergency-medical-team-assisting-patient-transfers-stretchers-er_899027-2472.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=sph") center/cover no-repeat`,
            height: "400px",
          }}
        />
        <Box
          sx={{
            flex: { md: "1.55", sm: "1.7", xs: "4" },
            padding: { md: "58px 58px", sm: "58px 20px", xs: "58px 20px" },
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>INTERNATIONAL</Typography>
          <Typography sx={{ fontSize: "33px" }}>Triage</Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            illum ducimus natus maiores ratione quos atque unde! Vitae cumque at
            assumenda veritatis ullam quis cum, repellat quisquam tempore ex
            adipisci debitis, atque expedita deserunt, iste illum eaque aperiam
            libero laboriosam.
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
            flex: { md: "1.55", sm: "1.7", xs: "4" },
            padding: { md: "58px 58px", sm: "58px 20px", xs: "58px 20px" },
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>A PERFECT BEGINNING</Typography>
          <Typography sx={{ fontSize: "33px" }}>
            Evaluation and Treatmen
          </Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nam
            atque sapiente placeat illo reiciendis a facere? Vero corporis
            minima optio ut, eum aliquid fugit ea, mollitia voluptatum ipsam
            consequatur delectus. Neque sapiente laborum dolores sint, in
            ratione hic tempore.
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
            background: `url("https://img.freepik.com/premium-photo/discussing-medical-issues-patient-discuss-with-doctors-her-medical-exam-hospital-doctors-talking-about-medical-issues_116317-19935.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais") center/cover no-repeat`,
            height: "400px",
          }}
        />
      </Top>
      <Middle>
        <Box
          sx={{
            flex: { md: "2", sm: "2" },
            background: `url("https://img.freepik.com/free-photo/medical-assistant-doing-consultation-with-ill-patient-wearing-face-masks-hospital-ward-nurse-discussing-with-young-woman-about-healthcare-treatment-taking-notes-during-pandemic_482257-44614.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais") center/cover no-repeat`,
            height: "400px",
          }}
        />
        <Box
          sx={{
            flex: { md: "1.55", sm: "1.7", xs: "4" },
            padding: { md: "58px 58px", sm: "58px 20px", xs: "58px 20px" },
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>INTERNATIONAL</Typography>
          <Typography sx={{ fontSize: "33px" }}>Stabilization</Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            provident voluptates quaerat quo. Asperiores rerum officia fuga,
            aliquam suscipit eveniet sit aperiam quaerat perferendis, saepe
            mollitia tenetur exercitationem aspernatur culpa cum voluptatem non
            commodi, veniam laborum. Fugit adipisci ipsam iste?
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
            flex: { md: "1.55", sm: "1.7", xs: "4" },
            padding: { md: "58px 58px", sm: "58px 20px", xs: "58px 20px" },
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>
            INDULGENCE AT ITS FINEST
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>
            Diagnostic Imaging and Laboratory Services
          </Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            totam necessitatibus explicabo fugiat esse eaque reiciendis atque
            dolorum animi commodi assumenda veniam minima doloremque laboriosam
            et placeat rem, aperiam at. Ullam, libero nam provident nisi modi
            repellendus vel? Culpa, eius.
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
            background: `url("https://img.freepik.com/free-photo/senior-chemist-analysing-blood-sample-while-coworkers-discussing_482257-554.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais") center/cover no-repeat`,
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

export default Spa2;
