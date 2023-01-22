import { Box, Card, Typography ,styled,useTheme} from '@mui/material'
import React from 'react'
import { CurrencyRupee } from "@mui/icons-material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Image = styled("img")(({ theme }) => ({
    width: "50%",
    height: "100%",
    objectFit: "cover",
    "@media (max-width: 960px)": {
      width: "50%",
    },
    "@media (max-width: 600px)": {
      width: "30%",
    },
  }));

export default function Item() {
    const theme = useTheme();
  return (
    <Card sx={{display:'flex',
    border:'0.5px solid rgb(159 162 191 / 50%)',
    borderRadius:'5px',
    flex:'3',height:{sm:'200px',xs:'120px'},
    margin:{sm:'30px',xs:'0'},boxShadow:'none',
    "&:hover":{transition:'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow:'0px 0px 16px 6px rgb(159 162 191 / 15%), 0px 0px 5px 5px rgb(159 162 191 / 25%)'}}}>
    <Image src="/images/pic3.jpg" alt="item" />
      <Box
        sx={{
          marginTop: { md: "10px", xs: "5px" },
          width: { md: "50%", xs: "100%" },
          height: { md: "100%", xs: "50%" },
          display: "flex",
          flexDirection: "column",
          gap:{sm:'10px',xs:'5px'},
          padding:{sm: "0 30px",xs:'0 5px'},
        }}
      >
            <Typography sx={{ fontSize: {sm:"18px",xs:'14px'} }}>
              Restaurant Website template
            </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "15px" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CurrencyRupee sx={{ fontSize: "14px" }} /> 1999
              </Typography>
              <Typography sx={{ fontWeight: 500 }}> <FiberManualRecordIcon sx={{width:'12px',height:'12px',color:`${theme.colors.success.dark}`}} fontSize='small'/> Delivered on 21st jan</Typography>
              <Link to={'/orders'} style={{textDecoration:'none',display:'flex',gap:'5px',color:`${theme.colors.primary.dark}`,fontWeight:500}}> <StarRateIcon fontSize='small'/> Rate and Review Product</Link>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',marginRight:'10px'}}>
            <KeyboardArrowRightIcon fontSize='medium'/>
          </Box>
    </Card>
  )
}
