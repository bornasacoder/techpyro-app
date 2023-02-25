import { Add, CurrencyRupee, ShoppingCart, Star } from '@mui/icons-material'
import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import Sliders from "./slider/Sliders"
import {mainCategory} from "../../../constants/mainCategory"
const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    borderTop: "2px solid #EEEEEE",
    background: "#ffffff",
    flexDirection: "column",
    height: 'auto',
    margin: "30px 40px",
    [theme.breakpoints.down('md')]: {
        margin:"30px 10px"
     },
     [theme.breakpoints.down('sm')]: {
        margin:"30px 0px"
     },
}))
const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      flexDirection:"column"
     },


}))
const Image = styled("img")(({ theme }) => ({
    width: "200px",
    height: "200px",
    objectFit: "cover",
    [theme.breakpoints.down('sm')]: {
        width:"140px",
        height:"150px"
       },

}))
const RightContentItems = styled(Box)(({ theme }) => ({
    display: "flex",

}))
const Bottombar = styled(Box)(({ theme }) => ({
    display: "flex",
    borderTop: "1px solid #878787",
    borderBottom: "1px solid #878787",
    padding: "10px",
    margin: " 0px 10px",
    justifyContent:"space-between",
    alignItems: "center"

}))
const Button = styled("button")(({theme})=>({
    border:"none",
    padding:" 20px 70px",
    fontSize:"18px",
    display:"flex",
    alignItems:"center",
    borderRadius:"5px",
    color:'white',
    background:"#FF8C00",
      cursor:"pointer",
      [theme.breakpoints.down('md')]: {
        fontSize:'15px',
        width:"200px",
        padding:"10px 10px"
       
     },
     
}))

const SliderCategory = styled(Box)(({theme})=>({
    marginTop:"20px",
    
}))

