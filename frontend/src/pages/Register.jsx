import React,{useEffect,useState} from 'react';
import{useDispatch,useSelector}from 'react-redux'
import { userRegisterAction } from '../actions/user-action';
import{Link}from 'react-router-dom'

export default function Register({history}) {
    const [register, setregister] = useState({
        name:"",
        email:"",
        password:""
    });
    const dispatch = useDispatch()
     
    const onSubmitUserRegister=(e)=>{
        e.preventDefault()
        console.log(register);
        dispatch(userRegisterAction(register))
        history.push("/login")
    }
     
  return <div className='container'>
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card mt-3">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                         <form onSubmit={onSubmitUserRegister}>
                            <input type="text" required onChange={e=>setregister({...register,name:e.target.value})} placeholder='Enter Your Name' className="form-control" /><br />
                            <input type="text" required onChange={e=>setregister({...register,email:e.target.value})} placeholder='Enter Email' className="form-control" /><br />
                            <input type="password" required onChange={e=>setregister({...register,password:e.target.value})} placeholder='Enter password' className="form-control" /><br />
                            <button className="btn btn-success w-100">Register</button><br />
                            
                         </form>
                            <h6>already Register? <Link to="/login" className='text-decoration-none'>Login</Link> </h6>
                    </div>
                </div>
            </div>
        </div>
  </div>;
}
