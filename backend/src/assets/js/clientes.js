import { cargarTabla } from "../utils/cargarTabla.js";
import { sendRequest } from "./request.js";

export async function MostrarClientes() {
  const load = document.getElementById("loading");
  load.innerHTML = "Cargando...";
  const request = sendRequest("clientes", "GET", "");

  request.onload = function () {
    if (request.status === 200) {
      const data = request.response;
      const table = document.getElementById("clientes-table");
      cargarTabla(data, table, load);
    } else {
      load.innerHTML = "Error";
      console.log(request.response);
    }
  };
}

export async function EliminarCliente(id) {
  const request = sendRequest("clientes/" + id, "DELETE", "");
  request.onload = function () {
    if (request.status === 200) {
      MostrarClientes();
    } else {
      console.log(request.response);
    }
  };
}

export async function GuardarClientes() {
  let nombres = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let documento = document.getElementById("documento").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let data = { nombres, apellidos, documento, email, telefono };
  console.log(data);

  let request = sendRequest("clientes/", "POST", data);
  request.onload = function () {
    if (request.status === 200) {
      MostrarClientes();
    } else {
      console.log(request.response);
    }
  };
}

export async function ActualizarCliente(id) {
  let nombres = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let documento = document.getElementById("documento").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let data = { nombres, apellidos, documento, email, telefono };
  let request = sendRequest("clientes/" + id, "PUT", data);
  request.onload = function () {
    if (request.status === 200) {
      MostrarClientes();
    } else {
      console.log(request.response);
    }
  };
}

export function TraerCliente(id) {
  return new Promise((resolve, reject) => {
    const request = sendRequest("clientes/" + id, "GET", "");

    request.onload = function () {
      if (request.status === 200) {
        resolve(request.response); // Resuelve la promesa con la respuesta JSON
      } else {
        reject(new Error(`Error ${request.status}: ${request.response}`)); // Rechaza con un error si el estado no es 200
      }
    };

    request.onerror = function () {
      reject(new Error("Network error")); // Rechaza en caso de error de red
    };
  });
}
