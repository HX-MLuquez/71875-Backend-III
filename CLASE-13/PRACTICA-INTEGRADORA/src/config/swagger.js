// src/config/swagger.js
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Adoptme",
      version: "1.0.0",
      description: "API-Rest Adoptme",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Testing",
      },
      {
        url: "http://localhost:3001",
        description: "Desarrollo",
      },
      {
        url: "http://localhost:8080",
        description: "Producción",
      },
    ],
  },
  apis: [path.resolve("src/docs/**/*.yaml")], // admite carpetas anidadas
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

// Exportás un middleware listo para usar
export default (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
