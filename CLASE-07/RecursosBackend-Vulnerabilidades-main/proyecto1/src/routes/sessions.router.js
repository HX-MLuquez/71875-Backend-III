import { Router } from "express";

const router = Router();

//! Datos no persistentes
const users = [];

router.post("/register", (req, res) => {
    //! Sin manejo de errores 
    //! Sin validaciones
  const user = req.body;
  console.log(user);
  //! Un tipo ID lejos de un verdadero PK (i+1 ERROR como ID)
  if (users.length === 0) user.id = 1;
  else user.id = users[users.length - 1].id + 1;
  //! Viene la data en texto plano - toda y la la guarda y la envía
  users.push(user);
  res.send({ status: "success", payload: user });

});

export default router;
