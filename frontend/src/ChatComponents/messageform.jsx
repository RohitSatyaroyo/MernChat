import React from 'react'
import  {Col,Row,Button,Form, FormGroup} from  'react-bootstrap'
import './message.css'
export default function messageform() {

   
  return (
    <>
    <div className='output' style={{height:'80vh',border:'1px solid gray',marginTop:'10px',marginLeft:'40px',borderRadius:'10px'}}>

    </div>
    <div className='in'>
    <input type='text' style={{width:'900px',marginLeft:'80px',marginTop:'20px',borderRadius:'5px',height:'50px',color:'red',fontSize:'20px'}}></input>
    <Button variant='primary' style={{width:'50px',height:'40px',background:'orange',marginTop:'25px',marginLeft:'5px'}}>
        <i className='fas fa-paper-plane'></i>
    </Button>
    </div>
   

   


    </>
  )
}
