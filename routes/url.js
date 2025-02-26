const express = require('express');
const {handleGenrateNewShortURL,handleGetShortURLData} = require('../controller/url')

const urlRouter = express.Router();

urlRouter.post('/',handleGenrateNewShortURL);
urlRouter.get('/:id',handleGetShortURLData)

module.exports=urlRouter