import { useState } from 'react'

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Chat from './pages/chat'
import Jhat from './pages/Jhat'
import {BrowserRouter,Route,Routes} from  'react-router-dom'
function App() {

  const[email,setemail]=useState('')

  function get(e){
    setemail(e)

  }


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login func={get}/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/chat' element={<Chat data={email}/>}></Route>
      <Route path='/Jhat' element={<Jhat />}></Route>

      
      
    </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
