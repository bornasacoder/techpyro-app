import React, { Component } from 'react'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import './filter.css'
export default class Filters extends Component {

  article = [
    {
      "filterContents":'Category'
    },
    {
      "filterContents":'Sizes'
    },
    {
      "filterContents":'Brand'
    },
    {
      "filterContents":'Color'
    },
    {
      "filterContents":'Fit'
    },
    {
      "filterContents":'Design'
    },
    {
      "filterContents":'Sleeve'
    },
    {
      "filterContents":'Neck'
    },
    {
      "filterContents":'Type'
    },
    {
      "filterContents":'Rating'
    },
    {
      "filterContents":'Discount'
    },
    {
      "filterContents":'Sort By'
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
      <div className="filterContainer" style={{width:"290px",maxHeight:"initial",position:"initial",minWidth:"114px"}}>
      <div className='filterItems' style={{padding:"0 15px 13px"}}>
        <h3 style={{padding:"12px 0",color: "rgba(45,45,45,.5)"}}>FILTERS</h3>
        {this.state.article.map((element)=>{
          return(
            <div className={element.filterContents} style={{padding:"16px 0 1px"}} >
          <span style={{ fontSize:"14px"}}>{element.filterContents}</span>
          <i style={{float:"right", margin:"0 0 -1px"}}><ArrowDropDownSharpIcon /></i>
          <hr />
        </div>
        
          )
        })

        }
        
      </div>
      </div>
    )
  }
}
