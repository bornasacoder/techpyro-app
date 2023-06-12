import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

 const Block7 = ()=>{
  return(
    <>
    <Box sx={{margin:'30px 0px',background:'#fff',padding:{md:'30px', sm:'20px',xs:'5px'}}}>
        <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',}}>

            <Typography sx={{fontFamily: 'Dancing Script',fontSize:{xs:'25px',sm:'30px',md:'55px',lg:'60px'},color:'#222222',marginBottom:{xs:'5px',sm:'',md:'', lg:'40px'},padding:{md:'10px',xs:'0px'}}}> What Our Clients Say About Us </Typography>
            <Box sx={{padding:'15px',opacity:'0.7'}}>
                <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}>We’re a travel operator in the industry, meanwhile, we are independent travelers like you too. We deeply know and care about your concerns regarding travel</Typography>
                <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}> abroad as there still some uncertainty outside the world. To provide you with updated news and professional advice, our travel specialists monitor and collect first-</Typography>
                <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}>hand information about all of our destinations every day. And, we are now releasing our Book with Confidence and Travel with Confidence programs that we</Typography>
                <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}> promise your trip will be in safe hands.</Typography>
            </Box>


            <Card sx={{width:{xs:'100%',sm:'600px',md:'700px',lg:'920px'},marginTop:'30px'}}>
              <img style={{height:'55px',width:'55px'}} src="https://cdn-icons-png.flaticon.com/512/7911/7911108.png" alt="" />
              <Box sx={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                <Box sx={{height:'100px',width:'100px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',boxShadow:'1px 1px 3px 1px rgba(0.4,0.4,0.4,0.5)'}}>
                  <Box sx={{height:'85px',width:'85px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',boxShadow:'1px 1px 3px 1px rgba(0.4,0.4,0.4,0.5)'}}>
                    <img style={{height:'60px',width:'60px',}} src="https://cdn-icons-png.flaticon.com/512/9263/9263478.png" alt="" />
                  </Box>
                </Box>
              </Box>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:'7px'}}>
                <Typography sx={{fontSize:{md:'18px',xs:'16px'}}}>if you looking on your lowest then check Make Journeys. They will surely help to find your next budget flights</Typography>
                <Typography sx={{fontSize:{md:'18px',xs:'16px'}}}>Thanks Make Journey team to make my trip very cost effectively</Typography>
                <Typography sx={{color:'#FC6E74',marginTop:'20px',fontSize:{md:'18px',xs:'16px'}}}>Derrik</Typography>
                <Typography sx={{fontSize:{md:'18px',xs:'16px'}}}>senior software engineer</Typography>
              </Box >
              <Box sx={{display:'flex',justifyContent:'end',marginTop:{xs:'-40px',sm:'-20px',md:'-20px',lg:'-50px'}}}>
                  <img style={{height:'55px',width:'55px',}} src="https://cdn-icons-png.flaticon.com/512/7911/7911122.png" alt="" />
              </Box>
            </Card>

        </Box>
                 
    </Box>
    </>
  )
}

export default Block7;