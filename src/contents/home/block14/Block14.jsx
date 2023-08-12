import React, { Component } from 'react'
import Block14items from './Items/Block14items'

export default class Block14 extends Component {

  article =[
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-D-180x262-mobile-covers-1687757495.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-D-180x262-sliders-1687757497.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-D-180x262-backpacks-1687757496.jpg"
    },
    {
     "url":"https://images.bewakoof.com/uploads/grid/app/category-box-new-D-180x262-caps-1687757497.jpg"
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
      <div className="container14" style={{width:"100%",}}>
      <div className="imageWithLinks" style={{display:"flex",width:"100%",margin:"5px auto",justifyContent:"center",height:"90%"}}>
        {this.state.article.map((element)=>{
          return(
          <Block14items  imageUrl={element.url} />
          )
        })}
       </div>
       </div>
    )
  }
}
