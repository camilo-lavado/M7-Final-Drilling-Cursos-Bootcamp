import { DataTypes } from "sequelize"; // importar el tipo de dato para la columna
import sequelize from "../config/db.config.js"; // importar la conexion a la base de datos

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    //Validamos
    validate: {
      isEmail: true,
    },
  },
});

export default User;
