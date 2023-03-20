import React from "react";

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
            <div className="elementosLink">Contacto</div>
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
