import{createStore,combineReducers,applyMiddleware}from 'redux'
import{composeWithDevTools}from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userLoginReducer } from './reducers/auth-reducer'
import { addToCartReducer } from './reducers/cart-reducer'

import {getAllProductReducer, getSingleProductReducer} from "./reducers/product-reducers"
import { userProfileReducer } from './reducers/user-profile'
import { userRegisterReducer } from './reducers/user-reducer'
const rootReducers = combineReducers({
    products:getAllProductReducer,
    singleProduct:getSingleProductReducer,
    cart:addToCartReducer,
    user:userLoginReducer,
    register:userRegisterReducer,
    profile:userProfileReducer,
})
const cartFromLocalStorage=localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")):[]
const userInfoFromLocalStorage=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):undefined
const intial={
    cart:{
        cartItem:cartFromLocalStorage
    },
    user:{
        userInfo:userInfoFromLocalStorage
    }
}

const store=createStore(rootReducers,
     intial,
    composeWithDevTools(applyMiddleware(thunk)))

export default store