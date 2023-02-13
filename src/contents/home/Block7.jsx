import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

 const Block7 = ()=>{
  return(
    <>
    <Box sx={{height:'130px',marginTop:'30px'}}>
        <Box sx={{display:'flex',justifyContent:'center'}}>

            <h1> Explore all our offerings </h1>
        </Box>
           <Box sx={{marginTop:'30px',display:'flex',justifyContent:'center',gap:'7px'}}>
                <Button variant="outlined">Class 12 pass</Button>
                <Button variant="outlined">Class 12</Button>
                <Button variant="outlined">Class 11</Button>
                <Button variant="outlined">Class 10</Button>
                <Button variant="outlined">Class 9</Button>
                <Button variant="outlined">Class 8</Button>
                <Button variant="outlined">Class 7</Button>
                <Button variant="outlined">Class 6</Button>
                <Button variant="outlined">Class 1 - 5</Button>
                <Button variant="outlined">LKG - UKG</Button>
            </Box>
            
  </Box>
    </>
  )
}

export default Block7;