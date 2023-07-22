import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

export const Bootcamp = sequelize.define("Bootcamp", {
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
      max: 10,
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
