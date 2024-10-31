import { asignarModales } from "../js/modales.js";

export function cargarTabla(data, table, load) {
  table.innerHTML = "";

  data.forEach((element) => {
    table.innerHTML += `
    <tr>
        <td>${element.nombres}</td>
        <td>${element.apellidos}</td>
        <td>${element.documento}</td>
        <td>${element.email}</td>
        <td>${element.telefono}</td>
        <td class="d-flex gap-2 justify-content-center bg-dark">
            <button id="update" data-user-id="${element._id}" class="btn btn-primary btn-sm d-flex align-items-center gap-1 shadow-sm">
                <i class="bi bi-pencil-square"></i>
                Editar
            </button>
            <button id="delete" data-user-id="${element._id}" class="btn btn-danger btn-sm d-flex align-items-center gap-1 shadow-sm">
                <i class="bi bi-trash"></i>
                Eliminar
            </button>
        </td>
    </tr>
    `;
  });

  asignarModales();

  /*const editButtons = document.querySelectorAll("#update");
  const deleteButtons = document.querySelectorAll("#delete");

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const userId = button.getAttribute("data-user-id");
      TraerCliente(userId);
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const userId = button.getAttribute("data-user-id");
      EliminarCliente(userId);
    });
  });*/

  load.innerHTML = "Done";
}
