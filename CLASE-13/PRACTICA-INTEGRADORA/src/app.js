import express from "express";
import cookieParser from "cookie-parser";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";

import cors from "./config/cors.js";
import middLogg from "./config/logger.js";
import morgan from "morgan";
const logger = morgan("dev");

const app = express();

//* Conexión a la base de datos MongoDB
// connectDB en el archivo /config/db.js

//*----------------------------------------------------
//* Importar la configuración
import setupSwagger from "./config/swagger.js";
//*----------------------------------------------------

//* Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger); //* morgan
//*---------------------------------------------------------------
app.use(cors); 
app.use(middLogg);

//*----------------------------------------------------
//* Swagger (debe ir antes de las rutas)
setupSwagger(app); // <- Implementar Swagger
//*----------------------------------------------------

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);

//* Route raíz
app.get("/", (req, res) => {
  const styles = `
    <style>
      body { font-family: Arial, sans-serif; }
      button { margin: 5px; padding: 10px; }
    </style>
  `;
  const html = `
    <html>
      <head>
        <title>API Routes</title>
        ${styles}
      </head>
      <body>
        <h1>API Routes</h1>
        <button onclick="location.href='/api/users'">Users</button>
        <button onclick="location.href='/api/pets'">Pets</button>
        <button onclick="location.href='/api/adoptions'">Adoptions</button>
        <button onclick="location.href='/api/sessions'">Sessions</button>
      </body>
    </html>
  `;
  res.send(html);
});

export default app;
