import React, { Component } from 'react'
import './block7.css'
export class Block7Items extends Component {
  render() {
    let {imageUrl}=this.props
    return (

        <div className="img1" style={{
                display: "flex",
                margin:"0 auto"}}>
        <img  style={{maxHeight:"100%",maxWidth:"100%" }} src={imageUrl} alt="" />
        
       </div>
    )
  }
}

export default Block7Items

