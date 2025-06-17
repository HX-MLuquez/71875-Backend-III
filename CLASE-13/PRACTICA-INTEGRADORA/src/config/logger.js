import winston  from "winston";
import path  from "path";
import __dirname from "../utils/index.js"; 
import config from "./config.js"; 
const { MODE } =  config;

// Niveles personalizados
const customLevels = {
  levels: {
    grave: 0, // Errores críticos (se escriben en archivo)
    warn: 1, // Advertencias
    info: 2, // Información general
    leve: 3, // Logs detallados (debug, seguimiento fino)
  },
  colors: {
    grave: "red",
    warn: "yellow",
    info: "blue",
    leve: "green",
  },
};

winston.addColors(customLevels.colors);

// Transporte para archivo (solo errores graves)
const transportFile = new winston.transports.File({
  level: "grave",
  filename: path.join(__dirname, "logs", "grave.log"),
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
});

// Transporte para consola (todos los niveles en desarrollo)
const transportConsole = new winston.transports.Console({
  level: "leve",
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ timestamp, level, message, ...rest }) => {
      const meta = rest.meta ? JSON.stringify(rest.meta) : "";
      return `[${timestamp}] ${level}: ${message} ${meta}`;
    })
  ),
});

// Instancia del logger
const logger = winston.createLogger({
  levels: customLevels.levels,
  transports: [transportFile],
});

// Agrega consola en modo desarrollo
if (MODE === "development") {
  logger.add(transportConsole);
}

// Middleware para Express
const middLogg = (req, res, next) => {
  req.logger = logger;
  next();
};

export default middLogg;

