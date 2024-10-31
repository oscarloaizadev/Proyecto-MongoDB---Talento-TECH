export const modalUsuarioNuevo = () => {
  return `
    <div class="modal fade" id="modalNuevoCliente" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="userModalLabel">
              Registrar Usuario
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3 row">
                <div class="col">
                  <label for="firstName" class="form-label">
                    Nombres
                  </label>
                  <input type="text" class="form-control" id="nombres" name="nombres" placeholder="Ingrese nombres" />
                </div>
                <div class="col">
                  <label for="lastName" class="form-label">
                    Apellidos
                  </label>
                  <input type="text" class="form-control" id="apellidos" name="apellidos" placeholder="Ingrese apellidos" />
                </div>
              </div>
              <div class="mb-3">
                <label for="document" class="form-label">
                  Documento
                </label>
                <input type="text" class="form-control" id="documento" name="documento" placeholder="Ingrese documento" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Ingrese correo electrónico" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Teléfono
                </label>
                <input type="tel" class="form-control" id="telefono" name="telefono" placeholder="Ingrese teléfono" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" id="cerrarModal" class="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
            <button type="button" id="guardarModal" class="btn btn-primary">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const modalTraerUsuario = (data) => {
  return `
    <div class="modal fade" id="modalTraerUsuario" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title flex-grow-1" id="userModalLabel">
              Actualizar usuario
            </h5>
             <span class="badge bg-primary fs-7">${data._id}</span>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3 row">
                <div class="col">
                  <label for="firstName" class="form-label">
                    Nombres
                  </label>
                  <input type="text" class="form-control" id="nombres" name="nombres" placeholder="Ingrese nombres" value="${data.nombres}" />
                </div>
                <div class="col">
                  <label for="lastName" class="form-label">
                    Apellidos
                  </label>
                  <input type="text" class="form-control" id="apellidos" name="apellidos" placeholder="Ingrese apellidos" value="${data.apellidos}" />
                </div>
              </div>
              <div class="mb-3">
                <label for="document" class="form-label">
                  Documento
                </label>
                <input type="text" class="form-control" id="documento" name="documento" placeholder="Ingrese documento" value="${data.documento}" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Ingrese correo electrónico" value="${data.email}" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Teléfono
                </label>
                <input type="tel" class="form-control" id="telefono" name="telefono" placeholder="Ingrese teléfono" value="${data.telefono}" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" id="cerrarModal" class="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
            <button type="button" id="actualizarModal" class="btn btn-primary">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
};
