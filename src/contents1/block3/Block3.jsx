
import { Box, Button, Pagination, Typography, styled } from '@mui/material'
import React, { useState } from 'react'


const Box1 = styled(Box)({
   width:'100%',
   display:'flex',
   justifyContent:'center',
   background:'#F8F9FA',

})
const Box2 = styled(Box)(({theme})=>({

    width:'75%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    [theme.breakpoints.down("md")]:{
        width:"90%"
    },
    [theme.breakpoints.down("sm")]:{
        width:"95%"
    }
}))
const Image = styled("img")(({theme})=>({
    
    
}))




  

const Block3 = ({pagination}) => {
    let [page , setPage] = useState(1);
    const [data, setData] = useState(pagination.data.slice(0,3))

    
    const perPage = 3;
    const count = Math.ceil(pagination.data.length / perPage);
    const handleChange = (e,value) =>{
    setPage(value)
     if(page % 2 !== 0){
      setData(pagination.data.slice(page+1,page+4))
      console.log(data)
     }
      else{
      setData(pagination.data.slice(page,page+3))
      console.log(data)
      }

}


return (
    <>
       <Box1>
          <Box2>
                    <Typography sx={{fontFamily:'Dancing Script',fontSize:{md:'65px', sm:'45px',xs:'30px',},color:'#181818',padding:'20px'}}>Latest posts</Typography>
                  
                     { data && data.map((item,id)=>(
                        <Box key={id} sx={{display:'flex',flexDirection:{md:'row',sm:'column',xs:'column'}, background:'#FFFFFF',margin:'10px',width:'100%',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px', justifyContent:"space-between"}}>
                            <Box sx={{display:"flex", justifyContent:"center", alignItems:{xs:"center", md:"flex-start"}, width:"100%"}} >
                                <Image sx={{width:{md:'100%',sm:'100%',xs:'100%'},height:{sm:'auto', xs:"auto"}}} src={item.image} alt="" />
                            </Box>
                            <Box sx={{padding:{md:'15px 25px',sm:'10px 0px',xs:'10px 5px'},width:'100%'}}>
                                <Typography sx={{color:'#FC5B62',fontSize:'25px',padding:{md:'20px 0px',sm:'7px',xs:'5px'},fontWeight:'700'}}>{item.heading}</Typography>
                                <img style={{height:'30px',width:'30px',marginBottom:'10px'}} src={item.location} alt="" />
                                <Typography sx={{fontSize:'20px'}}>{item.text1}</Typography>
                                <Typography sx={{fontSize:'20px'}}>{item.text2}</Typography>
                                <Typography sx={{fontSize:'20px'}}>{item.text3}</Typography>
                                <Typography sx={{fontSize:'20px'}}>{item.text4}</Typography>
                                <Button variant={'outlined'} sx={{background:'#FC5B62',color:'#fff',marginTop:'30px',padding:'10px 20px'}}>{item.button}</Button>
                            </Box>
                        </Box>
                 
                      ))}

                    <Pagination
                        count={count}
                        size="large"
                        page={page}
                        variant="outlined"
                        shape="rounded"
                        onChange={(e, value) => handleChange(e,value)}
                    />
          </Box2>
       </Box1>
    </>
  )
}

export default Block3
