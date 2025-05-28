import fs from 'fs';
//! Modulo que trae y no usa
import __dirname from '../utils.js';

export default class UserService {
    constructor() {
        this.path(`${__dirname}/files/users.json`)
    }
}

//! No es funcional
//! Lo exporta y no lo utiliza