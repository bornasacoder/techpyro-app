import React, { Component } from 'react'
import Filters from '../../contents/product/block1/Filters/Filters'
import Allprocucts from '../../contents/product/block1/AllProducts/Allprocucts'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import Navbar from '../../components/Navbar/Navbar';
import './women.css'

export default class Women extends Component {

    article =[
        {
         "imageurl":'	https://images.bewakoof.com/t640/women-s-black-boyfriend-t-shirt-103943-1655747735-1.jpg',
         "description":"Women's Black Boyfriend T-shirt",
         "price":"499"
        },
         {
         "imageurl":'	https://images.bewakoof.com/t640/friends-logo-boyfriend-t-shirt-frl-238060-1655748560-1.jpg',
         "description":"Women's friends logo T-shirt",
         "price":"499"
        },
         {
         "imageurl":'https://images.bewakoof.com/t640/inner-peace-boyfriend-t-shirt-navy-blue-295707-1661352673-1.jpg',
         "description":"Women's blue inner peace graphics printed T-shirt",
         "price":"499"
        },
          {
         "imageurl":'https://images.bewakoof.com/t640/women-s-white-motd-panda-t-shirt-479771-1655815714-1.jpg',
         "description":"Women's White MOTD Panda Printed T-shirt",
         "price":"499"
        },
          {
         "imageurl":'	https://images.bewakoof.com/t640/thug-jerry-boyfriend-t-shirt-tjl-273260-1655748686-1.jpg',
         "description":"Women's Jerry Graphics Printed T-shirt",
         "price":"499"
        },
          {
         "imageurl":'https://images.bewakoof.com/t640/whatever-cat-boyfriend-t-shirt-388114-1678261106-1.jpg',
         "description":"Women's Black Whatever Cat Graphics Printed T-shirt",
         "price":"499"
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
        <>
              <Navbar/>
  
          <div className='OuterMostContainerW' style={{ color:"black",margin:"0 auto"}}>
          <div className="ForhomeButton" style={{margin:"12px 10% "}}>
              <a href="/" style={{textDecoration:"none", color:"black",padding:"0 15px"}}>Home</a>/  Women Clothing
          </div>
          <div className="Header"  style={{margin:"0 10%"}} >
              <h1>Women Clothing</h1>
          </div>
          <div className="main" style={{display:"flex",margin:"0 auto",justifyContent:"center"}}>
          <Filters/>
          <div style={{display:"flex", flexDirection:"column"}}>
          <div className="sortby" style={{padding:"12px 0",color: "rgba(45,45,45,.5)",fontWeight:"bold", float:"right",padding:"16px 15px 24px", marginLeft:"auto"}}>
            SORT BY   <span style={{color:"black" ,margin:"0 10px"}}>Popular <ArrowDropDownSharpIcon style={{margin:"0 0 0 6px", fontSize:"16px"}}/></span>
          </div>
        <div className="Products" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
          {this.state.article.map((element)=>{
              return(
              <Allprocucts imageUrl={element.imageurl} Description={element.description} Price={element.price}/>
              )
          })}
          </div>
          </div>
        </div>
          
          </div>
          </>
        
      )
  }
}
