const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

// Rutas de nuestro crud
router.post("/", clienteController.agregarClientes);
router.get("/", clienteController.buscarClientes);
router.get("/:id", clienteController.mostrarCliente);
router.patch("/:id", clienteController.modificarCliente);
router.put("/:id", clienteController.actualizarCliente);
router.delete("/:id", clienteController.eliminarClientes);

module.exports = router;
