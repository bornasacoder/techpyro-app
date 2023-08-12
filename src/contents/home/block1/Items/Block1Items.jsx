import React, { Component } from 'react'
import './item.css'

export class Block1Items extends Component {
  
  render() {
    
    let {imageUrl}=this.props
    return (
      <div>
        <div className="imagesl" >
        <img  src={imageUrl} alt=""
        style={{maxHeight:"100%",maxWidth:"100%"}} />
        </div>
      </div>
    )
  }
}

export default Block1Items
