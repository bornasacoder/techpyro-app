import React from 'react'
import { Autocomplete, Box, Button, Checkbox, Chip, FormControlLabel, FormGroup, Slider, styled, TextField, Typography, } from '@mui/material'
import { NavigateBefore } from '@mui/icons-material';


const FilterContainer = styled(Box)((theme)=>({
  width:'70vw',
  display:'flex',
  flexDirection:'column',
  height: '100%',
  position:"relative",
  alignItems: 'center',
  gap: '5px',
  margin:" 0px 16px"
}))

const LeftItems = styled(Box)((theme) => ({
  width: "100%",
  marginBottom: "20px"
}))

function valuetext(value) {
  return `Rs${value}`;
}


const FilterData = ({ sort, setSort, query, setQuery, setMinValue, minvalue, maxvalue, setMaxValue, value, setValue, rating, setRating, filter, setFilter, setOpener, opener }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    setQuery({"$and":[{"price.cost":{"$gte":value[0] || 500, "$lte":value[1] || 10000}}]})
    setFilter(true)
  };
  const handleApply = () =>{
    if((minvalue || maxvalue)){  
          setQuery({"$and":[{"price.cost":{"$gte":minvalue || 500, "$lte":maxvalue || 10000}}]})
          setFilter(true)
          // eslint
        }
        setOpener(false)
        console.log(opener)
}

  // useEffect(()=>{
  //   if((minvalue || maxvalue)){  
  //     setQuery({"$and":[{"price.cost":{"$gte":minvalue || 500, "$lte":maxvalue || 10000}}]})
  //     setFilter(true)
  //     console.log(query)
  //   }
    
   
  // }, [minvalue, maxvalue])
const handleChip = () =>{
  

}
const handleDelete = () =>{
  setFilter(false)
  setQuery({})
}
const handleReset = () =>{
  setQuery({})
  setSort("")
  setFilter(false)
  setOpener(false)
  console.log(opener)
}

const MinPrice = [
  {
    value1: 500,
    label1: "500",
  },
  {
    value1: 1000,
    label1: "1000",
  },
  {
    value1: 3000,
    label1: "3000",
  },
  {
    value1: 5000,
    label1: "5000",
  },
];
const MaxPrice = [
  {
    value2: 2000,
    label2: "2000",
  },
  {
    value2: 3000,
    label2: "3000",
  },
  {
    value2: 5000,
    label2: "5000",
  },
  {
    value2: 10000,
    label2: "10000+",
  },
];
const marks = [
  {
    value: 0,
    label: '1000',
  },
  {
    value: 20,
    label: '2000',
  },
  {
    value: 37,
    label: '3000',
  },
  {
    value: 100,
    label: '5000',
  },
];


  return (
    <FilterContainer>
      <Box sx={{display:{sm:"none", xs:"flex"}, justifyContent:"space-between", alignItems:"center", width:"75%",position:"fixed", top:"90%"  }} >
        <Button variant="contained" sx={{width:"45%", background:"#878787", color:"#333"}} onClick={handleReset}  > Reset</Button>
        <Button color="primary" variant="contained" sx={{width:"50%"}} onClick={handleApply} >Apply Changes</Button>
         </Box>
      <LeftItems>
          <Typography sx={{ fontSize: "20px", marginBottom: "10px" }} variant="h6">Filters</Typography>
            { filter  &&  <Chip
          label="Price"
          sx={{marginBottom:"20px"}}
          onClick={handleChip}
          onDelete={handleDelete}
        /> }
      
          <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginBottom: "20px" }}></Box>
          <Typography variant="body2" sx={{ fontSize: "16px", letterSpacing: "0.8px", marginBottom: "10px" }}>CATEGORIES</Typography>
          <Box mb={1} sx={{ display: "flex", justifyContent: 'flex-start', alignItems: "center", padding: "0px" }}>
            <NavigateBefore sx={{ fontSize: "24px" }} />
            <Typography variant="body2">Website</Typography>
          </Box>
          <Typography variant="h6">Website</Typography>
        </LeftItems>
        <LeftItems>
          <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginBottom: "20px" }}></Box>
          <Typography variant="body2" sx={{ fontSize: "16px", letterSpacing: "0.8px", marginBottom: "10px", fontWeight: "500" }}>Price</Typography>
          <Box>
            <Slider
              getAriaLabel={() => 'Price Range'}
              defaultValue={3000}
              valueLabelDisplay="auto"
              onChange={handleChange}
              marks={marks}
              value={value}
              step={2000}
              min={500}
              bgColor="white"
              max={10000}
              getAriaValueText={valuetext}
              sx={{
                color: 'primary',
                '& .MuiSlider-track': {
                  border: 'none',
                },
                '& .MuiSlider-thumb': {
                  width: 20,
                  height: 20,
                  backgroundColor: '#fff',
                  '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <Box sx={{ display: "flex", gap: "5px", justifyContent: "space-evenly", alignItems: 'center' }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={MinPrice}
                size="small"
                onChange={(e, value) => setMinValue(value.value1)}
                defaultValue= {500}
                value={minvalue.value1}
                getOptionLabel={(Option) => Option.label1 || ""}
                sx={{ width: 90 }}
                renderInput={(params) => <TextField {...params} label="Min" />}
              />
              To

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={MaxPrice}
                defaultValue={10000}
                size="small"
                onChange={(e, value) => setMaxValue(value.value2)}
                value={maxvalue.value2}
                getOptionLabel={(options) =>options.label2 || ""}
                sx={{ width: 80 }}
                renderInput={(params) => <TextField  {...params} label="Max" />}
              />
            </Box>
          </Box>
        </LeftItems>
        {/* <LeftItems>
          <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginBottom: "20px" }}></Box>
          <Typography variant="body2" sx={{ fontSize: "16px", letterSpacing: "0.8px", marginBottom: "10px", fontWeight: "500" }}>Customer Ratings</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }} >
            <FormGroup>
              <FormControlLabel control={<Checkbox name='rating' value={4}  onClick={(e)=>handlechecked(e)}  />} label={`4 star Rating and above`}  />
              <FormControlLabel control={<Checkbox name='rating' value={3}  onClick={(e)=>handlechecked(e)} />} label={`3 star Rating and above`} />
              <FormControlLabel control={<Checkbox name='rating' value={2}  onClick={(e)=>handlechecked(e)} />} label={`2 star Rating and above`} />
            </FormGroup>
          </Box>
        </LeftItems> */}

        <LeftItems>
          <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginBottom: "20px" }}></Box>
          <Typography variant="body2" sx={{ fontSize: "16px", letterSpacing: "0.8px", marginBottom: "10px", fontWeight: "500" }}>Discounts</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }} >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label={`30% or more`} />
              <FormControlLabel control={<Checkbox />} label={`40% or more`} />
              <FormControlLabel control={<Checkbox />} label={`50% or more`} />
              <FormControlLabel control={<Checkbox />} label={`60% or more`} />
              <FormControlLabel control={<Checkbox />} label={`70% or more`} />
            </FormGroup>
          </Box>
        </LeftItems>

        <LeftItems>
          <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginBottom: "20px" }}></Box>
          <Typography variant="body2" sx={{ fontSize: "16px", letterSpacing: "0.8px", marginBottom: "10px", fontWeight: "500" }}>GST Invoice available</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }} >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label={`GST Invoice Available`} />
            </FormGroup>
          </Box>
        </LeftItems>
    </FilterContainer>
  )
};

export default FilterData