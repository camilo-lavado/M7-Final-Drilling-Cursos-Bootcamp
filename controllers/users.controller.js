import User from "../models/user.model.js";

/*Para el usuario, construir los siguientes controladores:
• Crear y guardar usuarios llamado createUser.
• Obtener los Bootcamp de un usuario llamado findUserById.
• Obtener todos los Usuarios incluyendo, los Bootcamp llamado findAll.
• Actualizar usuario por Id llamado updateUserById.
• Eliminar un usuario por Id llamado deleteUserById.*/

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({
      firstName,
      lastName,
      email,
    });
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
};

const findUserById = async (req, res) => {
  res.send("Obteniendo un User por id");
};

const findAll = async (req, res) => {
  res.send("Obteniendo los getUsers");
};

const updateUserById = async (req, res) => {
  res.send("Actualizando un User por id");
};

const deleteUserById = async (req, res) => {
  res.send("Eliminando un User por id");
};

export default {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
};
