import {
  Box,
  Card,
  Checkbox,
  styled,
  Typography,
  useTheme,
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogTitle,
  Zoom
} from "@mui/material";
import { CurrencyRupee } from "@mui/icons-material";
import { FaShippingFast } from "react-icons/fa";
import React,{useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { cartListProduct, updateCartProduct } from "../../../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../redux/userRedux";
import { cartValue, decreaseQty, increaseQty, removeItem } from "../../../../redux/cartRedux";
import { useSnackbar } from 'notistack';


const Image = styled("img")(({ theme }) => ({
  width: "25%",
  height: "100%",
  objectFit: "cover",
  "@media (max-width: 960px)": {
    width: "100%",
    height: "50%",
  },
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };


export default function Item({index,product}) {
  const theme = useTheme();
  const [value, setValue] = useState(product.qty);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const cart = useSelector(cartValue);
  const [click,setClick] = useState(0);
  const [open, setOpen] = useState(false);
  const  {enqueueSnackbar}  = useSnackbar();


  useEffect(() => {
    async function fetchdata(){
      if(click){
        let query = {"userId":`${user.currentUser.data.id}`,"isDeleted":false}
        let sort = {"name":1}
        const resUpdate = await updateCartProduct(cart.cartId,cart.updateList);
        const resGet = await cartListProduct(query,sort,dispatch);
        if(resUpdate.data.status==='SUCCESS'&&resGet.data.status==='SUCCESS'){
          enqueueSnackbar('Cart Product updated successfully ', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center'
            },
            TransitionComponent: Zoom
            });
        }
      }
    }
    fetchdata();
    setClick(0);
  }, [click]) // eslint-disable-line react-hooks/exhaustive-deps
  
  
  const handlePlus = ()=>{
      dispatch(increaseQty(index));
      setClick(1);
      setValue(value + 1);
  }
  const handleMinus = ()=>{
      dispatch(decreaseQty(index));
      setClick(1);
      setValue(value - 1);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    dispatch(removeItem(index));
    setClick(1);
    setOpen(false);
  };
  const handleRemove = () => {
      dispatch(removeItem(index));
      setClick(1);
  };
  

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        height: { md: "250px", xs: "350px" },
        marginBottom: "20px",
      }}
    >
      <Image src={`${product.productId.productImages[0].productImageUrls}`} alt="item" />
      <Box
        sx={{
          marginTop: { md: "10px", xs: "5px" },
          width: { md: "75%", xs: "100%" },
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
            <Typography sx={{ fontSize: "18px" }}>
              {product.productId.title.shortTitle}
            </Typography>
            <Box>
            <Box sx={{display:'flex',justifyContent:'space-between',width:'35vw'}}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "18px" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CurrencyRupee sx={{ fontSize: "14px" }} /> {product.productId.price.cost}/-{" "}
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
                <CurrencyRupee sx={{ fontSize: "14px" }} /> {product.productId.price.mrp}/-
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
              <Typography>Delivery by</Typography>
              <Typography sx={{ fontWeight: 500 }}>21st jan |</Typography>
              <Typography
                sx={{ color: `${theme.colors.success.dark}`, fontWeight: 500 }}
              >
                FREE
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid black",
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex",gap:'10px',alignItems:'center' ,justifyContent:'center'}}>
            <Typography
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
            <Fab disabled={value===1?true:false} onClick={handleMinus} size="small" color="secondary" aria-label="add" sx={{fontSize:'30px',paddingBottom:{md:'8px',sm:'5px',xs:'5px'},zIndex:0,width:'30px',height:'30px',minWidth:'10px',minHeight:'10px'}}>-</Fab>
            <Box sx={{width:{sm:'50px',xs:'40px'},height:'30px',fontSize:'15px',border: `2px solid ${theme.colors.alpha.black[50]}`,textAlign:'center',paddingTop:'2px'}}>{value}</Box>
            <Fab disabled={value===5?true:false} sx={{zIndex:0,width:'30px',height:'30px',minWidth:'10px',minHeight:'10px'}} onClick={handlePlus} size="small" color="secondary" aria-label="add"><AddIcon /></Fab>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "30px",
              }}
            >
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
              <Typography sx={{ display: { sm: "block", xs: "none" },fontWeight:500 }}>
                Save to Wishlist
              </Typography>
              <Typography sx={{ display: { sm: "none", xs: "block" },fontWeight:500 }}>
                Wishlist
              </Typography>
            </Box>
            <Tooltip onClick={handleClickOpen} sx={{display:{sm:'none',xs:'block'}}} title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Button variant="text" onClick={handleRemove} sx={{display:{sm:'block',xs:'none'},color:`${theme.colors.alpha.black[100]}`,cursor:'pointer',fontWeight:500}}>Remove</Button>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to remove it ?"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to remove it ?
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleDelete}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            Cancle
          </Button>
        </DialogActions>
      </Dialog>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
