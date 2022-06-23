import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch}from 'react-redux'
import { userLogoutAction } from '../actions/auth-action';

export default function Navbar({history}) {
    const dispatch=useDispatch()
    const {cartItem}=useSelector(state=>state.cart)
    const {userInfo}=useSelector(state=>state.user)
    
  return <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">E Commers</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarID">
                      <ul className="navbar-nav ms-auto">
                          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                          <Link className="nav-link active" aria-current="page" to="/cart">
                              <button className="btn-light btn-sm">Cart
                                <div className="badge text-dark">{
                                    cartItem.reduce((acc,item)=>acc+(+item.qty),0)
                                } </div>
                              </button>
                          </Link>
                          
                          {/* <Link className='nav-link' to="/register">
                            Register
                          </Link>      */}
                          
                           {
                               userInfo?<div className="dropdown">
                               <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 {/* {userInfo.info.name} */}
                               </button>
                               <ul className="dropdown-menu">
                                 <li><Link className="dropdown-item" to="/profile" >Profile</Link></li>
                                  
                                 <li><Link className="dropdown-item" to="/logout" >Logout</Link></li>
                                 <li><Link className="dropdown-item" to="/addproduct" >add Product</Link></li>
                                 <li><Link className="dropdown-item" to="/dashboard" >dashboard</Link></li>
                                  
                               </ul>
                             </div>:
                            <Link className="nav-link" to="/login">
                                    Login
                            </Link>
                           }
                          
                      </ul>
                  </div>
              </div>
          </nav>
  </div>;
}
