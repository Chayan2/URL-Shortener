const express = require('express');
const {getUserCreatedUrls,getAllUserCreatedUrls} = require('../controller/url')
const staticRouters = express.Router();
const {restictTo} = require('../middleware/auth1')

staticRouters.get('/', restictTo(['NORMAL','ADMIN']),getUserCreatedUrls);
staticRouters.get('/admin/urls', restictTo(['ADMIN']),getAllUserCreatedUrls);

staticRouters.get("/signup",(req,res)=>{
    return res.render('signup')
})
staticRouters.get("/login",(req,res)=>{
    return res.render('login')
})

module.exports= staticRouters;