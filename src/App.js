import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormularioContacto from "./pages/FormularioContacto";
import Navbar from "./Componets/Navbar";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
