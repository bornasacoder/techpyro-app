import { Box } from '@mui/system'
import React from 'react'
import Block1 from '../../contents/checkout/block1/Block1'
import Block2 from '../../contents/checkout/block2/Block2'
import Block3 from '../../contents/checkout/block3/Block3'
import Block4 from '../../contents/checkout/block4/Block4'
import BlockRight from '../../contents/checkout/blockRight/BlockRight'
import Navbar from '../../layout/mainLayout/navbar/Navbar'

export default function CheckOut() {
  return (
    <>
        <Navbar menu={'none'} arrow={'block'} logo={'TechPyro'} page={'checkout'}/>
        <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},width:'100%',marginTop:'80px'}}>
            <Box sx={{display:'flex',flexDirection:'column',gap:'20px',width:{md:'50%',xs:'90%'},margin:{md:'0 0 0 150px',sm:'0 50px',xs:'0 20px'}}}>
                <Block1/>
                <Block2/>
                <Block3/>
                <Block4/>
            </Box>
            <Box sx={{margin:{md:'0',sm:'0 50px',xs:'0 20px'}}}>
                <BlockRight/>
            </Box>
        </Box>
    </>
  )
}
