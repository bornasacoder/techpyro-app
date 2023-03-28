import React, { useState } from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, Divider} from '@mui/material';
import { Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from 'redux/apiCalls';
import Skeleton from '@mui/material/Skeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardSkeleton from 'components/Skeletons/CardSkeleton';

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
      height:'150px',
      flexDirection:'row',
      // margin:'10px',
      // paddingTop:'50px',
      borderRadius:'10px',
      gap:'0px',
      boxShadow:'1px 1px 1px 1px  rgba(0,0,0,0.1)'
    },
   
  }))

const Card1 = () => {
    const theme = useTheme();
    const products = useSelector((state) => state.product.products)
    // console.log(products.length)
    const perPage = 8;
    const [skeletonstate,setSkeletonstate] = useState(true);
    const [item, setItem]  = useState(products.slice(0,8))
    // const[product,setProduct]=useState(null);
    // const [limit, setLimit]  = useState(8)
    let arr=[1,2,3,4,5,6,7,8];
    // console.log(mainCarousel);
    
    const fetchData = async ()=>{
      // console.log(item)
       setSkeletonstate(true);
     let res = await  getProducts(dispatch);
     console.log(products.length)
       setSkeletonstate(false);
    }


   const fetchMoreData = () =>{
    console.log("hello")
         console.log([...products.slice(item.length, item.length+perPage)])
      setTimeout(() => {
        // setItem([...item, products.slice(item.length, item.length + perPage)])
        setItem( [...item, ...products.slice(item.length, item.length+perPage)])
        console.log(item.length,'item length');
        console.log(products.length,'products length');
      }, 2000);
        
       
   };
    const dispatch = useDispatch();

    useEffect(()=>{
      fetchData();
      //  console.og("hello")
    }, [])
 
   

  return (
    <>
<Box sx={{padding:{xs:'10px',sm:'30px',md:'10px 0px 10px 100px'}}}>
  <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'35px',},fontWeight:'600',color:'black'}}>200 Restaurents</Typography>
</Box>
<Divider/>

{skeletonstate?

  
<Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0px 10px',sm:'0px 0px',md:'0px 0px 0px 0px'}}}>


      <Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'40px',flexWrap:"wrap"}}>
        
     {arr.map((item)=>(
       <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'40%'},width:{xs:'40%',sm:'50%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center' }}>
      
      <Skeleton variant="rectengular" sx={{height:{xs:'140px',sm:'200px',md:'140px'},width:{xs:'10px',sm:'160px',md:'250px'}}}/>
       
     </Box>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'50%'},width:{xs:'80%',sm:'70%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'20px'},gap:{xs:'0px',sm:'0px',md:'0px'}}}>
       
      
       <Skeleton variant="text" sx={{fontSize:'25px'}}/>

       <Box sx={{display:'flex',marginTop:{xs:'10px',sm:'10px',md:'20px'},justifyContent:'space-between'}}>
       <Skeleton variant="text"   sx={{fontSize:'20px', width:{xs:'20px',sm:'40px',md:'50px'} }}/>
       <Skeleton variant="text"   sx={{fontSize:'20px',width:{xs:'20px',sm:'40px',md:'50px'} }}/>
       <Skeleton variant="text"   sx={{fontSize:'20px',width:{xs:'50px',sm:'70px',md:'100px'} }}/>
       
       </Box>
       <Skeleton variant="text" sx={{fontSize:'25px'}}/>
      
       </Box>
       <Box sx={{height:{xs:'30%',sm:'40%',md:'10%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',padding:{xs:'25px',sm:'25px',md:'0px'},gap:'10px',textAlign:'center',justifyContent:'center',display:{xs:'none',sm:'none',md:'flex'}}}>
       
       <Skeleton variant="rectengular" sx={{width:'100px',height:'40px',display:{xs:'none',sm:'none',md:'block'}}}/>
       </Box>
      
      </CardBox>
    ))}
      
     
       </Box>
    
    
       </Box>




:
    


<Box sx={{display:'flex',justifyContent:'center',padding:{xs:'20px 5px',sm:'0px 20px',md:'30px 0px 0px 0px'}}}>

<InfiniteScroll 
        dataLength={item.length}
        next={fetchMoreData}
        hasMore={products.length !== item.length}
        loader={ <CardSkeleton/>}
        endMessage={<div style={{display:'flex',justifyContent:'center'}}>
          <h1>All Set!</h1>
        </div>}

        
        >

<Box sx={{margin:{xs:'0px',sm:'0px 0px',md:'0px'},width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:'40px',flexWrap:"wrap"}}>
      {item && item.map((item)=>(
       <Link to={`/product/${item.id}`} style={{textDecoration:'none',color:'black'}}>
       
        <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'40%'},width:{xs:'40%',sm:'50%',md:'100%'},padding:{xs:'0px',sm:'0px',md:'0px'},display:'flex',justifyContent:'center',alignItems:'center' }}>
      
        <CardMedia
        sx={{height:'100%',width:{xs:'100%',sm:'100%',md:'90%'},marginTop:'10px',borderRadius:{xs:'20px',sm:'20px',md:'0px'}}}
        component="img"
        image={item.image}
        alt="green iguana"
        />
     </Box>
       <Box sx={{height:{xs:'100%',sm:'100%',md:'50%'},width:{xs:'80%',sm:'70%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'0px',md:'20px'},gap:{xs:'0px',sm:'0px',md:'0px'}}}>
       
      
        <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'18px'},fontWeight:'500'}}> {item.shopname}</Typography>
       <Typography>{item.tagline}</Typography>

       <Box sx={{display:'flex',marginTop:{xs:'10px',sm:'10px',md:'20px'},justifyContent:'space-between'}}>
        <Typography sx={{display:'flex',alignItems:'cebter',fontSize:'15px',fontWeight:'500',background:'#F56B11',color:'white',gap:'5px',paddingRight:'5px'}}><Star sx={{fontSize:'20px'}}/>{item.rating}</Typography>
        <Typography>37 mins</Typography>
        <Typography>{item.price.mrp}</Typography>
       </Box>
       <Typography sx={{fontSize:{xs:'20px',sm:'25px',md:'18px'},fontWeight:'500',color:'red',marginTop:'20px'}}> {item.price.discount}</Typography>
      
       </Box>
       <Box sx={{height:{xs:'30%',sm:'40%',md:'10%'},width:{xs:'0%',sm:'0%',md:'100%'},display:'flex',padding:{xs:'25px',sm:'25px',md:'0px'},gap:'10px',textAlign:'center',justifyContent:'center',display:{xs:'none',sm:'none',md:'flex'}}}>
       
       <Button variant='contained' sx={{fontSize:'15px',color:'black',borderRadius:'0px',border:'1px solid black',background:'transparent',"&:hover":{background:'transparent'}}}>Quick View</Button>
       </Box>
      
      </CardBox>
      
      </Link>
      ))}
      
      </Box>
       
     
       </InfiniteScroll>
    
       </Box>
       
      }
       </>
       
  )
    }
export default Card1