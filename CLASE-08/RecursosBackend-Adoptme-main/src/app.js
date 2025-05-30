import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import dotenv from "dotenv";
dotenv.config();

const { PORT_DEV, MONGO_URL } = process.env;

const app = express();
const PORT = PORT_DEV || 8080;
const connection = mongoose.connect(MONGO_URL);

app.use(express.json());
app.use(cookieParser());

//* Nuestra CONFIG debe estar antes de las routes
//* 1. Instalar dependencias
//-> npm i  swagger-ui-express  swagger-jsdoc

//* 2. Importar las dependencias
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

//* 3. Configurar Options

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Adoptme",
      version: "1.0.0",
      description: "API-REST Adoptme",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Desarrollo",
      },
      {
        url: "http://localhost:8080",
        description: "Producción",
      },
    ],
  },
  apis: ["./src/docs/*.yaml"],
};

//* 4. Implementamos swagger 
const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);

//* Route raiz con bttn a /api-docs con estilos en linea simple
app.get("/", (req, res) => {
  const styles = `
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                margin-top: 50px;
            }
            button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
            }
        </style>
    `;
  const html = `
    <DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API ABM Users</title>
    </head>
    <body>
        ${styles}
        <h1>Bienvenido a la API ABM Users</h1>
        <button onclick="window.location.href='/api-docs'">Ver Documentación API</button>
    </body>
    </html>
    `;
  res.status(200).send(html);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


/*

Coleccion Users

{1, pets[{1}{5}]}
{2}



Coleccion Pets
{1, nanananan}
*/