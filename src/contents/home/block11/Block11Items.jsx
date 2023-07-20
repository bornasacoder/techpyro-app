import React, { Component } from 'react'

export class Block11Items extends Component {
  render() {
    let {imageUrl} = this.props
    return (
        <div className="img1" style={{ height:"372px",width:"245px",
                display: "flex",
                margin:"0 auto"}}>
        <img  style={{maxHeight:"100%",maxWidth:"100%" }} src={imageUrl} alt="" /> 
      </div>
    )
  }
}

export default Block11Items
