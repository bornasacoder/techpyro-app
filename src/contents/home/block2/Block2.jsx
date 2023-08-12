import React from 'react'
import { Component } from 'react'
import { useState } from 'react'
import Block2Items from './Items/block2Items'
import './block2.css'
  export default class Block2 extends Component {
    article =[
         {
          "url":"	https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-TIE-DYE-COMMON-1689164867.jpg"
         },
         {
          "url":"	https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-TIE-DYE-COMMON-1689164867.jpg"
         },
         {
          "url":"	https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-TIE-DYE-COMMON-1689164867.jpg"
         },
         {
          "url":"	https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-TIE-DYE-COMMON-1689164867.jpg"
         },
         {
          "url":"	https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-TIE-DYE-COMMON-1689164867.jpg"
         },
         {
          "url":"	https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-TIE-DYE-COMMON-1689164867.jpg"
         },
         {
          "url":"	https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-TIE-DYE-COMMON-1689164867.jpg"
         },
         {
          "url":"	https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-TIE-DYE-COMMON-1689164867.jpg"
         },
    ]
    constructor(){
      super();
      this.state = {
          article: this.article
      }
      }
    render() {
      return (
        <div className="container2" style={{width:"100%", margin:"0px auto",overflow:"hidden"}}>
        <div className="imageWithLinks" style={{display:"flex"}}>
          {this.state.article.map((element)=>{
            return(
            <Block2Items imageUrl={element.url}/>
            )
          })}
         </div>
         </div>
      )
    }
  }
  