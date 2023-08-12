import React, { Component } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './allProduct.css'

export class Allprocucts extends Component {


  render() {
    let {imageUrl,Description,Price}= this.props
    return (
      <>
        <div className="SingleProduct"  style={{padding:"0 8px"}}>
            <div className="img" style={{overflow:"hidden"}}>
              <img src={imageUrl} alt=""  style={{width:"100%",}}/>
            </div>
            <div className="Bewakoof" style={{display:"flex", width:"100%"}}>
              <div className="logo" >
              <h3  style={{margin:"0"}}>Bewakoof</h3>
              <div className="Description" style={{fontSize:"10px"}}>
              <h4  style={{margin:"0"}}>{Description}</h4>
              </div>    
              </div>
              <div className="icon" style={{margin:"0 5px 0 auto"}}>
              <FavoriteBorderOutlinedIcon style={{}}/>
              </div>
            </div>
            
            <div className="price">
              <span style={{fontWeight:"bolder",fontSize:'18px'}}><i class="fa fa-inr" style={{fontSize:"13px"}}></i> {Price}</span>
            </div>
              <div className="fabric" style={{border: "1px solid rgb(115, 115, 115)", backgroundColor:"white", display:"inline-block", margin:"10px 0", padding:"2px 8px", fontSize:"10px", color:"rgb(115, 115, 115)" , fontWeight:"bold"}}>
                100%  COTTON
              </div>
        </div>
        </>   
      
    )
  }
}

export default Allprocucts




