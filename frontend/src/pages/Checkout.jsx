import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector}from 'react-redux'
import { Link } from 'react-router-dom'
import {userAdderssAction}from "../actions/user-action"
import { userProfileAction } from '../actions/user-profile-action'
export default function Checkout({history}) {
    const dispatch=useDispatch()
    const {cartItem}=useSelector(state=>state.cart)
    const {userInfo}=useSelector(state=>state.user)
     const {profile}=useSelector(state=>state.profile)

    const [houseNo, sethouseNo] = useState("123")
    const [street, setstreet] = useState("fake street")
    const [pincode, setpincode] = useState("431000")
    const [city, setcity] = useState("aurangabad")
    useEffect(() => {
        if(userInfo){
        if(!profile?.address){
            dispatch(userProfileAction())
        }
       
            if(cartItem.length==0){
                history.push("/")
            }
        }else{
            history.push("/")
        }
             
       
    }, [])
    const handleAddress = e =>{
        e.preventDefault()
        dispatch(userAdderssAction({houseNo,street,city,pincode}))
        console.log({houseNo,street,city,pincode});
    }
  return (
    <div className="container">
    {
     JSON.stringify(profile)
 }
   {
       profile?.address?<div>
           <div className="form-check">
               <input type="radio" className='form-check-input' checked name="" id="cod" />
               <label htmlFor="cod">Pay via COD</label>
           </div>
           <Link to="/summary" className="btn btn-outline-dark">Checkout</Link>
       </div>:
       <div className="row">
    <div className="col-sm-6 offset-sm-3">
         <div className="card">
             <div className="card-header"></div>
             <div className="card-body">
                 <form onSubmit={handleAddress}>
                 <input type="text"
                 value={houseNo} onChange={e=>sethouseNo(e.target.value)} className='form-control' placeholder='houseNO' /><br/>
                 <input type="text"
                 value={street} onChange={e=>setstreet(e.target.value)} className='form-control' placeholder='street' /><br/>
                 <input type="text"
                 value={pincode} onChange={e=>setpincode(e.target.value)} className='form-control' placeholder='pincode' /><br/>
                 <input type="text" 
                 value={city} onChange={e=>setcity(e.target.value)}className='form-control' placeholder='city' /><br/>
                 <input type="SUBMIT" className='btn btn-danger w-100' /><br/>

                 </form>
             </div>
         </div>
        </div>
    </div>
   }

</div>
  )
}
