const Cliente = require("../models/Cliente");

exports.agregarClientes = async (req, res) => {
  try {
    let clientes;
    clientes = new Cliente(req.body);
    await clientes.save();
    res.json(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al agregar el cliente");
  }
};

exports.buscarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al agregar el cliente");
  }
};

exports.mostrarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({ msg: "No existe el cliente con ese ID" });
    } else {
      res.json(cliente);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al agregar el cliente");
  }
};

exports.modificarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!cliente) {
      res.status(404).json({ msg: "No existe el cliente con ese ID" });
    } else {
      res.json(cliente);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al modificar el cliente");
  }
};

exports.actualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findOneAndUpdate({ _id: req.params.id }, req.body);

    if (!cliente) {
      res.status(404).json({ msg: "No existe el cliente con ese ID" });
    } else {
      res.json(cliente);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al modificar el cliente");
  }
};

exports.eliminarClientes = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({ msg: "No existe el cliente con ese ID" });
    } else {
      await Cliente.findOneAndDelete({ _id: req.params.id });
      res.json({ msg: "El cliente fue eliminado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el cliente");
  }
};
