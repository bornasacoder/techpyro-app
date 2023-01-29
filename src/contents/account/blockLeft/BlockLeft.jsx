import { Box, styled,useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {GrUserSettings} from 'react-icons/gr'
import {FaRegHeart} from 'react-icons/fa'
import {RiCoupon2Line} from 'react-icons/ri'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BsHeadset} from 'react-icons/bs'
import {RiLogoutCircleLine} from 'react-icons/ri'

const InnerBox = styled(Link)(({theme})=>({
    display:'flex',
    gap:'15px',
    textDecoration:'none',
    alignItems:'center',
    fontSize:'15px',
    cursor:'pointer',
    [theme.breakpoints.down('md')]:{
        cursor:'none'
    }
}))

export default function BlockLeft() {
    const theme = useTheme();
  return (
    <Box sx={{width:'20%',height:'400px',background:`${theme.colors.alpha.white[100]}`,display:'flex',flexDirection:{md:'column',xs:'row'},gap:'40px',padding:'20px',border:`1px solid ${theme.colors.alpha.black[10]}`}}>
        <InnerBox to={'/my-account/profile'}>
            <GrUserSettings style={{fontSize:"25px"}}/>
             Profile
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
