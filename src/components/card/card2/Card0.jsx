import React from "react";
import styled from "styled-components";
const { Typography } = require("@mui/material");
const { Box } = require("@mui/system");

const Image = styled('img')({
    height:'84px',
    width:'84px'
})
const Box1 = styled(Box)({
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'baseline'
})
const Box2 = styled(Box)({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
})

export default function Card0(){
    return(
  <Box sx={{height:'auto',width:'100%',display:{md:'flex'}, justifyContent:'center',}}>
     <Box sx={{backgroundColor:'white',borderRadius:'15px',marginTop:{xs:'' ,md:'-87px'},width:'70%'}}>
      <Box sx={{gap:'5px',display:'flex',margin:{xs:'0px 10px',sm:'0px 20px' ,md:'0px 40px'}}}>
         <Typography sx={{fontWeight:'600',fontSize:'35px'}}>Courses</Typography>
         <Typography sx={{margin:{xs:'15px 0px',sm:'', md:'20px 0px'},fontSize:'15px',fontFamily:'sans-serif'}}> (Class 3-12) </Typography>
      </Box>
      <Box sx={{display:{md:'flex'},width:'100%',justifyContent:'space-around',margin:{xs:'',sm:'',md:'0px 10px'}}}>
            <Box1 >
             <Image  src='https://www.vedantu.com/cdn/images/new-home-page/courses/course-7.webp' alt='' />  
             <Box2>
                <h4>JEE Crash</h4>
                <Typography>4,000</Typography>
             </Box2>
            </Box1>
            <Box1>
             <Image src='https://www.vedantu.com/cdn/images/new-home-page/courses/course-4.webp' alt=''/>
             <Box2>
                <h4>NEET Crash</h4>
                <Typography>7,500</Typography>
             </Box2>
            </Box1>
            <Box1>
             <Image src='https://www.vedantu.com/cdn/images/new-home-page/courses/course-6.webp' alt=''/>
             <Box2>
                <h4>JEE</h4>
                <Typography>8,000</Typography>
             </Box2>
            </Box1>
            <Box1>
             <Image src='https://www.vedantu.com/cdn/images/new-home-page/courses/course-5.webp' alt=''/>
             <Box2>
                <h4>NEET</h4>
                <Typography>9,000</Typography>
             </Box2>
            </Box1>
            <Box1>
             <Image src='https://www.vedantu.com/cdn/images/new-home-page/courses/course-3.webp' alt=''/>
             <Box2>
                <h4>Faundation</h4>
                <Typography>40,000</Typography>
             </Box2>
              <h4>JEE/NEET </h4>
            </Box1>
            <Box1>
             <Image src='https://www.vedantu.com/cdn/images/new-home-page/courses/course-2.webp' alt=''/>
              <Box2>
                <h4>CBSC</h4>
                <Typography>30,000</Typography>
              </Box2>
            </Box1>
            <Box1 >
             <Image src='https://www.vedantu.com/cdn/images/new-home-page/courses/course-1.webp' alt=''/>
             <Box2 >
                <h4>ICSC</h4>
                <Typography>20,000</Typography>
             </Box2>
            </Box1>
      </Box>
    </Box>
</Box>
    )
}