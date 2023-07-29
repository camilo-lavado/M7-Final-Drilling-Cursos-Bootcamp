import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Bootcamp = sequelize.define("bootcamp", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cue: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 5,
      max: 20,
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Bootcamp;
