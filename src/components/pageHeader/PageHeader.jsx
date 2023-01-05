import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import PageHeaderItem from './pageHeaderItem/PageHeaderItem';

const Header = styled(Box)(({theme}) => ({
  width:"99vw",
  margin:"67px 0 8px 0px",
}));

const HeaderInner = styled(Box)(({theme}) => ({
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  padding:'0 40px'
}));

export default function PageHeader(props) {
  return (
    <Header>
      <HeaderInner>
        {props.navData.map((item)=>(
          <PageHeaderItem links={item}/>
        ))}
      </HeaderInner>
    </Header>
  )
}
