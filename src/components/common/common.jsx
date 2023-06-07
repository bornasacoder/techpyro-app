import Product from '../../components/pages/Product'
import React from 'react'

const common = () => {
  const[myData , setMyData]=useState([]);

  useEffect(()=>{
    let id =window.location.pathname.slice(-24);
    axios
    
   
   
 console.log(window.location.pathname.slice(-24));

  },[]);
  return (
    <>
      <Product myData={myData}/>
    </>
  )
}

export default common
