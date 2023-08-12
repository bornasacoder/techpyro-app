import React, { Component } from 'react'
import Block11Items from './Items/Block11Items';
export default class Block11 extends Component {

  article =[
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg"
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
      <div className="container11" style={{width:"100%",}}>
      <div className="imageWithLinks" style={{display:"flex",width:"100%",margin:"5px",flexWrap:"wrap",height:"100%"}}>
        {this.state.article.map((element)=>{
          return(
          <Block11Items imageUrl={element.url}/>
          )
        })}
       </div>
       </div>
    )
  }
}

