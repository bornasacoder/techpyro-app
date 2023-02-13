import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import zIndex from '@mui/material/styles/zIndex';



const Box1 = styled(Box)({
  width:'100%',
  // border:'1px solid red',
  height:'500px',
  display:'flex',
  justifyContent:'center',
  margin:'30px 0px',
  backgroundColor:'white'


})
const Box2 = styled(Box)({
 width:'70%',
 display:'flex',
//  justifyContent:'center',
//  border:'1px solid red',
 position:'relative'

})
const Box3 = styled(Box)({
   gap:'20px',
   display:'flex',
   flexDirection:'column',


})
const Box4 = styled(Box)({
  display:'flex',
  justifyContent:'flex-end'
})

 const ParentBox  = styled(Box)({
   display:'flex',
   gap:'20px',
   zIndex:'20',
   justifyContent:'space-around',
   marginTop:'20px',
 })


const image='https://www.vedantu.com/cdn/images/new-home-page/B2/super-kid.webp';

export default function Card2() {

  return (
      <Box1>
        <Box2>
            <Box3>
              <ParentBox>
                  <Box>
                     <Card sx={{ width:'330px',height:'194px',backgroundColor:'#FFF0E9', }}>
                        <CardContent>
                            <Box sx={{display:'flex',justifyContent:'space-around'}}>
                              <Box >
                                <img src='https://www.vedantu.com/cdn/images/new-home-page/B2/english-pro.svg'/>
                              </Box>
                              <Box>
                                <Box>
                                  <h4>Age 4 - 8</h4>
                                  <h4>English Superstar</h4>
                                </Box>
                                <Box>
                                  <Typography>Level based holistic </Typography>
                                  <Typography>English Program</Typography>
                                </Box>
                              </Box>
                            </Box>
                          <CardActions>
                            <Box sx={{width:'100%',display:'flex',justifyContent:'center',marginTop:'30px'}}>
                              <Button sx={{color:'white',backgroundColor:'black'}} size="small">Explore more</Button>
                            </Box>
                          </CardActions>
                        </CardContent>
                     </Card>
                  </Box>
                  <Box>
                    <Card sx={{ width:'330px',height:'194px' ,backgroundColor:'#FFF0CB'}}>
                      <CardContent>
                          <Box sx={{display:'flex',justifyContent:'space-around'}}>
                            <Box >
                              <img src='https://www.vedantu.com/cdn/images/new-home-page/B2/vsk-spoken-english.svg'/>
                            </Box>
                            <Box>
                                <Box>
                                  <h4>Class 3 - 5</h4>
                                  <h4>Spoken english</h4>
                                </Box>
                                <Box>
                                  <Typography>See your child speak </Typography>
                                  <Typography>fluently and confidently</Typography>
                                </Box>
                        
                              </Box>
                        </Box>
                        <CardActions>
                           <Box sx={{width:'100%',display:'flex',justifyContent:'center',marginTop:'30px'}}>
                             <Button sx={{color:'white',backgroundColor:'black'}} size="small">Explore more</Button>
                            </Box>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </Box>
              </ParentBox>
                  <Box>
                      <Card sx={{ width:'330px',height:'194px',backgroundColor:'#EBF2FF' }}>
                          <CardContent>
                              <Box sx={{display:'flex',justifyContent:'space-around'}}>
                                <Box >
                                  <img src='https://www.vedantu.com/cdn/images/new-home-page/B2/vsk-math.svg'/>
                                </Box>
                                <Box>
                                    <Box>
                                      <h4>Class 1 and 2</h4>
                                      <h4>Learn math</h4>
                                    </Box>
                                    <Box>
                                      <Typography>Turn your child into a </Typography>
                                      <Typography> Math wizard</Typography>
                                    </Box>
                              </Box>
                            </Box>
                            <CardActions>
                              <Box sx={{width:'100%',display:'flex',justifyContent:'center',marginTop:'30px'}}>
                                  <Button sx={{color:'white',backgroundColor:'black'}} size="small">Explore more</Button>
                              </Box>
                            </CardActions>
                          </CardContent>
                      </Card>
                  </Box>
            </Box3>
            <Box4>
              <Box sx={{position:'absolute',right:'0px'}}>
                <img src={image} style={{height:'429px',width:'470px'}}/> 
              </Box>
            </Box4>
        </Box2>
    </Box1>
  );
}