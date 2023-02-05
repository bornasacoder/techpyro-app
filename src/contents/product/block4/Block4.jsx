import { Star } from '@mui/icons-material'
import { Box, styled, Typography } from '@mui/material'
import Block4_1 from './block4_1/Block4_1';
import React, { useState } from 'react'
// import { ProgressCircle } from 'react-simple-circle-rating';
// import { Rating } from 'react-simple-star-rating'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./block4.css"


const Container = styled(Box)(({ theme }) => ({
    margin: '0px 40px ',
    background: "white",
    height: "auto",
    [theme.breakpoints.down('md')]: {
        margin:"0px 10px"
     },
     [theme.breakpoints.down('md')]: {
        margin:"0px 0px"
     },
}))
const Wrapper = styled(Box)(({ theme }) => ({

    margin: "20px 20px",
}))
const TopBar = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems:"baseline"

}))
const Button = styled("button")(({ theme }) => ({
    fontSize: "20px",
    fontWeight: '500',
    border: "none",
    margin: '20px 40px',
    boxShadow: "0 1px 5px rgba(104, 104, 104, 0.3)",
    width: "200px",
    height: "40px",
    fontStyle: "italic",
    cursor: "pointer",
    [theme.breakpoints.down('sm')]: {
        margin:"20px 10px",
        width:"150px",
        fontSize:"16px"
     },
}))
const MiddleBar = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
        flexWrap:"wrap"

       },

}))
const Left = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"

}))
const Middle = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "1px solid #878787",
    borderRight: "1px solid #878787",
    [theme.breakpoints.down('sm')]: {
       width:"60%",
       borderRight:"none"


       },

}))
const Right = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "40px",
    width: "350px",
    height: "auto",
    marginRight:"100px",
    [theme.breakpoints.down('lg')]: {
        width:"400px",
        height:"auto",
        gap:"20px",
        marginRight:"30px"

       },
       [theme.breakpoints.down('md')]: {
        width:"250px",
        height:"auto",
        gap:"10px",
        marginRight:"20px"

       },
       [theme.breakpoints.down('sm')]: {
        width:"90%",
        justifyContent:"center",
        marginRight:"0px"



       },
       


}))
const Block4 = () => {
    const value = 4;
    const value1 = 4.2;
    const value2 = 3.8;
    const value3 = 3.9;
    return (
        <Container>
            <Wrapper>
                <TopBar>
                    <Typography sx={{ fontSize: {sm:"20px", xs:"15px"}, fontWeight: "500", marginTop: "20px" }} >Ratings & Reviews</Typography>
                    <Button>Rate Product</Button>
                </TopBar>
                <MiddleBar>
                    <Left>
                        <Typography sx={{ display: "flex", alignItems: "center", fontSize: {lg:"40px", md:"30px", xs:"20px"}, fontWeight: "600" }} >4.3 <Star sx={{ fontSize: {md:"40px", sm:"30px",xs:"16px" }, fontWeight: "600" }} /> </Typography>
                        <Typography color="secondary" sx={{ display: "flex", alignItems: "center", fontSize: {lg:"24px", md:"20px", sm:"18px", xs:"14px"}, fontWeight: "500" }}  >
                            18,675 Ratings & <br /> 2,394 Reviews
                        </Typography>
                    </Left>
                    <Middle>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "80%",
                            gap: "7px"
                        }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "600", fontSize: "16px" }} >5 <Star sx={{ fontSize: "14px", fontWeight: "500" }} /></Box>
                            <Box sx={{ width: "100%", height: "5px", background: "#878787", }}>
                                <Box sx={{ width: "60%", height: "4px", background: "green" }} ></Box>
                            </Box>
                            <Box>(500)</Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "80%",
                            gap: "7px"
                        }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "600", fontSize: "16px" }} >4 <Star sx={{ fontSize: "14px", fontWeight: "500" }} /></Box>
                            <Box sx={{ width: "100%", height: "5px", background: "#878787", }}>
                                <Box sx={{ width: "70%", height: "4px", background: "green" }} ></Box>
                            </Box>
                            <Box>(500)</Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "80%",
                            gap: "7px"
                        }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "600", fontSize: "16px" }} >3 <Star sx={{ fontSize: "14px", fontWeight: "500" }} /></Box>
                            <Box sx={{ width: "100%", height: "5px", background: "#878787", }}>
                                <Box sx={{ width: "50%", height: "4px", background: "green" }} ></Box>
                            </Box>
                            <Box>(500)</Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "80%",
                            gap: "7px"
                        }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "600", fontSize: "16px" }} >2 <Star sx={{ fontSize: "14px", fontWeight: "500" }} /></Box>
                            <Box sx={{ width: "100%", height: "5px", background: "#878787", }}>
                                <Box sx={{ width: "30%", height: "4px", background: "green" }} ></Box>
                            </Box>
                            <Box>(500)</Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "80%",
                            gap: "7px"
                        }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "600", fontSize: "16px" }} >1 <Star sx={{ fontSize: "14px", fontWeight: "500" }} /></Box>
                            <Box sx={{ width: "100%", height: "5px", background: "#878787", }}>
                                <Box sx={{ width: "50%", height: "4px", background: "red" }} ></Box>
                            </Box>
                            <Box>(500)</Box>
                        </Box>
                    </Middle>
                    <Right>
                      <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", }} >
                        <CircularProgressbar
                            value={value}
                            minValue={0}
                            maxValue={5}
                            text={value}

                            styles={buildStyles({

                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                width:"80px",
                                // Text size
                                textSize: '30px',
                                
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                
                                // Colors
                                pathColor: `rgba(56, 142, 60, ${value})`,
                                textColor: '#333',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                            />
                            <Typography sx={{fontStyle:"italic", fontSize:{md:"20px", sm:"16px"}, fontWeight:"400"}} >Accuracy</Typography>
                            </Box>

                            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", }} >
                        <CircularProgressbar
                            value={value}
                            minValue={0}
                            maxValue={5}
                            text={value1}

                            styles={buildStyles({

                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                width:'80px',
                                
                                // Text size
                                textSize: '30px',
                                
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                
                                // Colors
                                pathColor: `rgba(56, 142, 60, ${value1})`,
                                textColor: '#333',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                            />
                            <Typography sx={{fontStyle:"italic", fontSize:{md:"20px", sm:"16px"}, fontWeight:"400"}} >Accuracy</Typography>
                            </Box>

                            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", }} >
                        <CircularProgressbar
                            value={value}
                            minValue={0}
                            maxValue={5}
                            text={value2}

                            styles={buildStyles({

                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                width:"80px",
                                // Text size
                                textSize: '30px',
                                
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                
                                // Colors
                                pathColor: `rgba(56, 142, 60, ${value2})`,
                                textColor: '#333',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                            />
                            <Typography sx={{fontStyle:"italic", fontSize:{md:"20px", sm:"16px"}, fontWeight:"400"}} >Accuracy</Typography>
                            </Box>

                            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", }} >
                        <CircularProgressbar
                            value={value}
                            minValue={0}
                            maxValue={5}
                            text={value3}

                            styles={buildStyles({

                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                width:"80px",
                                // Text size
                                textSize: '30px',
                                
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                
                                // Colors
                                pathColor: `rgba(56, 142, 60, ${value3})`,
                                textColor: '#333',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                            />
                            <Typography sx={{fontStyle:"italic", fontSize:{md:"20px", sm:"16px"}, fontWeight:"400"}} >Accuracy</Typography>
                            </Box>
                    </Right>
                </MiddleBar>

            </Wrapper>
            <Block4_1/>
        </Container>
    )
}


export default Block4