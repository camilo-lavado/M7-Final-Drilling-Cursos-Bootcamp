import sequelize from "./config/db.config.js";
import models from "./models/index.js";
import express from "express";
import bootcampsRoutes from "./routes/bootcamps.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();

const User = models.User;
const Bootcamp = models.Bootcamp;

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

//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.use("/api", bootcampsRoutes);
app.use("/api", usersRoutes);
