import { Box, styled, Typography } from '@mui/material'
import React from 'react'
const Container = styled(Box)(({theme})=>({
    height:"auto",
    margin:"10px 40px",
    background:"white",
    [theme.breakpoints.down('md')]: {
      margin:"0px 10px"
    },
    [theme.breakpoints.down('sm')]: {
      margin:"0px 0px"
    },
}))

const Wrapper = styled(Box)(({theme})=>({
display:"flex",
justifyContent:"space-evenly",
padding:"0px 16px",
[theme.breakpoints.down('md')]: {
justifyContent:"space-between",
gap:"10px"
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection:"column",
    gap:"10px"
      },
}))
const Left = styled(Box)(({theme})=>({
display:"flex",
marginRight:"50px"


}))
const VideoContainer = styled(Box)(({theme})=>({
height:"60vh",
width:"50vw",
display:"flex",
gap:"10px",
justifyContent:"center",
padding:"10px 0px",
[theme.breakpoints.down('md')]: {
    height:"40vh",
    width:"35vw"
  },
  [theme.breakpoints.down('sm')]: {
    height:"100%",
    width:"100%",
    padding:"10px 10px"
      },


}))
const Video = styled("video")(({theme})=>({
objectFit:"cover",
height:"100%",
width:"100%"
}))
const Right = styled(Box)(({theme})=>({
display:"flex",
alignItems:"flex-end",
flexDirection:"column",
flexWrap:"wrap",
gap:"30px", 
marginTop:"15px",
paddingLeft:"40px",
borderLeft:'1px solid #EEEEEE',
[theme.breakpoints.down('lg')]: {
    border:"none",
    paddingLeft:"20px"
  },
  [theme.breakpoints.down('md')]: {
    border:"none",
    paddingLeft:"40px"
  },
  [theme.breakpoints.down('md')]: {
    alignItems:"center",
    marginBottom:"20px"
  },
}))
const TagContainer = styled(Box)(({theme})=>({
display:"flex",
gap:"10px",
flexWrap:"wrap",
justifyContent:"flex-end",
alignItems:"center",

}))
const Tag = styled(Box)(({theme})=>({
    // background: "rgba( 74, 144, 226, 0.2 )",
    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    // backdropFilter: "blur( 3px )",
    borderRadius: "10px",
    border: "1px solid #878787",
    padding:"8px 20px",
    fontSize:"16px",
    fontWeight:"bold",
    cursor:"pointer",
    flexWrap:"wrap",
    "&:hover":{
        background: "rgba( 19, 113, 229, 0.1)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 1px )",
    transition:"all 0.4s linear",
    },
    [theme.breakpoints.down('md')]: {
      padding:"5px 5px",
      fontSize:"14px",
      fontWeight:"500"
    
      },
}))

const Block7 = ({product}) => {
    const handleClick=(e, url) =>{
        console.log(url)
        window.open(url)
        }

  return (
    <Container>
        <Wrapper>
            <Left>
            <VideoContainer>
            {product.data.productVideo.map((item)=>(
                <Video src={item.productVideoUrl} muted loop controls></Video>
            ))}
            </VideoContainer>
            </Left>
            <Right>
                
                    <Typography variant = "h3" sx={{fontSize:{sm:"14px", md:"24px"}, fontWeight:"600"}}>Related Topics & Tags</Typography>
                <TagContainer>
                    {product.data.tags.map((item)=>(

               <Tag onClick={(e)=>handleClick(e,item.tagUrls)} >{item.name}</Tag>
                    ))}

                </TagContainer>
            </Right>
        </Wrapper>
    </Container>
      )
}

export default Block7