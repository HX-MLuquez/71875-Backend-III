const express = require("express");
const app = express();
const zlib = require("zlib"); // modulo nativo de node js

const compression = require("express-compression"); // es un Middelware

const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware compression
// app.use(compression()); // por defecto con gzip
app.use(compression({ brotli: { enabled: true } })); // por defecto con gzip
// app.use(compression({ brotli: { enabled: true, zlib: { level: 11 } } }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Ruta 0 - Sin comprimir
app.get("/normal", (req, res) => {
  const texto =
    "Hola Mundo, he aquí la primera descripción, no había un solo ...".repeat(
      200_000
    ); // va a repetir esto 400.000 veces
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(texto);
});

// Ruta 1 - Comprimir con gzip1
app.get("/gzip1", (req, res) => {
  const texto =
    "Hola Mundo, he aquí la primera descripción, no había un solo ...".repeat(
      200_000
    ); // va a repetir esto 400.000 veces

  const textoComprimido = zlib.gzipSync(texto, { level: 9 }); // Comprimir al máximo
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Encoding", "gzip");
  res.status(200).send(textoComprimido);
});

// Ruta 2 - Comprimir con zlib brotli
app.get("/brotli1", (req, res) => {
  const texto =
    "Hola Mundo, he aquí la primera descripción, no había un solo ...".repeat(
      200_000
    ); // va a repetir esto 400.000 veces

  const textoComprimido = zlib.brotliCompressSync(texto); // Comprimir según level por defecto
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Encoding", "br");
  res.status(200).send(textoComprimido);
});

module.exports = app;
