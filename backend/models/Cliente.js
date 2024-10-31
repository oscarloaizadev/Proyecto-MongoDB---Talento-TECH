const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema(
  {
    nombres: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: true,
    },
    documento: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    telefono: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Clientes", clienteSchema);
