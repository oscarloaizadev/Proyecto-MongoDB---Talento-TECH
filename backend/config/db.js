const mongoose = require("mongoose");
require("dotenv").config();

// Conexión con la base de datos MongoDB
const db = () => {
  mongoose
    .connect(process.env.DB_MONGO)
    .then((db) => console.log("\u2705 DB con MongoDB conectada"))
    .catch((err) => console.log(err));
};

module.exports = db;
