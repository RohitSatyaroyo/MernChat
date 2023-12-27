import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function login({func}) {

  const[email,setemail]=useState('')
  const[pass,setpass]=useState('')
  const navigate=useNavigate()
   const sub=async()=>{
    try{
      const response=await axios.post('https://gr-khaki.vercel.app/api/auth/login',{email:email,password:pass})
      const{message}=response.data
      const {userdetails}=response.data
      const {token}=response.data
      if(message=='s'){
        func(email)

        console.log('success')
       console.log(userdetails)
       localStorage.setItem('chat-app-user',JSON.stringify(userdetails))
       sessionStorage.setItem('chat-app-token',JSON.stringify(userdetails))
        navigate('/Jhat')
      }
      else if(message=='f'){
        console.log('failed')
        alert('wrong credentials')
      }
      console.log(response.data)
    }catch(e){

    }
     
   }

  return (
  <>
  <input type='text' placeholder='enter your email' value={email} onChange={(e)=>setemail(e.target.value)}></input><br/>
  <input type='password' placeholder='enter password' value={pass} onChange={(e)=>setpass(e.target.value)}></input><br/>
  <button onClick={sub}>Login</button>
  </>
  )
}
