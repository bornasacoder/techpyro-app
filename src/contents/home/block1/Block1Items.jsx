import React, { Component } from 'react'

export class Block1Items extends Component {
  render() {
    let {imageUrl}=this.props
    return (
      <div>
        <div className="images" style={{height:"516px",width:"517px" , margin:"auto 5px"}}>
        <img  src={imageUrl} alt=""
        style={{maxHeight:"100%",maxWidth:"100%"}} />
        </div>
      </div>
    )
  }
}

export default Block1Items
