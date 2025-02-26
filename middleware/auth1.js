const { getUser, setUser } = require('../service/auth')


function checkForAuthentication(req,res,next){
    const tokenCookies = req.cookies?.token
    req.user = null 
    if(!tokenCookies) return next();

    const token = tokenCookies;
    req.user = getUser(token);
    return next();
}



function restictTo(roles = []){
    return (req,res,next)=> {
        if (!req.user){
        console.log("inside restrictTo")
        return res.redirect('./login');
    }
    console.log('user '+JSON.stringify(req.user));
console.log("roles.includes(req.user.role "+roles.includes(req.user.role));
console.log("req.user.role +"+req.user.role)
console.log(roles)
    if (!roles.includes(req.user.role)){
        return res.end("UnAutorized ")
    }
    next()
    }
}



module.exports = {
    checkForAuthentication,
    restictTo
}