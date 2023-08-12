import React, { Component } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AppleIcon from '@mui/icons-material/Apple';
import './footer.css'
export default class Footer extends Component {
 
 
  render() {
    return (
      <div style={{backgroundColor:"black", color:"white",width:"100%"}}>
        <div className="forMarginSet" style={{padding:"75px 0"}}>
          <div className="logo">
            <h1>
              <a href="/" style={{textDecoration:"none", color:"yellow",margin:"0"}}>Bewakoof</a>
            </h1>
            <div className="contents" style={{display:"flex",justifyContent:"space-between"}}>
                
                  <div className="customer">
                  <h4>CUSTOMER SERVICE</h4>
                  <ul style={{listStyleType:"none",padding:"0"}}>
                    <li>
                      <a href=""  style={{textDecoration:"none", color:"white",listStyle:"none"}}>CONTACT US</a>
                    </li>
                     <li>
                      <a href=""  style={{textDecoration:"none", color:"white",listStyle:"none"}}>TRACK US</a>
                    </li> 
                    <li>
                      <a href=""  style={{textDecoration:"none", color:"white",listStyle:"none"}}>RETURN ORDER</a>
                    </li> 
                    <li>
                      <a href=""  style={{textDecoration:"none", color:"white",listStyle:"none"}}>CENCEL ORDER</a>
                    </li>
                  </ul>
                </div>
                
              <div className="COMPANY">
                  <h4>COMPANY</h4>
                  <ul style={{listStyleType:"none",padding:"0"}}>
                    <li>
                      <a href=""  style={{textDecoration:"none", color:"white",listStyle:"none"}}>About Us</a>
                    </li>
                     <li>
                      <a href=""  style={{textDecoration:"none", color:"white",listStyle:"none"}}>We're Hiring</a>
                    </li> 
                    <li>
                      <a href=""  style={{textDecoration:"none", color:"white",listStyle:"none"}}>Terms & Conditions</a>
                    </li> 
                    <li>
                      <a href=""  style={{textDecoration:"none", color:"white",listStyle:"none"}}>Policy privacy</a>
                    </li>
                    <li>
                      <a href=""  style={{textDecoration:"none", color:"white",listStyle:"none"}}>Blogs</a>
                    </li>
                  </ul>
                </div>

                <div className="CONNECT_WITH_US">
                  <h4>CONNECT WITH US</h4>
                  <ul style={{listStyleType:"none",padding:"0"}}>
                   <li>
                    <FacebookIcon/>  <span>4.7M People Like This</span>
                   </li>
                   <li>
                    <InstagramIcon/>  <span>1M Followers</span>
                   </li>
                   <li>
                    <TwitterIcon/>
                    <PinterestIcon/>
                    <AppleIcon/>
                   </li>
                  </ul>
                </div>
                
                <div className="KEEP_UP_TO_DATE">
                  <h4>KEEP UP TO DATE</h4>
                  <ul style={{listStyleType:"none",padding:"0"}}>
                    <form action="">
                      <input type="email" placeholder='Enter Email ID' style={{    backgroundColor: "black",border: "1px",borderBottom: "1px solid yellow",height: "30px",padding: "13px",width: "152px",
                          color: "white"}} />
                          <input type="submit" style={{color: "black",height: "37px",padding: "13px",width: "152px",backgroundColor: "yellow",border: "1px solid yellow"
                          }} />
                    </form>
                   
                  </ul>
                </div>
                
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
