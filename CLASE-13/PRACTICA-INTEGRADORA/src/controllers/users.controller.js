import { usersService } from "../services/index.js";

//------------------------------------------------------------------------------
import User from "../dao/models/User.js";
import __dirname from "../utils/index.js";
//------------------------------------------------------------------------------

const getAllUsers = async (req, res) => {
  const users = await usersService.getAll();
  res.send({ status: "success", payload: users });
};

const getUser = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  res.send({ status: "success", payload: user });
};

const updateUser = async (req, res) => {
  const updateBody = req.body;
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  const result = await usersService.update(userId, updateBody);
  res.send({ status: "success", message: "User updated" });
};

const deleteUser = async (req, res) => {
  const userId = req.params.uid;
  const result = await usersService.getUserById(userId);
  res.send({ status: "success", message: "User deleted" });
};

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//* Creamos el controller e Implementamos nuestro LOGGER
const uploadDocuments = async (req, res) => {
  const { uid } = req.params;
  const files = req.files;

  if (!files || files.length === 0) {
    return res
      .status(400)
      .send({ status: "error", error: "No files uploaded" });
  }

  const documents = files.map((file) => ({
    name: file.originalname,
    reference: `/documents/${file.filename}`, // Solo ruta pública
  }));

  try {
    const user = await User.findById(uid); // O tu acceso al usuario
    if (!user) {
      req.logger.warn("Usuario no encontrado", { userId: uid });
      return res.status(404).send({ status: "error", error: "User not found" });
    }

    user.documents = user.documents
      ? [...user.documents, ...documents]
      : documents;
    await user.save();

    res.send({
      status: "success",
      message: "Documents uploaded successfully",
      documents,
    });
  } catch (error) {
    // console.error(error);
    req.logger.grave("Fallo en carga de documentos", {
      error: error.message,
      stack: error.stack,
      userId: uid,
    });
    return res
      .status(500)
      .send({ status: "error", error: "Error uploading documents" });
  }
};
//------------------------------------------------------------------------------

export default {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  uploadDocuments,
};
