import mongoose from "mongoose";
import config from "./config.js";

const { MONGO_URI } = config;

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(MONGO_URI);
    console.log("--- Conectado a MongoDB correctamente ---");
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error.message);
    process.exit(1); // Cierra la app si falla la conexión
  }
};
