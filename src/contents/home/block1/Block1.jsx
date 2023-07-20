import React from 'react'
import { PropTypes } from 'prop-types'
import { Component } from 'react'
import { useState } from 'react'
import Block1Items from './Block1Items'
import { ConstructionRounded } from '@mui/icons-material'


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
    }
 ] 

 constructor(){
  super();
  this.state = {
      article: this.article
  }
  }
  render() {
    return (
        <div className='container' style={{display:"flex",overflow:"hidden",height:"505px",marginTop:"50px",marginBottom:"30px"}}>
      {this.state.article.map((element)=>{
         return(
          <Block1Items imageUrl={element.url}/>
        )
      })}
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
