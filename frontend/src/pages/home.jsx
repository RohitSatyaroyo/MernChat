import React, { useEffect, useState } from 'react'
import {useNavigate} from  'react-router-dom'
export default function () {

    const navigate=useNavigate()

    // useEffect(()=>{
    //   const user=localStorage.getItem('chat-app-user')
    //   if(user){
    //     navigate('/Jhat')
    //   }
    // })
   
  

  return (
    <>
    <button onClick={()=>navigate('/signup')}>Sign up</button><br/>
    <button onClick={()=>navigate('/login')}>Log In</button>

    </>
  )
}