const Block2 = ({product, rating}) => {
    return (
        <Container>
            <Wrapper>
                <Box sx={{ margin: "5px 10px", display:{sm:"block",xs:"flex"}  }} >
                    <Image src={product.data.image} />
                    <Box sx={{ display: "flex", flexDirection: {sm:"column", xs:"column"}, margin:{xs:"10px 20px"}}} >
                        <Typography variant="h4" sx={{ lineHeight: "1", fontSize: { lg: "16px", md: "16px", xs: "16px" }, marginBottom:"10px", fontWeight: "700", cursor: 'pointer', "&:hover": { color: "#0D99FF", transition: "all 0.2s linear" } }} >{product.data.title.shortTitle}</Typography>
                        <RightContentItems>
                            <Typography sx={{ display: "flex", justifyContent: 'center',padding:"0px 3px", alignItems: "center", background: "green", color: "white", width: { lg: "40px", xs: "45px" }, height: "25px", borderRadius: "5px", fontSize: { md: "14px", sm: "12px" } }} >{rating}<Star sx={{ fontSize: { md: "13px", xs: "1rem" }, color: "white", paddingLeft: "3px" }} /> </Typography>
                            <Typography variant="h6" sx={{ color: "#878787",marginLeft:"10px", fontWeight: "600", fontSize: { md: "14px", xs: "12px" } }} >100 Ratings & 100 Reviews</Typography>
                        </RightContentItems>
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection: { sm: "row", xs: "row" }, margin: "10px 0px", gap: "5px" }}>
                            <Typography variant="h6" sx={{ fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "15px" }, display: "flex", alignItems: "center", }} > <CurrencyRupee sx={{ padding: "0", margin: "0", fontSize: { sm: '20px', xs: "15px" } }} />{product.data.price.cost} </Typography>
                            <Typography variant="subtitle1" sx={{ fontSize: {sm:"14px", xs:"11px"}, textDecoration: "line-through" }} ><CurrencyRupee sx={{ fontSize: {sm:"14px", xs:"11px"} }} />{product.data.price.mrp}</Typography>
                            <Typography variant='h6' sx={{ color: "#008000", fontSize: {sm:"13px", xs:"10px"} }} >{product.data.price.discount}</Typography>
                        </Box>

                    </Box>
                </Box>
                <Add sx={{ fontSize: "35px", margin: " 0px 20px", display:{sm:"block", xs:"none"} }} />

                <Box sx={{ margin: "5px 10px", display:{sm:"block",xs:"flex"}  }} >
                    <Image src="https://colorlib.com/wp/wp-content/uploads/sites/2/education-free-template.jpg" />
                    <Box sx={{ display: "flex", flexDirection: {sm:"column", xs:"column"}, margin:{xs:"10px 20px"}}} >
                        <Typography variant="h4" sx={{ lineHeight: "1", fontSize: { lg: "16px", md: "16px", xs: "16px" }, marginBottom:"10px", fontWeight: "700", cursor: 'pointer', "&:hover": { color: "#0D99FF", transition: "all 0.2s linear" } }} >Static Website for Website</Typography>
                        <RightContentItems>
                            <Typography sx={{ display: "flex", justifyContent: 'center', padding:"0px 3px",alignItems: "center", background: "green", color: "white", width: { lg: "40px", xs: "45px" }, height: "25px", borderRadius: "5px", fontSize: { md: "14px", sm: "12px" } }} >4.2 <Star sx={{ fontSize: { md: "13px", xs: "1rem" }, color: "white", paddingLeft: "3px" }} /> </Typography>
                            <Typography variant="h6" sx={{ color: "#878787",marginLeft:"10px", fontWeight: "600", fontSize: { md: "14px", xs: "12px" } }} >100 Ratings & 100 Reviews</Typography>
                        </RightContentItems>
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection: { sm: "row", xs: "row" }, margin: "10px 0px", gap: "5px" }}>
                            <Typography variant="h6" sx={{ fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "15px" }, display: "flex", alignItems: "center", }} > <CurrencyRupee sx={{ padding: "0", margin: "0", fontSize: { sm: '20px', xs: "15px" } }} />2999/- </Typography>
                            <Typography variant="subtitle1" sx={{ fontSize: {sm:"14px", xs:"11px"}, textDecoration: "line-through" }} ><CurrencyRupee sx={{ fontSize: {md:"14px", xs:"11px"}}} />5000/-</Typography>
                            <Typography variant='h6' sx={{ color: "#008000", fontSize: {sm:"13px", xs:"10px"} }} >35% OFF</Typography>
                        </Box>

                    </Box>
                </Box>

            </Wrapper>

            <Bottombar>
                <Box sx={{display:"flex", alignItems:"center"}} >

                <Box sx={{ display: {sm:"flex", xs:"none"}, flexDirection: "column", margin: "0px 30px 0px 10px" }} >
                    <Typography sx={{ fontSize: {md:"24px", sm:"16px"}, fontWeight: "500", color: "gray", letterSpacing: "1px" }}>
                        1 Item
                    </Typography>
                    <Typography sx={{ fontSize: "20px", fontWeight: "600", display: "flex", alignItems: "center" }} >
                        <CurrencyRupee />{product.data.price.cost}
                    </Typography>
                </Box>
                <Add sx={{ fontSize: {md:"24px", sm:"16px"}, fontWeight: '600', margin: {md:"0px 30px 0px 10px", sm:'0px 10px 0px 10px'} ,display:{sm:"block", xs:"none"}}} />
                <Box sx={{ display: {sm:"flex", xs:"none"}, flexDirection: "column" }} >
                    <Typography sx={{ fontSize: {md:"22px", sm:"16px"}, fontWeight: "500", color: "gray", letterSpacing: "1px" }}>
                        1 Item Addons
                    </Typography>
                    <Typography sx={{ fontSize: "20px", fontWeight: "600", display: "flex", alignItems: "center" }}>
                        <CurrencyRupee />2999/-
                    </Typography>
                    
                </Box>
                <Box sx={{display:{xs:"none", sm:"block"}}} >
                    <Typography sx={{ fontSize: {md:"24px", sm:"16px"}, fontWeight: '600', margin: {md:"0px 30px 0px 10px", sm:'0px 10px 0px 10px'}}}>
                        =
                    </Typography>
                </Box>
                
                <Box sx={{ display: "flex", flexDirection: "column" }} >
                    <Typography sx={{ fontSize: {md:"24px", sm:"16px"}, fontWeight: "500", color: "gray", letterSpacing: "1px" }}>
                        Total
                    </Typography>
                    <Typography sx={{ fontSize: {md:"20px", sm:"16px"}, fontWeight: "600", display: "flex", alignItems: "center" }}>
                        <CurrencyRupee />5000/-
                    </Typography>
                </Box>
                </Box>
                <Box sx={{marginRight:{md:"10px", sm:"5px"}}} > 
                <Button> <ShoppingCart sx={{marginRight:{md:'10px', sm:"3px"}, borderRadius:'2px'}} /> Add 2 Items to Cart</Button>    
                 </Box>
            </Bottombar>


          <SliderCategory>
          <Sliders sliderData={mainCategory[0].website}   />
          </SliderCategory>
        </Container>
    )
}

export default Block2