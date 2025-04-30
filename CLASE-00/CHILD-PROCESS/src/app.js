const express = require("express");
const app = express();
//* PROCESS ON MESSAGE
const { fork, exec, execFile } = require("child_process"); // Nativo de Node

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let visitas = 0;

// Ruta principal: cuenta visitas
app.get("/", (req, res) => {
  visitas++;
  res.status(200).send(`Home | Visitas: ${visitas}`);
});

// Función que realiza un cálculo complejo de forma síncrona
const calculoComplejo = () => {
  let result = 0;
  console.log("Comienza proceso de cálculo complejo");
  console.time("Duración del proceso");

  for (let i = 0; i < 500_000_000; i++) {
    result += Math.random() * 10;
  }

  console.timeEnd("Duración del proceso");
  return Math.round(result);
};
// Ruta que ejecuta el cálculo complejo de forma síncrona
app.get("/calculo", (req, res) => {
  const resultado = calculoComplejo();
  res.type("text").status(200).send(`Resultado del cálculo: ${resultado}`);
});

let contadorSaludo = 0;
app.get("/saludo", (req, res) => {
  contadorSaludo++;
  res.status(200).send(`¡Hola Mundo!!! Contador --> ${contadorSaludo}`);
});


//* Ruta que delega el cálculo complejo a un proceso hijo
app.get("/calculo-child", (req, res) => {
  const child = fork("./src/functionCompleja.js");

  child.send(`Iniciar cálculo desde proceso principal PID ${process.pid}`);

  child.on("message", (msg) => { // { type: "resultado", result: Math.round(result) }
    if (msg.type === "resultado") {
      res.status(200).send(`Resultado del cálculo: ${msg.result}`);
    }
  });

  child.on("error", (error) => {
    console.error("Error en el proceso hijo:", error);
    res.status(500).send("Error en el cálculo");
  });
});

module.exports = app;
