import {
    Box,
    Card,
    styled,
    Typography,
    useTheme,
    Button,
    Fab,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
  } from "@mui/material";
  import { CurrencyRupee } from "@mui/icons-material";
  import { FaShippingFast } from "react-icons/fa";
  import React,{useState} from "react";
  import AddIcon from '@mui/icons-material/Add';
//   import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
//   import Favorite from "@mui/icons-material/Favorite";
  import DeleteIcon from '@mui/icons-material/Delete';
  import IconButton from '@mui/material/IconButton';
  import Tooltip from '@mui/material/Tooltip';
  
  const Image = styled("img")(({ theme }) => ({
    width: "30%",
    height: "100%",
    objectFit: "cover",
    "@media (max-width: 960px)": {
      width: "100%",
      height: "50%",
    },
  }));
  
//   const label = { inputProps: { "aria-label": "Checkbox demo" } };
  
  export default function Item() {
    const theme = useTheme();
    const [value, setValue] = useState(1)
  
    const handlePlus = ()=>{
        setValue(value + 1);
    }
    const handleMinus = ()=>{
        setValue(value - 1);
    }
  
    // const [qty, setQty] = React.useState("1");
  
    // const handleChange = (event) => {
    //   setQty(event.target.value);
    // };
  
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <Card
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          height: { md: "200px", xs: "350px" },
          borderBottom:'2px solid #888',
          borderRadius:'0'
        }}
      >
        <Image src="/images/pic3.jpg" alt="item" />
        <Box
          sx={{
            marginTop: { md: "10px", xs: "5px" },
            width: { md: "70%", xs: "100%" },
            height: { md: "100%", xs: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="span" sx={{ fontSize: "18px" }}>
                Restaurant Website template
              </Typography>
              <Box>
                <Box sx={{display:'flex',justifyContent:'space-between',width:'32vw'}}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "18px" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CurrencyRupee sx={{ fontSize: "14px" }} /> 1999/-{" "}
                </Typography>
                <Box
              sx={{
                width: { sm: "200px", xs: "180px" },
                display: { md: "flex", xs: "none" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FaShippingFast />
              <Typography variant="span">Delivery by</Typography>
              <Typography variant="span" sx={{ fontWeight: 500 }}>21st jan |</Typography>
              <Typography variant="span"
                sx={{ color: `${theme.colors.success.dark}`, fontWeight: 500 }}
              >
                FREE
              </Typography>
            </Box>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "14px", textDecoration: "line-through" }}
                >
                  {" "}
                  <CurrencyRupee sx={{ fontSize: "14px" }} /> 5000/-
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { sm: "200px", xs: "180px" },
                  display: { md: "none", xs: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FaShippingFast />
                <Typography variant="span">Delivery by</Typography>
                <Typography variant="span" sx={{ fontWeight: 500 }}>21st jan |</Typography>
                <Typography variant="span"
                  sx={{ color: `${theme.colors.success.dark}`, fontWeight: 500 }}
                >
                  FREE
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "80px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ flex:1,display: "flex",gap:'10px',alignItems:'center' ,justifyContent:'flex-start'}}>
              <Typography variant="span"
                sx={{ display: { md: "block", xs: "none" } }}
              >
                Qty:
              </Typography>
              {/* <FormControl sx={{width:'70px',}}>
                <InputLabel sx={{zIndex:0}} id="demo-simple-select-label">Qty</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={qty}
                  label="Qty"
                  onChange={handleChange}
                  sx={{height:'45px'}}
                  >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl> */}
              <Fab disabled={value===1?true:false} onClick={handleMinus} size="small" color="secondary" aria-label="add" sx={{fontSize:'30px',paddingBottom:{md:'8px',sm:'5px',xs:'1px'},zIndex:0,width:'30px',height:'30px',minWidth:'10px',minHeight:'10px'}}>-</Fab>
              <Box sx={{width:{sm:'50px',xs:'40px'},height:'30px',fontSize:'15px',border: `2px solid ${theme.colors.alpha.black[50]}`,textAlign:'center',paddingTop:'2px'}}>{value}</Box>
              <Fab disabled={value===5?true:false} sx={{zIndex:0,width:'30px',height:'30px',minWidth:'10px',minHeight:'10px'}} onClick={handlePlus} size="small" color="secondary" aria-label="add"><AddIcon /></Fab>
            </Box>
            <Box sx={{flex:1, display: "flex", alignItems: "center" }}>
              <Tooltip onClick={handleClickOpen} sx={{display:{sm:'none',xs:'block'}}} title="Delete">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Typography variant="span" sx={{display:{sm:'block',xs:'none'},cursor:'pointer',fontWeight:500}}>Remove</Typography>
              <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
            </Box>
          </Box>
        </Box>
      </Card>
    );
  }
  