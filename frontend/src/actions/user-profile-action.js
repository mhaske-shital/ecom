import {USER_PROFILE_FAIL,
USER_PROFILE_REQUEST,
USER_PROFILE_SUCCESS}
 from "../constants/user-profile.js";
 import axios from "axios";
export const userProfileAction=()=>async(dispatch,getState)=>{
try {
   dispatch({type:USER_PROFILE_REQUEST});
   const config={
    headers:{
        Authorization:getState().user.userInfo.token
      },
   };
   const {data}=await axios.get("http://localhost:5000/api/user/register/",config) ;
    dispatch({type:USER_PROFILE_SUCCESS,payload:data.result})
    console.log(data.result);
} catch (error) {
    dispatch({type:USER_PROFILE_FAIL,payload:error})
}

    
}