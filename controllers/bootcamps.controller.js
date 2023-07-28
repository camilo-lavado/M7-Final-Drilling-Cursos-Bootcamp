import Bootcamp from "../models/bootcamp.model.js";
import User from "../models/user.model.js";

/*Para el bootcamp, construir los siguientes controladores:
• Crear y guardar un nuevo Bootcamp llamado createBootcamp.
• Agregar un Usuario al Bootcamp llamado addUser.
• Obtener los Bootcamp por id llamado findById.
• Obtener todos los Usuarios incluyendo los Bootcamp llamado findAll.*/

const createBootcamp = async (req, res) => {
  try {
    const { title, cue, description } = req.body;
    const newBootcamp = await Bootcamp.create({
      title,
      cue,
      description,
    });
    res.json({
      message: "Bootcamp creado",
      newBootcamp,
    });
  } catch (error) {
    res.json({
      message: "No se pudo crear el Bootcamp",
      error,
    });
  }
};

const addUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const bootcamp = await Bootcamp.findByPk(id);
    const user = await User.findByPk(userId);
    await bootcamp.addUser(user);
    console.log("**************************************************");
    console.log("Agregado el usuario id=" + userId + " al bootcamp id=" + id);
    console.log("**************************************************\n");
    res.json({
      message: "Usuario agregado al Bootcamp",
      bootcamp,
    });
  } catch (error) {
    res.json({
      message: "No se pudo agregar el Usuario al Bootcamp",
      error,
    });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const bootcamp = await Bootcamp.findByPk(id);
    if (!bootcamp) {
      res.json({ error: "Bootcamp no encontrado" });
    } else
      res.json({
        message: "Bootcamp encontrado:",
        bootcamp,
      });
  } catch (error) {
    res.json({
      message: "No se pudo encontrar el Bootcamp",
      error,
    });
  }
};

const findAll = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.findAll();
    res.json({
      message: "Bootcamps encontrados:",
      bootcamps,
    });
  } catch (error) {
    res.json({
      message: "No se pudieron encontrar los Bootcamps",
      error,
    });
  }
};

const getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.findAll({
      include: [
        {
          model: User,
          as: "users",
          attributes: ["id", "firstName", "lastName", "email"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.json({
      message: "Bootcamps encontrados:",
      bootcamps,
    });
  } catch (error) {
    res.json({
      message: "No se pudieron encontrar los Bootcamps",
      error,
    });
  }
};

/*No es requerido*/
const deleteBootcampById = async (req, res) => {
  try {
    const { id } = req.params;
    const bootcamp = await Bootcamp.findByPk(id);
    await bootcamp.destroy();
    res.json({ message: "Bootcamp eliminado" });
  } catch (error) {
    res.json({
      message: "No se pudo eliminar el Bootcamp",
      error,
    });
  }
};

export default {
  createBootcamp,
  addUser,
  findById,
  findAll,
  getBootcamps,
  deleteBootcampById,
};
