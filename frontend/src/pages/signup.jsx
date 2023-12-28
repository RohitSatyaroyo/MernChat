import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function () {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')
    const navigate=useNavigate()
 const sub=async()=>{
         console.log(name,email,pass)
         const check=/^[a-zA-Z0-9._-]+@gmail\.com$/
         if(!check.test(email)){
            alert('Email format is wrong')
         }
         else{
            try{
                const response=await axios.post('https://mern-apiroyo3.onrender.com/api/auth/reg',{name:name,email:email,password:pass})
                const{message}=response.data
                console.log(response.data)
               
                if(message=='already exists'){
                    alert('email already exists')
                   
                }else{
                    localStorage.setItem('chat-app-user',JSON.stringify(response.data))
                    sessionStorage.setItem('chat-app-token',JSON.stringify(response.data))

                    navigate('/Jhat')
                }
            }catch(e){
                console.log(e)
            }

         }
    }

  return (
    <>
    <input type='text' placeholder='Enter name' value={name} onChange={(e)=>setname(e.target.value)}></input> <br/>
    <input type='text' placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)}></input> <br/>
    <input type='password' placeholder='Enter password' value={pass} onChange={(e)=>setpass(e.target.value)}></input> <br/>
    <button onClick={sub}>Sign Up</button>
    </>
  )
}
