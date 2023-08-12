import { Card } from '@mui/material'
import React, { Component } from 'react'
import './item.css'
export class Block15Items extends Component {
  render() {
    let {imageUrl}=this.props
    return (
      <div  className='container15' style={{width:"17vw",borderRadius:"3px",border:"0.5px ",background: "rgb(249, 247, 247)"}}>
        <img src={imageUrl} alt=""  style={{width:"100%"}}/>
        <h5 style={{margin:"1px 5px"}}>Bewakoof</h5>
        <h6 style={{margin:"1px 5px"}}>Keep Listening Half Sleeve T-Shirt</h6>
        <h3 style={{margin:"1px 5px 20px"}}>Rs.499</h3>
      </div>
    )
  }
}

export default Block15Items
