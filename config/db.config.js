import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_bootcamp", "postgres", "Camiloignacio1", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
