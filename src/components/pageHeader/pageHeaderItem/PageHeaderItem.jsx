import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled(Box)(({theme})=>({
    // width:"85%",
    // height:"auto",
    flex: 1,
}));
    const HeaderInnerContainer = styled(Box)(({theme})=>({
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        // margin:"10px 20px"
    }));
    const Image = styled("img")(({theme})=>({
        width:"50px",
        height:"50px",
        objectFit:"cover",
        margin:"10px",
        '@media(maxWidth: 960px)':{
            width:"30px",
            height:"30px",
            margin:"7px"
        },
        '@media(maxWidth: 600px)':{
            width:"20px",
            height:"20px",
            margin:"4px"
        }
    }));
    const Head = styled(Typography)(({theme})=>({
        fontSize: "12px!important",
        fontWeight:"500",
        textAlign:"center",
        color: 'black',
        marginBottom:"5px",
        "@media (max-width: 600px)": {
           fontSize: "7px!important",
           },
        "@media (max-width: 960px)": {
           fontSize: "10px!important",
           },
    }));

export default function PageHeaderItem({links}) {
  return (
    <HeaderContainer>
        <HeaderInnerContainer>
            <Image src={links.url} />
            <Head>{links.text}</Head>
        </HeaderInnerContainer>
    </HeaderContainer>
  )
}
