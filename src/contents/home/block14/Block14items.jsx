import React, { Component } from 'react'

export class Block14items extends Component {
  render() {
    let {imageUrl} = this.props
    return (
        <div className="img1" style={{ height:"455px",width:"24vw",
                display: "flex",
                margin:"0" , justifyContent:"center"}}>
        <img  style={{Width:"100%" }} src={imageUrl} alt="" /> 
      </div>
    )
  }
}

export default Block14items
