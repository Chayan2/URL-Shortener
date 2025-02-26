const { getUser, setUser } = require('../service/auth')

function restrictUserToLogin(req,res,next) {
    const uid = req?.cookies?.uid
    if (!uid) {
        console.log("uid is undefined thats why it redirected to login page")
         return res.redirect('/login');
         }
    const user = getUser(uid);
    console.log(user)
    if (!user) { 
        console.log("user is undefined thats why it redirected to login page")
        return res.redirect('/login') }
    req.user = user;
    next()
}

function checkAuth(req,res,next) {
    const token = req?.cookies?.token
    const user = getUser(token);
    req.user = user;
    next()
}

module.exports = {
    restrictUserToLogin,
    checkAuth
}