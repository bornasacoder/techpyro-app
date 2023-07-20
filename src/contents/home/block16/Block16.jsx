import React, { Component } from 'react'
import Block16Items from './Block16Items';

export default class Block16 extends Component {
  article = [
    { 
      "url":"https://images.bewakoof.com/uploads/grid/app/new-mid-banner-summer-boxers-1688391388.jpg"
    },
    { 
      "url":"	https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-tops-1689577911.jpg"
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
      <>
      <h2 style={{display:"flex",justifyContent:"center",color:"black",margin:"10px"}}>OUR BEST PICS</h2>
      <div style={{display:"flex",height:"865px",width:"100%",flexWrap:"wrap",backgroundColor:"white"}}>
        
        {this.state.article.map((element)=>{
           return(
            <Block16Items imageUrl= {element.url}/>
           )
        })}
      </div>
      </>
    )
  }
}
