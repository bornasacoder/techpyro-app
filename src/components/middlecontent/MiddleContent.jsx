import { LocalFlorist } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "80px 0px 0px",
}));
export default function MiddleContent() {
  return (
    <StyleToolbar>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h1"
          sx={{ fontFamily: "Dancing Script", fontWeight: 600, fontSize:"3rem" ,}}
        >
          About Medical Store
        </Typography>
      </Box>
      <Box
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
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", color: "#666666",padding:{sm: "0px 25px",md:"0px 270px",xs:"0px 25px"} }}>
        <Typography
           variant="p"
          sx={{
            // padding: "0px 270px",
            fontFamily: "sans-serif",
            fontSize: "17px",
            textAlign:"center"
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum
          sed ipsum aliquid! Sunt laudantium totam optio rem ad. Quos dolorum
          facere veritatis commodi sint. In possimus harum nesciunt ipsum
          molestiae alias, ipsa deserunt excepturi, eaque eius dolore quaerat,
          ratione at architecto vel laborum aliquam itaque corrupti asperiores a
          veniam facilis? Beatae nesciunt ducimus reiciendis necessitatibus
          eaque rem corrupti quibusdam autem soluta sunt asperiores laborum
          aperiam iandae sequi cum
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign:"center",
          fontFamily: "Sofia",
          fontSize: "25px",
        //   padding: "0px 170px",
          marginTop:"55px"
          ,padding:{md:"0px 170px",sm: "0px 30px",xs:"0px 30px"}
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum
        sed ipsum aliquid! Sunt laudantium totam optio rem ad. Quos dolorum
        facere veritatis commodi sint. In possimus harum nesciunt ipsum
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h1"
          sx={{ fontFamily: "Dancing Script", fontWeight: 600, fontSize:"3rem",paddingTop:"70px",marginBottom:"-10px"}}
        >
          Our Medical Store
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
      </Box>
    </StyleToolbar>
  );
}
