import React, { Component } from 'react'

export default class Block17 extends Component {
    article =[
        {
            "url":"https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg"
        },
        {
            "url":"https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
        },

    ]
    constructor(){
        super();
        this.state ={
            article :this.article
        }
    }
  render() {
    return (
      <div style={{margin:"3vh 0",backgroundColor:"white"}}>
        {this.state.article.map((element)=>{
            return(
                <img src={element.url} alt=""  style={{width:"100%",margin:"0"}}/>
            )
        })}
        
      </div>
    )
  }
}
