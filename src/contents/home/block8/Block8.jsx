import React, { Component } from 'react'
import Block8Items from './Block8Items'

export default class Block8 extends Component {

   article = [
    { 
      "url":"	https://images.bewakoof.com/uploads/grid/app/mid-size-hygiene-revamp-desktop-buy3-1689160570.jpg"
    },
    { 
      "url":"https://images.bewakoof.com/uploads/grid/app/new-mid-banner-summer-boxers-1688391388.jpg"
    },
    { 
      "url":"https://images.bewakoof.com/uploads/grid/app/new-mid-banner-bftees-1689742322.jpg"
    },
    { 
      "url":"https://images.bewakoof.com/uploads/grid/app/plus-size-common-1683622044.jpg"
    }
   ]

   constructor(){
    super();
    this.state={
      article : this.article
    }
   }
  render() {
    return (
      <div style={{display:"flex",height:"865px",width:"100%",flexWrap:"wrap"}}>
        {this.state.article.map((element)=>{
           return(
            <Block8Items imageUrl ={element.url} />
           )
        })}
      </div>
    )
  }
}
