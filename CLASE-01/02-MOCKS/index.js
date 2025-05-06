import app from "./src/app.js";

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Server escuchando en puerto http://localhost:${PORT}`);
});
