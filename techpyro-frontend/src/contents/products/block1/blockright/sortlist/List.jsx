import { Box, Radio, styled, Typography } from '@mui/material'
import React from 'react'
const SortList = styled(Box)(({theme})=>({
display:"flex",
height:'33vh',
width:"97%",
justifyContent:"flex-start",
flexDirection:"column",
alignItems:"flex-start",
background:"#fff"
}))
const SortCategory = styled(Box)(({theme})=>({
  width:"95%",
  borderTop:"1px solid #EEEEEE",
display:" flex",
marginLeft:"10px",
justifyContent:"space-between",
alignItems:"center"
}))
const List = () => {
  const [selectedValue, setSelectedValue] = React.useState('Popularity');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });


  
  return (
        <SortList>
        <Typography width="100%" sx={{fontSize:"14px", margin:"10px", color:"#878787"}} >SORT BY</Typography>
        <SortCategory>
      <Typography width="50%" >Popularity</Typography>
     <Radio {...controlProps('Popularity')} value="Popularity" />
        </SortCategory>
        <SortCategory>
      <Typography width="50%" > Price -- Low to High</Typography>
     <Radio {...controlProps('Price -- Low to High')} value="Price -- Low to High"/>
        </SortCategory>
        <SortCategory>
      <Typography width="50%" >Price -- High to Low</Typography>
     <Radio {...controlProps('Price -- High to Low')} value="Price -- High to Low" />
        </SortCategory>
        <SortCategory>
      <Typography width="50%">Newest First</Typography>
     <Radio {...controlProps("Newest First")} value="Newest First"/>
        </SortCategory>
        </SortList>
  )
}

export default List