import { Add,  CheckCircleOutline, ThumbDown, ThumbUp, } from '@mui/icons-material'
import { Box, styled, Typography } from '@mui/material'
import React from 'react'
const ReviewWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: 'column',
  borderTop: "1px solid #EEEEEE",
  margin: "50px 20px",
}))
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px"
}))

const Image = styled("img")(({ theme }) => ({
  width: "100px",
  height: '100px',
  objectFit: "cover",
  marginBottom:"20px"
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
  alignItems:"center",
  color: "#878787",
  [theme.breakpoints.down('sm')]: {
    gap:"5px",
    flexWrap:"wrap"


  },

}))
const UserLike = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "30px",
  marginRight: "10px",
  marginBottom: "30px",
  alignItems:"center",
  [theme.breakpoints.down('sm')]: {
    gap:"20px"
  },
}))
const AllReviewButton = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 50px 20px 50px",
  [theme.breakpoints.down('sm')]: {
    margin:"10px 20px "
  },
}))


const Block41 = ({product}) => {
  console.log(product)

  return (
    <>

  <ReviewWrapper >
{product.data.review.map((item)=>(
    <div key={item.id} >

      <Box sx={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "20px" }} >
        {/* <Typography sx={{ display: "flex", justifyContent: 'center', alignItems: "center", background: "green", color: "white", width: { lg: "40px", xs: "45px" }, height: "25px", borderRadius: "5px", fontSize: { md: "14px", sm: "12px" }, marginTop: "10px" }} >4.2 <Star sx={{ fontSize: { md: "13px", xs: "1rem !important" }, color: "white", paddingLeft: "3px", }} /> </Typography> */}
        <Typography sx={{ fontSize: "14px", fontWeight: "400", marginTop: "10px" }}  ><b>Customer Review: </b>{item.title}</Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }} >
        <Typography>{item.discription}</Typography>
      </Box>
      <ImageContainer>
        <Image src={item.productReviewUrl} />
      </ImageContainer>
      <UserDetailContainer>
        <UserDetail>
          <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} >  Anonymous user<CheckCircleOutline sx={{ background: "green", color: "white", borderRadius:"50%" }} />Certified User </Typography>
          <Typography>Location</Typography>
        </UserDetail>
        <UserLike>
          <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }}  ><ThumbUp /> {item.like}</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} ><ThumbDown /> {item.disLike}</Typography>

        </UserLike>
      </UserDetailContainer>
    </div>
      ))}
      <AllReviewButton>
        <Typography color="primary" sx={{ fontSize: "20px", fontWeight: "600" }} > All 111 Reviews </Typography>
        <Add sx={{ color: "#878787" }} />
      </AllReviewButton>
    </ReviewWrapper>
</>
)
}

export default Block41