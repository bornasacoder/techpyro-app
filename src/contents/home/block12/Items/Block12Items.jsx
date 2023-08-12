import React, { Component } from 'react'
import './items.css'
export class Block12Items extends Component {
    render() {
        let {imageUrl}=this.props
        return (
          <div style={{justifyContent:"center"}}>
            <div className="images" >
            <img  src={imageUrl} alt=""
            style={{maxHeight:"100%",maxWidth:"100%"}} />
            </div>
          </div>
        )
      }
}

export default Block12Items
