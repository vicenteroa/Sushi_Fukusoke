// Approuter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/page1/HomePage.jsx';
import Page from '../pages/page2/Pay.jsx'
import Login from '../pages/page3/Login.jsx'
import AdminPage from '../pages/admin/AdminPage.jsx';
import Carta from '../pages/page4/index.jsx'
import Carrito from '../pages/page4/Cart.jsx'
import Register from '../pages/page3/registro.jsx'
import Despacho from '../pages/page5/despacho.jsx';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pago' element={<Page />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/carta' element={<Carta />} />
      <Route path='/carrito' element={<Carrito />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/despacho' element={<Despacho /> } />
    </Routes>
  );
};

export default AppRouter;
