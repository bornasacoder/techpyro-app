import { AppBar, Box, Button, Grid, TextareaAutosize, TextField, Typography } from "@mui/material"
import { useState } from "react"

const contact = () => {
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(phone,name,email,desc)

  }
  const handleChange =(e)=>{
    // console.log(e.target.value)
    if (e.target.name=="name") {
      setName(e.target.value)
    }
   else if (e.target.name=="phone") {
      setPhone(e.target.value)
    }
   else if (e.target.name=="email") {
      setEmail(e.target.value)
    }
   else if (e.target.name=="desc") {
      setDesc(e.target.value)
    }
  }
  const [name, setName] = useState("")
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')
  return (
    <Box sx={{padding:{md:"58px 58px",sm:"58px 20px",xs:"58px 20px",textAlign:"center"}}}>
      <form sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}} onSubmit={handleSubmit}>
      <Typography variant="h5">Contact Us</Typography>
        <TextField
          sx={{ width: {md:"500px",sm:"420px",xs:"300px"}, margin: "5px" }}
          type="text"
          label="Enter your name"
          name="name"
          value={name}
          variant="outlined"
          onChange={handleChange}
        />
        <br />
        <TextField
          sx={{ width: {md:"500px",sm:"420px",xs:"300px"}, margin: "5px" }}
          type="email"
          label="email id"
          name="email"
          value={email}
          variant="outlined"
          onChange={handleChange}
        />
        <br />
        <TextField
          sx={{ width: {md:"500px",sm:"420px",xs:"300px"}, margin: "5px" }}
          type="number"
          label="phone"
          name="phone"
          value={phone}
          variant="outlined"
          onChange={handleChange}
        />
        <br />
        <Grid container sx={{width:"100%",alignItems:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Grid item  sx={{ width: {md:"500px",sm:"420px",xs:"300px"} ,margin: "5px",}}>
        <textarea
  // aria-label="minimum height"
  Rows={8}
  id="desc"
  value={desc}
  name="desc"
  placeholder="Write your concren here"
 style={{width:"100%"}}
  onChange={handleChange}
/>
</Grid>
</Grid>
        <br />
        <Button variant="contained" color="primary" type="submit">
          save
        </Button>
      </form>
</Box>
  )
}

export default contact
