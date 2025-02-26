const mongoose = require('mongoose');

const urlStorage = new mongoose.Schema({
    shortID:{
        type:String
    },
    redirectURL:{
        type:String,
        required: true,
        unique: true, 
    },
    vistorHistory:[
        {timeStamp:{
            type:String
        }}
    ],
    createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"users"
}
})
//below we have given the collection name in which we want to store.
const Url = mongoose.model('urlStorage',urlStorage);

module.exports = Url


