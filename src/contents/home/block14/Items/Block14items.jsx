import React, { Component } from 'react'

export class Block14items extends Component {
  render() {
    let {imageUrl} = this.props
    return (
        <div className="img3" style={{width:"24vw",
                display: "flex",
                margin:"0" , justifyContent:"center"}}>
        <img  style={{width:"100%" }} src={imageUrl} alt="" /> 
      </div>
    )
  }
}

export default Block14items
