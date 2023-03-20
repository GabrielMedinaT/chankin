import React from "react";
import "./FormularioContacto.css";

const FormularioContacto = () => {
  return (
    <div className="componente">
      <h1>¿Tiene alguna duda? Estámos a sus órdenes:</h1>
      <br />
      <form className="formulario">
        <label htmlFor="motivo" className="form-label">
          Motivo de su mensaje
        </label>
        <select class="form-select" aria-label="Default select example">
          <option value="opcion1">Información sobre actividades</option>
          <option value="opcion2">Consulta con profesor</option>
          <option value="opcion3">Hacer sugerencia</option>
        </select>
        <label htmlFor="nombre" className="form-label">
          Nombre:
        </label>
        <input
          type="text"
          name="nombre"
          className="form-control form-control-sm"
        />
        <br></br>
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control form-control-sm"
          id="email"
        />
        <br></br>
        <label htmlFor="mensaje" className="form-label">
          Introduzca su mensaje aquí:
        </label>
        <textarea
          name="mensaje"
          className="form-control form-control-sm"
          rows="4"
        />
        <br></br>
        <button type="submit" className="btn btn-outline-dark">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioContacto;
