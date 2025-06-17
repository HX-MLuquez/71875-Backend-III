//* cors.js
//* Configuramos CORS para permitir solicitudes desde el frontend

const cors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  // Si es una solicitud OPTIONS, respondemos inmediatamente
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  
  next();
};

export default cors;
