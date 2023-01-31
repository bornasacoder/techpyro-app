import { Box, styled,useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {GrUserSettings} from 'react-icons/gr'
import {FaRegHeart,FaAddressBook} from 'react-icons/fa'
import {RiCoupon2Line} from 'react-icons/ri'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BsHeadset} from 'react-icons/bs'
import {RiLogoutCircleLine} from 'react-icons/ri'

const InnerBox = styled(Link)(({theme})=>({
    display:'flex',
    gap:'15px',
    textDecoration:'none',
    alignItems:'center',
    textAlign:'center',
    fontSize:'15px',
    cursor:'pointer',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
        cursor:'none',
        fontSize:'14px',
        minWidth:'60px',
        height:'80px'
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:'12px',
        gap:'5px',
        width:'50px',
        height:"80px"
    },
}))

export default function BlockLeft() {
    const theme = useTheme();
  return (
    <Box sx={{width:{md:'20%',sm:'100%'},marginBottom:{md:'0',xs:'20px'},minWidth:'227px',height:{md:'460px',sm:'100px',xs:'200px'},background:`${theme.colors.alpha.white[100]}`,display:{sm:'flex',xs:'grid'},gridAutoFlow:'row',gridTemplateColumns:'auto auto auto auto',gridTemplateRows:'auto auto' ,flexDirection:{md:'column',xs:'row'},gap:{md:'40px',sm:'5px',xs:'0'},
    justifyContent:{md:'normal',xs:'space-between'} ,padding:'20px',border:`1px solid ${theme.colors.alpha.black[10]}`}}>
        <InnerBox to={'/my-account/profile'}>
            <GrUserSettings style={{fontSize:"25px"}}/>
             Profile
        </InnerBox>
        <InnerBox to={'/my-account/address'}>
            <FaAddressBook style={{fontSize:"25px"}}/>
             Address
        </InnerBox>
        <InnerBox to={'/my-account/wishlist'}>
            <FaRegHeart style={{fontSize:"25px"}}/>
            My Wishlist
        </InnerBox>
        <InnerBox to={'/my-account/coupons'}>
            <RiCoupon2Line style={{fontSize:"25px"}}/>
            Coupons
        </InnerBox>
        <InnerBox to={'/my-account/notification'}>
            <IoMdNotificationsOutline style={{fontSize:"25px"}}/>
            Manage Notifications
        </InnerBox>
        <InnerBox to={'/my-account/help-center'}>
            <BsHeadset style={{fontSize:"25px"}}/>
            Help Center
        </InnerBox>
        <InnerBox >
            <RiLogoutCircleLine style={{fontSize:"25px"}}/>
            Log out
        </InnerBox>
    </Box>
  )
}
