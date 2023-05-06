import React from 'react';
import { Card,Box } from '@mui/material';

export default function Block3Card({item}) {
  return (
    <Box sx={{height:{lg:'130px',width:'150px'}}}>
      <img style={{height:'100%',width:'100%'}} src={item.img} />
    </Box>
  )
}
