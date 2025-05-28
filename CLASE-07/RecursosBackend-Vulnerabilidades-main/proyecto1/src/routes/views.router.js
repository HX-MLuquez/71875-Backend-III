import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    //! FALTA TODO
  res.render("register");
});

export default router;
