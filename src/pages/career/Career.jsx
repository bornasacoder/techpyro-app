import { Box } from '@mui/material'
import Career1 from 'components/content/Career1'
import Career2 from 'components/content/Career2'
import Career3 from 'components/content/Career3'
import Content15 from 'components/content/Content15'
import Content18 from 'components/content/Content18'
import Content4 from 'components/content/Content4'
import Navbar from 'components/navbar/Navbar'
import React from 'react'

const Career = () => {
  return (
    <Box>
      <Navbar/>
      <Career1/>
      <Content15/>
      <Career2/>
      <Career3/>
      <Content4/>
    </Box>
  )
}

export default Career
