import cluster from "cluster";
import os from "os";
import app from "./src/app.js"; // Importamos la app configurada

// Definimos el puerto que va a usar el servidor
const PORT = 3000;

// Obtenemos la cantidad de núcleos del CPU
// console.log("Núcleos disponibles:", os.cpus())
const numCPUs = os.cpus().length;
// console.log("Núcleos disponibles:", os.cpus())
// console.log("Núcleos disponibles length:", os.cpus().length);
//* Proceso principal (master / primary), generamos workers
//! code aqui

// console.log("cluster -> ", cluster);

if (cluster.isPrimary) {
  console.log(
    `Proceso primario PID ${process.pid} | Generando ${numCPUs} workers...`
  );
  for (let index = 0; index < numCPUs; index++) {
    cluster.fork();
  }

  cluster.on("message", (worker, message) => {
    // console.log(`Mensaje del worker ${worker.id}:`, message);
  });

  cluster.on("disconnect", (worker) => {
    console.log(
      `Worker PID ${worker.process.pid} (ID: ${worker.id}) desconectado. Creando nuevo worker...`
    );
    cluster.fork();
  });
} else {
  // Proceso hijo (worker): se encarga de ejecutar el servidor Express
  const server = app.listen(PORT, () => {
    console.log(
      `Worker (process) PID ${process.pid} (ID: ${cluster.worker.id}) escuchando en puerto http://localhost:${PORT}`
    );
  });
}

// comentar
// const server = app.listen(PORT, () => {
//   console.log(`escuchando en puerto http://localhost:${PORT}`);
// });
