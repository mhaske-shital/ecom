import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector}from 'react-redux'
import { userLoginAction} from '../actions/auth-action'
import{userProfileAction} from '../actions/user-profile-action'
import {Link} from 'react-router-dom'

export default function Login({history}) {
    const [email, setemail] = useState("shital@gmail.com");
    const [password, setpassword] = useState("123");
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");
     const [error, seterror] = useState({
        email:"",
        password:"",
    });
    const dispatch=useDispatch()
    const {userInfo}=useSelector(state=>state.user)
    const {cartItem}=useSelector(state=>state.cart)
    
    const loginUser=(e)=>{
        e.preventDefault()
        // console.log(email,password);
        // dispatch(userLoginAction({email,password}))
        if(email===""){
            seterror(pre=>{
                return {...pre,email:"please enter email"}
            })
        }
        if(password===""){
            seterror(pre=>{
                return {...pre,password:"please enter password"}
            })
        }
if(!email=="" && !password==""){
    dispatch(userLoginAction({email,password}))
}
    }
    
    useEffect(() => {
        dispatch(userProfileAction())
         if(userInfo){
             cartItem.length>0?history.push("/checkout"):history.push("/")
         }
       
    }, [userInfo]);
    
     const handleError=e=>{
        if(email !==""){
            seterror(pre=>{
                return {...pre, email:""}
            })
        }else{
            seterror(pre=>{
                return {...pre, email:"please enter"}
            })
        }
     }
  return <div className='container'>
      {
          JSON.stringify(error)
      }
      <div className="row">
          <div className="col-sm-6 offset-sm-3 mt-3">
              <div className="card">
                  <div className="card-header">Login</div>
                  <div className="card-body">
                       <form onSubmit={loginUser}>
                            <input type="text" 
                            onKeyUp={handleError}
                             onChange={e=>
                                setemail(e.target.value)
                                 } placeholder='Enter Email'
                              className={error.email ? "form-control is-invalid":"form-control"} />
                              <span className="invalid-feedback">{error.email}</span>
                              <br />
                            <input type="password" value={password}
                             onChange={e=>setpassword(e.target.value)} placeholder='Enter Password'
                              className={error.password ? "form-control is-invalid":"form-control"} />
                              <span className="invalid-feedback">{error.password}</span>
                              
                              <br />
                            <button className="btn btn-success w-100">
                            {/* disabled={email == "" || password=="" ? true :false} */}
                            Login</button><br />
                            <h6>new user? <Link to="/register" className='text-decoration-none'>Register</Link> </h6>
                       </form>
                  </div>
              </div>
          </div>
      </div>

  </div>;
}
