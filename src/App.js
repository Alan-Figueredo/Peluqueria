import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/" element={<SobreNosotros />} />
        <Route path="/" element={<Servicios />} />
        <Route path="/" element={<Tienda />} />
        <Route path="/" element={<Turnos />} />
        <Route path="/" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;