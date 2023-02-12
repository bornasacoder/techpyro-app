
import { publicRequest } from "../requestMethods";
import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux";

export const getProducts = async(dispatch) =>{
    dispatch(getProductStart());
    console.log("ashihs")
    try{
        const res = await publicRequest.post("/userapp/product/list");
        dispatch(getProductSuccess(res.data));
        console.log(res.data)
    }catch(err){
        dispatch(getProductFailure());
    console.log("ashihs")

    }

}
