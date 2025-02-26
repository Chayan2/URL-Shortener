const User = require("../model/user");
const { v4: uuidv4 } = require('uuid');
const {setUser,getUser} = require('../service/auth')


async function handleUserSignup(req, res) {
    console.log("handleUserSignup is called!")
    const { name, email, password } = req.body;
    await User.create(
        {
            fullname: name,
            email: email,
            password: password,
           
        }
    )
    return res.redirect('/');
}
async function handleUserLogin(req, res) {
    console.log("handleUserLogin is called!")
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    console.log("user "+user)
    if (!user || user == null) {
        console.log("user inside")
        return res.render('login', {
            error: "Invalid Username or Password"
        }
    )
}
const token  = setUser(user);
// console.log("username "+user.fullname);
console.log("token Id "+token);
res.cookie("token",token);
console.log("user outside");
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin
}