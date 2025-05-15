// Importaciones necesarias - Winston
import winston from "winston";
import { config } from "./config.js"; 

// Definición de niveles personalizados y colores para los logs
const nivelesPersonalizados = {
   //! ::: ::: ::: 
};

// Registrar colores personalizados en Winston
//! ::: ::: ::: 

// Transporte para consola (solo en desarrollo)
const transporteConsola = "---"   //! ::: ::: ::: 

// Transporte para archivo (solo errores)
const transporteArchivo = "---"   //! ::: ::: ::: 

// Crear instancia del logger
export const logger = "---"   //! ::: ::: ::: 

// Agregar salida por consola solo si estamos en entorno de desarrollo
console.log("Logger initialized, mode:", config.MODE, "- port:", config.PORT);
if (config.MODE === "DEV") {
  //! ::: ::: ::: 
}

// Middleware para inyectar el logger en cada request
export const middLogg = (req, res, next) => {
   //! ::: ::: ::: 
};
