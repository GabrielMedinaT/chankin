import React from "react";
import "./FormularioContacto.css";
import emailjs from "emailjs-com";

const FormularioContacto = () => {
  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zdno5qt",
        "template_q75lp48",
        e.target,
        "3aM_N5iXX48JCZkh9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="componente">
      <h1>¿Tiene alguna duda? Estámos a sus órdenes:</h1>
      <br />
      <form onSubmit={enviarEmail} className="formulario">
        <label htmlFor="motivo" className="form-label">
          Motivo de su mensaje
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          name="opcion"
        >
          <option value="Informacion sobre actividades">
            Información sobre actividades
          </option>
          <option value="Consulta con profesor">Consulta con profesor</option>
          <option value="Hacer una sugerencia">Hacer sugerencia</option>
        </select>
        <label htmlFor="nombre" className="form-label" name="nombre">
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
          name="email"
        />
        <br></br>
        <label htmlFor="mensaje" className="form-label" name="mensaje">
          Introduzca su mensaje aquí:
        </label>
        <textarea
          name="mensaje"
          className="form-control form-control-sm"
          rows="4"
        />
        <br></br>
        <button
          // onClick={enviarEmail}
          type="submit"
          className="btn btn-outline-dark"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioContacto;
