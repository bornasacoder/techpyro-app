import React, { useState } from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, Divider} from '@mui/material';
import { Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/apiCalls';
import Skeleton from '@mui/material/Skeleton';
import InfiniteScroll from 'react-infinite-scroll-component';

const CardBox = styled(Card)(({theme})=>({
    display:'flex',

    flexDirection:'column',
    width:'300px',
    height:'400px',
    backgroundColor:'transparent',
    borderRadius:'0px',
    boxShadow:'none',
    "&:hover":{border:'1px solid rgba(0,0,0,0.3)',boxShadow:'1px 1px 1px 1px  rgba(0,0,0,0.1)'},
  
    [theme.breakpoints.down('md')]: {
        width:'100%',
        height:'200px',
        flexDirection:'row',
        // paddingTop:'50px',
        borderRadius:'10px',
        gap:'20px',
        boxShadow:'1px 1px 1px 1px  rgba(0,0,0,0.1)'
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'140px',
      flexDirection:'row',
      // paddingTop:'50px',
      borderRadius:'10px',
      gap:'0px',
      boxShadow:'1px 1px 1px 1px  rgba(0,0,0,0.1)'
    },
   
  }))

const CardSkeleton = () => {
    const theme = useTheme();
    const products = useSelector((state) => state.product.products)
    // console.log(products.length)
    const perPage = 8;
    const [skeletonstate,setSkeletonstate] = useState(true);
    const [item, setItem]  = useState(products.slice(0,8))
   
    let arr=[1,2,3,4];
   
    
    const fetchData = async()=>{
      // console.log(item)
       setSkeletonstate(true);
     let res = await  getProducts(dispatch);
       setSkeletonstate(false);
    }


   const fetchMoreData = () =>{
    console.log("hello")
      setTimeout(() => {
        // setItem([...item, products.slice(item.length, item.length + perPage)])
        setItem((prev)=> [...prev, ...products.slice(item.length, item.length+perPage)])
        console.log(item.length)
      }, 5000);
        
   };
    const dispatch = useDispatch();

    useEffect(()=>{
      fetchData();
      fetchMoreData()
      //  console.og("hello")
    }, [])
 
   

  return (
    <>




  
<Box sx={{display:'flex',justifyContent:'center',padding:{xs:'20px 10px',sm:'0px 20px',md:'30px 0px 0px 0px'}}}>

<Link to='/product' style={{textDecoration:'none',color:'black'}}>
      <Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'40px',flexWrap:"wrap"}}>
        
     {arr.map((item)=>(
       <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'40%'},width:{xs:'30%',sm:'50%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center' }}>
      
      <Skeleton variant="rectengular" sx={{height:{xs:'140px',sm:'200px',md:'140px'},width:{xs:'200px',sm:'160px',md:'250px'}}}/>
       
     </Box>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'50%'},width:{xs:'70%',sm:'70%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'20px'},gap:{xs:'0px',sm:'0px',md:'0px'}}}>
       
      
       <Skeleton variant="text" sx={{fontSize:'25px'}}/>

       <Box sx={{display:'flex',marginTop:{xs:'10px',sm:'10px',md:'20px'},justifyContent:'space-between'}}>
       <Skeleton variant="text"   sx={{fontSize:'20px', width:{xs:'20px',sm:'40px',md:'50px'} }}/>
       <Skeleton variant="text"   sx={{fontSize:'20px',width:{xs:'20px',sm:'40px',md:'50px'} }}/>
       <Skeleton variant="text"   sx={{fontSize:'20px',width:{xs:'50px',sm:'70px',md:'100px'} }}/>
       
       </Box>
       <Skeleton variant="text" sx={{fontSize:'25px'}}/>
      
       </Box>
       <Box sx={{height:{xs:'30%',sm:'40%',md:'10%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',padding:{xs:'25px',sm:'25px',md:'0px'},gap:'10px',textAlign:'center',justifyContent:'center',display:{xs:'none',sm:'none',md:'flex'}}}>
       
       <Skeleton variant="rectengular" sx={{width:'100px',height:'40px'}}/>
       </Box>
      
      </CardBox>
    ))}
      
     
       </Box>
      </Link>
    
       </Box>





       </>
       
  )
    }
export default CardSkeleton