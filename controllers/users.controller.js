import User from "../models/user.model.js";
import Bootcamp from "../models/bootcamp.model.js";

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
    res.json({
      message: "Se ha creado el usuario:",
      newUser,
    });
  } catch (error) {
    res.json({
      message: "No se pudo crear el usuario",
      error,
    });
  }
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      include: {
        model: Bootcamp,
        as: "bootcamps",
        attributes: ["id", "title", "cue", "description"],
      },
    });
    if (!user) {
      res.json({ error: "Usuario no encontrado" });
    } else {
      res.json({
        message: "Usuario encontrado:",
        user,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

const findAll = async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Bootcamp,
        as: "bootcamps",
        attributes: ["id", "title", "cue", "description"],
      },
    });

    res.json({
      message: "Todos los usuarios:",
      users,
    });
  } catch (error) {
    res.json(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const user = await User.findByPk(id);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    await user.save();
    res.json({
      message: "Usuario actualizado",
      user,
    });
  } catch (error) {
    res.json({
      error: "Usuario no encontrado",
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    await user.destroy();
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.json({
      error: "Usuario no encontrado",
    });
  }
};

export default {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
};
