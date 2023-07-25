//se define la conexión con sequelize a la base de datos y modelos.

import User from "./user.model.js";
import Bootcamp from "./bootcamp.model.js";

User.belongsToMany(Bootcamp, { through: "user_bootcamp" });
Bootcamp.belongsToMany(User, { through: "user_bootcamp" });

export default { User, Bootcamp };
