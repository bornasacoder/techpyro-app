import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Content4 from "../../components/content/Content4";
import Content10 from "../../components/content/Content10";
import Content12 from "../../components/content/Content12";
import Content17 from "../../components/content/Content17";
import { Box } from "@mui/material";
import Content7 from "../../components/content/Content7";
import { useState } from "react";
import Content14 from "../../components/content/Content14";
import Content16 from "../../components/content/Content16";


const About = () => {
  const [joinopen, setJoinopen] = useState(false);
  return (
    <Box >
       <Navbar joinopen={joinopen} setJoinopen={setJoinopen} />
       <Content7/>
        <Content14/>
       <Content17/>
       <Content16/>
      <Content10/>
      <Content12/>
        <Content4/>
        </Box>
  )
}
export default About