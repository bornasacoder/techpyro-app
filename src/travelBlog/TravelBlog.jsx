import React from 'react'
import Block1 from 'contents1/block1/Block1'
import Block2 from  'contents1/block2/Block2'
import { Box } from '@mui/material'
import Block3 from 'contents1/block3/Block3'
import{ pagination } from '../constants/pagination'
import { block2Data } from 'constants/block2Data'
import Block7 from 'contents/home/Block7'
import Block9 from 'contents/home/Block9'
import Block11 from 'contents/home/block11/Block11'
import Footer1 from 'components/footer/footer1/Footer1'

const TravelBlog = () => {
  return (
    <Box style={{background:'#FFFFFF'}}>
      <Block1/>
      <Block2 block2Data={block2Data}/>
      <Block3 pagination={pagination} />
      <Block7 />
      <Block9 />
      <Block11 />
      <Footer1/>
    </Box>
  )
}

export default TravelBlog;
