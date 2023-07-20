import React, { Component } from 'react'
import Block12Items from './Block12Items';
export default class Block12 extends Component {

  article = [
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/1x1-cotton-pyjamas-refreshed-1689157942.jpg"
    },
    
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/1X1-STATIC-TIE-DYE-COMMON-1689164867.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/1x1-urban-oversize-1689572490.jpg"
    }
 ] 

 constructor(){
  super();
  this.state = {
      article: this.article
  }
  }
  render() {
    return (
      <div className='container' style={{display:"flex",overflow:"hidden",height:"505px",marginTop:"50px",marginBottom:"15px"}}>
    {this.state.article.map((element)=>{
       return(
        <Block12Items imageUrl={element.url}/>
      )
    })}
    </div>
  )
  }
}
