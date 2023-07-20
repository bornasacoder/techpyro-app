import React, { Component } from 'react'

export class Block2Items extends Component {
  render() {
    let {imageUrl}=this.props
    return (
        <div className="img1" style={{width: "125px",
                height: "207px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",margin:"0 auto"}}>
        <img  style={{width:"125px",height:"173px",border:" 1px solid black"}} src={imageUrl} alt="" />
        <p style={{margin:"19px 0 0 "}}>MEN</p>
      </div> 
    )
  }
}

export default Block2Items


