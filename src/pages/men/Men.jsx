import React, { Component } from 'react'
import Filters from '../../contents/product/block1/Filters/Filters'
import Allprocucts from '../../contents/product/block1/AllProducts/Allprocucts'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import Navbar from '../../components/Navbar/Navbar';

export default class Men extends Component {
    article =[
        {
         "imageurl":'https://images.bewakoof.com/t640/men-s-black-save-our-home-t-shirt-276160-1655747776-1.jpg',
         "description":"Men's Black Save Our Home T-shirt",
         "price":"499"
        },
         {
         "imageurl":'	https://images.bewakoof.com/t640/martin-garrix-colorful-half-sleeve-t-shirt-203045-1655748440-1.jpg',
         "description":"Men's Blue Peace Out Astronaut Graphic Printed T-shirt",
         "price":"499"
        },
         {
         "imageurl":'https://images.bewakoof.com/t640/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg',
         "description":"Men's Black Save Our Home T-shirt",
         "price":"499"
        },
          {
         "imageurl":'	https://images.bewakoof.com/t640/men-s-white-world-peace-t-shirt-231465-1655747902-1.jpg',
         "description":"Men's White World Peace Graphic Printed T-shirt",
         "price":"499"
        },
          {
         "imageurl":'https://images.bewakoof.com/t640/men-s-white-young-forever-t-shirt-277586-1655747977-1.jpg',
         "description":"Men's White Young Forever T-shirt",
         "price":"499"
        },
          {
         "imageurl":'	https://images.bewakoof.com/t640/sunset-block-half-sleeve-t-shirt-271582-1655748700-1.jpg',
         "description":"Men's Black Sunset Block Printed T-shirt",
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

        <div className='OuterMostContainer' style={{margin:" 0 180px", color:"black",marginTop:"62px"}}>
        <div className="ForhomeButton" style={{margin:"12px 0 "}}>
            <a href="/" style={{textDecoration:"none", color:"black",padding:"0 15px"}}>Home</a>/  Men Clothing
        </div>
        <div className="Header" >
            <h1>Men Clothing</h1>
        </div>
        <div className="main" style={{display:"flex"}}>
        <Filters/>
        <div style={{display:"flex", flexDirection:"column"}}>
        <div className="sortby" style={{display:"flex",padding:"12px 0",color: "rgba(45,45,45,.5)",fontWeight:"bold", float:"right",padding:"16px 15px 24px", marginLeft:"auto"}}>
          SORT BY   <span style={{color:"black" ,margin:"0 10px"}}>Popular <ArrowDropDownSharpIcon style={{margin:"0 0 0 6px", fontSize:"16px"}}/></span>
        </div>
      <div className="Products" style={{width:"850px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
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
