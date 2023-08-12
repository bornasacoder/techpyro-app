import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './mobilecover.css'
export default class Mobilecover extends Component {

    article =[
        {
            "brand":"Nokia"
        },
         {
            "brand":"Samsung"
        },
         {
            "brand":"POCO"
        },
         {
            "brand":"Realme"
        },
         {
            "brand":"Xiaomi"
        },
         {
            "brand":"Oneplus"
        },
        
    ]
    constructor(){
        super();
        this.state={
            article :this.article
        }
    }
  render() {
    return (
        <>
        <Navbar/>
    <div style={{backgroundColor:"white",marginTop:"-62px"}}>
        <div className='OuterMostContainer' style={{margin:" 0 auto", color:"black",marginTop:"62px",}}>
        <div className="ForhomeButton" style={{padding:"17px 0 "}}>
            <a href="/" style={{textDecoration:"none", color:"black",padding:"0 15px"}}>Home</a>/  Men Clothing
        </div>
        <div className="container" style={{background: "rgb(234, 234, 234)",padding:"25px 57px 107px 52px"}}>
            <div className="Header" >
                <h1 style={{marginBottom:"0 auto"}}>Mobile Covers And Cases</h1>
                <div className="underline" style={{width: "130px",height: "2px",margin: "7px 3px 40px",background: "rgb(253, 216, 53)"}}></div>
            </div>
            <div style={{display:"flex"}}>
                <div className="leftside" style={{backgroundColor:"white",padding:"35px 15px 66px 35px"}}>
                    <ul style={{listStyle:"none",display:"flex",flexWrap:"wrap",padding:"0"}}>
                        {this.state.article.map((element)=>{
                            return(
                                <li style={{padding:"20px 0px",fontSize:"16px",}}>
                                <a href="https://www.bewakoof.com/xiaomi-redmi-9-power-back-cover-cases" style={{textDecoration:"none",color: "#5d5d5d"}}>{element.brand}</a></li>
                            )
                        })}
                       
                    </ul>
                </div>
                <div className="rightside" style={{paddingLeft:"60px"}}>
                    <img src="	https://images.bewakoof.com/nav_menu/landing-page-mobile-box-1558174497.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
  }
}
