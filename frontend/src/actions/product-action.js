import {ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL,
    SINGLE_PRODUCT_FAIL,SINGLE_PRODUCT_SUCCESS,SINGLE_PRODUCT_REQUEST} from '../constants/product-constants'
import axios from 'axios'
export const getAllProductsAction= ()=>async(dispath)=>{
    try {
        dispath({type:ALL_PRODUCT_REQUEST})
        const {data}=await axios.get(`http://localhost:5000/api/products`)
        dispath({type:ALL_PRODUCT_SUCCESS, payload:data.result})
    } catch (error) {
        dispath({type:ALL_PRODUCT_FAIL,payload:error})
    }
}
export const getSingleProductsAction= (id)=>async(dispath)=>{
    try {
        dispath({type:SINGLE_PRODUCT_REQUEST})
        const {data}=await axios.get(`http://localhost:5000/api/products/${id}`)
        dispath({type:SINGLE_PRODUCT_SUCCESS, payload:data.result})
    } catch (error) {
        dispath({type:SINGLE_PRODUCT_FAIL,payload:error})
    }
}