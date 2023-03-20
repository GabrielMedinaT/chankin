import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Cabecera">
      <div className="logo"></div>
      <nav>
        <ul className="linksDeInicio">
          <li>
            <a href="/">
              <div className="elementosLink">Inicio</div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="elementosLink">Acerca</div>
            </a>
          </li>
          <li>
            <Link to="/FormularioContacto">
              <div className="elementosLink">Contacto</div>
            </Link>
          </li>
          <li>
            <a href="/">
              <div className="elementosLink">Blog</div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="elementosLink">Login</div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
