import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './contacts.css'
import  io from 'socket.io-client'
export default function Contacts({data,username,userid}) {
  const socket=io.connect('http://localhost:8080')
 
  const[msg,setmsg]=useState('')//message input text
   console.log(data)//contacts except own user
   console.log(userid)// user id 
 
   const [messages,setmessage]=useState([])
   const[recid,setrecid]=useState('')
   const messagecontainerRef=useRef(null)
   
   let me;
   let he;
   useEffect(()=>{
   
    socket.on(userid,(msg)=>{
        console.log(msg)
        const data={
          fromSelf:false,
          message:msg
        }
        setmessage([...messages,data])
        
       
       
    })

     
  })///////Main thing in this app enabling real time chat between persons
   async function viewchat(e){
    console.log(e)
     const m1=document.getElementById('m1')
     const m2=document.getElementById('ins')
     m1.style.display='block'
     m2.style.display='block'
    
     setrecid(e)
     console.log('te')
     


    
      const res=await axios.post('http://localhost:8080/api/auth/getmsg',{from:userid,to:e})
    
      // setdis(res.data)
      setmessage(res.data)
      
      
   
 

    
 

    
  
   
    

   }
   async function send(){
    const res=await axios.post('http://localhost:8080/api/auth/sendmsg',{message:msg,from:userid,to:recid})
    console.log(res.data)
    const {message}=res.data
    
    if(message=='s'){
      setmsg('')
      const updatedmessage=await axios.post('http://localhost:8080/api/auth/getmsg',{from:userid,to:recid})
      
      // setdis(updatedmessage.data)
      setmessage(updatedmessage.data)
      console.log(updatedmessage.data)
      
      socket.emit('msges',{to:recid,message:msg})
     
   
    }
   }
   useEffect(()=>{
    if (messagecontainerRef.current) {
      messagecontainerRef.current.scrollTop = messagecontainerRef.current.scrollHeight;
    }

   },[messages])

 

  return (
    <div>

      <h1 style={{color:'white',whiteSpace:'nowrap',marginLeft:'10%',fontSize: '2.0rem'}}>Hi {username}, Welcome To Doggy</h1>
      {data.map(d=><><div className='back'><b style={{fontSize:'33px',color:'black',paddingLeft:'15%',marginTop:'-4px'}} onClick={()=>viewchat(d._id)}>{d.name}</b></div></>)}
      <div className='in'></div>
     
      <div className='message-container'  id='m1' ref={messagecontainerRef}>
     
        {
          messages.map((m)=>{
             return(
                <div>
                   <div className={`message${m.fromSelf  ? "sended":"recieved"}`} >
                      <div className={`content${m.fromSelf  ? "sended":"recieved"}`}>
                        <b style={{paddingLeft:'15px'}}>{m.message}</b>
                      </div>
                   </div>
                </div>
             )
        })
      }

 

      </div>
            
      <div id='ins' className='ins' >     <input type='text' placeholder='sent message' value={msg} onChange={(s)=>setmsg(s.target.value)} ></input>
      <div className='uo' > <button  onClick={send}>Send</button></div></div>
     
        
        
    </div>
  )
}
