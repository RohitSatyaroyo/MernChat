import React, { useEffect, useState } from 'react'
import  {ListGroup, ListGroupItem} from 'react-bootstrap'
import axios from 'axios'
export default function sidebar({data}) {
   const rooms=['Cryto','Marketing','Tech']
   let[members,setmembers]=useState([])
   const [start,setstart]=useState(1)
   if(data!=''){
    localStorage.setItem('useremail',data)
   }


   useEffect(()=>{
   async function fetchdata(){
     try{
      const datae=localStorage.getItem('useremail')
      const res=await axios.post('http://localhost:8080/get',{femail:datae})
      console.log(res.data)
      setmembers(res.data)
  
    }catch(e){
      console.log(e)
    }

   }
   fetchdata()
  

   },[])
  
  // async function getname(){
  //   try{
  //         const res=await axios.post('http://localhost:8080/get',{femail:"r@gmail.com"})
  //         console.log(res.data)
  //         setmembers(res.data)
       
  //       }catch(e){
  //         console.log(e)
  //       }
    
  // }
 
  return (
    <>
    <h2>Available Rooms</h2>
     <ListGroup>
      {rooms.map((r)=>(
        <ListGroupItem >
           <b>{r}</b>
        </ListGroupItem>
      ))}
    </ListGroup>
    <h2>Members</h2>
    {/* <button onClick={getname}>Get names</button> */}
    <ListGroup>
        {members.map((member, index) => (
          <ListGroupItem key={index}>{member}</ListGroupItem>
        ))}
      </ListGroup>
   
    
    </>
   
  )
}
