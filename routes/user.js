const express = require('express');
const {handleUserSignup,handleUserLogin} = require('../controller/user');

const Router = express.Router();
Router.post('/',handleUserSignup);
Router.post('/login',handleUserLogin);
module.exports = Router