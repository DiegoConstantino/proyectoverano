import React, { useState,useEffect } from "react";
import Api from '../service/ConexionAxios';
import {toast} from 'react-toastify';

function FormDatos() {
 
  const variablesInicio = {
    _id: "",
    nombre_animal: "",
    raza_ganado: "",
    total_ganado: "",
    rango1: Number,
    rango2: Number,
    rango3: Number
  };
  const [values, setValues] = useState(variablesInicio);
  const [nombre_animal, setPersonas] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const guardarPersonas = async () => {
    await Api.post("/persona/crearPersona", {
      nombre_animal: values.nombre_animal,
      raza_ganado: values.raza_ganado,
      total_ganado: values.total_ganado,
      rango1: values.rango1,
      rango2: values.rango2,
      rango3: values.rango3
    }).then(() => {
      toast("Dato guardado correctamente", {
        position: "top-right",
        type: "success",
        autoClose: 5000,
      });
    });
    ListarPersonas();
  };

  const ListarPersonas = async () => {
    const respuesta = await Api.get("/persona/listarPersonas");
    setPersonas(respuesta.data);
    console.log(respuesta.data);
  };

  const EliminarPersona = async (id) => {
    if (window.confirm("¿Esta seguro de borrar los datos?")) {
      const eliminar = await Api.delete(`/persona/eliminarPersona/${id}`);
      console.log(eliminar.data);

      toast("Los datos se han eliminado correctamente", {
        type: "error",
        position: "bottom-right",
        autoClose: 5000,
      });
    }

    ListarPersonas();
  };

  const ListarOnePersona = async (id)=> {
    const res = await Api.get(`/persona/listarPersona/${id}`);
    setValues(res.data);
    ListarPersonas();
  };

  const updatePersona = async (id) => {
    await Api.put(`/persona/actualizarPersona/${id}`, {
      nombre_animal: values.nombre_animal,
      raza_ganado: values.raza_ganado,
      total_ganado: values.total_ganado,
      rango1: values.rango1,
      rango2: values.rango2,
      rango3: values.rango3,
    }).then((res) => {
      console.log(res.data);
    });
    ListarPersonas();
  };

  const onClick = (e) => {
    e.preventDefault();

    if (values._id === "") {
      guardarPersonas();
    } else {
      updatePersona(values._id);
    }

    setValues(variablesInicio);
  };

  useEffect(() => {
    ListarPersonas();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" align="center">
          Formulario De Registro De Usuario"s"
        </h5>
        <h6 className="card-subtitle mb-2 text-muted" align="center">
          Inserte Los Datos
        </h6>
        <form className="row g-3" onSubmit={onClick}>
          <div className="col-md-4">
            <label for="validationDefault01" className="form-label">
              Tipo De Ganado
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
              Raza De Ganado
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
              Total De Ganado
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
              Ganado De 0-3 Meses
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
              Ganado De 0-6 Meses
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
              Ganado Mayor De 1 año
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
            <button className="btn btn-primary" type="submit">
              {values._id === "" ? "Guardar" : "Editar"}
            </button>
          </div>
        </form>
      </div>
      <hr />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tipo de Ganado</th>
            <th scope="col">Raza Ganado</th>
            <th scope="col">Total Ganado</th>
            <th scope="col">Rango 1</th>
            <th scope="col">Rango 2</th>
            <th scope="col">Rango 3</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        {nombre_animal.map((person, index) => (
          <tbody key={person._id}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{person.nombre_animal}</td>
              <td>{person.raza_ganado}</td>
              <td>{person.total_ganado}</td>
              <td>{person.rango1}</td>
              <td>{person.rango2}</td>
              <td>{person.rango3}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-info"
                  onClick={() => ListarOnePersona(person._id)}
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => EliminarPersona(person._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default FormDatos;