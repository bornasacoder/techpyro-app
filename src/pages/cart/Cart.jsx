import { Box,useTheme } from '@mui/material'
import React from 'react'
import Block1 from '../../contents/cart/block1/Block1'
import Block2 from '../../contents/cart/block2/Block2'
import Block3 from '../../contents/cart/block3/Block3'
import PageHeader from '../../contents/cart/pageHeader/PageHeader'
import Navbar from '../../contents/cart/navbar/Navbar'

export default function Cart() {

    const theme = useTheme();

  return (
    <>
        <Navbar/>
        <PageHeader/>
        <Box sx={{display:'flex',overflow:'hidden',flexDirection:{md:'row',xs:'column'},width:'100%',marginBottom:{md:'0',xs:'80px'},marginTop:'160px', padding:{md:'0 10%',sm:'0 8%',xs:'0 5%'}}}>
            <Block1/>
            <Block2/>
            <Box  sx={{flexDirection:'column' ,padding:{sm:'0 8%',xs:'0 5%'},left:0,right:0,bottom:0,display:{md:'none',xs:'flex'},background:`${theme.header.background}`,position:'fixed',height:'70px'}}>
                <Block3/>
          </Box>
        </Box>
    </>
  )
}
