import { Add, BorderBottom, CheckCircleOutline, Star, ThumbDown, ThumbUp, Verified, VerifiedOutlined } from '@mui/icons-material'
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


const Block4_1 = () => {
  return (
    <ReviewWrapper>

      <Box sx={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "20px" }} >
        <Typography sx={{ display: "flex", justifyContent: 'center', alignItems: "center", background: "green", color: "white", width: { lg: "40px", xs: "45px" }, height: "25px", borderRadius: "5px", fontSize: { md: "14px", sm: "12px" }, marginTop: "10px" }} >4.2 <Star sx={{ fontSize: { md: "13px", xs: "1rem !important" }, color: "white", paddingLeft: "3px", }} /> </Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: "400", marginTop: "10px" }}  >Very nice UI of this product</Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }} >
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, labore sunt suscipit quis architecto quaerat. Aliquid non minima voluptas distinctio veniam, dignissimos voluptatum. Laudantium quod dignissimos aliquam, voluptatum mollitia nihil?</Typography>
      </Box>
      <ImageContainer>
        <Image src="https://colorlib.com/wp/wp-content/uploads/sites/2/capitalshop-free-template-353x278.jpg" />
        <Image src="https://colorlib.com/wp/wp-content/uploads/sites/2/capitalshop-free-template-353x278.jpg" />
        <Image src="https://colorlib.com/wp/wp-content/uploads/sites/2/capitalshop-free-template-353x278.jpg" />
      </ImageContainer>
      <UserDetailContainer>
        <UserDetail>
          <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} >  Username <CheckCircleOutline sx={{ background: "green", color: "white", borderRadius:"50%" }} />Certified User </Typography>
          <Typography>Location, 1 month ago</Typography>
        </UserDetail>
        <UserLike>
          <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }}  ><ThumbUp sx={{}} /> 10</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} ><ThumbDown /> 10</Typography>

        </UserLike>
      </UserDetailContainer>
      <AllReviewButton>
        <Typography color="primary" sx={{ fontSize: "20px", fontWeight: "600" }} > All 111 Reviews </Typography>
        <Add sx={{ color: "#878787" }} />
      </AllReviewButton>
    </ReviewWrapper>
  )
}

export default Block4_1