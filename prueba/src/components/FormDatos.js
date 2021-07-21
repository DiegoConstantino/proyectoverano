import React, { useState } from "react";
import Api from '../service/ConexionAxios';

function FormDatos() {
 
  const variablesInicio = {
    nombre_animal: "",
    raza_ganado: "",
    total_ganado: "",
    rango1: Number,
    rango2: Number,
    rango3: Number
  };
  const [values, setValues] = useState(variablesInicio);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const guardarPersonas = async () => {
    await Api.post("/persona/crearPersona", {
      nombre_animal: values.tipo_ganado,
      raza_ganado: values.raza_ganado,
      total_ganado: values.total_ganado,
      rango1: values.rango1,
      rango2: values.rango2,
      rango3: values.rango3
    }).then((res) => {
      console.log(res);
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    //let suma=values.nombre+""+values.apellidos+""+values.direccion
    /*alert(
      "La suma es: " +
        values.tipo_ganado +
        " " +
        values.raza_ganado +
        " " +
        values.total_ganado
    );*/
    guardarPersonas();
    setValues(variablesInicio);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" align="center">
          Formulario de Registro de Usuario
        </h5>
        <h6 className="card-subtitle mb-2 text-muted" align="center">
          Inserte los datos
        </h6>
        <form className="row g-3" onSubmit={onClick}>
          <div className="col-md-4">
            <label for="validationDefault01" className="form-label">
              Tipo de ganado
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="nombre_animal"
              value={values.nombre_animal}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label for="validationDefault02" className="form-label">
              Raza de ganado
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Raza"
              name="raza_ganado"
              value={values.raza_ganado}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label for="validationDefault02" className="form-label">
              Total de ganado
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Total"
              name="total_ganado"
              value={values.total_ganado}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label for="validationDefault02" className="form-label">
              Ganado de 0-3 Meses
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Numero"
              name="rango1"
              value={values.rango1}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label for="validationDefault02" className="form-label">
              Ganado de 0-6 Meses
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Numero"
              name="rango2"
              value={values.rango2}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label for="validationDefault02" className="form-label">
              Ganado mayor de 1 año
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Numero"
              name="rango3"
              value={values.rango3}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label className="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default FormDatos;