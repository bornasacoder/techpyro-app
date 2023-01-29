import { Box } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/Constant'
import BlockLeft from '../../contents/account/blockLeft/BlockLeft'
import BlockRight from '../../contents/account/blockRight/BlockRight'
import PageHeader from '../../contents/account/pageHeader/PageHeader'
import Block from '../../contents/profile/Block'
import Navbar from '../../layout/mainLayout/navbar/Navbar'

export default function Profile() {
  return (
    <>
        <Navbar menu={'block'} arrow={'none'} logo={'TechPyro'}/>
        <PageHeader navData={navData}/>
        <Box sx={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',margin:'40px 0'}}>
            <Box sx={{display:'flex',width:'85%',justifyContent:'center',gap:'40px'}}>
                <BlockLeft/>
                <Block/>
                <BlockRight/>
            </Box>
        </Box>
    </>
  )
}
