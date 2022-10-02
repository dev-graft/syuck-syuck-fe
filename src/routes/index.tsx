import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Login from '@/features/auth/Login'
import SignUp from '@/features/auth/SignUp'


const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;

