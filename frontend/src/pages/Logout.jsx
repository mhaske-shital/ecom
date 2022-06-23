import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { userLogoutAction } from '../actions/auth-action'

export default function Logout({history}) {
    const dispatch=useDispatch()
    const [count, setcount] = useState(10)
    const {userInfo}=useSelector(state=>state.user)
    useEffect(() => {
         if(userInfo){
             dispatch(userLogoutAction())
           
            setTimeout(() => {
                clearInterval(rem)
                  history.push("/login")
            }, 10000);
            const rem=setInterval(() => {
                setcount(pre=>pre-1)
            }, 1000);
        }  else{
          
        history.push("/login")
        }
    }, [])

     
    
  return (
    <div>
        <h1 className='text-center'>you have logout successfully</h1>

        <h1 className='text-center'>You will be redirected after  {count} </h1>

    </div>
  )
}
