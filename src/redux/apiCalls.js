//import { useDispatch } from "react-redux";
// import { publicRequest} from "../requestMethods";
import {  getProductFailure, getProductStart, getProductSuccess, } from "./productRedux";
// import { fastFood } from "constants/slider/fastfood";
// import axios from "axios";
import {  Product } from "../constants/slider/fastfood";
// import { loginFailure, loginStart, loginSuccess } from "./userRedux";
// import { addUserFailure, addUserStart, addUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, getUserFailure, getUserStart, getUserSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./usersCallRedux";

// export const login = async(dispatch, user) =>{

//     dispatch(loginStart());
//     try{
//         const res = await publicRequest.post("/auth/login", user)
//         dispatch(loginSuccess(res.data));
//     }catch(err){
//         dispatch(loginFailure());
//     }

// }

// export const getUser = async (dispatch) =>{
//     dispatch(getUserStart());
//     try{
//         const res = await userRequest.get("/users");
//         dispatch(getUserSuccess(res.data));
//         // console.log(res.data);
//     }catch(err){
//         dispatch(getUserFailure());
//     }
// }
// export const deleteUser = async(id, dispatch) =>{
//     dispatch(deleteUserStart());
//     try{
//         const res = await userRequest.delete(`/users/${id}`);
//         dispatch(deleteUserSuccess(id));
//     }catch(err){
//         dispatch(deleteUserFailure());
//     }

// }

// export const updateUser = async(id, user, dispatch) =>{
//     dispatch(updateUserStart());
//     try{
//         // const res = await userRequest.delete(`/products/${id}`);
//         // update

//         dispatch(updateUserSuccess({id, user}));
//     }catch(err){
//         dispatch(updateUserFailure());
//     }

// }


// export const addUser = async(user, dispatch) =>{
//     dispatch(addUserStart());
//     try{
//         const res = await userRequest.post(`/auth/register`, user);
//         dispatch(addUserSuccess(res.data));
//         console.log(res.data);
//     }catch(err){
//         dispatch(addUserFailure());
//     }

// }

export const getProducts = async(dispatch) =>{
    dispatch(getProductStart());
    try{
      
        dispatch(getProductSuccess(Product));

        
    }catch(err){
        dispatch(getProductFailure());
    }

}




