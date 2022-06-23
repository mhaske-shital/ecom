import axios from 'axios'
import{USER_ADDRESS_FAIL, USER_ADDRESS_REQUEST, USER_ADDRESS_SUCCESS, USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS}from '../constants/user-constant'

export const userRegisterAction=(userRegisterData)=>async(dispatch)=>{
    try {
        dispatch({type:USER_REGISTER_REQUEST})

        const {data} = await axios.post("http://localhost:5000/api/user/register",userRegisterData)
        dispatch({type:USER_REGISTER_SUCCESS,payload:data.result})
        
    } catch (error) {
        dispatch({type:USER_REGISTER_FAIL,payload:error})
        
    }
}

export const userAdderssAction=(formdata)=>async(dispatch,getState)=>{
    try {
        dispatch({type:USER_ADDRESS_REQUEST});
            const config={
                headers:{
                    Authorization:getState().user.userInfo.token
                },
            };

        const {data} = await axios.post("http://localhost:5000/api/user/address",formdata,config)
        dispatch({type:USER_ADDRESS_SUCCESS,payload:data.result})
        
    } catch (error) {
        dispatch({type:USER_ADDRESS_FAIL,payload:error})
        
    }
}

