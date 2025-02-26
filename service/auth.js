// const sessionIDToUserMap = new Map();
const jwt = require('jsonwebtoken');
const secret = "ChayanJainSolo@EnoughForRock"
function  getUser(token){
    if(!token) return  null;
    try{
        return jwt.verify(token,secret)
    }catch{
        return null
    }
}

function setUser(user){
    const payload = {
        _id:user._id,
        email:user.email,
        role:user.role
    }
    return jwt.sign(payload,secret)
}

module.exports = {setUser,getUser}
