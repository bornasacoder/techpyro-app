import React, { Component } from 'react'
import Block7Items from './Block7Items';

export default class Block7 extends Component {

  article =[
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg"
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
      <div className="container2" style={{width:"100%",}}>
      <div className="imageWithLinks" style={{display:"flex",width:"100%",height:"745px",margin:"5px auto",flexWrap:"wrap",}}>
        {this.state.article.map((element)=>{
          return(
          <Block7Items imageUrl={element.url}/>
          )
        })}
       </div>
       </div>
    )
  }
}


