import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './Detail';
import Register from './Register';
import Welcome from './Welcome';

const routers =
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome></Welcome>} />
      <Route path='/register' element={<Register></Register>} />
      <Route path='/detail' element={<Detail></Detail>} />
    </Routes>
  </BrowserRouter>



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(routers);