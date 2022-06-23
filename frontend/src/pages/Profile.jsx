import React,{useEffect} from 'react'
import axios from 'axios'
import {useSelector,useDispatch}from 'react-redux'
 import {userProfileAction} from "../actions/user-profile-action"
export default function Profile({history}) {
  const {userInfo}=useSelector(state=>state.user)
  const {profile} =useSelector(state=>state.profile)
  const dispatch=useDispatch();
  // const user=async ()=>{
    // const config
    // const {data}=await axios.get("http://localhost:5000/api/user/register/",{
    //   headers:{
    //     Authorization:userInfo.token
    //   }
    // })
    // console.log(data.result);
  // }
  useEffect((e) => {
    
    
    userInfo ? dispatch(userProfileAction()) : history.push("/")
  }, [ ])
  
  return (
    <div className='container'>
     
      <div className="row mt-4">
        <div className="col-sm-6 offset-sm-3">
         
          <div className={profile ?.isAdmin ? "card border-success" :"card"}>
            <div className="card-header">Profile</div>
            <div className="card-body">
              <ul className='list-group'>
                <div className="list-group-item">
                  name:  <span>{profile?.name}</span>
                </div>
                <div className="list-group-item">
                  email : <span>{profile ?.email}</span>
                </div>
              </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
