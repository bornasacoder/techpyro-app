import React, { Component } from 'react'
import Block15Items from './Items/Block15Items'

export default class Block15 extends Component {
  article=[
    {
    "url":"	https://images.bewakoof.com/t320/keep-listening-half-sleeve-t-shirt-465268-1679049206-1.jpg"
    },
    {
    "url":"https://images.bewakoof.com/t320/men-s-black-save-our-home-t-shirt-276160-1655747776-1.jpg"
    },
    {
    "url":"https://images.bewakoof.com/t320/men-s-black-feel-most-alive-t-shirt-307093-1655749411-1.jpg"
    },
    {
    "url":"https://images.bewakoof.com/t320/be-a-human-half-sleeve-t-shirt-navy-blue-343159-1655748189-1.jpg"
    },
    {
    "url":"https://images.bewakoof.com/t320/men-s-black-be-a-human-t-shirt-343160-1655820909-1.jpg"
    },
    
]
  constructor(){
    super();
    this.state={
      article : this.article
    }
  }
  render() {
    return (
      <div style={{ backgroundImage:"url("+("https://images.bewakoof.com/web/bg-web-mc-land-page.svg")+")",
      backgroundRepeat:"no-repeat",width:"100%",backgroundSize:"cover"
      }}>
        <h3 style={{display:"flex", justifyContent:"center",margin:"20px auto 30px"}}>BESTSELLER</h3>
        <div className="cards" style={{display:"flex",justifyContent:"center"}}>
          {this.state.article.map((element)=>{
            return(
            <Block15Items imageUrl={element.url}/>
            )
          })}
        </div>
        <a href="/" style={{display:"flex", justifyContent:"center",fontWeight:"bolder", margin:"40px"}}>Explore All</a>
      </div>
    )
  }
}
