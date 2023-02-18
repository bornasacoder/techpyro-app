
import { publicRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess} from "./productRedux";

// export const getProducts = async(dispatch) =>{
//     dispatch(getProductStart());
//     console.log("ashihs")
//     try{
//         const res = await publicRequest.post("/userapp/product/list");
//         dispatch(getProductSuccess(res.data));
//         console.log(res.data)
//     }catch(err){
//         dispatch(getProductFailure());
//     console.log("ashish")

//     }

// }


export const addProduct = async(query={}, sort='', dispatch) =>{
  console.log(dispatch);
    dispatch(addProductStart());
    const obj = { 
    "query":query,
    "options": {
      "collation": "",
      "sort": sort,
      "populate": "",
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
    "isCountOnly": false
  }
    try{
        const res = await publicRequest.post("/userapp/product/list", obj);
        dispatch(addProductSuccess(res.data));
        console.log(res.data)
    }catch(err){
        dispatch(addProductFailure());
    }

}