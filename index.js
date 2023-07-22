import sequelize from "./config/db.config.js";
import app from "./app.js";
import User from "./models/user.model.js";
import Bootcamp from "./models/bootcamp.model.js";
import UserBootcamp from "./models/userBootcamp.model.js"; // Agrega esta línea para importar el modelo de la tabla intermedia.

// Define las relaciones entre los modelos si es necesario.
User.belongsToMany(Bootcamp, { through: UserBootcamp });
Bootcamp.belongsToMany(User, { through: UserBootcamp });

//Definimos las relaciones entre tablas.

// Ejecutamos la función de prueba de conexión a la base de datos.
async function conectarYCrear() {
  const PORT = 3000;
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos.\n");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo desde el index en el puerto: ${PORT}\n`);
    });
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:\n", error);
  } finally {
    await sequelize.sync({ force: true }); //alter true
    console.log("\nBase de datos sincronizada.\n");
  }
}

conectarYCrear();

/*app.get("/", (req, res) => {
  res.send("Hola mundo desde express");
});*/
