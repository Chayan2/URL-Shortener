
const mongoose = require('mongoose');

async function Connection() {
    return await 
        mongoose.connect('mongodb://127.0.0.1:27017/shorternUrl')
        .then(() => { console.log("connected to database") })
        .catch((error) => { console.log("Error occurred in connection building", error) })

}
module.exports = { Connection }; // Export the function as part of an object

