import { Add, CheckCircleOutline, Clear, Launch, Search, ThumbDown, ThumbUp, VerifiedOutlined, VisibilityOutlined } from '@mui/icons-material'
import { Box, Divider, styled, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SearchBar from './searchbar/SearchBar'
const Container = styled(Box)(({theme})=>({
height:"auto",
margin:"10px 40px",
background:"white",
[theme.breakpoints.down('md')]: {
  margin:"0px 10px"
},
[theme.breakpoints.down('sm')]: {
  margin:"0px 0px"
},
}))
const Wrapper = styled(Box)(({theme})=>({
    margin:"40px",
   height:"auto",
   [theme.breakpoints.down('sm')]: {
    margin:"20px"
 },
}))
const QuestionContainer = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
     margin:"20px 0px"
}))
const UserDetailContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottom: "1px solid #EEEEEE",
  
  
  
  }))
  const UserDetail = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    color: "#878787",
    alignItems:"center",
    [theme.breakpoints.down('sm')]: {
      gap:"5px",
      flexWrap:"wrap"


    },
  
  }))
  const UserLike = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "30px",
    alignItems:"center",
    marginRight: "10px",
    marginBottom: "30px",
    [theme.breakpoints.down('sm')]: {
     gap:"20px"
   },

  }))
  const AllReviewButton = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    margin:"20px 50px",
    [theme.breakpoints.down('sm')]: {
      margin:"20px"
   },
  }))
  const Button = styled("button")(({ theme }) => ({
    width: "190px",
    height: "50px",
    fontSize: "16px",
    backgroundColor: "darkorange",
    border: "none",
    color: "white",
    cursor: "pointer",
    [theme.breakpoints.down('lg')]: {
      width: "150px",
    },
    [theme.breakpoints.down('md')]: {
      width: "120px",
    },
    [theme.breakpoints.down('sm')]: {
      width: "33.33%",
      height:"60px",
      border:"1px solid lightgray",
      fontWeight:"500",
      color:"#333",
      fontSize:"14px",
      backgroundColor:"#eee"
    },
  
  
  }))
  const Button1 = styled("button")(({ theme }) => ({
    width: '190px',
    height: "50px",
    border: "none",
    backgroundColor: "tomato",
    fontSize: "16px",
    color: "white",
    cursor: "pointer",
    [theme.breakpoints.down('lg')]: {
      width: "150px",
    },
    [theme.breakpoints.down('md')]: {
      width: "120px",
    },
    [theme.breakpoints.down('sm')]: {
      width: "33.33%",
      height:"60px",
      fontSize:"14px",
    
    },
  
  }))
  const Button2 = styled("button")(({ theme }) => ({
    width: '250px',
    border: "none",
    backgroundColor: "teal",
    fontSize: "16px",
    color: "white",
    height: '50px',
    alignSelf: "center",
    display: 'flex',
    justifyContent: "center",
    cursor: "pointer",
    alignItems: "center",
    marginLeft: "65px",
    [theme.breakpoints.down('md')]: {
      marginLeft:"0px",
      width:"180px"
    },
    [theme.breakpoints.down('sm')]: {
    display:"none"
    },
  
  
  }))
  const Button3 = styled("button")(({ theme }) => ({
    width: '250px',
    border: "none",
    backgroundColor: "teal",
    fontSize: "16px",
    color: "white",
    height: '50px',
    alignSelf: "center",
    display: 'none',
    
    justifyContent: "center",
    cursor: "pointer",
    alignItems: "center",
    marginLeft: "65px",
    [theme.breakpoints.down('md')]: {
      marginLeft:"0px",
      width:"180px"
      
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft:"0px",
      width:"33.33%",
      display:"flex",
      height:"60px",
      fontSize:"14px",
     
    },
  
  
  }))

  const LowerContainer = styled(Box)(({theme})=>({
    display:"none",
    justifyContent:"space-between",
    [theme.breakpoints.down('xl')]: {
      margin:  "10px 20px 10px 100px",
    },
    [theme.breakpoints.down('lg')]: {
      margin:  "10px 20px"
    },
    [theme.breakpoints.down('sm')]: {
      display:"flex",
      bottom:"-15px",
      margin:'10px 0px',
     zIndex:"1000",
     width:"100%",
     
     
    },
  
  }))
