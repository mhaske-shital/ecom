import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getSingleProductsAction } from '../actions/product-action';

export default function Product({match,history}) {
  const dispatch=useDispatch()
  const [qty, setqty] = useState(1);
  const {reduxSingleProduct,isLoading}= useSelector(state=>state.singleProduct)
  useEffect(()=>{
    dispatch(getSingleProductsAction(match.params.id))
  },[])
  const addToCart =()=>{
    const url=`/cart/${reduxSingleProduct._id}?quantity=${qty}`
    history.push(url)
  }
  return <div className='container'>
     
      <h1>Product Page</h1>
      <div className="row">         
              <div className="col-sm-6">
                <div className="border">
                      <img src={reduxSingleProduct.image} alt="" className='img-fluid' />                   
                      <ul className='list-group'>
                          <li className='list-group-item'><strong>{reduxSingleProduct.name}</strong></li>
                          <li className='list-group-item'> {reduxSingleProduct.description} </li>
                          <li className='list-group-item'>Price: {reduxSingleProduct.price}</li>
                          <li className='list-group-item'>Stock: {reduxSingleProduct.stock}</li>
                      </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <ul className="list-group">
                   {
                     reduxSingleProduct.stock==0?<p>Outoff Stock</p>:
                        <div>
                           <li className="list-group-item">
                              Quantity:
                              <button className='btn btn-dark' disabled={qty==1?true:false} onClick={e=>{
                                setqty(pre=>pre-1)
                              }}>-</button>
                              <strong>&nbsp; &nbsp;{qty} &nbsp; &nbsp;</strong>
                              <button className='btn btn-dark' disabled={reduxSingleProduct.stock==qty ?true:false} onClick={e=>{
                                setqty(pre=>pre+1)
                              }}>+</button>
                            </li>
                            <li className="list-group-item">
                                <div className="btn btn-dark" onClick={addToCart}>Add To Cart</div>
                            </li>
                        </div>
                   }
                </ul>
              </div>
             
      </div>
  </div>
}
