import React, { Component } from 'react'

export class Block2Items extends Component {
  render() {
    let {imageUrl}=this.props
    return (
      <>
      <div style={{margin:"0 auto"}}>
        <div className="img1" style={{width: "125px",
                height: "207px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",marginLeft:"25px"}}>
        <img  style={{width:"125px",height:"173px",border:" 1px solid black"}} src={imageUrl} alt="" />
        <p style={{margin:"19px 0 0 "}}>MEN</p>
      </div> </div>
      </>
    )
  }
}

export default Block2Items


