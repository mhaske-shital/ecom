import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { addToCartAction, removeFromCartAction } from '../actions/cart-action';
import{Link} from "react-router-dom"; 
export default function Cart({location,match}) {
  const dispatch=useDispatch()
  const {cartItem} = useSelector(state=>state.cart)
  useEffect(() => {
    // JSON.stringify(location.search.split("=")[1]) => quantity
    location.search.split("=")[1]&&
    dispatch(addToCartAction(match.params.id,location.search.split("=")[1]))
    
  }, []);
  
  return <div className='container'>
      {
        cartItem.length > 0 ? 
        <div>
          <div className="row">
        {
          cartItem.map(item=>(
            <div className="col-lg-3" key={item._id}>
              <div className="border m-3 p-4">
                <img src={item.image} alt=""  className='img-fluid'/>
                <h2>{item.name}</h2>
                <p>Qty: <strong>{item.qty}</strong></p>
                <p>Price: <strong>{item.price}</strong></p>
                <button className='btn btn-danger' onClick={e=>dispatch(removeFromCartAction(item._id))}>Remove</button>
                <Link className="btn btn-success" to="/checkout" > checkout </Link>

              </div>
            </div>
          ))
        }
     </div>
      
       <div className="col-sm-4">
         <h1>Deliverable Qty:
           {
             cartItem.reduce((acc,item)=>acc+(+item.qty),0)
           }
         </h1>
         <h1>Total:
           {
             cartItem.reduce((acc,item)=>acc+(item.qty*item.price),0)
           }
         </h1>
         
       </div>
      
        </div>
        
        :<h1>Empty cart</h1>
        
      }
  </div>;
}
