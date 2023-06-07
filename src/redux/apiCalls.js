
import {  getProductFailure, getProductStart, getProductSuccess, } from "./productRedux";

import {  Product } from "../constants/fastfood";




export const getProducts = async(dispatch) =>{
    dispatch(getProductStart());
    try{
      
        dispatch(getProductSuccess(Product));

        
    }catch(err){
        dispatch(getProductFailure());
    }

}




