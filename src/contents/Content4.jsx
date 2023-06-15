import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const Top = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column"
  }
}));
const Middle = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column-reverse"
      }
}));
const Bottom= styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column"
      }
}));
const Content4 = () => {
  return (
    <>
      <Top>
        <Box sx={{ flex: {md:"1.55",sm:"1.7",xs:"4"}, padding: {md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}, }}>
          <Typography sx={{ fontSize: "10px" }}>
            INDULGENCE AT ITS FINEST
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Rehabilitation facilities</Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum debitis beatae ad magnam deleniti ea obcaecati praesentium quam, earum dolorum quae cupiditate! Velit eveniet voluptates maiores corporis earum qui corrupti laboriosam doloribus delectus quo? Delectus inventore fugiat quidem similique perspiciatis.
          </Typography>
          <br />
          <br />
          <Box>
            <Button
              sx={{
                padding: "5px 10px",
                backgroundColor: "#000",
                borderRadius: "0px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex:{md:"2",sm:"2",},
            background: `url("https://img.freepik.com/free-photo/senior-woman-with-walking-frame-hospital-waiting-room-rehabilitation-treatment_482257-8587.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais") center/cover no-repeat`,
            height: "400px",
            width:"100%"
          }}
        />
      </Top>
      <Middle>
        <Box
          sx={{
            flex:{md:"2",sm:"2"},
            background: `url("https://img.freepik.com/free-photo/doctors-nurse-pushing-female-patient-stretcher-corridor-hospital_662251-3073.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais") center/cover no-repeat`,
            height: "400px",
            width:"100%"
          }}
        />
        <Box sx={{flex: {md:"1.7",sm:"1.7",xs:"4"}, padding: {md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}, }}>
          <Typography sx={{ fontSize: "10px" }}>
            BEST EMERGRNCY FACILITIES
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Emergency Department</Typography>
          <br />
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita modi asperiores quia nulla tempore possimus, sit ratione consectetur ut harum autem aut suscipit officiis. Quisquam, similique quaerat. Magni, ipsa nobis. Ex voluptatibus nostrum suscipit ratione, magnam esse soluta eaque.
          </Typography>
          <br />
          <br />
          <Box>
            <Button
              sx={{
                padding: "5px 10px",
                backgroundColor: "#000",
                borderRadius: "0px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
      </Middle>
      <Bottom>
        <Box sx={{flex: {md:"1.55",sm:"1.7",xs:"4"}, padding: {md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}, }}>
          <Typography sx={{ fontSize: "10px" }}>
          INDULGENCE AT ITS FINEST
          </Typography>
          <Typography sx={{ fontSize: "33px" }}>Meetings </Typography>
          <br />
          <br />
          <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus architecto quos quas soluta ratione consequatur in, nulla cumque, aspernatur itaque dolore ut, exercitationem quaerat numquam modi nisi vel sit dignissimos dicta sequi quia! Neque dicta necessitatibus nobis quasi atque!
          </Typography>
          <br />
          <br />
          <Box>
            <Button
              sx={{
                padding: "5px 10px",
                backgroundColor: "#000",
                borderRadius: "0px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex:{md:"2",sm:"2"},
            background: `url("https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?w=900&t=st=1686728551~exp=1686729151~hmac=a8979486c633f2b7202e8b2235c57ab166114de20d72945d36976478eedb02d0") center/cover no-repeat`,
            height: "400px",
            width:{md:"100%",sm:"100%",xs:"100%"}
          }}
        />
      </Bottom>
      <br/>
      <Box sx={{display:"flex",backgroundColor:"#00BFA5",padding:{md:"58px",sm:"58px 20px",xs:"58px 20px"},margin:'0px',justifyContent:"space-between",alignItems:"center",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
        <Typography  sx={{color:"#FFFFFF",fontSize:"22px"}}>Book Your Travel - you could be running your online business by tomorrow.</Typography>
        <br/>
        <Button sx={{color:"#FFFFFF",backgroundColor:"#000",borderRadius:"0px",padding:"10px 10px",fontSize:"18px","&:hover":{
            backgroundColor:"#000"
        }}}>GET STARTED NOW</Button>
      </Box>
    </>
  );
};

export default Content4;
