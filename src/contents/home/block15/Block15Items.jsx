import { Card } from '@mui/material'
import React, { Component } from 'react'

export class Block15Items extends Component {
  render() {
    let {imageUrl}=this.props
    return (
      <div style={{width:"17vw",borderRadius:"3px",border:"0.5px ",background: "rgb(249, 247, 247)",margin:"0 12px"}}>
        <img src={imageUrl} alt=""  style={{width:"100%"}}/>
        <h5 style={{margin:"1px 5px"}}>Bewakoof</h5>
        <h6 style={{margin:"1px 5px"}}>Keep Listening Half Sleeve T-Shirt</h6>
        <h3 style={{margin:"1px 5px 20px"}}>Rs.499</h3>
      </div>
    )
  }
}

export default Block15Items
