const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
fullname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
role:{
    type:String,
    required:true,
    default:"NORMAL"

}
},
{
    timestamps:true
})

const User = mongoose.model("USER",userSchema)

module.exports = User