import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Index } from './Index/Index';
import { SobreNosotros } from './SobreNosotros/SobreNosotros';
import { Servicios } from './Servicios/Servicios';
import { Tienda } from './Tienda/Tienda';
import { Turnos } from './Turnos/Turnos';
import { Contacto } from './Contacto/Contacto';
import { Footer } from './Footer/Footer';
import { NavBar } from './NavBar/NavBar';

const App = () => {
  <Router>
    <NavBar />
    <Routes>
      <Route index element={<Index />} />
      <Route element={<SobreNosotros />} />
      <Route element={<Servicios />} />
      <Route element={<Tienda />} />
      <Route element={<Turnos />} />
      <Route element={<Contacto />} />
    </Routes>
    <Footer />
  </Router>
}
export default App;