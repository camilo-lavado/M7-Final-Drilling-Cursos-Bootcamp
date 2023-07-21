import { DataType } from "sequelize"; // importar el tipo de dato para la columna
import sequelize from "../database/connection"; // importar la conexion a la base de datos

const User = sequelize.define("User", {
  firstName: {
    type: DataType.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataType.STRING,
    allowNull: false,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    //Validamos
    validate: {
      isEmail: true,
    },
  },
});

export default User;
