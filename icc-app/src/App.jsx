import React from 'react'
import Main from './components/Main'
import Home from './components/Home/Home'
import LoginForm from './components/login/LoginForm';
import SignupForm from './components/signup/SignupForm';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';

const App = () => {
  return (
    <div >
    <BrowserRouter>
    <Routes>
     <Route index element={<Home/>}/> 
     <Route path="/login" element={<LoginForm/>}/> 
     <Route path="/signin" element={<SignupForm/>}/> 
     <Route path="/iccapp" element={<Main/>}/> 
    </Routes>
    </BrowserRouter>
    </div>
     
  )
}

export default App

 
