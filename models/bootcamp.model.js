import { DataType } from "sequelize";
import sequelize from "../database/connection";

const Bootcamp = sequelize.define("Bootcamp", {
  title: {
    type: DataType.STRING,
    allowNull: false,
  },
  cue: {
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 5,
      max: 10,
    },
  },
  description: {
    type: DataType.STRING,
    allowNull: false,
  },
});

export default Bootcamp;
