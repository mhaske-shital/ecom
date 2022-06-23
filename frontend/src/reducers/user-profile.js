import {USER_PROFILE_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS}
     from "../constants/user-profile.js";
 export const userProfileReducer=(state={},{type,payload})=>{
  switch (type) {
      case USER_PROFILE_REQUEST:return{isLoading:true};
      case USER_PROFILE_SUCCESS:return{isLoading:false,profile:payload}
      case USER_PROFILE_FAIL :return{isLoading:false,profileError:payload}
      default: return state;
         
  }  
}