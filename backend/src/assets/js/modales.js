import { GuardarClientes, TraerCliente, EliminarCliente, ActualizarCliente } from "../js/clientes.js";
import { modalUsuarioNuevo, modalTraerUsuario } from "../../view/partials/modals.js";

export const asignarModales = () => {
  const nuevoCliente = document.querySelector("#nuevoCliente");
  const editButtons = document.querySelectorAll("#update");
  const deleteButtons = document.querySelectorAll("#delete");

  nuevoCliente.addEventListener("click", () => {
    cargarModalNuevo();
  });

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const userId = button.getAttribute("data-user-id");
      TraerCliente(userId)
        .then((data) => {
          cargarModalActualizar(data);
        })
        .catch((error) => {
          console.error("Failed to fetch client:", error);
        });
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const userId = button.getAttribute("data-user-id");
      EliminarCliente(userId);
    });
  });
};

export const cargarModalNuevo = () => {
  const modalContainer = document.querySelector("#modal-container");
  modalContainer.innerHTML = modalUsuarioNuevo();

  const modalElement = document.querySelector("#modalNuevoCliente");
  if (modalElement) {
    const userModal = new bootstrap.Modal(modalElement);
    userModal.show();

    const guardarModal = document.querySelector("#guardarModal");
    guardarModal.addEventListener("click", () => {
      GuardarClientes();
      userModal.hide();
    });
  }
};

export const cargarModalActualizar = (data) => {
  if (!data) {
    console.error("No se proporcionaron datos para la actualización.");
    return;
  } else {
    const modalContainer = document.querySelector("#modal-container");
    modalContainer.innerHTML = modalTraerUsuario(data);

    const modalElement = document.querySelector("#modalTraerUsuario");
    if (modalElement) {
      const userModal = new bootstrap.Modal(modalElement);
      userModal.show();

      const guardarModal = document.querySelector("#actualizarModal");
      guardarModal.addEventListener("click", () => {
        ActualizarCliente(data._id);
        userModal.hide();
      });
    }
  }
};
