import Bootcamp from "../models/bootcamp.model.js";

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
    res.json(newBootcamp);
  } catch (error) {
    res.json(error);
  }
};

const addUser = async (req, res) => {
  res.send("Agregando un User al Bootcamp");
};

const findById = async (req, res) => {
  res.send("Obteniendo un Bootcamp por id");
};

const findAll = async (req, res) => {
  res.send("Obteniendo los getBootcamp");
};

const getBootcamps = async (req, res) => {
  res.send("Obteniendo los getBootcamp");
};

/*No es requerido*/
const deleteBootcampById = async (req, res) => {
  res.send("Eliminando un Bootcamp por id");
};

export default {
  createBootcamp,
  addUser,
  findById,
  findAll,
  getBootcamps,
  deleteBootcampById,
};
