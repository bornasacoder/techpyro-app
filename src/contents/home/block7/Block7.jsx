import React, { Component } from 'react'
import Block7Items from './items/Block7Items';

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
      <div className="container7" style={{width:"100%",justifyContent:"center"}}>
      <div className="imageWithLinks" style={{display:"flex",width:"100%",margin:"5px auto",flexWrap:"wrap",}}>
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


