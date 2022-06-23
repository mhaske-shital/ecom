import axios from 'axios';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from '../constants/auth-constant'

export const userLoginAction =(loginCredentials)=>async(dispatch,getState)=>{
     try {
         dispatch({type:USER_LOGIN_REQUEST});

         const {data}=await axios.post("http://localhost:5000/api/auth/login",loginCredentials)
         console.log(data);
         dispatch({type:USER_LOGIN_SUCCESS,payload:{info:data.result,token:data.token}})
         const x=getState().user.userInfo;
         localStorage.setItem("user",JSON.stringify(x))
         
        } catch (error) {
         dispatch({type:USER_LOGIN_FAIL,payload:error})
         
     }
    
}

export const userLogoutAction=()=>(dispatch)=>{
    dispatch({type:USER_LOGIN_LOGOUT})
    localStorage.removeItem("user");
}