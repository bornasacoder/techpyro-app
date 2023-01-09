import { Box, Divider, Stack, styled, useTheme } from '@mui/material'
import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import MenuSidebar from './menuSidebar/MenuSidebar'

const SideBar = styled(Box)(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    height: '100%',
    alignItems: 'center',
    gap: '5px',
    // transition: 'all 5s!important',
    background: theme.sidebar.background,
    [theme.breakpoints.down('md')]: {
        width: '50vw',
    },
    [theme.breakpoints.down('sm')]: {
        width: '70vw',
    }
}));

export default function Siderbar() {
    const theme = useTheme();
  return (
    <SideBar>
        <Header/>
        <Divider sx={{height:'1px',width:'100%',color:`${theme.sidebar.textColor}`}}/>
        <MenuSidebar/>
        <Stack sx={{flex:'2',width:'100%',}}>
            <Divider/>
            <Footer/>
        </Stack>
    </SideBar>
  )
}
