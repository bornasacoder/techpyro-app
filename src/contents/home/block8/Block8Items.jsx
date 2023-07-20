import React, { Component } from 'react'

export class Block8Items extends Component {
  render() {
    let {imageUrl} = this.props
    return (

        <div style={{height:"445px", width:"49vw",padding:"0 15px"}}>
            <img src={imageUrl} alt=""  style={{Width:"100%", }}/>
           
        </div>
      
    )
  }
}

export default Block8Items