const Block5 = () => {
    const [show, setShow] = useState("block")
    const handleClick = () =>{
        setShow("none")
        // console.log(show)
    }

    const handleClose = () =>{
        setShow("block")
        // console.log(show)

    }

    const [scroll, setScroll] = useState(0)
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
useEffect(() => {
   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
}, [])

function handleScroll() {
   let yScroll = window.scrollY;
   let minS = 0;
   let maxS = document.body.scrollHeight;
   let minB = 5 * 50;
   let maxB = 38 * 50;
   let newBottom = map(yScroll, minS, maxS, minB, maxB)
   setScroll(newBottom)
  //  console.log(newBottom, scroll)
}
  return (
     <Container>
        <Wrapper>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"40px 0px 10px 0px", position:"relative"}} >
         <Typography display={show}  sx={{fontSize:{md:"32px", sm:"28px", xs:"24px"}, fontWeight:"500", color:"#5c5e56"}} >Question & Answers</Typography>

          <Search sx={{fontSize:"50px", borderLeft:"1px solid #EEEEEE", paddingLeft:"10px", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", height:"100%", color:"#5c5e56"}} onClick={handleClick} />
          <Box display = {show === "block" ? "none" : "block" } sx={{width:"100%"}} >
         <SearchBar />
          </Box>
         <Box display = {show === "block" ? "none" : "block" } sx={{position:'absolute', left:"90%"}} >
         <Clear onClick = {handleClose}  sx={{fontSize:"25px", fontWeight:"600" , cursor:"pointer"}} />
         </Box>
            </Box>
            <Divider></Divider>
            <Box>

        <QuestionContainer>
        <Typography sx={{fontSize:"16px", fontWeight:"500"}}  >Question: Is this bullet proof.?</Typography>
        <Box sx={{display:"flex", alignItems:{sm:"center", xs:"flex-start"}, gap:"5px"}} >
            <Typography sx={{fontSize:"16px", fontWeight:"500"}} >Answer:  </Typography>
            <Typography sx={{fontSize:"16px", fontWeight:"400"}} >Yes, it is bullet and bomb proof. It will stop fired from Kalashnikov</Typography>
        </Box>
        </QuestionContainer>

        <UserDetailContainer>
        <UserDetail>
          <Typography sx={{ display: "flex", alignItems:{sm:"center", xs:"flex-start"}, gap: "5px" }} >  Certified Developer<CheckCircleOutline sx={{ background: "green", color: "white", borderRadius: "50%" }} /> </Typography>
          <Typography>1 month ago</Typography>
        </UserDetail>
        <UserLike>
          <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }}  ><ThumbUp sx={{color:"gray"}} /> 10</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} ><ThumbDown sx={{color:"gray"}} /> 10</Typography>

        </UserLike>
      </UserDetailContainer>
      <Divider></Divider>
            </Box>

            <Box>

<QuestionContainer>
<Typography sx={{fontSize:"16px", fontWeight:"500"}}  >Question: Is this bullet proof.?</Typography>
<Box sx={{display:"flex", alignItems:{sm:"center", xs:"flex-start"}, gap:"5px"}} >
    <Typography sx={{fontSize:"16px", fontWeight:"500"}} >Answer:  </Typography>
    <Typography sx={{fontSize:"16px", fontWeight:"400"}} >Yes, it is bullet and bomb proof. It will stop fired from Kalashnikov</Typography>
</Box>
</QuestionContainer>

<UserDetailContainer>
<UserDetail>
  <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} >  Certified Developer<CheckCircleOutline sx={{ background: "green", color: "white", borderRadius: "50%" }} /> </Typography>
  <Typography>1 month ago</Typography>
</UserDetail>
<UserLike>
  <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }}  ><ThumbUp sx={{color:"gray"}} /> 10</Typography>
  <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} ><ThumbDown sx={{color:"gray"}} /> 10</Typography>
</UserLike>
</UserDetailContainer>
<Divider></Divider>
    </Box>
    <Box>
<QuestionContainer>
<Typography sx={{fontSize:"16px", fontWeight:"500"}}  >Question: Is this bullet proof.?</Typography>
<Box sx={{display:"flex", alignItems:{sm:"center", xs:"flex-start"}, gap:"5px"}} >
    <Typography sx={{fontSize:"16px", fontWeight:"500"}} >Answer:  </Typography>
    <Typography sx={{fontSize:"16px", fontWeight:"400"}} >Yes, it is bullet and bomb proof. It will stop fired from Kalashnikov</Typography>
</Box>
</QuestionContainer>

<UserDetailContainer>
<UserDetail>
  <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} >  Certified Developer<CheckCircleOutline sx={{ background: "green", color: "white", borderRadius: "50%" }} /> </Typography>
  <Typography>1 month ago</Typography>
</UserDetail>
<UserLike>
  <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }}  ><ThumbUp sx={{color:"gray"}} /> 10</Typography>
  <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} ><ThumbDown sx={{color:"gray"}} /> 10</Typography>

</UserLike>
</UserDetailContainer>
<Divider></Divider>
    </Box>

      <AllReviewButton>
        <Typography color="primary" sx={{  fontSize: "20px", fontWeight: "600" }} > All 111 Questions </Typography>
        <Add sx={{ color: "#878787", marginBottom:"30px" }} />
      </AllReviewButton>
        </Wrapper>
      <LowerContainer   onScroll={handleScroll} position={scroll > 1120 ? "static" : "fixed"}  >
       <Button>Add To Cart</Button>
          <Button3 >Live Demo <VisibilityOutlined sx={{fontSize:{sm:"30px", xs:"24px",}, marginLeft:"5px"}} /> </Button3>
          <Button1>Buy Now</Button1>
        </LowerContainer>
     </Container>
  )
}

export default Block5