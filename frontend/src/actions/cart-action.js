import axios from 'axios'
import {ADD_TO_CART,EMPTY_CART,REMOVE_FROM_CART} from '../constants/cart-constant'

export const addToCartAction= (id,qty)=>async(dispath,getState)=>{
     const {data}=await axios.get(`http://localhost:5000/api/products/${id}`)
     console.log({...data.result,qty});

     dispath({type:ADD_TO_CART,payload:{...data.result,qty}})
     const x=getState().cart.cartItem;
     localStorage.setItem("cartItem",JSON.stringify(x))
}

export const removeFromCartAction= (id)=>async(dispath,getState)=>{      

     dispath({type:REMOVE_FROM_CART,payload:id})

     const x=getState().cart.cartItem;
     localStorage.setItem("cartItem",JSON.stringify(x))
}

export const emptyCartAction= (id)=>async(dispath)=>{      

     dispath({type:EMPTY_CART})

     localStorage.setItem("cartItem",JSON.stringify([]))
}