import React,{useEffect} from "react";
import { useSelector  } from "react-redux";

export default function Dashboard({history}){
    const {userInfo}=useSelector(state=>state.user)
    useEffect(e=>{
        if(!userInfo.info.isAdmin){
            history.push("/")
        }
       
    },[])
return (
    <div>
        Dashboard
    </div>
)
}