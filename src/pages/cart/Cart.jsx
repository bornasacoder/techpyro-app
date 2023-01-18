import { Box,useTheme } from '@mui/material'
import React from 'react'
import Block1 from '../../contents/cart/block1/Block1'
import Block2 from '../../contents/cart/block2/Block2'
import Block3 from '../../contents/cart/block3/Block3'
import PageHeader from '../../contents/cart/pageHeader/PageHeader'
import Navbar from '../../layout/mainLayout/navbar/Navbar'

export default function Cart() {

    const theme = useTheme();

  return (
    <>
        <Navbar menu={'none'} arrow={'block'} logo={'Cart'} />
        <PageHeader/>
        <Box sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},width:'100vw',marginTop:'160px', padding:{md:'0 10vw',sm:'0 8vw',xs:'0 5vw'}}}>
            <Block1/>
            <Block2/>
            <Box  sx={{alignItems:'center',flexDirection:'column' ,left:0,right:0,top:'91%',display:{md:'none',xs:'flex'},background:`${theme.header.background}`,position:'fixed',height:'70px'}}>
                <Block3/>
          </Box>
        </Box>
    </>
  )
}
