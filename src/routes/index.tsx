import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '@/features/auth/Login';
import SignUp from '@/features/auth/SignUp';

import { URL } from '@/constants/url';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL.LOGIN} element={<Login />} />
        <Route path={URL.SIGNUP} element={<SignUp />} />
        <Route path={URL.MAIN} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

