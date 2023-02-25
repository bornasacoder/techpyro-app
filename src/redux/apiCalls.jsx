// import { Snackbar } from "@mui/material";
// import MuiAlert from '@mui/material/Alert';
// import React from "react";
import { publicRequest, userRequest } from "../requestMethods";
import { addProduct} from "./cartRedux";
import { addOrderProduct, addProductDetails } from "./orderRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
// import { addUserFailure, addUserStart, addUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, getUserFailure, getUserStart, getUserSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./usersCallRedux";


export const authenticateLogin = async(dispatch, user) =>{

    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        window.location.href='/';
        return res;
    }catch(err){
        dispatch(loginFailure());
        console.log(err)
        return err
    }

}
export const sentOtpLogin = async(user) =>{
    try{
        const res = await publicRequest.post("/auth/otp-sent", user)
        return res;
    }catch(err){
        console.log("error while calling sentOtp api",err);
    }

}
export const logout = async () =>{
    
    try {
       const res = await userRequest.post("/auth/logout")
        console.log(res)
        localStorage.clear();
        window.location.reload();

      } catch (e) {
        const error = new Error("Something went wrong");
        console.log(e);
        throw error;
      }

}

export const authenticateSignup = async(user) =>{
    try{
        const res = await publicRequest.post("/auth/register", user)
        return res;
    }catch(err){
        console.log("error while calling register api",err);
    }

}

// cart

export const createCart = async(product) =>{
    try{
        return await userRequest.post(`/cart/create`, product);
    }catch(err){
        console.log(err);
    }
} 

export const cartListProduct = async(query,sort,dispatch) =>{
    let product = {
        "query":query,
        "options": {
          "collation": "",
          "sort": sort,
          "populate": "products.productId",
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "page": 1,
          "limit": 10,
          "pagination": true,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        "isCountOnly": false};
    try{
        const res = await userRequest.post(`/cart/list`, product);
        dispatch(addProduct(res.data.data.data[0]));
        return res;
    }catch(err){
        console.log(err);
    }
}

export const updateCartProduct = async(productCartId,data) =>{
    try{
        const res = await userRequest.put(`/cart/update/${productCartId}`,data);
        return res;
    }catch(err){
        console.log(err);
    }
} 
export const deleteCart = async(cartId,dispatch) =>{
    try{
        const res = await userRequest.delete(`/cart/soft-delete/${cartId}`);
        dispatch(addProduct({"products":[],"id":null}));
        return res;
    }catch(err){
        console.log(err);
    }
} 


// order 
export const createOrder = async(data,dispatch) =>{
    try{
        const res = await userRequest.post(`/order/create`,data);
        dispatch(addOrderProduct(res.data.data))
        return res;
    }catch(err){
        return err;
    }
} 


// product

export const getProduct = async(id) =>{
    try{
        const res = await userRequest.get(`/product/get/${id}`);
        return res;
    }catch(err){
        return err;
    }
} 

export const orderListProduct = async(query,sort,dispatch) =>{
    let product = {
        "query":query,
        "options": {
          "collation": "",
          "sort": sort,
          "populate": "products.productId",
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "page": 1,
          "limit": 10,
          "pagination": true,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        "isCountOnly": false};
    try{
        const res = await userRequest.post(`/cart/list`, product);
        dispatch(addProductDetails(res.data.data.data[0]));
        return res;
    }catch(err){
        console.log(err);
    }
}