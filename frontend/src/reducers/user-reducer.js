import {USER_ADDRESS_FAIL, USER_ADDRESS_REQUEST, USER_ADDRESS_SUCCESS, USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS} from '../constants/user-constant'

export const userRegisterReducer=(state={userRegister:{}},{type,payload})=>{
    switch (type) {
        case USER_REGISTER_REQUEST:return {isLoading:true};
        case USER_REGISTER_SUCCESS:return {isLoading:false,userRegister:payload};
        case USER_REGISTER_FAIL:return {isLoading:false,registerError:payload};
    
        default: return state;
    }
}

export const userAddressReducer=(state={},{type,payload})=>{
    switch (type) {
        case USER_ADDRESS_REQUEST:return {isLoading:true};
        case USER_ADDRESS_SUCCESS:return {isLoading:false,address:payload};
        case USER_ADDRESS_FAIL:return {isLoading:false,addressError:payload};
    
        default: return state;
    }
}