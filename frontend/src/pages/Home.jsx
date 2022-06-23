import React,{useEffect,useState} from 'react';
import{useDispatch,useSelector} from 'react-redux'
import { getAllProductsAction } from '../actions/product-action';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const dispatch=useDispatch()
  const {reduxProduct,isLoading}=useSelector(state=>state.products)
   
  useEffect(()=>{
    dispatch(getAllProductsAction())

  },[])
  return <div className='container'>
      <div className="row">
          {
          isLoading ? <div className='spinner spinner-border'></div>:
          reduxProduct.map(item=>  <div className='col-lg-4 col-sm-12 mt-5' key={item._id}>
            <ProductCard single={item}/>
          </div>)
          }
        </div>
  </div>;
}
