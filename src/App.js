import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Index from './Index/Index';
import { NavBar } from './NavBar/NavBar';

export const App =()=>{
  <Router>
    <NavBar/>
    <Routes>
      <Route index element={<Index/>} />
      <Route element={<SobreNosotros/>} />
      <Route element={<Servicios/>} />
      <Route element={<Tienda/>} />
      <Route element={<Turnos/>}/>
      <Route element={<Contacto/>}/>
    </Routes>
    <Footer/>
  </Router>
}
