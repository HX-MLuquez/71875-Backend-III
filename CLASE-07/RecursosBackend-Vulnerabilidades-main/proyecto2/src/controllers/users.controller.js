import Users from "../dao/Mongo/Users.js"
import { createHash } from "../utils.js";
//! Importa inecesariamente un módulo
const userService = new Users();

//! Manejo de errores - Validaciones - (filtrar la data a enviar)
//! Proteger datos sensibles

const getUsers = async(req,res) =>{
    const result = await userService.getUsers();
    res.send({status:"success",payload:result})
}

const getUser = async(req,res) =>{
    const id = req.params.uid;
    const user = await userService.getUserById(id);
    res.send({status:"success",payload:user})
}

export default {
    getUsers,
    getUser
}