import React from 'react'
import { PropTypes } from 'prop-types'
import { Component } from 'react'
import { useState } from 'react'
import Block1Items from './Items/Block1Items'
import { ConstructionRounded } from '@mui/icons-material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './block1.css'

export default class Block1 extends Component {
  article = [
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-vest-02-1688366672.jpg"
    },
    
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-printperfectcottonPJ-men-1688928688.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-jumboprinttees-common-1688968443.jpg"
    },
    
 ] 

 constructor(){
  super();
  this.state = {
      article: this.article
  }
  }
     
  render() {
    const leftslide ={
      
    }
    return (
        <div className='container' style={{display:"flex",height:"33%",marginBottom:"30px"}}>
      {this.state.article.map((element)=>{
         return(
          <Block1Items imageUrl={element.url}/>
        )
      })}
          {/* <button onClick={leftslide} style={{position:"absolute", top:"280px",marginLeft:"25px",height: "47px",width: "47px",
        borderRadius: "50%",border: "0px",background: "hsla(0,0%,100%,.4)",padding: "13px 13px 13px 16px"}}><ArrowBackIosIcon/></button>
      <button style={{position:"absolute",top:"280px",marginLeft:"95.5%",height: "47px",width: "47px",
        borderRadius: "50%",border: "0px",background: "hsla(0,0%,100%,.4)",padding: "13px 17px 13px 13px"}}><ArrowForwardIosIcon/></button> */}
      </div>
    )
  }
}

// export default function Block1(props) {


//   return (
    
    
      
//       {/* <div style={{height:"517px",width:"517px", margin:"auto 5px"}}>
//       <img  style={{maxHeight:"100%",maxWidth:"100%" }} src="https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-printperfectcottonPJ-men-1688928688.jpg" alt="" />
//       </div>
//       <div style={{height:"517px",width:"517px", margin:"auto 5px"}}>
//       <img style={{maxHeight:"100%",maxWidth:"100%" }}  src="https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-jumboprinttees-common-1688968443.jpg" alt="" />

//       </div> */}
//       {/* <div style={{height:"517px",width:"517px", margin:"auto 5px"}}>
//       <img style={{maxHeight:"100%",maxWidth:"100%" }}  src="	https://images.bewakoof.com/uploads/grid/app/1x1-pllus-size-common-1689260778.jpg" alt="" />
//       </div> */}
//     </div>
//   )
// }
