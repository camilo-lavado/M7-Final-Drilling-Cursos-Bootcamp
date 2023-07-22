import sequelize from "./config/db.config.js";
import app from "./app.js";
import "./models/user.model.js";
import "./models/bootcamp.model.js";
import "./models/userBootcamp.model.js";

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
    await sequelize.sync({ force: true });
    console.log("\nBase de datos sincronizada.\n");
  }
}

conectarYCrear();

/*app.get("/", (req, res) => {
  res.send("Hola mundo desde express");
});*/