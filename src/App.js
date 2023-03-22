import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormularioContacto from "./pages/FormularioContacto";
import Navbar from "./Componets/Navbar";
import Acerca from "./pages/Acerca";

function App() {
  return (
    <div className="Cabecera">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/FormularioContacto"
            element={<FormularioContacto />}
          ></Route>
          <Route path="/Acerca" element={<Acerca />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
