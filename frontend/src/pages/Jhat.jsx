import React, { useEffect, useState } from 'react'
import './jhat.css'
import  io from 'socket.io-client'
import axios from 'axios'
import Contacts from './Contacts'
export default function () {

  


  const[contacts,setcontacts]=useState([])
  const[currentusername,setcurrentusername]=useState(undefined)
 let [uid,setuid]=useState(undefined)
 const socket=io.connect('https://gr-khaki.vercel.app/')
 let userDetails=''



  useEffect(()=>{
    async function sub(){
       userDetails=sessionStorage.getItem('chat-app-token')
      console.log(userDetails)
      if(userDetails==null){
        console.log(2323)
        userDetails=localStorage.getItem('chat-app-user')
        
      }
      const parse=JSON.parse(userDetails)
      console.log(parse._id)
      const id=parse._id
      const name=parse.name
      setuid(id)
      setcurrentusername(name)
      try{
       const res=await axios.get(`https://gr-khaki.vercel.app/api/auth/getAllUser/${id}`)
      
    
       setcontacts((res.data))
       
      }catch(e){
       console.log(e)
      }
      
   }
   sub()
 

  },[])

 
 
  return (
  <>
  <div className='box'>
    <div className='container'>
      <Contacts data={contacts} username={currentusername} userid={uid}/>
  
    </div>
  </div>
  
  

  
   
  </>
  )
}
