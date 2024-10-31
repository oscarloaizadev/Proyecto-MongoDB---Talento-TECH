const PORT = 3000;

const express = require("express");
const db = require("../config/db");
const cors = require("cors");

// Creamos el servidor
const app = express();

// Enlazamos la conexión con nuestra base de datos
db();
app.use(cors());
app.use(express.json());

// Ruta principal del proyecto
app.use("/api/clientes", require("../routes/rutasCliente"));

// Ruta para verificar el servidor
app.get("/", (req, res) => {
  res.send("Servidor activo, te saludo desde la web ;)");
});

app.listen(PORT, () => {
  console.log(`Servidor conectado en http://localhost:${PORT}`);
});
