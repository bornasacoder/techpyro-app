import React, { Component } from 'react'
import './items.css'
export class Block11Items extends Component {
  render() {
    let {imageUrl} = this.props
    return (
      
        <div className="img2" style={{
                display: "flex",}}>
        <img  style={{maxHeight:"100%",maxWidth:"100%" }} src={imageUrl} alt="" /> 
      </div>
    )
  }
}

export default Block11Items
