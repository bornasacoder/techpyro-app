import React from 'react'
import {styled , Box , Typography} from '@mui/material'
import Divider from '@mui/material/Divider';


const Image = styled('img')({
    width:'100%',
    height:'400px',
  })

export default function CardItem({Objs}) {
  return (
    <>
      <Box>
       <Image src={Objs.url}/>
        <Typography sx={{justifyContent:'center'}}>{Objs.name}</Typography>
       <Divider/>
      </Box>
    </>
  )
}
