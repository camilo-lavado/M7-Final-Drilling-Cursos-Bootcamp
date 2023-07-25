import express from "express";
import bootcampsRoutes from "./routes/bootcamps.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();

//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.use("/api", bootcampsRoutes);
app.use("/api", usersRoutes);

export default app;
