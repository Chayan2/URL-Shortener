const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require("cookie-parser");

const path = require('path');
const { Connection } = require('./connection');
const urlRouter = require('./routes/url');
const staticRoutes = require('./routes/staticroutes');
const userRoutes = require('./routes/user');
const {restrictUserToLogin,checkAuth} = require('./middleware/auth');
const {checkForAuthentication,restictTo} = require('./middleware/auth1');
const PORT = 3001
myapp = express();
myapp.set('view engine', 'ejs');
myapp.set('views',path.resolve("./view"));
myapp.use(express.json());
myapp.use(express.urlencoded({extended:false}));
myapp.use(cookieParser()); //for parsing the cookies
myapp.use(checkForAuthentication)//authentication will check all the times 


Connection();                           

myapp.use('/url',restictTo(['NORMAL','ADMIN']), urlRouter);
myapp.use('/user', userRoutes);
myapp.use('/',staticRoutes);

myapp.listen(PORT, () => {
    console.log(`PORT: ${PORT}: has been called!`)
})
