import React from "react";
import Navbar from "components/navbar/Navbar";
import Content4 from "components/content/Content4";
import Content6 from "components/content/Content6";
import Content8 from "components/content/Content8";
import Content9 from "components/content/Content9";
import Content10 from "components/content/Content10";
import Content12 from "components/content/Content12";
import Content13 from "components/content/Content13";
import Content from "components/content/Content";
import Content17 from "components/content/Content17";
import Content18 from "components/content/Content18";
import Content19 from "components/content/Content19";
import Content2 from "components/content/Content2";
import Content3 from "components/content/Content3";
import Content5 from "components/content/Content5";
import Block1 from "contents/home/block1/Block1";
import Block2 from "contents/home/block2/Block2";
import Block3 from "contents/home/block3/Block3";
import Block7 from "contents/home/block7/Block7";
import Content20 from "components/content/Content20";
import { Box } from "@mui/material";
import Content7 from "components/content/Content7";
import Content21 from "components/content/Content21";
import Footer from "components/footer/Footer";

const Home = () => {
  return (
    <Box >
       <Navbar/>
       <Content2/>
      <Content3/>
       <Content5/>
        <Block2/>
        <Block3/>
       <Block7/>
       <Content6/>
      <Content20/>
       <Content9/>
       <Content8/>
      <Content21/>
       <Content4/>
       {/* <Footer/> */}
    </Box>
  );
};

export default Home;
