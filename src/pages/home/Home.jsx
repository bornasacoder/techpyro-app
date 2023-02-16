import React from "react";
import Navbar from "components/navbar/Navbar";
import Content4 from "components/content/Content4";
import Content6 from "components/content/Content6";
import Content8 from "components/content/Content8";
import Content9 from "components/content/Content9";
import Content2 from "components/content/Content2";
import Content3 from "components/content/Content3";
import Content5 from "components/content/Content5";
import Block2 from "contents/home/block2/Block2";
import Block3 from "contents/home/block3/Block3";
import Block7 from "contents/home/block7/Block7";
import Content20 from "components/content/Content20";
import { Box } from "@mui/material";
import Content21 from "components/content/Content21";
import { useState } from "react";

const Home = () => {
  const [joinopen, setJoinopen] = useState(false);
  return (
    <Box >
       <Navbar joinopen={joinopen} setJoinopen={setJoinopen} />
        <Content2 joinopen={joinopen} setJoinopen={setJoinopen}  />
      <Content3/>
       <Content5/>
        <Block2/>
        <Block3/>
       <Block7/>
       <Content6/>
      <Content20 joinopen={joinopen} setJoinopen={setJoinopen}/>
       <Content9/>
       <Content8/>
      <Content21 joinopen={joinopen} setJoinopen={setJoinopen}/>
       <Content4/> 
    </Box>
  );
};

export default Home;
