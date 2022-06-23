import React,{useEffect} from 'react'
import { useDispatch ,useSelector } from 'react-redux' 
import { Link } from 'react-router-dom'
import axios from "axios";
import {userProfileAction} from "../actions/user-profile-action"
import { emptyCartAction } from '../actions/cart-action';
export default function Summary() {
    const {profile,address}=useSelector(state=>state.profile)
    const {cartItem}=useSelector(state=>state.cart)
    const placeOrder= async e=>{
        const formData=cartItem.map((item)=>{
            return {productId:item._id,qty:item.qty};
        })
        console.log({
            products:[...formData],userId:profile.id
        });
        const {data} =await axios.post("http://localhost:5000/api/order",
        {
            products:[...formData],userId:profile.id
        })
        dispatch(emptyCartAction())
    }
    const dispatch=useDispatch()
 
    useEffect(() => {
    if(!profile){
        dispatch(userProfileAction())
        console.log("no profile");
    } 
    }, [])
    
  return (
    <div>
        
    {/* <div className="container"> */}
    {
        profile && <div className="row">
           
        <div className="col-sm-8 offset-sm-2">
             <div className="card  ">
                <div className="card-header alert alert-success">User Info</div>
                <div className="card-body">
                    <ul className="list-group">
                        <list className="list-group-item">{profile.name}</list>
                        <list className="list-group-item">{profile.email}</list>
                    </ul>
                </div>
             </div>
             <div className="card  ">
                <div className="card-header alert alert-danger">Cart Info</div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            cartItem.map(item=>{
                            return   <li className="list-group-item d-flex justify-content-between">{item.name}
                            <span>{item.price}*{item.qty}</span>
                            
                            </li>
                            })
                        }
                    </ul>
                    <span>Total {
                                cartItem.reduce((acc,item)=>acc+(item.price*item.qty),0)
                                }
                    </span>
                </div>
                 
             </div>
             <div className="card  ">
                <div className="card-header alert alert-success">User Info</div>
                <div className="card-body">
                    <ul className="list-group">
                        <list className="list-group-item">{"street"+profile.address.stree}</list>
                        <list className="list-group-item">{"house no"+profile.address.houseNo}</list>
                        <list className="list-group-item">{"pin"+profile.address.pin}</list>
                        <list className="list-group-item">{"city"+profile.address.city}</list>
                    </ul>
                </div>
             <Link to="/order-success" className="btn btn-success" onClick={placeOrder}>Place Order</Link>                
             </div>

        </div>
    </div>
    }
        
    </div>
  )
}
