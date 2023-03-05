import { loginFailure, loginStart, loginSuccess,  } from "./userRedux";
import auth from "../constants/auth"
export const authenticateLogin = async(dispatch, user) =>{

    dispatch(loginStart());
    try{
        dispatch(loginSuccess(auth));
        window.location.href='/';
        // return res;
    }catch(err){
        dispatch(loginFailure());
        console.log(err)
        return err
    }

}