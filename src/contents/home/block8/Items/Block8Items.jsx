import React, { Component } from 'react'

export class Block8Items extends Component {
  render() {
    let {imageUrl} = this.props
    return (

        <div style={{width:"49%",padding:"0 7.5px"}}>
            <img src={imageUrl} alt=""  style={{width:"100%", }}/>
           
        </div>
      
    )
  }
}

export default Block8Items
