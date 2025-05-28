import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    res.render('register');
})
//! Falta control, manejo de errores, validaciones 
router.get('/login',(req,res)=>{
    res.render('login');
})
export default router;