import testConnection from "./probar-conexion.js";
import app from "./app.js";

// Puerto de escucha del servidor.
const PORT = 3000;

// Ejecutamos la función de prueba de conexión a la base de datos.
testConnection();

// Iniciamos el servidor.
app.listen(PORT, () => {
  console.log(`Servidor corriendo desde el index en el puerto: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hola mundo desde express");
});
