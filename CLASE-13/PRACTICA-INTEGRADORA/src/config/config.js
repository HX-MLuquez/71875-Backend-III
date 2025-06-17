import process from "node:process";
import { Command, Option } from "commander";

let mode = "dev"; // valor por defecto
const program = new Command();

// console.log(
//   "Ejecutando server.js directamente, parseando argumentos...",
//   process.argv
// );

// console.log("Parseando argumentos de línea de comandos...");

program
  .addOption(new Option("--test <archivo>", "Archivo de test a ejecutar"))
  .addOption(
    new Option("-m, --mode <MODE>", "Modo de ejecución del server")
      .choices(["prod", "dev"])
      .default("dev")
  );

program.parse();
// Extraer el modo
mode = program.opts().mode;
// Cargar archivo .env correspondiente
process.loadEnvFile(mode === "prod" ? "./.env.prod" : "./.env.dev");

// Configuración exportada
const config = {
  MONGO_URI: process.env.MONGO_URI,
  MODE: mode,
  PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};

export default config;
