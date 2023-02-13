import { Box } from '@mui/system';
import React from 'react'
// import styled from 'styled-components';
import Card0 from '../../../components/card/card2/Card0'


export default function Block0(props) {
    const image1 = props.imagelink[0].url;

  return (
    <>
    <Box sx={{display:"flex",height:{xs:'160px',sm:'200px',md:'auto'},width:{xs:'100%',sm:'80%',md:'100%', lg:"100%"},justifyContent:'center'}}>
      <Box sx={{display:"flex", justifyContent:"center", width:"90%"}} >


      <img style={{borderRadius:'15px', width:"100%"}} src={image1} alt='' />
      </Box>
    </Box>
    <Box>

     < Card0 />
    </Box>
  
    </>
  )
}
